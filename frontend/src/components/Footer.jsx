import { Link } from "react-router-dom"

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
      {/* Gradient accent */}
      <div className="h-1 w-full bg-linear-to-r from-indigo-600 via-cyan-400 to-blue-600" />

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3 lg:gap-12">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Nex<span className="text-cyan-400">Cart</span>
              </span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
              Discover great finds at prices you'll love.
              Your next favorite product is just a click away.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h2>

            <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm sm:flex-col sm:items-start sm:gap-3">
              <li>
                <Link
                  to="/about"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/return-policy"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Shopping */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">
              Shop NexCart
            </h2>

            <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm sm:flex-col sm:items-start sm:gap-3">
              <li>
                <Link
                  to="/shop"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Browse Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Your Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:mt-12 md:flex-row md:text-left">
          <p className="text-xs leading-5 text-slate-400 sm:text-sm">
            &copy; {currentYear} NexCart. All rights reserved.
          </p>

          <p className="text-xs text-slate-500 sm:text-sm">
            Made for smarter shopping.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer