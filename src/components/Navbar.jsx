import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <motion.span
            className="navbar__logo-text"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            LUNA
          </motion.span>
        </Link>
        <nav className="navbar__nav">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link ${location.pathname === to ? 'active' : ''}`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {label}
              </motion.span>
            </Link>
          ))}
        </nav>
        <div className="navbar__cta">
          <Link to="/about#contact">
            <motion.button
              className="btn btn--primary btn--sm"
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px var(--glow-purple)' }}
              whileTap={{ scale: 0.98 }}
            >
              Request Demo
            </motion.button>
          </Link>
        </div>
        <motion.button
          className="navbar__burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
        </motion.button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="navbar__mobile-grid">
              {links.map(({ to, label }, i) => (
                <Link
                  key={to}
                  to={to}
                  className={`navbar__mobile-card ${location.pathname === to ? 'active' : ''}`}
                >
                  <span className="navbar__mobile-card-label">{label}</span>
                </Link>
              ))}
            </div>
            <Link to="/about#contact" className="navbar__mobile-cta-wrap">
              <span className="navbar__mobile-cta-btn">Request Demo</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
