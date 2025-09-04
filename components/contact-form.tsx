"use client"

import type React from "react"

import { useState } from "react"
import { Send, Check } from "lucide-react"

interface ContactFormData {
  name: string
  phone: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    // Phone validation (basic format)
    const phoneRegex = /^(\+27|0)[0-9]{9}$/
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", phone: "", message: "" })
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setErrors({ submit: "Failed to send message. Please try again or call us directly." })
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
        <h3 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
          Message Sent Successfully!
        </h3>
        <p className="text-brand-black/70 mb-6">
          Thank you for contacting us. We'll get back to you within 24 hours. For urgent matters, please call us
          directly.
        </p>
        <div className="space-y-4">
          <a href="tel:0796908176" className="btn-primary inline-block">
            Call 079 690 8176
          </a>
          <p className="text-sm text-brand-black/60">
            Or{" "}
            <button onClick={() => setIsSuccess(false)} className="text-brand-blue hover:underline">
              send another message
            </button>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="bg-brand-white rounded-xl border border-brand-black/20 shadow-lg p-8">
        <div className="space-y-6">
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
            <label className="block text-sm font-medium text-brand-black mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="079 123 4567"
            />
            {errors.phone && <p className="text-brand-red text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-black mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 border border-brand-black/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Tell us how we can help you..."
            />
            {errors.message && <p className="text-brand-red text-sm mt-1">{errors.message}</p>}
          </div>

          {errors.submit && <p className="text-brand-red text-sm">{errors.submit}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}
