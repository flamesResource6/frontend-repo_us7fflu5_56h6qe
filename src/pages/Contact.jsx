import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-gray-600">Let’s discuss your goals and how we can help.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <Phone className="text-blue-600" />
            <p className="mt-3 font-medium">Phone</p>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <Mail className="text-blue-600" />
            <p className="mt-3 font-medium">Email</p>
            <p className="text-gray-600 text-sm">hello@ardsite.com</p>
          </div>
          <a href="https://wa.me/15551234567" target="_blank" className="rounded-2xl border border-black/10 p-6 bg-white block">
            <MessageCircle className="text-blue-600" />
            <p className="mt-3 font-medium">WhatsApp</p>
            <p className="text-gray-600 text-sm">Chat with us</p>
          </a>
        </div>

        <form className="mt-10 grid grid-cols-1 gap-4">
          <input className="border border-black/10 rounded-xl px-4 py-3" placeholder="Name" />
          <input className="border border-black/10 rounded-xl px-4 py-3" placeholder="Email" />
          <textarea className="border border-black/10 rounded-xl px-4 py-3" rows={5} placeholder="Tell us about your project" />
          <button className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 w-fit">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
