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

export default function About() {
  const [state, handleSubmit] = useForm('mdalgqbl')

  return (
    <div className="page page--about">
      <GradientBlobs />

      <section className="section hero-sub">
        <div className="container">
          <ScrollReveal>
            <h1 className="page-title">About LUNA</h1>
            <p className="page-lead">Building empathetic workplaces through technology.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founders */}
      {/* <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Our team</h2>
            <p className="section__subtitle">Dedicated to workplace inclusivity and women&apos;s wellness.</p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            <div className="founders-placeholder glass-card">
              <div className="founders-placeholder__photos">
                <motion.div
                  className="founder-photo"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span>Photo</span>
                </motion.div>
                <motion.div
                  className="founder-photo"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span>Photo</span>
                </motion.div>
              </div>
              <p className="founders-placeholder__vision">
                &ldquo;Building empathetic workplaces through technology.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* Mission */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Mission & story</h2>
          </ScrollReveal>
          <div className="mission-grid">
            {[
              {
                title: 'Workplace inclusivity',
                desc: 'We believe every employee deserves to work in an environment that adapts to their wellbeing—without stigma or mandatory disclosure.',
              },
              {
                title: 'Women wellness',
                desc: 'Cycle awareness is one part of a larger commitment to supporting women at work with dignity and choice.',
              },
              {
                title: 'Ethical AI',
                desc: 'We use data only with consent, for the sole purpose of comfort and productivity—never for surveillance or discrimination.',
              },
            ].map((m, i) => (
              <ScrollReveal key={m.title} custom={i}>
                <motion.div
                  className="glass-card mission-card"
                  whileHover={{ y: -5, borderColor: 'rgba(125, 108, 169, 0.3)' }}
                >
                  <h3 className="mission-card__title">{m.title}</h3>
                  <p className="mission-card__desc">{m.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section--dark" id="contact">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Get in touch</h2>
            <p className="section__subtitle">We&apos;d love to hear from you—whether for a demo or a conversation.</p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            {state.succeeded ? (
              <motion.div
                className="contact-form glass-card contact-form--success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="contact-form__success-msg">Thanks for getting in touch! We&apos;ll reply soon.</p>
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
                  <input id="email" name="email" type="email" className="contact-form__input" placeholder="you@company.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="contact-form__row">
                  <label className="contact-form__label" htmlFor="org">Organization</label>
                  <input id="org" name="organization" type="text" className="contact-form__input" placeholder="Company name" />
                </div>
                <div className="contact-form__row">
                  <label className="contact-form__label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="contact-form__textarea" placeholder="How can we help?" rows={4} />
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
