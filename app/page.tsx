import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { ServicesGrid } from "@/components/services-grid"
import { EquipmentHighlight } from "@/components/equipment-highlight"
import { BeforeAfterSliders } from "@/components/before-after-sliders"
import { ProcessSteps } from "@/components/process-steps"
import { Reviews } from "@/components/reviews"
import { CTABanner } from "@/components/cta-banner"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesGrid />
        <EquipmentHighlight />
        <BeforeAfterSliders />
        <ProcessSteps />
        <Reviews />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}
