import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import MoonBackground from '../components/MoonBackground'
import FloatingParticles from '../components/FloatingParticles'
import GradientBlobs from '../components/GradientBlobs'
import StarTwinkle from '../components/StarTwinkle'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

const features = [
  {
    icon: '◎',
    title: 'Energy Patterns',
    desc: 'Understand why your energy rises and falls throughout the month — and stop blaming yourself for it.',
  },
  {
    icon: '◑',
    title: 'Emotional Insights',
    desc: 'Your emotions follow a rhythm. LUNA helps you see the pattern so you can work with it, not against it.',
  },
  {
    icon: '◐',
    title: 'Stress Understanding',
    desc: 'Certain phases make stress hit harder. Knowing when helps you prepare, protect, and recover.',
  },
  {
    icon: '○',
    title: 'Recovery Awareness',
    desc: 'Rest is not weakness. LUNA shows you when your body is asking for it — and why that matters.',
  },
  {
    icon: '●',
    title: 'Smart Predictions',
    desc: 'Anticipate your best days for deep work, social energy, creativity, and rest before they arrive.',
  },
  {
    icon: '◉',
    title: 'Adaptive Guidance',
    desc: 'Gentle, personalised suggestions that shift with your cycle — not a one-size-fits-all plan.',
  },
]

const visionItems = [
  { label: 'Education', desc: 'Curricula built around how women actually learn and process.' },
  { label: 'Workplaces', desc: 'Schedules and systems that respect biological variation.' },
  { label: 'Productivity', desc: 'Output measured by quality, not constant availability.' },
  { label: 'Mental Health', desc: 'Support that accounts for hormonal context, not just symptoms.' },
  { label: 'Technology', desc: 'Products designed around women from the ground up.' },
]

