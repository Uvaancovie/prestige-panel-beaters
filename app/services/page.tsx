import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"
import { Wrench, Paintbrush, Car, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Professional Auto Body Services - Prestige Panel Beaters Durban",
  description:
    "Accident repair, chassis straightening, spray booth services, and scratch & dent repair. Insurance-approved quality with OEM paint matching in Briardene, Durban.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench className="w-16 h-16 text-brand-red" />,
      title: "Accident Repair & Chassis Straightening",
      description:
        "Complete collision repair using our state-of-the-art Celette chassis straightening bench. We restore your vehicle to manufacturer specifications with precision engineering and attention to detail.",
      features: [
        "Celette chassis straightening system",
        "Frame alignment and measurement",
        "Structural welding and fabrication",
        "Safety system restoration",
        "Pre and post-repair inspections",
      ],
      image: "/automotive-chassis-straightening-bench-equipment.jpg",
    },
    {
      icon: <Paintbrush className="w-16 h-16 text-brand-red" />,
      title: "Spray Booth & OEM Paint Matching",
      description:
        "Professional spray booth facility with computerized paint matching system. We ensure perfect color match using genuine OEM paint specifications and advanced mixing technology.",
      features: [
        "Computerized paint matching system",
        "OEM approved paint products",
        "Climate-controlled spray booth",
        "Multi-stage paint process",
        "Color warranty guarantee",
      ],
      image: "/professional-automotive-spray-booth-facility.jpg",
    },
    {
      icon: <Car className="w-16 h-16 text-brand-red" />,
      title: "Scratch & Dent Repair",
      description:
        "Fast turnaround for minor damage repairs. Professional scratch removal, paintless dent repair, and quick resprays to get you back on the road with minimal downtime.",
      features: [
        "Paintless dent removal (PDR)",
        "Scratch repair and touch-ups",
        "Quick turnaround service",
        "Mobile repair options",
        "Cost-effective solutions",
      ],
      image: "/automotive-body-shop-preparation-bay.jpg",
    },
  ]

  const qualityFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-brand-blue" />,
      title: "Insurance Approved",
      description: "Certified by all major insurers with guaranteed workmanship",
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-blue" />,
      title: "Fast Turnaround",
      description: "Efficient service with realistic timeframes and progress updates",
    },
    {
      icon: <Award className="w-8 h-8 text-brand-blue" />,
      title: "Quality Guarantee",
      description: "Comprehensive warranty on all repairs and paintwork",
    },
  ]

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
              Professional Auto Body Services
            </h1>
            <p className="text-xl text-brand-black/70 max-w-3xl mx-auto mb-8">
              From minor scratches to major collision repairs, we provide comprehensive automotive body services with
              insurance-approved quality standards in Briardene, Durban.
            </p>
            <Link href="/estimate" className="btn-primary text-lg">
              Get Free Estimate
            </Link>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-brand-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      {service.icon}
                      <h2
                        className="text-3xl font-bold text-brand-black ml-4"
                        style={{ fontFamily: "Oswald, sans-serif" }}
                      >
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-brand-black/70 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-brand-black">
                          <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Features */}
        <section className="py-20 bg-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Why Choose Prestige Panel Beaters?
              </h2>
              <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
                Professional service standards that exceed insurance requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="text-center p-8 rounded-xl border border-brand-black/20">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-brand-black mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-brand-black/70">{feature.description}</p>
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
              Ready to Restore Your Vehicle?
            </h2>
            <p className="text-xl text-brand-white/90 mb-8 max-w-2xl mx-auto">
              Upload photos for a free estimate or call us for immediate assistance
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
