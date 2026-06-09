import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SocialIcons from './SocialIcons'

const socials = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
]

const legal = [
  { to: '#', label: 'Privacy Policy' },
  { to: '#', label: 'Terms of Service' },
  { to: '#', label: 'Medical Disclaimer' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <motion.div
          className="footer__brand"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="footer__logo">LUNA</span>
          <p className="footer__tagline">
            Understanding your patterns. Working with your biology.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="footer__social"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcons name={s.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <div className="footer__legal">
          {legal.map((l) => (
            <Link key={l.label} to={l.to} className="footer__link">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer__copy">
        <div className="container">© {new Date().getFullYear()} LUNA. All rights reserved.</div>
      </div>
    </footer>
  )
}
