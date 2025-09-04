import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"
import { Truck, Shield, Clock, FileText, Users, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Fleet & Trade Accounts - Prestige Panel Beaters Durban",
  description:
    "Professional fleet management services for dealers, security companies, and delivery fleets. Priority booking, volume rates, and dedicated account management in Briardene, Durban.",
}

export default function FleetPage() {
  const fleetServices = [
    {
      icon: <Truck className="w-12 h-12 text-brand-red" />,
      title: "Fleet Management",
      description: "Comprehensive vehicle maintenance and repair services for commercial fleets of all sizes.",
    },
    {
      icon: <Shield className="w-12 h-12 text-brand-red" />,
      title: "Security Vehicle Specialists",
      description:
        "Specialized repairs for security and cash-in-transit vehicles with understanding of unique requirements.",
    },
    {
      icon: <Clock className="w-12 h-12 text-brand-red" />,
      title: "Priority Service",
      description: "Fast-track repairs with dedicated bay allocation to minimize fleet downtime.",
    },
  ]

  const slaFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-brand-blue" />,
      title: "Priority Booking",
      description: "Dedicated scheduling slots for fleet vehicles with guaranteed turnaround times",
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-blue" />,
      title: "Monthly Statements",
      description: "Detailed monthly reporting with vehicle-specific repair history and costs",
    },
    {
      icon: <Award className="w-8 h-8 text-brand-blue" />,
      title: "Volume Rates",
      description: "Competitive pricing structure based on fleet size and annual volume",
    },
    {
      icon: <Users className="w-8 h-8 text-brand-blue" />,
      title: "Pickup & Delivery",
      description: "Collection and delivery service to minimize disruption to your operations",
    },
  ]

  const clientTypes = [
    {
      title: "Vehicle Dealerships",
      description: "Pre-delivery inspections, warranty repairs, and customer vehicle services",
      benefits: ["PDI touch-ups", "Warranty work", "Customer referrals", "Dealer support"],
    },
    {
      title: "Security Companies",
      description: "Specialized repairs for armored vehicles, patrol cars, and emergency response vehicles",
      benefits: ["Armor-aware repairs", "Emergency service", "Security clearance", "Rapid turnaround"],
    },
    {
      title: "Delivery Fleets",
      description: "Commercial vehicle repairs, branding application, and fleet maintenance",
      benefits: ["Commercial rates", "Bulk scheduling", "Fleet tracking", "Preventive maintenance"],
    },
    {
      title: "Corporate Fleets",
      description: "Executive vehicle maintenance, company car repairs, and fleet management",
      benefits: ["Executive service", "Corporate billing", "Fleet reporting", "Account management"],
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
              Fleet & Trade Accounts
            </h1>
            <p className="text-xl text-brand-black/70 max-w-3xl mx-auto mb-8">
              Professional fleet management services for dealers, security companies, and delivery fleets. Dedicated
              account management with priority service and competitive volume pricing.
            </p>
            <Link href="#contact-form" className="btn-primary text-lg">
              Request Trade Account
            </Link>
          </div>
        </section>

        {/* Fleet Services */}
        <section className="py-20 bg-brand-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Fleet Services
              </h2>
              <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
                Comprehensive automotive services designed for commercial vehicle operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {fleetServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-brand-white p-8 rounded-xl text-center border border-brand-black/20 hover:border-brand-blue/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-brand-black/70 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLA Features */}
        <section className="py-20 bg-brand-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-white mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Service Level Agreement
              </h2>
              <p className="text-xl text-brand-white/90 max-w-2xl mx-auto">
                Professional service standards that keep your fleet operational
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {slaFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-brand-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-brand-white/90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Types */}
        <section className="py-20 bg-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Who We Serve
              </h2>
              <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
                Specialized services for different types of commercial vehicle operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {clientTypes.map((client, index) => (
                <div key={index} className="bg-brand-white p-8 rounded-xl border border-brand-black/20 shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {client.title}
                  </h3>
                  <p className="text-brand-black/70 mb-6 leading-relaxed">{client.description}</p>
                  <div className="space-y-2">
                    {client.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-brand-black">
                        <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-brand-black/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Request a Trade Account
              </h2>
              <p className="text-xl text-brand-black/70">
                Get started with competitive fleet pricing and dedicated service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-brand-white p-8 rounded-xl border border-brand-black/20">
                <h3 className="text-xl font-bold text-brand-black mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Account Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-brand-black">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    Volume-based pricing discounts
                  </li>
                  <li className="flex items-center text-brand-black">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-brand-black">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    Priority booking and service
                  </li>
                  <li className="flex items-center text-brand-black">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    Monthly detailed reporting
                  </li>
                  <li className="flex items-center text-brand-black">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    Flexible payment terms
                  </li>
                  <li className="flex items-center text-brand-black">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    Collection and delivery service
                  </li>
                </ul>
              </div>

              <div className="bg-brand-white p-8 rounded-xl border border-brand-black/20">
                <h3 className="text-xl font-bold text-brand-black mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Get Started Today
                </h3>
                <p className="text-brand-black/70 mb-6">
                  Contact our fleet specialist to discuss your requirements and set up your trade account.
                </p>
                <div className="space-y-4">
                  <a href="tel:0796908176" className="btn-secondary block text-center">
                    Call 079 690 8176
                  </a>
                  <a
                    href="https://wa.me/27796908176?text=Hi%20Prestige,%20I%27d%20like%20to%20set%20up%20a%20fleet%20account"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary block text-center"
                  >
                    WhatsApp Fleet Specialist
                  </a>
                  <Link href="/contact" className="btn-tertiary block text-center">
                    Send Email Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}
