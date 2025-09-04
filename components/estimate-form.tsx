"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X, Check } from "lucide-react"

interface FormData {
  name: string
  mobile: string
  email: string
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  registration: string
  insurer: string
  claimNumber: string
  damageDescription: string
  consent: boolean
}

export function EstimateForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    registration: "",
    insurer: "",
    claimNumber: "",
    damageDescription: "",
    consent: false,
  })

  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [dragActive, setDragActive] = useState(false)

  const insurers = [
    "Hollard",
    "Santam",
    "MiWay",
    "Old Mutual",
    "Bryte",
    "Renasa",
    "Bidvest",
    "King Price",
    "New National",
    "Momentum",
    "Other",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      handleFiles(selectedFiles)
    }
  }

  const handleFiles = (newFiles: File[]) => {
    const imageFiles = newFiles.filter((file) => file.type.startsWith("image/"))
    const validFiles = imageFiles.filter((file) => file.size <= 10 * 1024 * 1024) // 10MB limit

    setFiles((prev) => {
      const combined = [...prev, ...validFiles]
      return combined.slice(0, 10) // Max 10 files
    })
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = "Vehicle make is required"
    if (!formData.vehicleModel.trim()) newErrors.vehicleModel = "Vehicle model is required"
    if (!formData.vehicleYear.trim()) newErrors.vehicleYear = "Vehicle year is required"
    if (!formData.registration.trim()) newErrors.registration = "Registration is required"
    if (!formData.insurer) newErrors.insurer = "Please select your insurer"
    if (!formData.damageDescription.trim()) newErrors.damageDescription = "Damage description is required"
    if (!formData.consent) newErrors.consent = "You must agree to be contacted"
    if (files.length < 3) newErrors.files = "Please upload at least 3 photos"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Mobile validation (basic SA format)
    const mobileRegex = /^(\+27|0)[6-8][0-9]{8}$/
    if (formData.mobile && !mobileRegex.test(formData.mobile.replace(/\s/g, ""))) {
      newErrors.mobile = "Please enter a valid South African mobile number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString())
      })

      // Add files
      files.forEach((file, index) => {
        formDataToSend.append(`file_${index}`, file)
      })

      const response = await fetch("/api/estimate", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        // Open WhatsApp with prefilled message
        const whatsappMessage = `Hi Prestige, I've just submitted an estimate request for my ${formData.vehicleMake} ${formData.vehicleModel}. My reference is ${result.referenceNumber}.`
        const whatsappUrl = `https://wa.me/27796908176?text=${encodeURIComponent(whatsappMessage)}`
        window.open(whatsappUrl, "_blank")
      } else {
        throw new Error(result.error || "Failed to submit estimate request")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setErrors({ submit: "Failed to submit request. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center p-8 bg-brand-white rounded-xl border border-brand-black/20 shadow-lg">
        <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-brand-white" />
        </div>
        <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
          Estimate Request Submitted!
        </h2>
        <p className="text-brand-black/70 mb-6">
          Thank you for your submission. We'll review your photos and send you a detailed estimate within 60 minutes. A
          WhatsApp conversation has been opened for quick communication.
        </p>
        <div className="space-y-4">
          <a
            href="https://wa.me/27796908176?text=Hi%20Prestige,%20I%20need%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Continue on WhatsApp
          </a>
          <p className="text-sm text-brand-black/60">
            Or call us directly at{" "}
            <a href="tel:0796908176" className="text-brand-blue hover:underline">
              079 690 8176
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="bg-brand-white rounded-xl border border-brand-black/20 shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Column - Personal & Vehicle Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-black" style={{ fontFamily: "Oswald, sans-serif" }}>
              Personal Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-brand-red text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="079 123 4567"
              />
              {errors.mobile && <p className="text-brand-red text-sm mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-brand-red text-sm mt-1">{errors.email}</p>}
            </div>

            <h3 className="text-xl font-bold text-brand-black pt-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              Vehicle Information
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Make *</label>
                <input
                  type="text"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="BMW"
                />
                {errors.vehicleMake && <p className="text-brand-red text-sm mt-1">{errors.vehicleMake}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Model *</label>
                <input
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="3 Series"
                />
                {errors.vehicleModel && <p className="text-brand-red text-sm mt-1">{errors.vehicleModel}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Year *</label>
                <input
                  type="text"
                  name="vehicleYear"
                  value={formData.vehicleYear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="2020"
                />
                {errors.vehicleYear && <p className="text-brand-red text-sm mt-1">{errors.vehicleYear}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">Registration *</label>
                <input
                  type="text"
                  name="registration"
                  value={formData.registration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="ABC 123 GP"
                />
                {errors.registration && <p className="text-brand-red text-sm mt-1">{errors.registration}</p>}
              </div>
            </div>
          </div>

          {/* Right Column - Insurance & Damage Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-black" style={{ fontFamily: "Oswald, sans-serif" }}>
              Insurance Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Insurance Company *</label>
              <select
                name="insurer"
                value={formData.insurer}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select your insurer</option>
                {insurers.map((insurer) => (
                  <option key={insurer} value={insurer}>
                    {insurer}
                  </option>
                ))}
              </select>
              {errors.insurer && <p className="text-brand-red text-sm mt-1">{errors.insurer}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Claim Number (Optional)</label>
              <input
                type="text"
                name="claimNumber"
                value={formData.claimNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="If you have one"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black mb-2">Damage Description *</label>
              <textarea
                name="damageDescription"
                value={formData.damageDescription}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Describe the damage to your vehicle..."
              />
              {errors.damageDescription && <p className="text-brand-red text-sm mt-1">{errors.damageDescription}</p>}
            </div>

            <h3 className="text-xl font-bold text-brand-black pt-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              Photo Upload
            </h3>

            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                dragActive ? "border-brand-blue bg-brand-blue/5" : "border-brand-black/20 hover:border-brand-blue/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-brand-black/40 mx-auto mb-4" />
              <p className="text-brand-black/70 mb-2">
                Drag and drop photos here, or{" "}
                <label className="text-brand-blue hover:underline cursor-pointer">
                  browse files
                  <input type="file" multiple accept="image/*" onChange={handleFileInput} className="hidden" />
                </label>
              </p>
              <p className="text-sm text-brand-black/50">Upload 3-10 photos (max 10MB each)</p>
            </div>
            {errors.files && <p className="text-brand-red text-sm">{errors.files}</p>}

            {files.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {files.map((file, index) => (
                  <div key={index} className="relative bg-brand-black/5 rounded-lg p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-brand-black truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-brand-red hover:text-brand-black"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Consent & Submit */}
        <div className="border-t border-brand-black/20 p-8">
          <div className="flex items-start space-x-3 mb-6">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-brand-blue border-brand-black/20 rounded focus:ring-primary"
            />
            <label className="text-sm text-brand-black/70">
              You agree to be contacted by phone/WhatsApp regarding your estimate request. *
            </label>
          </div>
          {errors.consent && <p className="text-brand-red text-sm mb-4">{errors.consent}</p>}
          {errors.submit && <p className="text-brand-red text-sm mb-4">{errors.submit}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full md:w-auto text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Get My Free Estimate"}
          </button>
        </div>
      </div>
    </form>
  )
}
