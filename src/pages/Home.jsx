import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MoonBackground from '../components/MoonBackground'
import FloatingParticles from '../components/FloatingParticles'
import GradientBlobs from '../components/GradientBlobs'
import StarTwinkle from '../components/StarTwinkle'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

const visionItems = [
  { label: 'Education', desc: 'Curricula built around how women actually learn and process.' },
  { label: 'Workplaces', desc: 'Schedules and systems that respect biological variation.' },
  { label: 'Productivity', desc: 'Output measured by quality, not constant availability.' },
  { label: 'Mental Health', desc: 'Support that accounts for hormonal context, not just symptoms.' },
  { label: 'Technology', desc: 'Products designed around women from the ground up.' },
]

const mockupTabs = [
  {
    id: 'tracker',
    title: 'Energy Tracker',
    label: '◎ Cycle Energy Sync',
    desc: 'Understand why your energy rises and falls throughout the month — and stop blaming yourself for it.',
    screenTitle: 'Energy Index',
    screenContent: (
      <div className="mockup-screen-sync">
        <div className="mockup-screen-phase-tag">
          <span className="phase-dot-pulse"></span>
          <span>Follicular Phase</span>
        </div>
        <div className="mockup-chart-container">
          <svg viewBox="0 0 200 80" className="mini-chart">
            <defs>
              <linearGradient id="gradient-wave" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--rose)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--rose)" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0 50 Q 50 15 100 65 T 200 25" fill="none" stroke="var(--rose)" strokeWidth="3" />
            <path d="M 0 50 Q 50 15 100 65 T 200 25 L 200 80 L 0 80 Z" fill="url(#gradient-wave)" />
            <motion.circle 
              cx="100" 
              cy="65" 
              r="6" 
              fill="#ffffff" 
              stroke="var(--rose)" 
              strokeWidth="2.5"
              animate={{ scale: [1, 1.25, 1] }} 
              transition={{ repeat: Infinity, duration: 1.8 }} 
            />
          </svg>
        </div>
        <div className="mockup-stat-row">
          <div className="mockup-stat-pill">
            <span className="pill-label">Estrogen</span>
            <span className="pill-val rise">Rising</span>
          </div>
          <div className="mockup-stat-pill">
            <span className="pill-label">Capacity</span>
            <span className="pill-val">78%</span>
          </div>
        </div>
        <div className="mockup-insight-box">
          <p className="insight-txt">Your physical readiness is high. Ideal day for strategic launches, collaborative work, and starting new projects.</p>
        </div>
      </div>
    )
  },
  {
    id: 'planner',
    title: 'Work Planner',
    label: '◑ Cycle-Aligned Tasks',
    desc: 'Align your task list with your cycle. Focus on high-impact strategic tasks when sharp, and administrative reviews when slow.',
    screenTitle: 'Focus Tasks',
    screenContent: (
      <div className="mockup-screen-planner">
        <div className="planner-header">
          <span className="planner-date">Today's Cycle Planner</span>
          <span className="planner-phase">Luteal Day 21</span>
        </div>
        <div className="planner-tasks">
          <div className="planner-task checked">
            <span className="task-check green">✓</span>
            <span className="task-desc">Refine and edit client proposal</span>
          </div>
          <div className="planner-task checked">
            <span className="task-check green">✓</span>
            <span className="task-desc">Complete codebase architecture audit</span>
          </div>
          <div className="planner-task deferred">
            <span className="task-check wait">⏳</span>
            <span className="task-desc text-muted">Pitch presentation design (Postponed to Follicular)</span>
          </div>
        </div>
        <div className="planner-insight">
          <p>💡 <strong>LUNA Suggestion:</strong> Your attention to detail is currently peaking. Avoid high-stress client meetings; focus on editing and analytical work.</p>
        </div>
      </div>
    )
  },
  {
    id: 'guidance',
    title: 'Adaptive Guidance',
    label: '◐ Stress & Recovery',
    desc: 'Certain phases make stress hit harder. LUNA shows you when your body asks for recovery — and why that matters.',
    screenTitle: 'LUNA Smart Alert',
    screenContent: (
      <div className="mockup-screen-guidance">
        <div className="guidance-warning-card">
          <div className="warning-top">
            <span className="warning-icon-glow">⚠️</span>
            <span className="warning-tag">Progesterone Surge</span>
          </div>
          <p className="warning-message">Your cycle transitions to Menstrual in 48 hours. Stress resilience will drop temporarily.</p>
        </div>
        <div className="guidance-actions">
          <div className="action-item">
            <span className="action-num">01</span>
            <span className="action-txt">De-congest calendar by 30%</span>
          </div>
          <div className="action-item">
            <span className="action-num">02</span>
            <span className="action-txt">Schedule light admin tasks for Friday</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'predictions',
    title: 'Smart Predictions',
    label: '● Predictive Insights',
    desc: 'Anticipate your best days for deep work, social energy, creativity, and rest before they arrive.',
    screenTitle: 'Rhythm Forecast',
    screenContent: (
      <div className="mockup-screen-predictions">
        <div className="predictions-header">
          <span>Weekly Focus Outlook</span>
        </div>
        <div className="forecast-calendar-rows">
          <div className="forecast-row active">
            <div className="row-date">Jun 14</div>
            <div className="row-bar-wrap">
              <div className="row-bar" style={{ width: '92%', background: 'var(--rose)' }} />
            </div>
            <div className="row-label">Social Peak (Ovulation)</div>
          </div>
          <div className="forecast-row">
            <div className="row-date">Jun 19</div>
            <div className="row-bar-wrap">
              <div className="row-bar" style={{ width: '85%', background: 'var(--lavender)' }} />
            </div>
            <div className="row-label">Deep Focus (Luteal)</div>
          </div>
          <div className="forecast-row">
            <div className="row-date">Jun 25</div>
            <div className="row-bar-wrap">
              <div className="row-bar" style={{ width: '30%', background: 'var(--accent-light)' }} />
            </div>
            <div className="row-label">Reset Window (Menstrual)</div>
          </div>
        </div>
      </div>
    )
  }
]

