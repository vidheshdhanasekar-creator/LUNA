import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/science', label: 'The Science' },
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
      className={`navbar ${scrolled || mobileOpen ? 'navbar--scrolled' : ''}`}
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
              <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                {label}
              </motion.span>
            </Link>
          ))}
        </nav>
        <div className="navbar__cta">
          <a href="/#waitlist">
            <motion.button
              className="btn btn--primary btn--sm"
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px var(--glow-purple)' }}
              whileTap={{ scale: 0.98 }}
            >
              Join Waitlist
            </motion.button>
          </a>
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="navbar__mobile-links">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.25, ease: 'easeOut' }}
                >
                  <Link
                    to={to}
                    className={`navbar__mobile-link ${location.pathname === to ? 'active' : ''}`}
                  >
                    <span className="navbar__mobile-link-label">{label}</span>
                    {location.pathname === to && (
                      <span className="navbar__mobile-link-indicator" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="navbar__mobile-cta-container"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 + 0.05, duration: 0.3 }}
            >
              <a href="/#waitlist" className="navbar__mobile-cta-wrap">
                <span className="navbar__mobile-cta-btn">Join Waitlist</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
