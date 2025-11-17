const testimonials = [
  {
    quote: 'Ardsite transformed our brand and website. We look and convert like a top-tier company now.',
    name: 'Elena M.',
    role: 'Founder, SaaS Startup'
  },
  {
    quote: 'Their strategy and AI automation saved us hundreds of hours. The ROI was instant.',
    name: 'David R.',
    role: 'CEO, DTC Brand'
  },
  {
    quote: 'Best consulting partner we’ve worked with—clear, creative, and results-driven.',
    name: 'Priya S.',
    role: 'COO, Agency'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Client words</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/10 p-6 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.03)]">
              <p className="text-gray-900">“{t.quote}”</p>
              <p className="mt-4 text-sm text-gray-600">{t.name} • {t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
