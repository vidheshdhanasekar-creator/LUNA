import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GradientBlobs from '../components/GradientBlobs'
import ScrollReveal from '../components/ScrollReveal'
import './Science.css'

const hormoneTopics = [
  {
    hormone: 'Estrogen',
    effects: ['Mood elevation', 'Sharper focus', 'Higher social energy', 'Increased creativity'],
    phase: 'Peaks at ovulation',
  },
  {
    hormone: 'Progesterone',
    effects: ['Calming effect', 'Introspective thinking', 'Detail orientation', 'Heightened sensitivity'],
    phase: 'Peaks in luteal phase',
  },
  {
    hormone: 'Testosterone',
    effects: ['Drive and ambition', 'Competitive energy', 'Physical strength', 'Risk tolerance'],
    phase: 'Peaks mid-cycle',
  },
  {
    hormone: 'Cortisol',
    effects: ['Stress response', 'Energy regulation', 'Sleep disruption', 'Emotional reactivity'],
    phase: 'Varies by phase',
  },
]

const systemGaps = [
  {
    title: 'Most apps stop at tracking.',
    desc: 'Logging your period date is not the same as understanding your biology. Data without interpretation is just noise.',
  },
  {
    title: 'Awareness without context is incomplete.',
    desc: 'Knowing you\'re in your luteal phase means nothing if you don\'t understand what that actually does to your body and mind.',
  },
  {
    title: 'Women lack frameworks to understand their experience.',
    desc: 'No one teaches this. Not in school, not in healthcare, not in wellness culture. LUNA fills that gap.',
  },
]

const lunaApproach = [
  {
    step: '01',
    title: 'Pattern Recognition',
    desc: 'LUNA identifies recurring patterns in your energy, mood, focus, and stress across your cycle — not just your period.',
  },
  {
    step: '02',
    title: 'Behavioral Understanding',
    desc: 'We connect biological shifts to real-life behaviors so you can see why certain weeks feel harder or easier.',
  },
  {
    step: '03',
    title: 'Lifestyle Awareness',
    desc: 'Sleep, nutrition, exercise, and social energy all interact with your cycle. LUNA helps you see the full picture.',
  },
  {
    step: '04',
    title: 'Self-Awareness System',
    desc: 'Over time, LUNA builds a personalised map of your patterns — so you can plan, prepare, and stop being surprised by yourself.',
  },
]

