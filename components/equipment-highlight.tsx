export function EquipmentHighlight() {
  const equipment = [
    {
      title: "Professional Spray Booth",
      description: "State-of-the-art spray booth with computerized paint matching for perfect finishes",
      image: "/professional-automotive-spray-booth-facility.jpg",
    },
    {
      title: "Celette Chassis Straightener",
      description: "Precision chassis straightening equipment for accurate collision repair",
      image: "/automotive-chassis-straightening-bench-equipment.jpg",
    },
    {
      title: "Preparation Bay",
      description: "Dedicated preparation area for bodywork and surface preparation",
      image: "/automotive-body-shop-preparation-bay.jpg",
    },
  ]

  return (
    <section className="py-20 bg-brand-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Professional Equipment
          </h2>
          <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
            Industry-leading equipment ensures quality repairs that meet insurance standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div key={index} className="bg-brand-white rounded-xl overflow-hidden shadow-lg">
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-black mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-brand-black/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
