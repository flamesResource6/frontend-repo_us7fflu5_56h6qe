import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Services />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-black/10 p-8 bg-white">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Client transformations</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">Before-and-after examples of how we elevate brands, streamline operations with AI, and redesign digital experiences.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-black/10" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <ContactBanner />
      <Footer />
    </div>
  )
}
