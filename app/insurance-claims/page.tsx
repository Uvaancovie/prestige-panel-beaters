"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"
import { FileText, Users, Clock, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function InsuranceClaimsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const insurers = [
    "Hollard",
    "Renasa",
    "Bryte",
    "King Price",
    "New National",
    "Momentum",
    "Santam",
    "Bidvest",
    "MiWay",
    "Old Mutual",
  ]

  const claimsProcess = [
    {
      icon: <FileText className="w-8 h-8 text-brand-white" />,
      title: "Submit Your Claim",
      description: "Upload photos and vehicle details through our secure estimate form",
    },
    {
      icon: <Users className="w-8 h-8 text-brand-white" />,
      title: "We Liaise with Your Insurer",
      description: "Our team handles all communication and paperwork with your insurance company",
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-white" />,
      title: "Approval & Scheduling",
      description: "Once approved, we schedule your repair and arrange vehicle collection",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-white" />,
      title: "Quality Repair & Delivery",
      description: "Professional repair to insurance standards with delivery back to you",
    },
  ]

  const documents = [
    "Driver's license",
    "Vehicle registration papers",
    "Insurance policy details",
    "Police report (if applicable)",
    "Photos of damage",
    "Claim number (if already reported)",
  ]

  const faqs = [
    {
      question: "Do you provide a courtesy car during repairs?",
      answer:
        "Yes, we can arrange courtesy vehicles through your insurance company for qualifying claims. Availability depends on your policy coverage and the extent of repairs needed.",
    },
    {
      question: "What are typical turnaround times for repairs?",
      answer:
        "Minor repairs (scratches, small dents): 2-3 days. Major collision repairs: 1-2 weeks. Complex chassis work: 2-3 weeks. We provide realistic timeframes and keep you updated throughout the process.",
    },
    {
      question: "Do you offer a warranty on paint and repairs?",
      answer:
        "Yes, we provide a comprehensive warranty on all paintwork and repairs. Paint warranty covers color match and finish quality. Structural repairs are guaranteed for workmanship and materials.",
    },
    {
      question: "Can I pay cash instead of going through insurance?",
      answer:
        "Absolutely. We offer competitive cash rates for customers who prefer not to claim through insurance. This can help preserve your no-claims bonus and avoid excess payments.",
    },
    {
      question: "What if my car is a total loss?",
      answer:
        "If your vehicle is declared a total loss, we'll assist with the insurance assessment process and provide documentation to support fair market value determination.",
    },
    {
      question: "Do you work with all insurance companies?",
      answer:
        "Yes, we're approved by all major South African insurers including Hollard, Santam, MiWay, Old Mutual, and many others. We handle the entire claims process on your behalf.",
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
              Insurance Claims Made Simple
            </h1>
            <p className="text-xl text-brand-black/70 max-w-3xl mx-auto mb-8">
              We handle the entire insurance claims process for you. From initial assessment to final delivery, our
              experienced team manages all communication with your insurer.
            </p>
            <Link href="/estimate" className="btn-primary text-lg">
              Start Your Claim
            </Link>
          </div>
        </section>

        {/* Trusted Insurers */}
        <section className="py-16 bg-brand-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                We Work With All Major Insurers
              </h2>
              <p className="text-lg text-brand-black/70">
                Approved repair facility for leading South African insurance companies
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {insurers.map((insurer) => (
                <div
                  key={insurer}
                  className="bg-brand-white p-6 rounded-xl text-center border border-brand-black/20 hover:border-brand-blue/50 transition-colors"
                >
                  <p className="font-bold text-brand-black">{insurer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Claims Process */}
        <section className="py-20 bg-brand-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-white mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Our Claims Process
              </h2>
              <p className="text-xl text-brand-white/90 max-w-2xl mx-auto">
                Simple steps to get your vehicle repaired through insurance
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {claimsProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-brand-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-brand-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-brand-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-brand-white/90">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Checklist */}
        <section className="py-20 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-black mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Documents You'll Need
                </h2>
                <p className="text-lg text-brand-black/70 mb-8">
                  Having these documents ready will speed up your claims process. Don't worry if you're missing
                  something - we'll help you get what's needed.
                </p>
                <ul className="space-y-4">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center text-brand-black">
                      <CheckCircle className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-black/5 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Need Help?
                </h3>
                <p className="text-brand-black/70 mb-6">
                  Our team can assist with document preparation and guide you through the entire claims process.
                </p>
                <div className="space-y-3">
                  <a href="tel:0796908176" className="btn-secondary block text-center">
                    Call 079 690 8176
                  </a>
                  <a
                    href="https://wa.me/27796908176?text=Hi%20Prestige,%20I%20need%20help%20with%20my%20insurance%20claim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary block text-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-brand-black/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-brand-black/70">Common questions about our insurance claims process</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-brand-white rounded-xl border border-brand-black/20 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-black/5 transition-colors"
                  >
                    <h3 className="font-bold text-brand-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-brand-blue" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-blue" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-brand-black/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}
