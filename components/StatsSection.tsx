'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { FadeIn } from './FadeIn'

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({
  target,
  suffix = '',
  prefix = '',
}: {
  target: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const node = ref.current
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(v) {
        node.textContent = prefix + Math.round(v) + suffix
      },
    })
    return () => controls.stop()
  }, [isInView, target, suffix, prefix])

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  )
}

const STATS = [
  {
    value: 12,
    suffix: '+',
    label: 'Estudios disponibles',
    sub: 'Diagnósticos especializados',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    value: 6,
    suffix: '',
    label: 'Áreas diagnósticas',
    sub: 'Cobertura respiratoria total',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
  },
  {
    value: 100,
    suffix: '%',
    label: 'No invasivos',
    sub: 'Seguridad y confort del paciente',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    value: 1,
    suffix: 'ª',
    label: 'Unidad en Veracruz',
    sub: 'Tecnología de vanguardia',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
]

export default function StatsSection() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--accent) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Glow center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, var(--secondary-sm) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="group relative text-center p-6 lg:p-8 rounded-2xl overflow-hidden"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(0,229,255,0.12), transparent 70%)',
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(0,229,255,0.5), transparent)',
                    opacity: 0,
                  }}
                />

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 mx-auto"
                  style={{ background: 'var(--icon-bg)', border: '1px solid var(--icon-border)', color: 'var(--accent)' }}>
                  {stat.icon}
                </div>

                {/* Number */}
                <div
                  className="font-jakarta font-extrabold text-4xl lg:text-5xl leading-none mb-1.5"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>

                <div className="font-jakarta font-bold text-sm text-white mb-1">
                  {stat.label}
                </div>
                <div className="font-manrope text-xs text-white/40">{stat.sub}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
