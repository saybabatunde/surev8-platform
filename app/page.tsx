import RegistrationForm from './components/RegistrationForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-600">SureV8</h1>
            <nav className="flex gap-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">
                How It Works
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 font-medium">
                Why SureV8
              </a>
              <a href="#register" className="text-gray-600 hover:text-gray-900 font-medium">
                Register
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Find & Verify Trusted Service Providers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stop guessing. Start verifying. Connect with service providers you can trust through video verification and real reviews.
            </p>
            <div className="flex gap-4">
              <a
                href="#register"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-6xl">🎯</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How SureV8 Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Find</h4>
              <p className="text-gray-600">
                Browse and discover service providers in your area with detailed profiles
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Verify</h4>
              <p className="text-gray-600">
                Watch video introductions and see real credentials before booking
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Connect</h4>
              <p className="text-gray-600">
                Schedule interviews and agree on terms with verified providers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose SureV8?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">🎥</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Video Verification</h4>
                <p className="text-gray-600">
                  See exactly what you're getting. Video calls let you interview providers and see their work in real-time
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">⭐</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Real Reviews</h4>
                <p className="text-gray-600">
                  Read verified reviews from customers who've already worked with the provider
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Safe & Secure</h4>
                <p className="text-gray-600">
                  Verified profiles and secure messaging keep both customers and providers safe
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💼</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Any Service</h4>
                <p className="text-gray-600">
                  From handyman to real estate, find trusted providers for anything you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Join SureV8 Today
        </h3>
        <RegistrationForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-white font-bold mb-4">SureV8</h5>
              <p className="text-sm">
                Connecting customers with verified service providers through video verification
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">For Customers</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Find Providers</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Safety</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">For Providers</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Become a Provider</a></li>
                <li><a href="#" className="hover:text-white">Grow Your Business</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 SureV8. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
