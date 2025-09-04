import { Camera, Send, Clock, Users } from "lucide-react"

export function ProcessSteps() {
  const steps = [
    {
      icon: <Camera className="w-8 h-8 text-brand-white" />,
      title: "Snap",
      description: "Take photos of your vehicle damage from multiple angles",
    },
    {
      icon: <Send className="w-8 h-8 text-brand-white" />,
      title: "Submit",
      description: "Upload photos and vehicle details through our secure form",
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-white" />,
      title: "60-min Estimate",
      description: "Receive detailed repair estimate within 60 minutes",
    },
    {
      icon: <Users className="w-8 h-8 text-brand-white" />,
      title: "We Liaise with Insurer",
      description: "We handle all communication with your insurance company",
    },
  ]

  return (
    <section className="py-20 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-brand-white mb-4"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-brand-white/90 max-w-2xl mx-auto">
            Getting your vehicle repaired has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-brand-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <div className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-brand-white font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-brand-white/90">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
