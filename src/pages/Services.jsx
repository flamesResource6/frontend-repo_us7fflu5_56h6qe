import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Sparkles } from 'lucide-react'

const data = [
  {
    title: 'Web Design & Branding',
    desc: 'Premium websites and visual identities that elevate your brand.',
    bullets: ['Conversion-focused UX', 'Brand systems & guidelines', 'SEO and performance best practices'],
  },
  {
    title: 'AI Chatbots & Automation',
    desc: 'Use AI to scale customer experience and internal operations.',
    bullets: ['Custom chatbots', 'Workflow automation', 'Knowledge-base integrations'],
  },
  {
    title: 'Consultancy & Strategy',
    desc: 'Positioning, messaging and roadmaps to unlock growth.',
    bullets: ['Strategic positioning', 'Go-to-market plans', 'Analytics & KPIs'],
  },
  {
    title: 'Social Media & Personal Branding',
    desc: 'Build authority and trust with systems and content that compound.',
    bullets: ['Content strategy', 'Design templates', 'Ghostwriting support'],
  },
]

export default function Services() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">We combine strategy, design and AI to build brands and systems that grow with you.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6 bg-white">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2"><Sparkles size={14} className="text-blue-500" /> {b}</li>
                ))}
              </ul>
              <a href="/contact" className="inline-flex mt-5 rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-gray-900">Let’s talk</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
