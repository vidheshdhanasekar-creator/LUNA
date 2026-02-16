import { motion } from 'framer-motion'

const blobs = [
  { id: 1, color: 'var(--accent)', size: 400, x: '10%', y: '20%', duration: 20 },
  { id: 2, color: 'var(--lavender)', size: 300, x: '70%', y: '60%', duration: 25 },
  { id: 3, color: 'var(--rose)', size: 250, x: '50%', y: '80%', duration: 22 },
  { id: 4, color: 'var(--accent-light)', size: 200, x: '85%', y: '15%', duration: 18 },
  { id: 5, color: 'var(--accent-secondary)', size: 350, x: '20%', y: '70%', duration: 24 },
]

export default function GradientBlobs() {
  return (
    <div className="gradient-blobs" aria-hidden>
      {blobs.map((b) => (
        <motion.div
          key={b.id}
          className="blob"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: `radial-gradient(circle, ${b.color}22 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