export default function Home() {
  const insightRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: insightRef,
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
              Women's health, reimagined
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
                Your life was never designed for it.
              </motion.span>
            </h1>
            <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              LUNA helps women understand, predict, and work with their biological patterns
              instead of constantly fighting against them.
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
              fill="var(--bg-primary)"
              initial={{ pathLength: 0, opacity: 0.8 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="section section--dark" id="problem">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Women were taught to manage symptoms.<br />Not understand patterns.</h2>
            <p className="section__subtitle">
              For generations, women have been told to push through, stay consistent, and perform the same every single day.
              No one explained that their biology was never built that way.
            </p>
          </ScrollReveal>
          <ScrollReveal custom={1}>
            <div className="problem-grid">
              {[
                {
                  quote: '"I feel completely different every week and I don\'t know why."',
                  context: 'Energy & mood fluctuation',
                },
                {
                  quote: '"Some days I\'m unstoppable. Other days I can barely function."',
                  context: 'Inconsistent performance',
                },
                {
                  quote: '"I thought something was wrong with me. Turns out, I just didn\'t understand my cycle."',
                  context: 'Lack of self-awareness',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card problem-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <p className="problem-card__quote">{item.quote}</p>
                  <span className="problem-card__context">{item.context}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CORE INSIGHT ── */}
      <section className="section section--insight" id="insight">
        <div className="container container--narrow">
          <ScrollReveal>
            <motion.p
              className="insight__eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The turning point
            </motion.p>
            <h2 className="insight__heading">
              What stood out wasn't just that women feel low.
              <br />
              <span className="insight__heading--accent">It's that they don't understand why.</span>
            </h2>
            <p className="insight__body">
              The inconsistency isn't a character flaw. The emotional shifts aren't overreactions.
              The energy crashes aren't laziness. They are patterns — biological, predictable, and completely
              understandable once you have the right framework.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT LUNA DOES ── */}
      <section ref={insightRef} className="section section--dark" id="what-luna-does">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">LUNA translates patterns into understanding.</h2>
            <p className="section__subtitle">
              Not just tracking. Not just data. A system that helps you actually understand what your body is doing — and why.
            </p>
          </ScrollReveal>
          <div className="feature-cards">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="glass-card feature-card"
                style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <span className="feature-card__icon">{f.icon}</span>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCIENCE TEASER ── */}
      <section className="section section--science-teaser" id="science-teaser">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">The science isn't the future.<br />It has always been there.</h2>
            <p className="section__subtitle">
              Hormonal cycles influence energy, focus, mood, stress resilience, creativity, and recovery.
              This isn't new research — it's just never been made accessible.
            </p>
          </ScrollReveal>

          {/* Orbit ring visual + phase rows */}
          <div className="phases-layout">
            {/* Left: decorative orbit */}
            <div className="phases-orbit" aria-hidden>
              <div className="orbit-ring orbit-ring--1" />
              <div className="orbit-ring orbit-ring--2" />
              <div className="orbit-ring orbit-ring--3" />
              <div className="orbit-core">
                <span className="orbit-core__label">28<br /><small>days</small></span>
              </div>
              {[
                { angle: -90, color: '#8b7aa8', label: '①' },
                { angle: 0,   color: '#c8a2c8', label: '②' },
                { angle: 90,  color: '#7d6ca9', label: '③' },
                { angle: 180, color: '#5a4191', label: '④' },
              ].map((dot, i) => {
                const rad = (dot.angle * Math.PI) / 180
                const r = 110
                const x = 50 + (r / 2.4) * Math.cos(rad)
                const y = 50 + (r / 2.4) * Math.sin(rad)
                return (
                  <motion.div
                    key={i}
                    className="orbit-dot"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      background: dot.color,
                      boxShadow: `0 0 16px ${dot.color}`,
                    }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity }}
                  />
                )
              })}
            </div>

            {/* Right: phase rows */}
            <div className="phases-rows">
              {[
                {
                  num: '01',
                  phase: 'Follicular',
                  days: 'Days 1–13',
                  desc: 'Rising estrogen. Energy builds. Ideal for new projects, learning, and bold decisions.',
                  color: '#8b7aa8',
                  tag: 'Build',
                },
                {
                  num: '02',
                  phase: 'Ovulation',
                  days: 'Days 14–16',
                  desc: 'Peak estrogen. High confidence and communication. Your most socially powerful days.',
                  color: '#c8a2c8',
                  tag: 'Connect',
                },
                {
                  num: '03',
                  phase: 'Luteal',
                  days: 'Days 17–28',
                  desc: 'Progesterone rises. Detail-oriented, introspective. Great for deep work and reflection.',
                  color: '#7d6ca9',
                  tag: 'Reflect',
                },
                {
                  num: '04',
                  phase: 'Menstrual',
                  days: 'Days 1–5',
                  desc: 'Hormones at their lowest. Rest, reset, and integrate. Your body is asking for slowness.',
                  color: '#5a4191',
                  tag: 'Rest',
                },
              ].map((p, i) => (
                <motion.div
                  key={p.phase}
                  className="phase-row"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  style={{ '--phase-color': p.color }}
                >
                  <span className="phase-row__num">{p.num}</span>
                  <div className="phase-row__body">
                    <div className="phase-row__top">
                      <span className="phase-row__name">{p.phase}</span>
                      <span className="phase-row__days">{p.days}</span>
                      <span className="phase-row__tag" style={{ background: p.color + '22', color: p.color, border: `1px solid ${p.color}44` }}>{p.tag}</span>
                    </div>
                    <p className="phase-row__desc">{p.desc}</p>
                  </div>
                  <div className="phase-row__bar" style={{ background: p.color }} />
                </motion.div>
              ))}
            </div>
          </div>

          <ScrollReveal custom={2}>
            <div className="science-link-wrap">
              <Link to="/science">
                <motion.button
                  className="btn btn--ghost"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore the science →
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
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
              You weren't broken. You were just never given the right map.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BIGGER VISION ── */}
      <section className="section section--dark" id="vision">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">LUNA is not just about periods.<br />It's about redesigning systems around women.</h2>
            <p className="section__subtitle">
              When women understand their patterns, everything changes — not just their health, but how they work, learn, lead, and live.
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
                Be among the first women to experience a platform built entirely around how you actually work.
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
