"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"
import { useState } from "react"
import Link from "next/link"

export default function GalleryPage() {
  const [sliderPositions, setSliderPositions] = useState([50, 50, 50])

  const beforeAfterProjects = [
    {
      before: "/damaged-car-before-panel-beating-repair.jpg",
      after: "/repaired-car-after-professional-panel-beating.jpg",
      title: "BMW 3 Series",
      jobType: "Front End Collision Repair",
      description: "Complete front end reconstruction with chassis straightening and OEM paint matching",
    },
    {
      before: "/car-with-dents-and-scratches-before-repair.jpg",
      after: "/pristine-car-after-dent-removal-and-paint.jpg",
      title: "Toyota Camry",
      jobType: "Side Impact & Paint Restoration",
      description: "Door replacement, panel beating, and full side respray with perfect color match",
    },
    {
      before: "/vehicle-with-rear-damage-before-bodywork.jpg",
      after: "/perfectly-repaired-vehicle-rear-section.jpg",
      title: "Ford Ranger",
      jobType: "Rear Quarter Panel Repair",
      description: "Chassis straightening, panel replacement, and comprehensive rear section restoration",
    },
  ]

  const galleryImages = [
    {
      src: "/professional-automotive-spray-booth-facility.jpg",
      title: "Professional Spray Booth",
      description: "State-of-the-art spray booth facility",
    },
    {
      src: "/automotive-chassis-straightening-bench-equipment.jpg",
      title: "Celette Chassis Bench",
      description: "Precision chassis straightening equipment",
    },
    {
      src: "/automotive-body-shop-preparation-bay.jpg",
      title: "Preparation Bay",
      description: "Professional preparation and bodywork area",
    },
    {
      src: "/damaged-car-before-panel-beating-repair.jpg",
      title: "Collision Damage Assessment",
      description: "Professional damage evaluation process",
    },
    {
      src: "/repaired-car-after-professional-panel-beating.jpg",
      title: "Completed Restoration",
      description: "Quality repair results",
    },
    {
      src: "/pristine-car-after-dent-removal-and-paint.jpg",
      title: "Paint Matching Excellence",
      description: "Perfect OEM color matching",
    },
  ]

  const handleSliderChange = (index: number, value: number) => {
    const newPositions = [...sliderPositions]
    newPositions[index] = value
    setSliderPositions(newPositions)
  }

  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-brand-black mb-6"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Our Work Gallery
            </h1>
            <p className="text-xl text-brand-black/70 max-w-3xl mx-auto mb-8">
              See the quality of our workmanship through before and after photos of recent repair projects. Professional
              results that exceed insurance standards.
            </p>
            <Link href="/estimate" className="btn-primary text-lg">
              Get Your Estimate
            </Link>
          </div>
        </section>

        {/* Before & After Sliders */}
        <section className="py-20 bg-brand-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Before & After Transformations
              </h2>
              <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
                Interactive sliders showing our repair quality and attention to detail
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {beforeAfterProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-brand-white rounded-xl overflow-hidden shadow-lg border border-brand-black/20"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.before || "/placeholder.svg"}
                      alt={`${project.title} - Before`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)` }}
                    >
                      <img
                        src={project.after || "/placeholder.svg"}
                        alt={`${project.title} - After`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPositions[index]}
                      onChange={(e) => handleSliderChange(index, Number.parseInt(e.target.value))}
                      className="absolute bottom-4 left-4 right-4 h-2 bg-brand-white/50 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="absolute top-4 left-4 bg-brand-black/70 text-brand-white px-2 py-1 rounded text-sm">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-brand-black/70 text-brand-white px-2 py-1 rounded text-sm">
                      After
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-brand-black mb-2"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-brand-red font-medium mb-3">{project.jobType}</p>
                    <p className="text-brand-black/70 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Facility & Equipment
              </h2>
              <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
                Professional equipment and facilities that ensure quality repairs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-brand-white rounded-xl overflow-hidden shadow-lg border border-brand-black/20 hover:shadow-xl transition-shadow duration-300"
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-brand-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {image.title}
                    </h3>
                    <p className="text-brand-black/70 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-brand-white mb-6"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Ready for Quality Like This?
            </h2>
            <p className="text-xl text-brand-white/90 mb-8 max-w-2xl mx-auto">
              Upload photos of your vehicle damage for a free estimate and experience our professional service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/estimate"
                className="bg-brand-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red hover:text-brand-white transition-all duration-200"
              >
                Get Photo Estimate
              </Link>
              <a
                href="tel:0796908176"
                className="border-2 border-brand-white text-brand-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-white hover:text-brand-blue transition-all duration-200"
              >
                Call 079 690 8176
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}
