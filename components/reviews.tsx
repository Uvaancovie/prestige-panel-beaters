import { Star } from "lucide-react"

export function Reviews() {
  const reviews = [
    {
      name: "Sipho Mthembu",
      location: "Durban North",
      rating: 5,
      text: "Excellent service from Prestige Panel Beaters. They handled my insurance claim professionally and the repair quality exceeded my expectations. Highly recommended!",
    },
    {
      name: "Sarah Johnson",
      location: "Umhlanga",
      rating: 5,
      text: "Fast turnaround and perfect paint match on my BMW. The team kept me updated throughout the process and delivered exactly when promised.",
    },
    {
      name: "Michael van der Merwe",
      location: "Ballito",
      rating: 5,
      text: "Professional chassis straightening work on my bakkie after an accident. Insurance approved the work immediately. Great communication and fair pricing.",
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
            Customer Reviews
          </h2>
          <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
            See what our satisfied customers say about our service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-brand-white p-6 rounded-xl border border-brand-black/20 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-red fill-current" />
                ))}
              </div>
              <p className="text-brand-black/80 mb-4 leading-relaxed">"{review.text}"</p>
              <div className="border-t border-brand-black/10 pt-4">
                <p className="font-bold text-brand-black">{review.name}</p>
                <p className="text-brand-black/60 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
