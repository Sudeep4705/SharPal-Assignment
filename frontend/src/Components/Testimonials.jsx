import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Afrana',
    location: 'Bangalore',
    category: 'Gaming Console',
    text: 'Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4. Thanks Sharepal!',
    initial: 'A',
  },
  {
    name: 'Satyaki',
    location: 'Kolkata',
    category: 'Trekking Gear',
    text: 'I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy.',
    initial: 'S',
  },
  {
    name: 'Kanthikiran',
    location: 'Bangalore',
    category: 'Riding Gear',
    text: "It's an amazing service, starting from the quality of the gear provided to the pickup and drop at doorstep facility. The staff is extremely helpful and supportive.",
    initial: 'K',
  },
  {
    name: 'Pankaj',
    location: 'Mumbai',
    category: 'Action Cameras',
    text: 'Great company amazing products at affordable prices and great service. I would recommend share pal to everybody they really go out of the way for the best service.',
    initial: 'P',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Served more than 1 Lakh Orders
          </h2>
          <p className="text-gray-600">Don't just take our word for it</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-500 mb-3" />
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center font-bold text-white">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location} • {t.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}