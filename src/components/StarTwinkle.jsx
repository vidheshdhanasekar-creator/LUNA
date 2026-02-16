import { motion } from 'framer-motion'

const stars = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  top: `${5 + Math.random() * 60}%`,
  size: 1 + Math.random() * 2,
  duration: 2 + Math.random() * 3,
  delay: Math.random() * 2,
}))

export default function StarTwinkle() {
  return (
    <div className="star-twinkle" aria-hidden>
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
