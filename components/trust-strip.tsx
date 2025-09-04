export function TrustStrip() {
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

  return (
    <section className="py-12 bg-brand-white border-t border-brand-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-brand-black/60 mb-8 font-medium">Trusted by leading insurers</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {insurers.map((insurer) => (
            <div
              key={insurer}
              className="text-center p-4 text-brand-black hover:text-brand-blue transition-colors duration-200 font-medium"
            >
              {insurer}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
