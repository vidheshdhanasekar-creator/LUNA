import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import GradientBlobs from '../components/GradientBlobs'
import AboutBackground from '../components/AboutBackground'
import ScrollReveal from '../components/ScrollReveal'
import SocialIcons from '../components/SocialIcons'
import './About.css'

const socials = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
]

const values = [
  {
    title: 'Women-centered by design',
    desc: 'Every decision — from the science we use to the language we choose — is made with women\'s actual biology at the absolute centre.',
    details: [
      'Infradian cycles are treated as the primary schedule engine, not an add-on.',
      'Designed around physiological markers of focus, recovery, and stress response.',
      'Language built to eliminate guilt around natural biological dips.'
    ]
  },
  {
    title: 'Clarity over complexity',
    desc: 'Biology is complex. Understanding it shouldn\'t be. LUNA translates science into something you can actually use in your daily life.',
    details: [
      'Visual, easy-to-understand energy waves replace medical jargon.',
      'Daily insights give you 2-3 direct behavioral guide points.',
      'One-click calendar synchronization automates cycle-aware adjustments.'
    ]
  },
  {
    title: 'Awareness, not pressure',
    desc: 'LUNA is not a productivity tool. It\'s a self-awareness system. We don\'t tell you what to do — we help you understand what\'s happening.',
    details: [
      'No toxic notifications telling you to "push harder" on low-capacity days.',
      'Fosters cycle self-compassion by explaining biological fatigue.',
      'Re-defines workplace output as quality-focused, not constant availability.'
    ]
  },
]

const journeySteps = [
  {
    year: '2024',
    title: 'The Observation',
    desc: 'Our founders noticed a gap: standard health apps tracked period dates, but completely ignored how cycle rhythms influence cognitive focus, work, and productivity.'
  },
  {
    year: '2025',
    title: '100+ Women Listened',
    desc: 'We interviewed over 100 working women. A clear pattern emerged: women blamed themselves for energy drops, thinking it was a personal failure rather than biological variation.'
  },
  {
    year: 'Early 2026',
    title: 'The Engine',
    desc: 'Collaborating with endocrinologists and workplace designers, we engineered LUNA\'s cycle-sync scheduling algorithm to translate biological signals into schedule adaptation.'
  },
  {
    year: 'Present',
    title: 'The Movement',
    desc: 'We opened LUNA to early users. Our goal is to shift the professional standard away from daily consistency and toward biological flow.'
  }
]

export default function About() {
  const [state, handleSubmit] = useForm('mdalgqbl')
  const [activeValue, setActiveValue] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="page page--about">
      <GradientBlobs />
      <AboutBackground />

      {/* ── Hero ── */}
      <section className="section hero-sub">
        <div className="container">
          <ScrollReveal>
            <motion.span
              className="about-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our story
            </motion.span>
            <h1 className="page-title">Built for biological flow.<br />By people who listened.</h1>
            <p className="page-lead">
              LUNA started with a simple belief: women deserve systems and schedules designed around how they actually operate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission & Expandable Values ── */}
      <section className="section section--dark" id="mission">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">What we believe.</h2>
            <p className="section__subtitle">
              We stand for self-awareness over constant hustle. Click on each core value below to see how we build it into LUNA.
            </p>
          </ScrollReveal>
          
          <div className="values-section-layout">
            {/* Value cards selectors */}
            <div className="values-grid">
              {values.map((v, i) => (
                <motion.button
                  key={v.title}
                  className={`glass-card value-card-btn ${activeValue === i ? 'active' : ''}`}
                  onClick={() => setActiveValue(i)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="value-card-title">{v.title}</h3>
                  <p className="value-card-short-desc">{v.desc}</p>
                </motion.button>
              ))}
            </div>

            {/* Expended details pane */}
            <div className="value-details-pane">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card value-expanded-card"
                >
                  <span className="value-detail-tag">In Practice</span>
                  <h4 className="value-detail-headline">{values[activeValue].title}</h4>
                  
                  <ul className="value-practice-list">
                    {values[activeValue].details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.25 }}
                      >
                        <span className="list-check-glow">✓</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Journey Timeline (NEW) ── */}
      <section className="section" id="journey">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">The LUNA Journey.</h2>
            <p className="section__subtitle">
              Explore how we grew from an initial biological observation into a cycle-syncing scheduler.
            </p>
          </ScrollReveal>

          <div className="timeline-layout glass-card">
            {/* Timeline nodes track */}
            <div className="timeline-nav-rail">
              <div className="timeline-line-background">
                <div 
                  className="timeline-line-progress" 
                  style={{ width: `${(activeStep / (journeySteps.length - 1)) * 100}%` }}
                />
              </div>
              
              <div className="timeline-nodes-row">
                {journeySteps.map((step, idx) => (
                  <button
                    key={step.year}
                    className={`timeline-node-btn ${activeStep === idx ? 'active' : ''}`}
                    onClick={() => setActiveStep(idx)}
                    style={{ '--node-color': activeStep === idx ? 'var(--rose)' : 'var(--glass-border)' }}
                  >
                    <span className="node-year">{step.year}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Display details of active milestone */}
            <div className="timeline-display-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="timeline-display-inner"
                >
                  <span className="timeline-step-badge">Milestone {activeStep + 1}</span>
                  <h3 className="timeline-step-title">{journeySteps[activeStep].title}</h3>
                  <p className="timeline-step-desc">{journeySteps[activeStep].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision statement ── */}
      <section className="section section--vision" id="vision">
        <div className="container container--narrow">
          <ScrollReveal>
            <blockquote className="vision-quote">
              <p className="vision-quote__text">
                "The goal was never to build another period tracker.
                The goal was to build the tool that finally explains
                something women have experienced for years — but never had the system to support."
              </p>
              <footer className="vision-quote__footer">
                <span className="vision-quote__author">LUNA Team</span>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section section--dark" id="contact">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Get in touch.</h2>
            <p className="section__subtitle">
              Whether you're a woman who wants early access, a researcher, or a potential collaborator — we'd love to hear from you.
            </p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            {state.succeeded ? (
              <motion.div
                className="contact-form glass-card contact-form--success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon-explosion">🎉</div>
                <p className="contact-form__success-msg">
                  Thank you for reaching out! The LUNA team will connect with you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                className="contact-form glass-card"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="contact-form__row">
                  <label className="contact-form__label" htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" className="contact-form__input" placeholder="Your name" required />
                </div>
                <div className="contact-form__row">
                  <label className="contact-form__label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="contact-form__input" placeholder="you@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="contact-form__row">
                  <label className="contact-form__label" htmlFor="role">I am a…</label>
                  <select id="role" name="role" className="contact-form__input contact-form__select">
                    <option value="">Select one</option>
                    <option value="user">Interested in LUNA early access</option>
                    <option value="investor">Investor</option>
                    <option value="researcher">Researcher</option>
                    <option value="collaborator">Potential collaborator</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="contact-form__row">
                  <label className="contact-form__label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="contact-form__textarea" placeholder="Tell us what's on your mind." rows={4} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <motion.button
                  type="submit"
                  className="btn btn--primary btn--lg w-full"
                  disabled={state.submitting}
                  whileHover={!state.submitting ? { scale: 1.02, boxShadow: '0 0 25px var(--glow-purple)' } : undefined}
                  whileTap={!state.submitting ? { scale: 0.98 } : undefined}
                >
                  {state.submitting ? 'Sending…' : 'Send Message'}
                </motion.button>
              </motion.form>
            )}
          </ScrollReveal>
          <ScrollReveal custom={2}>
            <div className="contact-socials">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="contact-social"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcons name={s.icon} />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
