import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"

export const metadata = {
  title: "Privacy Policy - Prestige Panel Beaters",
  description:
    "Privacy policy for Prestige Panel Beaters. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1
            className="text-4xl md:text-5xl font-bold text-brand-black mb-8"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-brand-black/70 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString("en-ZA")}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Information We Collect
                </h2>
                <p className="text-brand-black/80 leading-relaxed mb-4">
                  When you use our services, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-black/80">
                  <li>Personal details (name, phone number, email address)</li>
                  <li>Vehicle information (make, model, year, registration)</li>
                  <li>Insurance details and claim information</li>
                  <li>Photos of vehicle damage</li>
                  <li>Communication records and service history</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  How We Use Your Information
                </h2>
                <p className="text-brand-black/80 leading-relaxed mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-brand-black/80">
                  <li>Provide repair estimates and services</li>
                  <li>Communicate with you and your insurance company</li>
                  <li>Process insurance claims on your behalf</li>
                  <li>Maintain service records and warranty information</li>
                  <li>Improve our services and customer experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Information Sharing
                </h2>
                <p className="text-brand-black/80 leading-relaxed mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2 text-brand-black/80">
                  <li>Your insurance company for claims processing</li>
                  <li>Parts suppliers and service providers as necessary</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="text-brand-black/80 leading-relaxed">
                  We do not sell or rent your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Data Security
                </h2>
                <p className="text-brand-black/80 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Your Rights
                </h2>
                <p className="text-brand-black/80 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-brand-black/80">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Cookies and Tracking
                </h2>
                <p className="text-brand-black/80 leading-relaxed">
                  Our website may use cookies to improve your browsing experience and analyze website traffic. You can
                  control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Contact Us
                </h2>
                <p className="text-brand-black/80 leading-relaxed mb-4">
                  If you have questions about this privacy policy or your personal information, contact us:
                </p>
                <div className="bg-brand-black/5 p-6 rounded-xl">
                  <p className="text-brand-black font-medium mb-2">Prestige Panel Beaters</p>
                  <p className="text-brand-black/80">850 North Coast Rd, Briardene, Durban, 4057</p>
                  <p className="text-brand-black/80">
                    Phone:{" "}
                    <a href="tel:0796908176" className="text-brand-blue hover:underline">
                      079 690 8176
                    </a>
                  </p>
                  <p className="text-brand-black/80">
                    Email:{" "}
                    <a href="mailto:info@prestigepanelbeaters.co.za" className="text-brand-blue hover:underline">
                      info@prestigepanelbeaters.co.za
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Changes to This Policy
                </h2>
                <p className="text-brand-black/80 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on this page with an updated revision date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}