export default function Science() {
  return (
    <div className="page page--science">
      <GradientBlobs />

      {/* ── Hero ── */}
      <section className="section hero-sub">
        <div className="container">
          <ScrollReveal>
            <motion.span
              className="science-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Research & Biology
            </motion.span>
            <h1 className="page-title">The science behind how<br />women experience life.</h1>
            <p className="page-lead">
              LUNA is built around the understanding that biological patterns influence far more than periods alone.
              This is the foundation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Circadian vs Cyclical ── */}
      <section className="section section--dark" id="circadian">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Two systems. One body.</h2>
            <p className="section__subtitle">
              Most health systems are built around the 24-hour circadian rhythm. But women also operate on a
              28–35 day infradian rhythm — and almost no one talks about it.
            </p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            <div className="rhythm-compare">
              <motion.div
                className="glass-card rhythm-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="rhythm-card__icon">☀</div>
                <h3 className="rhythm-card__title">Circadian Rhythm</h3>
                <p className="rhythm-card__subtitle">24-hour cycle</p>
                <p className="rhythm-card__desc">
                  The system most productivity advice is built around. Sleep, wake, repeat.
                  Consistent day to day. Designed for everyone — but optimised for no one in particular.
                </p>
                <ul className="rhythm-card__list">
                  <li>Sleep & wake cycles</li>
                  <li>Daily energy fluctuations</li>
                  <li>Cortisol morning peaks</li>
                  <li>Temperature regulation</li>
                </ul>
              </motion.div>
              <motion.div
                className="glass-card rhythm-card rhythm-card--accent"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ y: -4 }}
              >
                <div className="rhythm-card__icon">◑</div>
                <h3 className="rhythm-card__title">Infradian Rhythm</h3>
                <p className="rhythm-card__subtitle">28–35 day cycle</p>
                <p className="rhythm-card__desc">
                  The monthly biological cycle that governs energy, mood, focus, metabolism, immunity,
                  and stress response. Largely ignored by mainstream health and productivity systems.
                </p>
                <ul className="rhythm-card__list">
                  <li>Hormonal fluctuations</li>
                  <li>Emotional processing shifts</li>
                  <li>Metabolic rate changes</li>
                  <li>Immune system variation</li>
                </ul>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Hormones Beyond Periods ── */}
      <section className="section" id="hormones">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Hormones affect far more<br />than your period.</h2>
            <p className="section__subtitle">
              The four key hormones in a woman's cycle influence nearly every system in the body.
              Here's what they actually do.
            </p>
          </ScrollReveal>
          <div className="hormone-grid">
            {hormoneTopics.map((h, i) => (
              <ScrollReveal key={h.hormone} custom={i}>
                <motion.div
                  className="glass-card hormone-card"
                  whileHover={{ y: -5, borderColor: 'rgba(200, 162, 200, 0.3)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="hormone-card__header">
                    <h3 className="hormone-card__name">{h.hormone}</h3>
                    <span className="hormone-card__phase">{h.phase}</span>
                  </div>
                  <ul className="hormone-card__effects">
                    {h.effects.map((e) => (
                      <li key={e}>
                        <span className="hormone-card__dot" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Current Systems Fall Short ── */}
      <section className="section section--dark" id="gaps">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Why current systems fall short.</h2>
            <p className="section__subtitle">
              The problem isn't that women are hard to understand. The problem is that no one built the right tools.
            </p>
          </ScrollReveal>
          <div className="gaps-list">
            {systemGaps.map((gap, i) => (
              <ScrollReveal key={gap.title} custom={i}>
                <motion.div
                  className="glass-card gap-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ x: 6 }}
                >
                  <h3 className="gap-card__title">{gap.title}</h3>
                  <p className="gap-card__desc">{gap.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: The LUNA Approach ── */}
      <section className="section" id="approach">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">The LUNA approach.</h2>
            <p className="section__subtitle">
              Not a tracker. Not a dashboard. A self-awareness system built around how women actually experience their biology.
            </p>
          </ScrollReveal>
          <div className="approach-steps">
            {lunaApproach.map((item, i) => (
              <ScrollReveal key={item.step} custom={i}>
                <motion.div
                  className="glass-card approach-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="approach-card__step">{item.step}</span>
                  <h3 className="approach-card__title">{item.title}</h3>
                  <p className="approach-card__desc">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="section section--dark" id="disclaimer">
        <div className="container">
          <ScrollReveal>
            <motion.div
              className="glass-card disclaimer-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="disclaimer-card__icon">ℹ</span>
              <div>
                <h3 className="disclaimer-card__title">Important note</h3>
                <p className="disclaimer-card__text">
                  LUNA is a self-awareness and educational platform. It does not provide medical diagnoses,
                  treatment recommendations, or clinical advice. If you have concerns about your health,
                  please consult a qualified healthcare professional. LUNA is designed to complement —
                  not replace — professional medical care.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section" id="waitlist">
        <div className="container">
          <ScrollReveal>
            <motion.div className="cta-banner glass-card" whileHover={{ scale: 1.01 }}>
              <p className="cta-banner__eyebrow">Understanding changes everything.</p>
              <h2 className="cta-banner__title">Join LUNA.</h2>
              <p className="cta-banner__sub">Be among the first to experience a platform built entirely around how you actually work.</p>
              <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="cta-form__input"
                  aria-label="Email for waitlist"
                />
                <motion.button
                  type="submit"
                  className="btn btn--primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Join Waitlist
                </motion.button>
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
