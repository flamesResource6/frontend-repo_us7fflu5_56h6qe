import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Portfolio() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Portfolio</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">A clean selection of websites and brand systems. Case studies coming soon.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-black/10 group-hover:shadow-md transition-shadow" />
              <div className="mt-3">
                <p className="font-medium">Brand Project {i + 1}</p>
                <p className="text-gray-600 text-sm">Branding • Web</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
