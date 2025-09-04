import Link from "next/link"

export function CTABanner() {
  return (
    <section className="py-16 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-brand-white mb-6"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Need a tow-in or urgent repair?
        </h2>
        <p className="text-xl text-brand-white/90 mb-8 max-w-2xl mx-auto">
          We offer emergency towing services and priority repairs for urgent cases
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:0796908176"
            className="bg-brand-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-red hover:text-brand-white transition-all duration-200"
          >
            Call 079 690 8176
          </a>
          <Link
            href="/estimate"
            className="border-2 border-brand-white text-brand-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-white hover:text-brand-blue transition-all duration-200"
          >
            Get Photo Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
