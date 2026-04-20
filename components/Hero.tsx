'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Reusable stagger helpers local to this component
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// Word-by-word animation for gradient headline
const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } },
}
const word = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// Static particle data — avoids hydration mismatch
// mobileOnly: false = always visible | mobileOnly: true = hidden on mobile (sm:block)
const PARTICLES = [
  { w: 3, h: 3, top: '12%', left: '8%',  delay: 0,   dur: 6,   mobileHide: false },
  { w: 2, h: 2, top: '28%', left: '92%', delay: 1.2, dur: 7.5, mobileHide: false },
  { w: 4, h: 4, top: '65%', left: '5%',  delay: 0.8, dur: 5,   mobileHide: false },
  { w: 2, h: 2, top: '78%', left: '88%', delay: 2,   dur: 8,   mobileHide: false },
  { w: 3, h: 3, top: '45%', left: '95%', delay: 0.4, dur: 6.5, mobileHide: false },
  { w: 2, h: 2, top: '18%', left: '55%', delay: 1.8, dur: 7,   mobileHide: true  },
  { w: 3, h: 3, top: '88%', left: '40%', delay: 0.6, dur: 5.5, mobileHide: true  },
  { w: 2, h: 2, top: '55%', left: '18%', delay: 2.5, dur: 9,   mobileHide: true  },
  { w: 4, h: 4, top: '35%', left: '72%', delay: 1,   dur: 6,   mobileHide: true  },
  { w: 2, h: 2, top: '92%', left: '70%', delay: 3,   dur: 7,   mobileHide: true  },
]

const BADGES = [
  {
    icon: (
      <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3.09a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.14 7.85a16 16 0 006.25 6.25l1.21-1.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: '222 225 1062',
    href: 'tel:2222251062',
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.556 4.113 1.524 5.843L.057 23.07l5.348-1.43A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.273-1.536l-.378-.224-3.926 1.05 1.045-3.818-.246-.393A9.818 9.818 0 0112 2.182c5.42 0 9.818 4.398 9.818 9.818S17.42 21.818 12 21.818z"/>
      </svg>
    ),
    label: '221 587 8583',
    href: 'https://wa.me/522215878583',
    external: true,
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    label: '@neumoclinical',
    href: '#',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-[5%] w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: 'var(--accent-faint)' }} />
        <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full blur-[80px]" style={{ background: 'var(--secondary-md)' }} />
        <div className="absolute top-[10%] left-1/3 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'var(--accent-faint)', opacity: 0.6 }} />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full${p.mobileHide ? ' hidden sm:block' : ''}`}
            style={{ background: 'var(--accent)', width: p.w, height: p.h, top: p.top, left: p.left, opacity: 0.18 }}
            animate={{ y: [0, -18, 0], opacity: [0.18, 0.45, 0.18] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            {/* Location badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 font-space text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{ color: 'var(--accent)', background: 'var(--accent-faint)', border: '1px solid var(--icon-border)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                Veracruz, México
              </span>
            </motion.div>

            {/* Headline with word-by-word reveal */}
            <motion.h1
              variants={item}
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl leading-[1.08] text-white"
            >
              Especialistas en{' '}
              <motion.span
                variants={wordContainer}
                initial="hidden"
                animate="show"
                className="inline"
                aria-label="pruebas de función respiratoria"
              >
                {['pruebas', 'de', 'función', 'respiratoria'].map((w, i) => (
                  <motion.span
                    key={i}
                    variants={word}
                    className="inline-block mr-[0.25em]"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={item} className="font-manrope text-base sm:text-lg text-white/65 leading-relaxed max-w-xl">
              Contamos con la tecnología más avanzada de Veracruz para el diagnóstico y
              seguimiento de{' '}
              <span className="text-white/90 font-medium">
                asma, EPOC, fibrosis pulmonar, apnea obstructiva del sueño, enfermedades
                neuromusculares
              </span>{' '}
              con afección respiratoria y muchas más.
            </motion.p>

            {/* Secondary CTA text */}
            <motion.p variants={item} className="font-manrope text-sm font-semibold tracking-wide" style={{ color: 'var(--accent)', opacity: 0.85 }}>
              Ven y conoce nuestras instalaciones y servicios →
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-1">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 font-space font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none"
                style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
              >
                Contactar
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#estudios"
                className="inline-flex items-center gap-2 font-space font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 focus-visible:outline-none"
                style={{ color: 'var(--accent)', border: '1px solid var(--icon-border)' }}
              >
                Ver servicios
              </a>
            </motion.div>

            {/* Contact badges */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-5"
              style={{ borderTop: '1px solid var(--secondary-sm)' }}
            >
              {BADGES.map((badge) => (
                <a
                  key={badge.label}
                  href={badge.href}
                  target={badge.external ? '_blank' : undefined}
                  rel={badge.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-xs font-space font-medium text-white/55 hover:text-white transition-colors duration-200"
                >
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'var(--secondary-sm)' }}>
                    {badge.icon}
                  </div>
                  {badge.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN – Illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Decorative concentric rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              <div className="w-[520px] h-[520px] rounded-full animate-spin-slow" style={{ border: '1px solid var(--secondary-sm)' }} />
              <div className="absolute w-[420px] h-[420px] rounded-full" style={{ border: '1px solid var(--icon-bg)' }} />
              <div className="absolute w-[320px] h-[320px] rounded-full" style={{ border: '1px solid var(--icon-border)' }} />
            </div>

            {/* Ambient glow behind image */}
            <div className="absolute w-[360px] h-[360px] rounded-full blur-3xl pointer-events-none" aria-hidden="true"
              style={{ background: 'var(--accent-faint)' }} />

            {/* Image container */}
            <div className="relative w-[440px]">
              <Image
                src="/hero-respiratory.svg"
                alt="Ilustración de sistema respiratorio y función pulmonar"
                width={480}
                height={520}
                priority
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />

              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 font-jakarta font-bold text-xs px-4 py-2 rounded-2xl shadow-xl"
                style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
                aria-hidden="true"
              >
                Alta Tecnología
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-5 font-space text-xs px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--secondary-md)',
                  color: 'var(--text)',
                }}
                aria-hidden="true"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Diagnóstico Preciso
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 28 Q360 56 720 28 Q1080 0 1440 28 L1440 56 L0 56 Z" fill="var(--bg-deep)" opacity="0.45"/>
        </svg>
      </div>
    </section>
  )
}
