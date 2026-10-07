import { Star, MapPin } from 'lucide-react'

export default function Hero({ totalItems }) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            Bangalore
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Gaming Consoles
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            Rent the latest gaming gadgets like PS5, Xbox, Oculus VR, and Racing Wheels at the lowest prices. Delivered to your doorstep.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 bg-brand-50 border border-brand-200 px-5 py-3 rounded-xl">
              <span className="text-2xl font-bold text-brand-700">{totalItems}</span>
              <span className="text-sm text-brand-900 font-medium">items available</span>
            </div>

            <div className="flex items-center gap-2 text-brand-700 font-semibold">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 fill-current text-brand-600" />
              </div>
              <span>Lowest Price Guarantee</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 font-medium">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Free Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}