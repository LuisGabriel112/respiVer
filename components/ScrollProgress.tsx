'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 200,
        transformOrigin: '0%',
        willChange: 'transform',
        background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
        boxShadow: '0 0 14px color-mix(in srgb, var(--accent) 75%, transparent)',
      }}
    />
  )
}
