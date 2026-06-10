import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import GradientBlobs from '../components/GradientBlobs'
import ScienceBackground from '../components/ScienceBackground'
import ScrollReveal from '../components/ScrollReveal'
import './Science.css'

const rhythmComparison = {
  circadian: {
    title: 'Circadian Rhythm',
    cycle: '24-Hour Cycle',
    desc: 'The internal biological clock that coordinates sleep, body temperature, and daily alertness. Traditional work schedules are built entirely around this flat repeating cycle.',
    points: [
      { label: 'Sleep & Wake', val: 'Governs melatonin production.' },
      { label: 'Core Temp', val: 'Peaks in late afternoon.' },
      { label: 'Daily Energy', val: 'Requires consistent input daily.' },
      { label: 'Cortisol', val: 'Sharp spike in the morning to wake you.' }
    ]
  },
  infradian: {
    title: 'Infradian Rhythm',
    cycle: '28–35 Day Cycle',
    desc: 'The monthly biological cycle that regulates metabolism, brain chemistry, stress response, and focus capability in women. Untapped by mainstream tools.',
    points: [
      { label: 'Hormone Waves', val: 'Estrogen and progesterone shift continuously.' },
      { label: 'Brain Chemistry', val: 'Cycles influence verbal recall and detail focus.' },
      { label: 'Metabolic Shift', val: 'Resting caloric expenditure varies up to 250 kcal/day.' },
      { label: 'Stress Resilience', val: 'Varies predictably based on cycle phase.' }
    ]
  }
}

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

