import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-16 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold text-brand-black mb-6 text-balance"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Insurance-Approved Panel Beaters in Briardene
          </h1>
          <p className="text-xl md:text-2xl text-brand-black/80 mb-8 text-pretty">
            Upload accident photos. We estimate within 60 minutes and liaise with your insurer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/estimate" className="btn-primary text-lg">
              Get Photo Estimate
            </Link>
            <a href="tel:0796908176" className="btn-tertiary text-lg">
              Call 079 690 8176
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
