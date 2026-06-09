import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import GradientBlobs from '../components/GradientBlobs'
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
    desc: 'Every decision — from the science we use to the language we choose — is made with women\'s actual experience at the centre.',
  },
  {
    title: 'Clarity over complexity',
    desc: 'Biology is complex. Understanding it shouldn\'t be. LUNA translates science into something you can actually use in your daily life.',
  },
  {
    title: 'Awareness, not pressure',
    desc: 'LUNA is not a productivity tool. It\'s a self-awareness system. We don\'t tell you what to do — we help you understand what\'s happening.',
  },
]

export default function About() {
  const [state, handleSubmit] = useForm('mdalgqbl')

  return (
    <div className="page page--about">
      <GradientBlobs />

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
            <h1 className="page-title">Built for women.<br />By people who listened.</h1>
            <p className="page-lead">
              LUNA started with a simple observation: women were constantly being told to manage their symptoms,
              but no one was helping them understand their patterns.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section section--dark" id="mission">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">What we believe.</h2>
            <p className="section__subtitle">
              LUNA is more than a platform. It's a perspective — that women deserve tools built around
              how they actually work, not how the world expects them to.
            </p>
          </ScrollReveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} custom={i}>
                <motion.div
                  className="glass-card value-card"
                  whileHover={{ y: -5, borderColor: 'rgba(200, 162, 200, 0.25)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
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
                The goal was to build the thing that finally explains
                something women have experienced for years — but never had words for."
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
              Whether you're a woman who wants early access, a researcher, an investor, or a potential collaborator —
              we'd love to hear from you.
            </p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            {state.succeeded ? (
              <motion.div
                className="contact-form glass-card contact-form--success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="contact-form__success-msg">
                  Thank you for reaching out. We'll be in touch soon.
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
                    <option value="user">Woman interested in LUNA</option>
                    <option value="investor">Investor</option>
                    <option value="researcher">Researcher</option>
                    <option value="collaborator">Potential collaborator</option>
                    <option value="press">Press / Media</option>
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
                  className="btn btn--primary btn--lg"
                  disabled={state.submitting}
                  whileHover={!state.submitting ? { scale: 1.02 } : undefined}
                  whileTap={!state.submitting ? { scale: 0.98 } : undefined}
                >
                  {state.submitting ? 'Sending…' : 'Send message'}
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
