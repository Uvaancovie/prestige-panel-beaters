import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-brand-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                PRESTIGE
              </span>
              <span className="text-2xl font-bold text-brand-red ml-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                PANEL BEATERS
              </span>
            </div>
            <p className="text-brand-white/80 mb-4">
              Insurance-Approved Panel Beaters in Briardene. Free Photo Estimate in 60 Minutes.
            </p>
            <div className="space-y-2 text-brand-white/80">
              <p>850 North Coast Rd, Briardene, Durban, 4057</p>
              <p>Phone: 079 690 8176</p>
              <div>
                <p>Mon–Fri: 7:30–17:00</p>
                <p>Sat: 8:00–13:00</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-brand-white/80 hover:text-brand-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insurance-claims" className="text-brand-white/80 hover:text-brand-white transition-colors">
                  Insurance Claims
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-brand-white/80 hover:text-brand-white transition-colors">
                  Fleet Accounts
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-brand-white/80 hover:text-brand-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-white/80 hover:text-brand-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              Services
            </h3>
            <ul className="space-y-2 text-brand-white/80">
              <li>Accident Repair</li>
              <li>Chassis Straightening</li>
              <li>Spray Booth</li>
              <li>Paint Matching</li>
              <li>Scratch & Dent</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-white/60 text-sm">© 2024 Prestige Panel Beaters. All rights reserved.</p>
          <Link href="/legal/privacy" className="text-brand-white/60 hover:text-brand-white text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
