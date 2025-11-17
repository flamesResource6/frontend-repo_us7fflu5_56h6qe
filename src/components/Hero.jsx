import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.08]">
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-blue-600 to-blue-400 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Strategy • Branding • Websites • AI</p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-black">
            We help entrepreneurs grow with smart strategy, design & AI.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Ardsite is a premium consultancy blending business strategy, brand clarity and modern web experiences powered by AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-gray-900 transition-colors">
              Plan a Call
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full bg-white text-black border border-black/10 px-6 py-3 text-sm font-medium hover:bg-black/5 transition-colors">
              View Services <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
