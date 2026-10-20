import { useContext, useState } from "react"
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function Navbar() {
    const {user, logout} = useContext(AuthContext);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-cyan-400 ${
      isActive
        ? 'font-semibold text-cyan-400'
        : 'text-slate-200'
    }`

    const closeMenu = () => setMenuOpen(false)

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src="./LogoDark.png"
            alt="NexCart Logo"
            className="h-10 w-auto object-contain sm:h-11"
          />
          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Nex<span className="text-cyan-400">Cart</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>

          <NavLink to="/cart" className={navLinkClass}>
            <span className="inline-flex items-center gap-2">
              Cart
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-bold text-white">
                {cartItems.length}
              </span>
            </span>
          </NavLink>

          {user ? (
            <>
              <NavLink to="/profile" className={navLinkClass}>
                Hi, {user.name}
              </NavLink>

              {user.role === 'admin' && (
                <NavLink to="/admin" className={navLinkClass}>
                  Admin
                </NavLink>
              )}

              <button
                onClick={handleLogout}
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold transition-colors hover:border-red-400/50 hover:bg-red-500/10 hover:text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/20"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:bg-white/10 md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <NavLink
              to="/shop"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 transition-colors hover:bg-white/5 hover:text-cyan-400 ${
                  isActive ? 'bg-white/5 font-semibold text-cyan-400' : 'text-slate-200'
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-white/5 hover:text-cyan-400 ${
                  isActive ? 'bg-white/5 font-semibold text-cyan-400' : 'text-slate-200'
                }`
              }
            >
              Cart
              <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-bold text-white">
                {cartItems.length}
              </span>
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/profile"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  <span className="block rounded-lg px-4 py-3">
                    Hi, {user.name}
                  </span>
                </NavLink>

                {user.role === 'admin' && (
                  <NavLink
                    to="/admin"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 transition-colors hover:text-cyan-400 ${
                        isActive ? 'font-semibold text-cyan-400' : 'text-slate-200'
                      }`
                    }
                  >
                    Admin Dashboard
                  </NavLink>
                )}

                <button
                  onClick={() => {
                    closeMenu()
                    handleLogout()
                  }}
                  className="mt-2 rounded-xl border border-red-400/30 px-4 py-3 text-left font-semibold text-red-400 transition-colors hover:bg-red-500/10"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold transition-colors hover:bg-blue-500"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
