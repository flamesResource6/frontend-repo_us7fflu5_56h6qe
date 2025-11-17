import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">About Ardsite</h1>
        <p className="mt-4 text-gray-600">Ardsite is a strategy, branding, AI and web design consultancy helping entrepreneurs and teams grow smarter, not harder. We pair rigorous thinking with creative execution to deliver results that compound over time.</p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Mission</h2>
          <p className="mt-2 text-gray-600">Helping businesses grow smarter through clarity, systems and high-leverage digital experiences. Strategy first. Design that converts. AI that scales.</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Core Values</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {['Strategy', 'Clarity', 'Creativity', 'Excellence'].map((v) => (
              <li key={v} className="rounded-xl border border-black/10 p-4 bg-white">{v}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Founder</h2>
          <div className="mt-4 rounded-2xl border border-black/10 p-6 bg-white flex items-center gap-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400" />
            <div>
              <p className="font-medium">Ard</p>
              <p className="text-gray-600 text-sm">Strategist & Creative Director</p>
              <p className="text-gray-600 mt-2 text-sm">Over a decade of experience building brands, websites and AI-powered systems for founders and teams across industries.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
