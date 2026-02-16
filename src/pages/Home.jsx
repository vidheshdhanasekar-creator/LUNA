import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import MoonBackground from '../components/MoonBackground'
import FloatingParticles from '../components/FloatingParticles'
import GradientBlobs from '../components/GradientBlobs'
import StarTwinkle from '../components/StarTwinkle'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

export default function Home() {
  const whatIsLunaRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: whatIsLunaRef,
    offset: ['start end', 'end start'],
  })
  const cardY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [28, 0, 0, 0, -20])
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.55, 0.8, 1], [0.92, 1, 1, 1, 1, 0.95])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.65, 0.85, 1], [0.6, 1, 1, 1, 1, 0.7])

  return (
    <div className="page page--home">
      <MoonBackground />
      <FloatingParticles />
      <GradientBlobs />
      <StarTwinkle />

      {/* Hero */}
      <section className="hero">
        <div className="hero__content container">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="hero__badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Workplace wellness, reimagined
            </motion.span>
            <h1 className="hero__title">
              <motion.span
                className="hero__title-main"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                LUNA
              </motion.span>
              <motion.span
                className="hero__title-sub"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Workplace Wellness Meets Smart Productivity
              </motion.span>
            </h1>
            <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Empowering organizations to support women employees with cycle-aware task management.
            </motion.p>
            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link to="/about#contact">
                <motion.button
                  className="btn btn--primary btn--lg"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px var(--glow-purple)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Demo
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero__wave" aria-hidden>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <motion.path
              d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
              fill="var(--bg-primary)"
              initial={{ pathLength: 0, opacity: 0.8 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        </div>
      </section>

      {/* Problem */}
      <section className="section section--dark" id="problem">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">The productivity challenge</h2>
            <p className="section__subtitle">
              Science shows that hormonal cycles can affect energy and focus. Organizations that ignore this miss out on both wellbeing and performance.
            </p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            <div className="stats-grid">
              {[
                { value: '73%', label: 'of women report work impact during their cycle', delay: 0 },
                { value: '2x', label: 'higher absenteeism during certain cycle phases', delay: 0.1 },
                { value: '40%', label: 'would prefer cycle-aware task options if available', delay: 0.2 },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(125, 108, 169, 0.15)' }}
                >
                  <span className="stat-card__value">{stat.value}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal custom={2}>
            <div className="chart-placeholder">
              <motion.div
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ height: '70%' }}
              />
              <motion.div
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.45 }}
                style={{ height: '45%' }}
              />
              <motion.div
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{ height: '90%' }}
              />
              <motion.div
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.75 }}
                style={{ height: '55%' }}
              />
              <motion.div
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ height: '65%' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What is LUNA */}
      <section ref={whatIsLunaRef} className="section" id="what-is-luna">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">What is LUNA?</h2>
            <p className="section__subtitle">
              A privacy-first platform that connects cycle awareness with smart HR—so employees feel supported and organizations run better.
            </p>
          </ScrollReveal>
          <div className="feature-cards">
            {[
              {
                title: 'Privacy-first cycle tracking',
                desc: 'Employees opt in voluntarily. Data stays encrypted and is only used to suggest comfortable task types—never shared or sold.',
                icon: '🔒',
              },
              {
                title: 'Smart HR task adjustment',
                desc: 'HR gets anonymized insights and suggested task mappings (e.g. focus-heavy vs. collaborative) so assignments stay fair and productive.',
                icon: '⚡',
              },
              {
                title: 'Comfort + productivity balance',
                desc: 'Fewer sick days, less stress, and a culture that shows you care—without singling anyone out or mandating disclosure.',
                icon: '✨',
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                className="glass-card feature-card feature-card--scroll"
                style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="feature-card__icon">{f.icon}</span>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="section section--dark" id="science">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Science-backed approach</h2>
            <p className="section__subtitle">
              Hormonal cycles influence energy, focus, and stress resilience. LUNA uses evidence-based patterns to suggest task types—never to judge or restrict.
            </p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            <div className="science-visual">
              <motion.div
                className="science-cycle"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="science-cycle__phase">Follicular — High energy, ideal for complex tasks</div>
                <div className="science-cycle__phase">Ovulation — Peak focus, meetings & decisions</div>
                <div className="science-cycle__phase">Luteal — Variable; flexibility & support help</div>
                <div className="science-cycle__phase">Menstrual — Rest & lighter load when needed</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" id="benefits">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Benefits for everyone</h2>
          </ScrollReveal>
          <div className="benefits-grid">
            <ScrollReveal custom={0}>
              <motion.div
                className="glass-card benefits-card benefits-card--employee"
                whileHover={{ y: -5 }}
              >
                <h3 className="benefits-card__title">For employees</h3>
                <ul className="benefits-card__list">
                  {['Comfort & control', 'Reduced stress', 'Wellness support without stigma'].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <span className="benefits-card__bullet" /> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal custom={1}>
              <motion.div
                className="glass-card benefits-card benefits-card--org"
                whileHover={{ y: -5 }}
              >
                <h3 className="benefits-card__title">For organizations</h3>
                <ul className="benefits-card__list">
                  {['Productivity optimization', 'Inclusive workplace culture', 'Better retention'].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <span className="benefits-card__bullet" /> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" id="cta">
        <div className="container">
          <ScrollReveal>
            <motion.div
              className="cta-banner glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <h2 className="cta-banner__title">Build a more human workplace with LUNA.</h2>
              <p className="cta-banner__sub">Join the waitlist for early access and product updates.</p>
              <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="cta-form__input"
                  aria-label="Email for waitlist"
                />
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