const approachSteps = [
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

// Calculator for hormone values based on cycle day (1 to 28)
function getHormonesForDay(day) {
  let estrogen = 10
  let progesterone = 5
  let testosterone = 5
  let phaseName = 'Menstrual Phase'
  let phaseColor = '#5a4191'
  let focus = 'Rest, high-level reflection, retrospectives, and structural planning.'
  let details = 'Estrogen and progesterone are at baseline. The communication between the brain\'s left and right hemispheres peaks, creating a unique window for intuitive synthesis and strategic evaluation.'

  if (day >= 6 && day <= 11) {
    phaseName = 'Follicular Phase'
    phaseColor = '#8b7aa8'
    // Estrogen climbs: 15 to 70
    estrogen = Math.round(15 + ((day - 6) / 5) * 55)
    progesterone = 8
    // Testosterone climbs: 5 to 30
    testosterone = Math.round(5 + ((day - 6) / 5) * 25)
    focus = 'Ideation, strategic roadmap creation, starting new projects, and learning new tools.'
    details = 'Estrogen rises, triggering dopamine release. This stimulates curiosity, physical resilience, and cognitive flexibility, making it the best time to take on bold new ideas.'
  } else if (day >= 12 && day <= 16) {
    phaseName = 'Ovulatory Phase'
    phaseColor = '#c8a2c8'
    // Estrogen peaks and dips: peak at 14
    if (day <= 14) {
      estrogen = Math.round(70 + ((day - 12) / 2) * 25)
      testosterone = Math.round(30 + ((day - 12) / 2) * 55)
    } else {
      estrogen = Math.round(95 - ((day - 14) / 2) * 35)
      testosterone = Math.round(85 - ((day - 14) / 2) * 55)
    }
    progesterone = Math.round(8 + ((day - 12) / 4) * 12)
    focus = 'Pitching, negotiation, collaborative workshops, client-facing meetings, and public speaking.'
    details = 'Estrogen peaks, stimulating verbal memory and confidence. Testosterone is at its highest, providing drive and social presence. You are biologically primed for high-stakes communication.'
  } else if (day >= 17 && day <= 23) {
    phaseName = 'Early Luteal Phase'
    phaseColor = '#7d6ca9'
    estrogen = Math.round(50 + ((day - 17) / 6) * 15) // small second peak
    progesterone = Math.round(20 + ((day - 17) / 6) * 65) // major surge
    testosterone = 10
    focus = 'Detailed data analysis, editing and revising content, completing open projects, and solitary focus.'
    details = 'Progesterone peaks, calming the nervous system and amygdala. The brain shifts focus inward, optimizing attention to detail and precision while reducing the desire for social activity.'
  } else if (day >= 24 && day <= 28) {
    phaseName = 'Late Luteal Phase'
    phaseColor = '#6d52a8'
    estrogen = Math.round(65 - ((day - 24) / 4) * 55)
    progesterone = Math.round(85 - ((day - 24) / 4) * 75)
    testosterone = Math.round(10 - ((day - 24) / 4) * 5)
    focus = 'Wrap-up, organization, inbox sorting, documentation, and decluttering your workspace.'
    details = 'Hormone levels drop sharply. The prefrontal cortex requests more physical energy to manage the shift, making deep technical reviews and organizational tasks optimal before the rest window.'
  }

  return { estrogen, progesterone, testosterone, phaseName, phaseColor, focus, details }
}

export default function Science() {
  const [activeTab, setActiveTab] = useState('circadian') // 'circadian' | 'infradian'
  const [cycleDay, setCycleDay] = useState(14) // default day 14 (Ovulation)

  const activeRhythm = rhythmComparison[activeTab]
  const currentHormones = getHormonesForDay(cycleDay)

  return (
    <div className="page page--science">
      <GradientBlobs />
      <ScienceBackground />

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
            <h1 className="page-title">The science behind how<br />women actually operate.</h1>
            <p className="page-lead">
              LUNA is built around the understanding that biological rhythms influence far more than periods alone.
              Explore the physiological changes that cycle with your infradian clock.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Circadian vs Cyclical (INTERACTIVE TOGGLE) ── */}
      <section className="section section--dark" id="circadian">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Two Rhythms. One Body.</h2>
            <p className="section__subtitle">
              Most productivity systems are designed for the 24-hour circadian rhythm. But women also run on a 28-day infradian rhythm. Compare the two systems.
            </p>
          </ScrollReveal>

          {/* Interactive Toggle */}
          <div className="rhythm-selector-tabs">
            <button 
              className={`rhythm-selector-btn ${activeTab === 'circadian' ? 'active' : ''}`}
              onClick={() => setActiveTab('circadian')}
            >
              Circadian Rhythm (24h)
            </button>
            <button 
              className={`rhythm-selector-btn ${activeTab === 'infradian' ? 'active' : ''}`}
              onClick={() => setActiveTab('infradian')}
            >
              Infradian Rhythm (28d)
            </button>
          </div>

          {/* Dynamic Rhythm Card Display */}
          <div className="rhythm-display-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`glass-card rhythm-detail-card ${activeTab === 'infradian' ? 'rhythm-detail-card--accent' : ''}`}
              >
                <div className="rhythm-detail-header">
                  <span className="rhythm-detail-icon">{activeTab === 'circadian' ? '☀' : '◑'}</span>
                  <div>
                    <h3 className="rhythm-detail-title">{activeRhythm.title}</h3>
                    <span className="rhythm-detail-subtitle">{activeRhythm.cycle}</span>
                  </div>
                </div>
                
                <p className="rhythm-detail-desc">{activeRhythm.desc}</p>
                
                <div className="rhythm-detail-points-grid">
                  {activeRhythm.points.map((pt) => (
                    <div key={pt.label} className="rhythm-detail-point">
                      <span className="point-label">{pt.label}</span>
                      <p className="point-desc">{pt.val}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Section 2: Interactive Hormonal Cycle Simulator (NEW) ── */}
      <section className="section" id="hormone-simulator">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Hormones Beyond Periods.</h2>
            <p className="section__subtitle">
              Drag the cycle slider to track hormone fluctuations across the 28-day monthly wave and discover their direct cognitive and behavioral impacts.
            </p>
          </ScrollReveal>

          <div className="simulator-layout glass-card">
            {/* Left: Drag Slider & Meter */}
            <div className="simulator-controls">
              <div className="slider-header-info">
                <span className="day-count-badge" style={{ color: currentHormones.phaseColor }}>Day {cycleDay}</span>
                <span className="phase-name-badge" style={{ background: currentHormones.phaseColor + '18', color: currentHormones.phaseColor }}>
                  {currentHormones.phaseName}
                </span>
              </div>

              {/* Slider Input */}
              <div className="slider-container">
                <input 
                  type="range" 
                  min="1" 
                  max="28" 
                  value={cycleDay} 
                  onChange={(e) => setCycleDay(Number(e.target.value))}
                  className="cycle-day-slider"
                  style={{ '--slider-color': currentHormones.phaseColor }}
                />
                <div className="slider-ticks">
                  <span>Day 1</span>
                  <span>Day 7</span>
                  <span>Day 14</span>
                  <span>Day 21</span>
                  <span>Day 28</span>
                </div>
              </div>

              {/* Glowing Hormonal Progress Bars */}
              <div className="simulator-metrics">
                <h4 className="metrics-title">Current Hormonal Profile</h4>
                
                {/* Estrogen */}
                <div className="simulator-metric-row">
                  <div className="metric-labels">
                    <span>Estrogen (Focus & Dopamine)</span>
                    <span className="metric-val">{currentHormones.estrogen}%</span>
                  </div>
                  <div className="metric-bar-bg">
                    <motion.div 
                      className="metric-bar-fill" 
                      animate={{ width: `${currentHormones.estrogen}%` }}
                      style={{ background: 'var(--rose)', boxShadow: '0 0 10px rgba(232, 160, 191, 0.4)' }}
                    />
                  </div>
                </div>

                {/* Progesterone */}
                <div className="simulator-metric-row">
                  <div className="metric-labels">
                    <span>Progesterone (Calming & Detail)</span>
                    <span className="metric-val">{currentHormones.progesterone}%</span>
                  </div>
                  <div className="metric-bar-bg">
                    <motion.div 
                      className="metric-bar-fill" 
                      animate={{ width: `${currentHormones.progesterone}%` }}
                      style={{ background: 'var(--lavender)', boxShadow: '0 0 10px rgba(200, 162, 200, 0.4)' }}
                    />
                  </div>
                </div>

                {/* Testosterone */}
                <div className="simulator-metric-row">
                  <div className="metric-labels">
                    <span>Testosterone (Drive & Confidence)</span>
                    <span className="metric-val">{currentHormones.testosterone}%</span>
                  </div>
                  <div className="metric-bar-bg">
                    <motion.div 
                      className="metric-bar-fill" 
                      animate={{ width: `${currentHormones.testosterone}%` }}
                      style={{ background: 'var(--accent-light)', boxShadow: '0 0 10px rgba(109, 82, 168, 0.4)' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Cognitive/Workplace Focus Display */}
            <div className="simulator-insights">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cycleDay}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="insights-inner"
                >
                  <div className="insight-section">
                    <span className="insight-label-small">🚀 Optimal Productivity Focus</span>
                    <h4 className="insight-title">{currentHormones.focus}</h4>
                  </div>

                  <div className="insight-section border-top">
                    <span className="insight-label-small">🧬 What's Happening Biologically</span>
                    <p className="insight-body-text">{currentHormones.details}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
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
            {approachSteps.map((item, i) => (
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
