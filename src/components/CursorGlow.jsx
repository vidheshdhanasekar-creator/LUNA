import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ORBITS = [
  { radius: 28, duration: 4, size: 6, delay: 0 },
  { radius: 42, duration: 6, size: 4, delay: 0.5 },
  { radius: 58, duration: 5, size: 5, delay: 1 },
  { radius: 72, duration: 7, size: 3, delay: 1.5 },
]

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }
    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    document.body.addEventListener('mouseleave', handleLeave)
    document.body.addEventListener('mouseenter', handleEnter)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.body.removeEventListener('mouseleave', handleLeave)
      document.body.removeEventListener('mouseenter', handleEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="cursor-effect" aria-hidden>
      {/* Center core */}
      <motion.div
        className="cursor-core"
        animate={{ left: position.x, top: position.y }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        style={{ x: '-50%', y: '-50%' }}
      />
      {/* Orbiting particles */}
      {ORBITS.map((orbit, i) => (
        <motion.div
          key={i}
          className="cursor-orbit"
          style={{
            left: position.x,
            top: position.y,
            width: orbit.radius * 2,
            height: orbit.radius * 2,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            left: position.x,
            top: position.y,
            rotate: 360,
          }}
          transition={{
            left: { type: 'spring', damping: 30, stiffness: 400 },
            top: { type: 'spring', damping: 30, stiffness: 400 },
            rotate: {
              duration: orbit.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: orbit.delay,
            },
          }}
        >
          <span
            className="cursor-orbiter-dot"
            style={{
              width: orbit.size,
              height: orbit.size,
              left: '50%',
              top: '50%',
              marginLeft: orbit.radius - orbit.size / 2,
              marginTop: -orbit.size / 2,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