const phases = [
  {
    num: '01',
    phase: 'Follicular Phase',
    days: 'Days 1–13',
    desc: 'Estrogen levels rise. Your body enters an active building state, increasing dopamine and physical resilience.',
    color: '#8b7aa8',
    tag: 'Build',
    focus: 'Strategic planning, initiating projects, learning new skills',
    metrics: [
      { label: 'Energy & Stamina', val: 75, glow: 'rgba(139, 122, 168, 0.4)' },
      { label: 'Focus & Analysis', val: 80, glow: 'rgba(139, 122, 168, 0.4)' },
      { label: 'Social & Communication', val: 60, glow: 'rgba(139, 122, 168, 0.4)' },
      { label: 'Recovery Need', val: 45, glow: 'rgba(139, 122, 168, 0.4)' }
    ]
  },
  {
    num: '02',
    phase: 'Ovulation Phase',
    days: 'Days 14–16',
    desc: 'Estrogen peaks, stimulating serotonin. Confidence, verbal memory, and social energy are at their absolute biological maximum.',
    color: '#c8a2c8',
    tag: 'Connect',
    focus: 'Pitching, negotiation, networking, public speaking, collaborating',
    metrics: [
      { label: 'Energy & Stamina', val: 95, glow: 'rgba(200, 162, 200, 0.5)' },
      { label: 'Focus & Analysis', val: 70, glow: 'rgba(200, 162, 200, 0.5)' },
      { label: 'Social & Communication', val: 98, glow: 'rgba(200, 162, 200, 0.5)' },
      { label: 'Recovery Need', val: 35, glow: 'rgba(200, 162, 200, 0.5)' }
    ]
  },
  {
    num: '03',
    phase: 'Luteal Phase',
    days: 'Days 17–28',
    desc: 'Progesterone rises, calming the nervous system. The brain shifts focus inward, dramatically improving detail orientation.',
    color: '#7d6ca9',
    tag: 'Reflect',
    focus: 'Data analysis, editing, code audits, financial checks, deep solitary focus',
    metrics: [
      { label: 'Energy & Stamina', val: 55, glow: 'rgba(125, 108, 169, 0.4)' },
      { label: 'Focus & Analysis', val: 90, glow: 'rgba(125, 108, 169, 0.4)' },
      { label: 'Social & Communication', val: 40, glow: 'rgba(125, 108, 169, 0.4)' },
      { label: 'Recovery Need', val: 70, glow: 'rgba(125, 108, 169, 0.4)' }
    ]
  },
  {
    num: '04',
    phase: 'Menstrual Phase',
    days: 'Days 1–5',
    desc: 'Hormones drop to baseline. The brain hemispheres communicate more actively, yielding peak intuitive insight.',
    color: '#5a4191',
    tag: 'Rest',
    focus: 'Retrospectives, high-level review, resting, structural evaluation',
    metrics: [
      { label: 'Energy & Stamina', val: 30, glow: 'rgba(90, 65, 145, 0.4)' },
      { label: 'Focus & Analysis', val: 65, glow: 'rgba(90, 65, 145, 0.4)' },
      { label: 'Social & Communication', val: 30, glow: 'rgba(90, 65, 145, 0.4)' },
      { label: 'Recovery Need', val: 95, glow: 'rgba(90, 65, 145, 0.4)' }
    ]
  }
]

