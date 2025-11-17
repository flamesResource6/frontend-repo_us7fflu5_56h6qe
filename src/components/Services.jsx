import { Brain, Layout, LineChart, Bot, PenTool, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Web Design & Branding',
    desc: 'Premium websites and visual identities that elevate your brand.',
    features: ['Conversion-focused UX', 'Brand systems & guidelines', 'Design systems & components'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Automation',
    desc: 'Leverage AI to reduce costs and scale customer experiences.',
    features: ['Custom chatbots', 'Workflow automation', 'Data + knowledge base integrations'],
  },
  {
    icon: LineChart,
    title: 'Consultancy & Strategy',
    desc: 'Clarity, positioning and growth roadmaps that drive results.',
    features: ['Positioning & messaging', 'Go-to-market plans', 'Analytics & KPI dashboards'],
  },
  {
    icon: PenTool,
    title: 'Social Media & Personal Branding',
    desc: 'Build trust and authority with a world-class content engine.',
    features: ['Content strategy', 'Templates & systems', 'Ghostwriting support'],
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we do</h2>
          <a href="/services" className="text-sm text-blue-600 hover:text-blue-500">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-black/10 p-6 hover:border-black/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:shadow-sm">
                <s.icon size={20} />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Sparkles size={14} className="text-blue-500" /> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
