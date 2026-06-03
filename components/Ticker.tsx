'use client'

import { motion } from 'framer-motion'

export default function Ticker({ items }: { items: string[] }) {
  const TRACK = [...items, ...items, ...items, ...items]
  return (
    <div
      className="relative overflow-hidden py-3.5 select-none"
      style={{ background: 'var(--ticker-bg)', borderTop: '1px solid var(--ticker-border)', borderBottom: '1px solid var(--ticker-border)' }}
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--ticker-fade), transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--ticker-fade), transparent)' }} />

      <motion.div
        className="flex gap-10 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {TRACK.map((name: string, i: number) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-space text-[11px] font-medium tracking-widest uppercase text-white/30"
            style={{ color: 'var(--text)', opacity: 0.35 }}
          >
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)', opacity: 0.6 }} />
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
