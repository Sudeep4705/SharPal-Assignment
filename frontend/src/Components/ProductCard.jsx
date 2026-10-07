import { Star, BadgeCheck, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false)

  const tagColors = {
    Trending: 'bg-red-500',
    New: 'bg-blue-500',
    Popular: 'bg-purple-500',
    Hot: 'bg-orange-500',
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      <div className="relative overflow-hidden bg-gray-100">
        {product.tag && (
          <span className={`absolute top-3 left-3 z-10 ${tagColors[product.tag] || 'bg-gray-700'} text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm`}>
            {product.tag}
          </span>
        )}
        {product.out_of_stock && (
          <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
            <span className="bg-white text-gray-900 font-bold px-4 py-2 rounded-lg">Out of Stock</span>
          </div>
        )}
        <img
          src={imgError ? `https://placehold.co/400x250/f3f4f6/374151?text=${encodeURIComponent(product.name)}` : product.image}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 mb-1.5 line-clamp-2 text-sm leading-snug min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{product.booked_count} booked this month</span>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Starting from</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">₹{product.per_day_rent}</span>
              <span className="text-xs text-gray-500 ml-1">/day</span>
            </div>
            <button
              disabled={product.out_of_stock}
              className="bg-brand-600 hover:bg-brand-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-medium px-4 py-2 rounded-lg transition flex items-center gap-1.5"
            >
              <ShoppingCart className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="mt-3 flex items-center gap-1 text-xs text-brand-700 font-medium bg-brand-50 w-fit px-2 py-1 rounded">
            <BadgeCheck className="w-3 h-3" />
            Lowest Price Guarantee
          </div>
        </div>
      </div>
    </div>
  )
}
