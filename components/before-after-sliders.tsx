"use client"

import { useState } from "react"

export function BeforeAfterSliders() {
  const [sliderPositions, setSliderPositions] = useState([50, 50, 50])

  const repairs = [
    {
      before: "/damaged-car-before-panel-beating-repair.jpg",
      after: "/repaired-car-after-professional-panel-beating.jpg",
      title: "BMW 3 Series - Front End Collision",
      description: "Complete front end repair and respray",
    },
    {
      before: "/car-with-dents-and-scratches-before-repair.jpg",
      after: "/pristine-car-after-dent-removal-and-paint.jpg",
      title: "Toyota Camry - Side Impact Damage",
      description: "Door replacement and paint matching",
    },
    {
      before: "/vehicle-with-rear-damage-before-bodywork.jpg",
      after: "/perfectly-repaired-vehicle-rear-section.jpg",
      title: "Ford Ranger - Rear Quarter Panel",
      description: "Chassis straightening and panel replacement",
    },
  ]

  const handleSliderChange = (index: number, value: number) => {
    const newPositions = [...sliderPositions]
    newPositions[index] = value
    setSliderPositions(newPositions)
  }

  return (
    <section className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Before & After Results
          </h2>
          <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
            See the quality of our workmanship in these recent repair projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {repairs.map((repair, index) => (
            <div
              key={index}
              className="bg-brand-white rounded-xl overflow-hidden shadow-lg border border-brand-black/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={repair.before || "/placeholder.svg"}
                  alt={`${repair.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)` }}
                >
                  <img
                    src={repair.after || "/placeholder.svg"}
                    alt={`${repair.title} - After`}
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
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {repair.title}
                </h3>
                <p className="text-brand-black/70">{repair.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