export default function Home() {
  const [activeRhythm, setActiveRhythm] = useState('cycle') // 'day' | 'cycle'
  const [activeFeatureTab, setActiveFeatureTab] = useState(0)
  const [activePhase, setActivePhase] = useState(0)

  return (
    <div className="page page--home">
      <MoonBackground />
      <FloatingParticles />
      <GradientBlobs />
      <StarTwinkle />

      {/* ── HERO ── */}
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
              Women's productivity, biological sync
            </motion.span>
            <h1 className="hero__title">
              <motion.span
                className="hero__title-main"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Your body runs on a rhythm.
              </motion.span>
              <motion.span
                className="hero__title-sub"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                Your schedule was never designed for it.
              </motion.span>
            </h1>
            <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              LUNA bridges the gap, helping women align work, focus, and recovery with their natural cycle instead of forcing constant consistency.
            </motion.p>
            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a href="#waitlist">
                <motion.button
                  className="btn btn--primary btn--lg"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px var(--glow-purple)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Waitlist
                </motion.button>
              </a>
              <Link to="/science">
                <motion.button
                  className="btn btn--ghost btn--lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero__wave" aria-hidden>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <motion.path
              d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
              fill="var(--bg-secondary)"
              initial={{ pathLength: 0, opacity: 0.8 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        </div>
      </section>

      {/* ── INTERACTIVE RHYTHM VISUALIZER ── */}
      <section className="section section--dark" id="rhythm-visualizer">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Redefine Your Flow.</h2>
            <p className="section__subtitle">
              We were taught to function identically every day. Compare the exhausting demand of daily consistency against cycle alignment.
            </p>
          </ScrollReveal>

          {/* Toggle buttons */}
          <div className="rhythm-toggle-wrap">
            <button 
              className={`rhythm-toggle-btn ${activeRhythm === 'day' ? 'active' : ''}`}
              onClick={() => setActiveRhythm('day')}
            >
              24-Hour Rigid Day
            </button>
            <button 
              className={`rhythm-toggle-btn ${activeRhythm === 'cycle' ? 'active' : ''}`}
              onClick={() => setActiveRhythm('cycle')}
            >
              28-Day Natural Cycle
            </button>
          </div>

          {/* Interactive Screen Display */}
          <div className="rhythm-chart-box glass-card">
            <AnimatePresence mode="wait">
              {activeRhythm === 'day' ? (
                <motion.div 
                  key="day-rhythm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="rhythm-graph-content"
                >
                  <div className="rhythm-header">
                    <span className="badge-alert">Rigid Daily Consistency</span>
                    <h3 className="rhythm-title">The Flatline Standard</h3>
                  </div>
                  
                  <div className="svg-wrapper-chart">
                    <svg viewBox="0 0 600 160" className="rhythm-svg">
                      <path d="M 0 80 L 600 80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" strokeDasharray="6 4" />
                      <line x1="0" y1="50" x2="600" y2="50" stroke="#ff4757" strokeWidth="3.5" />
                      
                      {/* Fatigue marks */}
                      <circle cx="150" cy="50" r="5" fill="#ff4757" />
                      <circle cx="380" cy="50" r="5" fill="#ff4757" />
                      <circle cx="520" cy="50" r="5" fill="#ff4757" />
                    </svg>
                    
                    <div className="chart-annotation note-red" style={{ top: '15%', left: '15%' }}>
                      Force Action
                    </div>
                    <div className="chart-annotation note-red" style={{ top: '65%', left: '55%' }}>
                      Burnout Risk Zone
                    </div>
                    <div className="chart-annotation note-red" style={{ top: '15%', left: '78%' }}>
                      Crash
                    </div>
                  </div>

                  <p className="rhythm-explanation">
                    <strong>The 24h standard demands flat, predictable energy.</strong> It forces you to push through natural fluctuations, leading to guilt, unexplained fatigue, and constant cycles of burnout.
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  key="cycle-rhythm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="rhythm-graph-content"
                >
                  <div className="rhythm-header">
                    <span className="badge-success">Adaptive Flow Sync</span>
                    <h3 className="rhythm-title">The Biological Wave</h3>
                  </div>

                  <div className="svg-wrapper-chart">
                    <svg viewBox="0 0 600 160" className="rhythm-svg">
                      <path d="M 0 80 L 600 80" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" strokeDasharray="6 4" />
                      
                      <path 
                        d="M 0 110 C 150 10, 250 160, 420 40, 600 120" 
                        fill="none" 
                        stroke="url(#gradient-purple-stroke)" 
                        strokeWidth="4" 
                      />
                      <defs>
                        <linearGradient id="gradient-purple-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--rose)" />
                          <stop offset="50%" stopColor="var(--accent-light)" />
                          <stop offset="100%" stopColor="var(--lavender)" />
                        </linearGradient>
                      </defs>

                      {/* Travel indicator along wave path */}
                      <motion.circle 
                        cx="135" 
                        cy="22" 
                        r="6" 
                        fill="#ffffff" 
                        stroke="var(--rose)" 
                        strokeWidth="3"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </svg>

                    <div className="chart-annotation note-purple" style={{ top: '5%', left: '25%' }}>
                      ⚡ Social & Drive Peak
                    </div>
                    <div className="chart-annotation note-purple" style={{ top: '78%', left: '42%' }}>
                      🔍 Deep Solitary Focus
                    </div>
                    <div className="chart-annotation note-purple" style={{ top: '60%', left: '80%' }}>
                      💤 Mind Reset & Rest
                    </div>
                  </div>

                  <p className="rhythm-explanation">
                    <strong>The 28-day wave aligns work with biology.</strong> LUNA schedules high-energy deliverables during your hormonal peaks and recovery tasks when your biology demands rest. Zero guilt, complete efficiency.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SIMULATOR MOCKUP ── */}
      <section className="section" id="product-mockup">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">LUNA in Action.</h2>
            <p className="section__subtitle">
              Explore how LUNA translates complex hormonal biomarkers into straightforward schedule adaptation.
            </p>
          </ScrollReveal>

          <div className="mockup-section-grid">
            {/* Sidebar selector */}
            <div className="mockup-sidebar">
              {mockupTabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  className={`mockup-tab-selector ${activeFeatureTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveFeatureTab(idx)}
                >
                  <span className="tab-label-title">{tab.label}</span>
                  <p className="tab-label-desc">{tab.title}</p>
                </button>
              ))}
            </div>

            {/* Simulated Phone Mockup */}
            <div className="mockup-phone-bezel-wrapper">
              <div className="phone-reflection"></div>
              <div className="mockup-phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  {/* Status Bar */}
                  <div className="phone-status-bar">
                    <span className="phone-time">9:41</span>
                    <div className="phone-icons">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="app-header-bar">
                    <span className="app-logo-small">LUNA</span>
                    <span className="app-screen-title">{mockupTabs[activeFeatureTab].screenTitle}</span>
                  </div>

                  {/* Screen Content Wrapper */}
                  <div className="app-screen-inner">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeatureTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mockup-screen-container"
                      >
                        {mockupTabs[activeFeatureTab].screenContent}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-Friendly Text detail block */}
            <div className="mockup-tab-detail-box glass-card">
              <span className="detail-tag">Feature Overview</span>
              <h3 className="detail-title">{mockupTabs[activeFeatureTab].title}</h3>
              <p className="detail-desc">{mockupTabs[activeFeatureTab].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CYCLE EXPLORER ── */}
      <section className="section section--science-teaser" id="science-teaser">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">The 28-Day Cycle Rhythm.</h2>
            <p className="section__subtitle">
              Your body shifts through four distinct biological phases. Click on the orbital nodes to explore their unique focus and hormonal signatures.
            </p>
          </ScrollReveal>

          <div className="phases-layout">
            {/* Left: Interactive Orbit Dial */}
            <div className="phases-orbit-container">
              <div className="phases-orbit">
                {/* Visual guidelines */}
                <div className="orbit-ring orbit-ring--1" />
                <div className="orbit-ring orbit-ring--2" />
                <div className="orbit-ring orbit-ring--3" />
                
                <div className="orbit-core">
                  <span className="orbit-core__label">
                    {phases[activePhase].days.split(' ')[1]}
                    <br />
                    <small>Active</small>
                  </span>
                </div>

                {/* Clickable phase nodes */}
                {phases.map((p, idx) => {
                  const angles = [-90, 0, 90, 180] // positions for follicular, ovulation, luteal, menstrual
                  const rad = (angles[idx] * Math.PI) / 180
                  const r = 110
                  const x = 50 + (r / 2.4) * Math.cos(rad)
                  const y = 50 + (r / 2.4) * Math.sin(rad)
                  const isSelected = activePhase === idx
                  
                  return (
                    <button
                      key={p.phase}
                      className={`orbit-node-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => setActivePhase(idx)}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        '--node-color': p.color,
                        boxShadow: isSelected ? `0 0 20px ${p.color}, 0 0 40px ${p.color}` : 'none'
                      }}
                      aria-label={`Select ${p.phase}`}
                    >
                      <span className="node-number">{idx + 1}</span>
                      <span className="node-tooltip">{p.tag}</span>
                    </button>
                  )
                })}
              </div>
              
              {/* Dial navigation helper */}
              <div className="orbit-navigation-bar">
                <button 
                  className="orbit-nav-arrow"
                  onClick={() => setActivePhase((prev) => (prev === 0 ? 3 : prev - 1))}
                >
                  ←
                </button>
                <span className="orbit-nav-status">Phase {activePhase + 1} of 4</span>
                <button 
                  className="orbit-nav-arrow"
                  onClick={() => setActivePhase((prev) => (prev === 3 ? 0 : prev + 1))}
                >
                  →
                </button>
              </div>
            </div>

            {/* Right: Active Phase card panel */}
            <div className="active-phase-detail-pane">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="glass-card active-phase-card"
                  style={{ borderLeft: `4px solid ${phases[activePhase].color}` }}
                >
                  <div className="phase-card-header">
                    <span className="phase-card-num" style={{ color: phases[activePhase].color }}>{phases[activePhase].num}</span>
                    <div>
                      <h3 className="phase-card-title">{phases[activePhase].phase}</h3>
                      <span className="phase-card-days">{phases[activePhase].days}</span>
                    </div>
                    <span 
                      className="phase-card-tag" 
                      style={{ 
                        background: phases[activePhase].color + '18', 
                        color: phases[activePhase].color, 
                        border: `1px solid ${phases[activePhase].color}33` 
                      }}
                    >
                      {phases[activePhase].tag}
                    </span>
                  </div>

                  <p className="phase-card-desc">{phases[activePhase].desc}</p>
                  
                  <div className="phase-focus-box">
                    <span className="focus-title">🚀 Best Productive Focus</span>
                    <p className="focus-text">{phases[activePhase].focus}</p>
                  </div>

                  {/* Biological Metrics slider bars */}
                  <div className="phase-metrics-wrapper">
                    <span className="metrics-section-title">Biological Signature</span>
                    <div className="metrics-list">
                      {phases[activePhase].metrics.map((metric, i) => (
                        <div key={metric.label} className="metric-row">
                          <div className="metric-row-labels">
                            <span className="metric-name">{metric.label}</span>
                            <span className="metric-value">{metric.val}%</span>
                          </div>
                          <div className="metric-bar-bg">
                            <motion.div 
                              className="metric-bar-fill" 
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.val}%` }}
                              transition={{ duration: 0.6, delay: i * 0.05 }}
                              style={{ 
                                background: phases[activePhase].color,
                                boxShadow: `0 0 10px ${metric.glow}`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="science-link-wrap">
            <Link to="/science">
              <motion.button
                className="btn btn--ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore the Science →
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMOTIONAL CONNECTION ── */}
      <section className="section section--emotional" id="emotional">
        <div className="container container--narrow">
          <ScrollReveal>
            <h2 className="emotional__heading">
              You were never inconsistent.
              <br />
              <span className="emotional__heading--accent">You were unsupported.</span>
            </h2>
            <p className="emotional__body">
              Every woman who has ever felt confused by her own body, blamed herself for a bad week,
              or wondered why she couldn't just "be consistent" — this is for you.
              You aren't broken. You were just never given the right map.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BIGGER VISION ── */}
      <section className="section section--dark" id="vision">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">LUNA is not just about cycles.<br />It's about rebuilding systems.</h2>
            <p className="section__subtitle">
              When women understand their rhythms, everything changes — not just their wellness, but how they work, lead, and live.
            </p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            <div className="vision-grid">
              {visionItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="glass-card vision-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <span className="vision-card__label">{item.label}</span>
                  <p className="vision-card__desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WAITLIST CTA ── */}
      <section className="section cta-section" id="waitlist">
        <div className="container">
          <ScrollReveal>
            <motion.div
              className="cta-banner glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <p className="cta-banner__eyebrow">Understanding changes everything.</p>
              <h2 className="cta-banner__title">Join LUNA.</h2>
              <p className="cta-banner__sub">
                Be among the first to experience a platform built entirely around how your body actually operates.
              </p>
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
