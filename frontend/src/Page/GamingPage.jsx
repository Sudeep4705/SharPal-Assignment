import { useState } from 'react'
import productData from '../Data/product-list.json'
import Hero from '../Components/Hero'
import ProductCard from '../Components/ProductCard'
import TrustSection from '../Components/TrustSection'
import Testimonials from '../Components/Testimonials'
import FAQ from '../Components/FAQ'

export default function GamingPage() {
  const products = productData.products || []
  const [visibleCount, setVisibleCount] = useState(12)

  const visibleProducts = products.slice(0, visibleCount)
  const hasMore = visibleCount < products.length

  return (
    <div>
      <Hero totalItems={products.length} />

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">All Gaming Gadgets</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-brand-500 outline-none">
              <option>Trending</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition shadow-sm"
            >
              Show More ({products.length - visibleCount} remaining)
            </button>
          </div>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          Showing <span className="font-semibold text-gray-900">{visibleProducts.length}</span> of{' '}
          <span className="font-semibold text-gray-900">{products.length}</span> results
        </p>
      </section>

      <TrustSection />
      <Testimonials />
      <FAQ />
    </div>
  )
}