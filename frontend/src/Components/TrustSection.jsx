import { Shield, Truck, BadgeCheck } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    title: 'Zero Security Deposit',
    desc: "We'll leave the deposit drama to your landlord - because your adventures should be exciting, not expensive.",
  },
  {
    icon: Truck,
    title: 'Zero Delivery Charges',
    desc: "We'll leave that for your food deliveries. Get free delivery on your rental orders above ₹1200.",
  },
  {
    icon: BadgeCheck,
    title: 'Zero Hidden Charges',
    desc: 'Pay what you see. No surge fee, no cancellation fee. What you see is what you pay.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-white border-y border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Transparent prices. Zero Surprises.
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          No hidden fees, no last-minute charges. Just honest pricing.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <badge.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">{badge.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}