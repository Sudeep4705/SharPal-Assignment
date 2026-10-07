import { X, Calendar, Sparkles } from 'lucide-react'

export default function DateModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Select your Dates</h3>
            <p className="text-xs text-gray-500">Choose delivery and pickup</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Delivery Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Pickup Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
            />
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 mt-4">
            <div className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-brand-800 font-semibold mb-1">Save more with us!</p>
                <p className="text-xs text-brand-700 leading-relaxed">
                  Longer rental periods mean bigger savings — enjoy discounts of up to 12%. We don't charge you for delivery and pickup days!
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition mt-2 shadow-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}