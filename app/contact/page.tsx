import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"
import { ContactForm } from "@/components/contact-form"
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact Prestige Panel Beaters - Briardene, Durban",
  description:
    "Contact us for vehicle repairs, estimates, and insurance claims. Located at 850 North Coast Rd, Briardene, Durban. Call 079 690 8176 or WhatsApp us.",
}

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xl text-brand-black/70 max-w-3xl mx-auto mb-8">
              Get in touch for vehicle repairs, estimates, or any questions. We're here to help with your automotive
              needs.
            </p>
          </div>
        </section>

        {/* Contact Information & Map */}
        <section className="py-20 bg-brand-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Card */}
              <div className="bg-brand-white p-8 rounded-xl border border-brand-black/20 shadow-lg">
                <h2 className="text-2xl font-bold text-brand-black mb-8" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center">
                    <div className="bg-brand-red rounded-full p-3 mr-4">
                      <Phone className="w-6 h-6 text-brand-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black">Phone</h3>
                      <a href="tel:0796908176" className="text-brand-blue hover:underline text-lg">
                        079 690 8176
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center">
                    <div className="bg-brand-red rounded-full p-3 mr-4">
                      <MessageCircle className="w-6 h-6 text-brand-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black">WhatsApp</h3>
                      <a
                        href="https://wa.me/27796908176?text=Hi%20Prestige,%20I%20need%20assistance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline text-lg"
                      >
                        079 690 8176
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center">
                    <div className="bg-brand-red rounded-full p-3 mr-4">
                      <Mail className="w-6 h-6 text-brand-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black">Email</h3>
                      <a href="mailto:info@prestigepanelbeaters.co.za" className="text-brand-blue hover:underline">
                        info@prestigepanelbeaters.co.za
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="bg-brand-red rounded-full p-3 mr-4 mt-1">
                      <MapPin className="w-6 h-6 text-brand-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black">Address</h3>
                      <p className="text-brand-black/70">
                        850 North Coast Rd
                        <br />
                        Briardene, Durban, 4057
                        <br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="bg-brand-red rounded-full p-3 mr-4 mt-1">
                      <Clock className="w-6 h-6 text-brand-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black">Business Hours</h3>
                      <div className="text-brand-black/70">
                        <p>Monday - Friday: 7:30 - 17:00</p>
                        <p>Saturday: 8:00 - 13:00</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-brand-black/20">
                  <h3 className="font-bold text-brand-black mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a href="/estimate" className="btn-primary block text-center">
                      Get Photo Estimate
                    </a>
                    <a
                      href="https://wa.me/27796908176?text=Hi%20Prestige,%20I%20need%20a%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary block text-center"
                    >
                      WhatsApp Quote
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-brand-white rounded-xl border border-brand-black/20 shadow-lg overflow-hidden">
                <div className="p-6 border-b border-brand-black/20">
                  <h2 className="text-2xl font-bold text-brand-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                    Find Us
                  </h2>
                  <p className="text-brand-black/70">850 North Coast Rd, Briardene, Durban, 4057</p>
                </div>
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.123456789!2d31.0123456!3d-29.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s850%20North%20Coast%20Rd%2C%20Briardene%2C%20Durban%2C%204057!5e0!3m2!1sen!2sza!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prestige Panel Beaters Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Send Us a Message
              </h2>
              <p className="text-xl text-brand-black/70">
                Have a question or need more information? We'll get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}
