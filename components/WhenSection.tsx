'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, animate, PanInfo } from 'framer-motion'
import { FadeIn } from './FadeIn'

const REASONS = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    title: 'Tos crónica o falta de aire',
    description:
      'Para evaluar la causa de tos persistente o dificultad respiratoria de origen desconocido.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <path d="M11 8v3M11 14h.01"/>
      </svg>
    ),
    title: 'Diagnóstico y seguimiento',
    description:
      'Diagnóstico y seguimiento de enfermedades pulmonares como asma, EPOC y fibrosis pulmonar.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Respuesta al tratamiento',
    description:
      'Evaluar la respuesta a fármacos, trasplante pulmonar o programas de rehabilitación respiratoria.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Exposición laboral',
    description:
      'Escrutinio de enfermedades respiratorias por exposición crónica a agentes tóxicos inhalados en el trabajo.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"/>
      </svg>
    ),
    title: 'Valoración pre-operatoria',
    description:
      'Valoración pulmonar previa a cirugía para determinar el riesgo respiratorio quirúrgico.',
  },
]

export default function WhenSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [current, setCurrent] = useState(0)
  const [perView, setPerView] = useState(1)
  const [cardWidth, setCardWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const autoRef = useRef<ReturnType<typeof setInterval>>()

  const maxIdx = REASONS.length - perView

  // Measure and set layout
  const measure = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const w = el.offsetWidth
    const pv = w >= 1024 ? 3 : w >= 640 ? 2 : 1
    const cw = Math.floor(w / pv)
    setPerView(pv)
    setCardWidth(cw)
    // Reposition without animation on resize
    const safeIdx = Math.min(current, REASONS.length - pv)
    x.set(-(safeIdx * cw))
    setCurrent(safeIdx)
  }, [current, x])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  // Snap to a given index with spring
  const goTo = useCallback(
    (idx: number) => {
      const safe = Math.max(0, Math.min(idx, maxIdx))
      const cw = cardWidth || containerRef.current?.offsetWidth || 0
      setCurrent(safe)
      animate(x, -(safe * cw), { type: 'spring', stiffness: 280, damping: 32 })
    },
    [cardWidth, maxIdx, x]
  )

  // Auto-advance
  const startAuto = useCallback(() => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = c >= maxIdx ? 0 : c + 1
        const cw = cardWidth || containerRef.current?.offsetWidth || 0
        animate(x, -(next * cw), { type: 'spring', stiffness: 280, damping: 32 })
        return next
      })
    }, 4500)
  }, [maxIdx, cardWidth, x])

  const stopAuto = () => clearInterval(autoRef.current)

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [startAuto])

  function handleDragStart() {
    setIsDragging(true)
    stopAuto()
  }

  function handleDragEnd(_: PointerEvent, info: PanInfo) {
    setIsDragging(false)
    const cw = cardWidth || 1
    const nearest = Math.round(-x.get() / cw)
    goTo(nearest)
    startAuto()
  }

  return (
    <section id="servicios" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(to bottom, var(--bg-deep), var(--bg))' }}>

      {/* Blob */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[100px]" aria-hidden="true"
        style={{ background: 'var(--secondary-sm)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <span className="inline-block font-space text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: 'var(--accent)' }}>
            Indicaciones clínicas
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-white mb-5">
            Las pruebas evalúan el{' '}
            <span className="text-gradient">desempeño del aparato respiratorio</span>
          </h2>
          <p className="font-manrope text-lg text-white/55">
            ¿Cuándo está indicado realizarlas?
          </p>
        </FadeIn>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -(maxIdx * cardWidth), right: 0 }}
            dragElastic={0.08}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className={`flex ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            {REASONS.map((reason, i) => (
              <motion.div
                key={i}
                style={{ width: cardWidth || '100%', flexShrink: 0 }}
                className="px-2.5 sm:px-3"
              >
                <motion.div
                  whileHover={isDragging ? {} : { y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  className="group relative h-full p-6 lg:p-8 rounded-2xl overflow-hidden select-none"
                  style={{
                    background: i === current ? 'var(--card-active-bg)' : 'var(--card-bg)',
                    border: i === current ? '1px solid var(--card-active-border)' : '1px solid var(--card-border)',
                    transition: 'background 0.4s, border-color 0.4s',
                  }}
                >
                  {/* Glow top line on active */}
                  {i === current && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute top-0 left-0 right-0 h-0.5 pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                      }}
                    />
                  )}

                  {/* Background number */}
                  <span className="absolute top-3 right-4 font-jakarta font-extrabold text-6xl leading-none select-none pointer-events-none" style={{ color: 'var(--number-bg)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{
                      background: 'var(--icon-bg)',
                      border: '1px solid var(--icon-border)',
                      color: 'var(--accent)',
                    }}
                  >
                    {reason.icon}
                  </div>

                  <h3 className="font-jakarta font-bold text-lg text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-manrope text-sm text-white/55 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-10">
          {/* Prev */}
          <motion.button
            onClick={() => { stopAuto(); goTo(current - 1); startAuto() }}
            disabled={current === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed transition-colors text-white/60"
            style={{ border: '1px solid var(--secondary-md)' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => { stopAuto(); goTo(i); startAuto() }}
                animate={{ width: i === current ? 24 : 8, opacity: i === current ? 1 : 0.3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="h-2 rounded-full"
                style={{ background: 'var(--accent)' }}
                aria-label={`Ir a indicación ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <motion.button
            onClick={() => { stopAuto(); goTo(current + 1); startAuto() }}
            disabled={current >= maxIdx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed transition-colors text-white/60"
            style={{ border: '1px solid var(--secondary-md)' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
