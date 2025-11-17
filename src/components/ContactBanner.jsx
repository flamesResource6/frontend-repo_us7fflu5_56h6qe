import { Link } from 'react-router-dom'

export default function ContactBanner() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 p-8 bg-gradient-to-br from-blue-600 to-blue-500 text-white flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready to grow smarter?</h3>
            <p className="text-white/80 mt-1">Let’s plan a 20-minute discovery call.</p>
          </div>
          <Link to="/contact" className="mt-4 sm:mt-0 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors">
            Plan a Call
          </Link>
        </div>
      </div>
    </section>
  )
}
