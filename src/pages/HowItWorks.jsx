import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GradientBlobs from '../components/GradientBlobs'
import ScrollReveal from '../components/ScrollReveal'
import './HowItWorks.css'

const steps = [
  { num: 1, title: 'Connect HR tools / plugin', desc: 'Integrate LUNA with your existing HR or project management stack in minutes.' },
  { num: 2, title: 'Employees opt-in privately', desc: 'Team members choose to connect their cycle data—encrypted and never shared.' },
  { num: 3, title: 'Smart task suggestions', desc: 'HR sees anonymized insights and suggested task mappings for comfort and productivity.' },
]

const flowSteps = [
  { id: 'employee', label: 'Employee', sub: 'Opt-in privacy' },
  { id: 'data', label: 'Secure Data', sub: 'Encrypted' },
  { id: 'ai', label: 'AI Insights', sub: 'Anonymized' },
  { id: 'dashboard', label: 'HR Dashboard', sub: 'Task suggestions' },
]

const useCases = [
  { title: 'Remote teams', desc: 'Support distributed teams with the same cycle-aware flexibility.' },
  { title: 'Corporate offices', desc: 'Integrate with existing wellness and HR initiatives.' },
  { title: 'HR wellness initiatives', desc: 'Show measurable impact on wellbeing and retention.' },
]

const faqs = [
  { q: 'Is data private?', a: 'Yes. All cycle data is encrypted, voluntary, and never sold or shared. HR only sees anonymized, aggregate insights and task suggestions.' },
  { q: 'Is this mandatory?', a: 'No. Employees choose whether to connect their data. No one is required to participate.' },
  { q: 'How accurate is it?', a: 'LUNA uses evidence-based patterns and optional user input. Accuracy improves with consistent use; we never guarantee medical or legal outcomes.' },
]

export default function HowItWorks() {
  return (
    <div className="page page--how">
      <GradientBlobs />

      <section className="section hero-sub">
        <div className="container">
          <ScrollReveal>
            <h1 className="page-title">How it works</h1>
            <p className="page-lead">Get from signup to smarter task management in three steps.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Integration steps */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Integration steps</h2>
          </ScrollReveal>
          <div className="steps-list">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} custom={i}>
                <motion.div
                  className="glass-card step-card"
                  whileHover={{ x: 8, borderColor: 'rgba(125, 108, 169, 0.3)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="step-card__num">{step.num}</span>
                  <div>
                    <h3 className="step-card__title">{step.title}</h3>
                    <p className="step-card__desc">{step.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual flow */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Plugin workflow</h2>
            <p className="section__subtitle">From employee consent to HR insights—all privacy-first.</p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            <div className="flow-diagram">
              {flowSteps.map((s, i) => (
                <motion.div
                  key={s.id}
                  className="flow-node glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(125, 108, 169, 0.2)' }}
                >
                  <span className="flow-node__label">{s.label}</span>
                  <span className="flow-node__sub">{s.sub}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="flow-arrows"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="flow-arrow" /> <span className="flow-arrow" /> <span className="flow-arrow" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Use cases</h2>
          </ScrollReveal>
          <div className="use-cases-grid">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.title} custom={i}>
                <motion.div
                  className="glass-card use-case-card"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="use-case-card__title">{uc.title}</h3>
                  <p className="use-case-card__desc">{uc.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">FAQs</h2>
          </ScrollReveal>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} custom={i}>
                <motion.div
                  className="glass-card faq-item"
                  whileHover={{ borderColor: 'rgba(125, 108, 169, 0.25)' }}
                >
                  <h3 className="faq-item__q">{faq.q}</h3>
                  <p className="faq-item__a">{faq.a}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="section cta-section" id="waitlist">
        <div className="container">
          <ScrollReveal>
            <motion.div className="cta-banner glass-card" whileHover={{ scale: 1.01 }}>
              <h2 className="cta-banner__title">Ready to try LUNA?</h2>
              <p className="cta-banner__sub">Join the waitlist for early access.</p>
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
