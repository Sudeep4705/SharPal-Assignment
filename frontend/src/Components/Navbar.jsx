import { MapPin, ShoppingBag, Calendar, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <a href="/" className="text-2xl font-bold text-brand-600 tracking-tight">
              SharePal
            </a>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-200 transition">
              <MapPin className="w-4 h-4" />
              Bangalore
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition">Categories</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition">How it Works</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition">About</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenModal}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition border border-gray-200 px-3 py-1.5 rounded-lg hover:border-brand-500"
            >
              <Calendar className="w-4 h-4" />
              Select Dates
            </button>
            <button className="relative p-2 text-gray-600 hover:text-brand-600 transition">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-brand-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
            </button>
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            <a href="#" className="block text-sm font-medium text-gray-700 py-2">Categories</a>
            <a href="#" className="block text-sm font-medium text-gray-700 py-2">How it Works</a>
            <a href="#" className="block text-sm font-medium text-gray-700 py-2">About</a>
            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 py-2 w-full"
            >
              <Calendar className="w-4 h-4" />
              Select Dates
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}