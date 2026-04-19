'use client'

import Link from 'next/link'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'
import { useTheme } from './ThemeProvider'

interface StudyLink {
  name: string
  slug: string
}

interface StudyCategory {
  category: string
  icon: React.ReactNode
  accent: string
  studies: StudyLink[]
}

const CATEGORIES_DARK: StudyCategory[] = [
  {
    category: 'Mecánica Pulmonar',
    accent: '#00E5FF',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.5 2 6 5 6 8c0 2 .5 3.5 1.2 5.2L5 16c-.5.8 0 1.8.9 1.8H7l.8-1.8h8.4l.8 1.8h1.1c.9 0 1.4-1 .9-1.8l-2.2-2.8C17.5 11.5 18 10 18 8c0-3-2.5-6-6-6z"/>
        <path d="M9.5 12c.8.8 5 .8 5 0"/>
      </svg>
    ),
    studies: [
      { name: 'Espirometría simple', slug: 'espirometria-simple' },
      { name: 'Espirometría pre y post-broncodilatador', slug: 'espirometria-pre-post-broncodilatador' },
      { name: 'Espirometría lenta', slug: 'espirometria-lenta' },
    ],
  },
  {
    category: 'Volúmenes Pulmonares',
    accent: '#7DF9FF',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3h18v4H3z"/>
        <path d="M5 7v13a1 1 0 001 1h12a1 1 0 001-1V7"/>
        <path d="M9 7v5c0 1.1.9 2 2 2h2a2 2 0 002-2V7"/>
      </svg>
    ),
    studies: [
      { name: 'Pletismografía corporal total', slug: 'pletismografia-corporal-total' },
    ],
  },
  {
    category: 'Fuerza Muscular Respiratoria',
    accent: '#00E5FF',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 4H6"/><path d="M6 4v2a4 4 0 004 4h4a4 4 0 004-4V4"/>
        <path d="M3 8h18"/><path d="M6 20h12"/>
        <path d="M8 20v-6a4 4 0 018 0v6"/>
      </svg>
    ),
    studies: [
      { name: 'Presión inspiratoria máxima (PImax)', slug: 'presion-inspiratoria-maxima' },
      { name: 'Presión espiratoria máxima (PEmax)', slug: 'presion-espiratoria-maxima' },
    ],
  },
  {
    category: 'Intercambio de O₂ y Biomarcadores',
    accent: '#7DF9FF',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    studies: [
      { name: 'Difusión pulmonar de monóxido de carbono (DLCO)', slug: 'difusion-pulmonar-dlco' },
      { name: 'Fracción exhalada de óxido nítrico (FeNO)', slug: 'fraccion-exhalada-oxido-nitrico-feno' },
    ],
  },
  {
    category: 'Función Pulmonar en Ejercicio',
    accent: '#00E5FF',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13" cy="4" r="2"/>
        <path d="M7 21l4-4 2 2 4-8"/><path d="M9 11l-2 4 3 1"/><path d="M15 13l2-3-3-2 1-3"/>
      </svg>
    ),
    studies: [
      { name: 'Prueba de saturación y titulación de oxígeno', slug: 'prueba-saturacion-oxigeno' },
      { name: 'Prueba de caminata de 6 minutos', slug: 'prueba-caminata-6-minutos' },
    ],
  },
  {
    category: 'Estudios del Sueño',
    accent: '#7DF9FF',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    ),
    studies: [
      { name: 'Polisomnografía', slug: 'polisomnografia' },
      { name: 'Poligrafía respiratoria', slug: 'poligrafia-respiratoria' },
    ],
  },
]

const ACCENT_LIGHT: Record<string, string> = { '#00E5FF': '#0284C7', '#7DF9FF': '#0EA5E9' }
const CATEGORIES_LIGHT: StudyCategory[] = CATEGORIES_DARK.map(cat => ({
  ...cat,
  accent: ACCENT_LIGHT[cat.accent] ?? cat.accent,
}))

function ArrowIcon() {
  return (
    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

export default function StudiesSection() {
  const { theme } = useTheme()
  const CATEGORIES = theme === 'light' ? CATEGORIES_LIGHT : CATEGORIES_DARK
  return (
    <section id="estudios" className="relative py-20 lg:py-28" style={{ background: 'linear-gradient(to bottom, var(--bg), var(--bg), var(--bg-deep))' }}>
      {/* Background accent blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[120px]"
          style={{ background: 'var(--secondary-sm)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <span className="inline-block font-space text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: 'var(--accent)' }}>
            Catálogo de estudios
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-white mb-5">
            ¿De qué estudios{' '}
            <span className="text-gradient">disponemos</span>?
          </h2>
          <p className="font-manrope text-lg text-white/55">
            Selecciona cualquier estudio para conocer en qué consiste, cómo se realiza y cuándo está indicado.
          </p>
        </FadeIn>

        {/* Category cards */}
        <StaggerContainer
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6"
          staggerDelay={0.08}
        >
          {CATEGORIES.map((cat, index) => (
            <StaggerItem key={index}>
              <div className="group h-full p-6 rounded-2xl card-surface transition-all duration-300 overflow-hidden relative">
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${cat.accent}18, var(--bg))`,
                      border: `1px solid ${cat.accent}28`,
                      color: cat.accent,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-jakarta font-bold text-sm leading-snug text-white/90 group-hover:text-white transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Study links */}
                <ul className="space-y-2" role="list">
                  {cat.studies.map((study) => (
                    <li key={study.slug}>
                      <Link
                        href={`/estudios/${study.slug}`}
                        className="group/link flex items-center justify-between gap-2 py-2 px-3 rounded-lg transition-all duration-150 -mx-1 hover:bg-[var(--accent-faint)]"
                      >
                        <div className="flex items-start gap-2.5">
                          <svg
                            className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-colors duration-150"
                            style={{ color: cat.accent }}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          <span className="font-manrope text-sm text-white/60 leading-snug group-hover/link:text-white transition-colors duration-150">
                            {study.name}
                          </span>
                        </div>
                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0 -translate-x-1 group-hover/link:translate-x-0 opacity-0 group-hover/link:opacity-100 transition-all duration-200"
                          style={{ color: 'var(--accent)' }}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA banner */}
        <FadeIn delay={0.2} className="mt-14">
          <div
            className="relative rounded-2xl overflow-hidden p-8 lg:p-10 text-center"
            style={{ background: 'var(--cta-bar)', border: '1px solid var(--card-border)' }}
          >
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 opacity-60"
                style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />
            </div>
            <p className="font-space text-xs font-semibold tracking-[0.16em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
              ¿Tienes dudas sobre qué estudio necesitas?
            </p>
            <h3 className="font-jakarta font-bold text-2xl sm:text-3xl text-white mb-6">
              Consúltanos, te orientamos sin costo
            </h3>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 font-space font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
            >
              Solicitar orientación
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
