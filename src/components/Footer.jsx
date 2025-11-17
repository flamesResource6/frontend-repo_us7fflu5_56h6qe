export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg" />
              <span className="font-semibold tracking-tight text-lg">Ardsite</span>
            </div>
            <p className="text-sm text-gray-600 max-w-sm">
              Strategy, branding, AI and web design consultancy helping entrepreneurs grow through smart digital solutions.
            </p>
          </div>
          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-semibold text-gray-900">Contact</p>
            <p>hello@ardsite.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-semibold text-gray-900">Social</p>
            <p>Twitter • LinkedIn • Instagram</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Ardsite. All rights reserved.</div>
      </div>
    </footer>
  )
}
