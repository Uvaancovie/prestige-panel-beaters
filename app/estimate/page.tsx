import { EstimateForm } from "@/components/estimate-form"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"

export const metadata = {
  title: "Get Photo Estimate - Prestige Panel Beaters Durban",
  description:
    "Upload photos of your vehicle damage for a free estimate within 60 minutes. We work with all major insurers.",
}

export default function EstimatePage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1
              className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Get Your Free Photo Estimate
            </h1>
            <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
              Upload photos of your vehicle damage and receive a detailed estimate within 60 minutes. We'll handle all
              communication with your insurer.
            </p>
          </div>
          <EstimateForm />
        </div>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}
