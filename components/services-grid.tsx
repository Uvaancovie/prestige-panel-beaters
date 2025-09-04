import { Wrench, Paintbrush, Car } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-brand-red" />,
      title: "Accident Repair & Chassis Straightening",
      description:
        "Professional collision repair using our Celette chassis straightening bench. We restore your vehicle to manufacturer specifications with precision and care.",
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-brand-red" />,
      title: "Spray Booth & OEM Paint Matching",
      description:
        "State-of-the-art spray booth facility with computerized paint matching system. We ensure perfect color match using genuine OEM paint specifications.",
    },
    {
      icon: <Car className="w-12 h-12 text-brand-red" />,
      title: "Scratch & Dent / Quick Resprays",
      description:
        "Fast turnaround for minor damage repairs. Professional scratch removal, dent repair, and quick resprays to get you back on the road quickly.",
    },
  ]

  return (
    <section className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Our Services
          </h2>
          <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
            Professional automotive repair services with insurance-approved quality standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl border border-brand-black/20 hover:border-brand-blue/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                {service.title}
              </h3>
              <p className="text-brand-black/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
