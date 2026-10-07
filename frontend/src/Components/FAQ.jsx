import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How can I rent from SharePal?',
    a: 'Simply select your product, choose your delivery and pickup dates, add to cart, and complete the quick verification process. We will deliver it to your doorstep!',
  },
  {
    q: 'If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?',
    a: 'You can extend the rental duration for individual products. Just reach out to our support team and we will help you with the partial extension.',
  },
  {
    q: 'When does the rental start?',
    a: 'Your rental period starts from the day of delivery. We do not charge you for the delivery and pickup days, ensuring you get maximum value.',
  },
  {
    q: 'What will be the condition of the products at the time of delivery?',
    a: 'Every product undergoes a strict 12-point quality check and is thoroughly cleaned and sanitized before every single delivery.',
  },
  {
    q: 'Why is verification required?',
    a: 'Verification helps us ensure the safety of our products and builds trust in our community. It is a quick and simple process.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-10">Everything you need to know about renting</p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-gray-50 rounded-xl border border-gray-200 open:bg-white open:shadow-md transition-all"
            >
              <summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-gray-900 list-none">
                <span>{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
              </summary>
              <div className="text-gray-600 px-5 pb-5 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
