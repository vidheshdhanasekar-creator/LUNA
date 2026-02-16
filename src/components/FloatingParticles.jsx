import { motion } from 'framer-motion'

const particleCount = 40
const particles = Array.from({ length: particleCount }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 4 + Math.random() * 8,
  delay: Math.random() * 5,
  opacity: 0.2 + Math.random() * 0.5,
}))

export default function FloatingParticles() {
  return (
    <div className="floating-particles" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [p.opacity, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
