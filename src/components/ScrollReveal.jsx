import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] },
  }),
}

export default function ScrollReveal({
  children,
  className = '',
  as: Component = motion.div,
  variants = defaultVariants,
  custom = 0,
  ...props
}) {
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      custom={custom}
      {...props}
    >
      {children}
    </Component>
  )
}
