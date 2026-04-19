'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'
import { useTheme } from './ThemeProvider'
import type { Study } from '@/lib/studies'

// ── Category badge colors ─────────────────────────────────────────────────────
const CATEGORY_COLORS_DARK: Record<string, string> = {
  'mecanica-pulmonar': '#00E5FF',
  'volumenes-pulmonares': '#7DF9FF',
  'fuerza-muscular': '#00E5FF',
  'intercambio-gases': '#7DF9FF',
  'ejercicio': '#00E5FF',
  'sueno': '#7DF9FF',
}
const CATEGORY_COLORS_LIGHT: Record<string, string> = {
  'mecanica-pulmonar': '#0284C7',
  'volumenes-pulmonares': '#0EA5E9',
  'fuerza-muscular': '#0284C7',
  'intercambio-gases': '#0EA5E9',
  'ejercicio': '#0284C7',
  'sueno': '#0EA5E9',
}

// ── Icon helpers ──────────────────────────────────────────────────────────────
function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.556 4.113 1.524 5.843L.057 23.07l5.348-1.43A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.273-1.536l-.378-.224-3.926 1.05 1.045-3.818-.246-.393A9.818 9.818 0 0112 2.182c5.42 0 9.818 4.398 9.818 9.818S17.42 21.818 12 21.818z"/>
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function StudyPageContent({ study }: { study: Study }) {
  const { theme } = useTheme()
  const colorMap = theme === 'light' ? CATEGORY_COLORS_LIGHT : CATEGORY_COLORS_DARK
  const accentColor = colorMap[study.categorySlug] ?? (theme === 'light' ? '#0284C7' : '#00E5FF')

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/3 right-0 w-[500px] h-[400px] rounded-full blur-[120px]"
            style={{ background: `${accentColor}08` }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full blur-[100px]"
            style={{ background: 'var(--secondary-sm)' }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#estudios"
              className="inline-flex items-center gap-2 font-space text-sm text-white/50 transition-colors mb-8 group"
              style={{ color: 'var(--text)', opacity: 0.5 }}
            >
              <ArrowLeftIcon />
              <span className="group-hover:underline underline-offset-2">Volver a estudios</span>
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center gap-2 font-space text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border"
              style={{ color: accentColor, background: `${accentColor}12`, borderColor: `${accentColor}25` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accentColor }} />
              {study.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4 max-w-3xl"
          >
            {study.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="font-manrope text-lg text-white/60 max-w-2xl leading-relaxed mb-8"
          >
            {study.tagline}
          </motion.p>

          {/* CTA pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 font-space text-sm font-semibold px-5 py-2 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
            >
              Agendar este estudio
            </a>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--secondary-md), transparent)' }} />

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

          {/* ── LEFT / MAIN ────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Description */}
            <FadeIn>
              <div className="space-y-4">
                <h2 className="font-jakarta font-bold text-xl text-white flex items-center gap-3">
                  <span className="w-1 h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${accentColor}, var(--accent-2))` }} />
                  ¿Qué es?
                </h2>
                {study.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="font-manrope text-sm sm:text-base text-white/65 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* How it works */}
            <FadeIn delay={0.05}>
              <div className="space-y-5">
                <h2 className="font-jakarta font-bold text-xl text-white flex items-center gap-3">
                  <span className="w-1 h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${accentColor}, var(--accent-2))` }} />
                  ¿Cómo se realiza?
                </h2>
                <ol className="space-y-4" role="list">
                  {study.howItWorks.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full font-space font-bold text-xs flex items-center justify-center mt-0.5"
                        style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}0F`, border: `1px solid ${accentColor}40` }}
                      >
                        {i + 1}
                      </span>
                      <p className="font-manrope text-sm sm:text-base text-white/65 leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>

            {/* Parameters */}
            <FadeIn delay={0.08}>
              <div className="space-y-5">
                <h2 className="font-jakarta font-bold text-xl text-white flex items-center gap-3">
                  <span className="w-1 h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${accentColor}, var(--accent-2))` }} />
                  ¿Qué mide?
                </h2>
                <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                  {study.parameters.map((param, i) => (
                    <StaggerItem key={i}>
                      <div className="group p-4 sm:p-5 rounded-xl transition-all duration-200"
                        style={{ background: 'var(--param-bg)', border: '1px solid var(--param-border)' }}>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                          <div className="flex-1">
                            <h3
                              className="font-space font-semibold text-sm mb-1.5"
                              style={{ color: accentColor }}
                            >
                              {param.name}
                            </h3>
                            <p className="font-manrope text-sm text-white/60 leading-relaxed">
                              {param.description}
                            </p>
                          </div>
                          {param.reference && (
                            <div className="mt-3 sm:mt-0 sm:ml-auto flex-shrink-0">
                              <span className="inline-block font-space text-xs px-3 py-1.5 rounded-lg whitespace-nowrap"
                                style={{ color: 'var(--accent-2)', background: 'var(--ref-bg)', border: '1px solid var(--ref-border)' }}>
                                {param.reference}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>

            {/* Clinical significance */}
            <FadeIn delay={0.1}>
              <div
                className="relative rounded-2xl p-6 sm:p-7 overflow-hidden"
                style={{ borderColor: `${accentColor}22`, background: `${accentColor}07`, border: `1px solid ${accentColor}22` }}
              >
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-px" aria-hidden="true"
                  style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
                <h2 className="font-jakarta font-bold text-lg text-white mb-3 flex items-center gap-2.5">
                  <svg className="w-5 h-5" style={{ color: accentColor }} viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  Importancia clínica
                </h2>
                <p className="font-manrope text-sm sm:text-base text-white/65 leading-relaxed">
                  {study.clinicalSignificance}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT / SIDEBAR ─────────────────────────────────────────── */}
          <div className="space-y-6">

            {/* Indications card */}
            <FadeIn direction="left" delay={0.1}>
              <div className="rounded-2xl p-5 sm:p-6"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <h3 className="font-jakarta font-bold text-base text-white mb-4 flex items-center gap-2.5">
                  <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Indicaciones
                </h3>
                <ul className="space-y-3" role="list">
                  {study.indications.map((indication, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckIcon color={accentColor} />
                      <span className="font-manrope text-sm text-white/60 leading-snug">{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Preparation card */}
            <FadeIn direction="left" delay={0.15}>
              <div className="rounded-2xl p-5 sm:p-6"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <h3 className="font-jakarta font-bold text-base text-white mb-4 flex items-center gap-2.5">
                  <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                  </svg>
                  Preparación
                </h3>
                <ul className="space-y-3" role="list">
                  {study.preparation.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: 'var(--secondary-sm)', border: '1px solid var(--secondary-md)' }}>
                        <span className="font-space text-[9px] font-bold" style={{ color: 'var(--accent)' }}>{i + 1}</span>
                      </span>
                      <span className="font-manrope text-sm text-white/60 leading-snug">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* CTA card */}
            <FadeIn direction="left" delay={0.25}>
              <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6"
                style={{ background: 'var(--cta-card)', border: '1px solid var(--card-border)' }}>
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-px" aria-hidden="true"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', opacity: 0.5 }} />
                <p className="font-space text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
                  ¿Listo para agendarlo?
                </p>
                <p className="font-manrope text-sm text-white/55 mb-5 leading-relaxed">
                  Contáctanos y te orientamos sobre el proceso y la cita.
                </p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://wa.me/522215878583"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-space font-semibold text-sm px-4 py-3 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
                    style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                  <a
                    href="tel:2222251062"
                    className="inline-flex items-center justify-center gap-2 font-space font-semibold text-sm px-4 py-3 rounded-xl transition-all"
                    style={{ color: 'var(--accent)', border: '1px solid var(--icon-border)' }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3.09a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.14 7.85a16 16 0 006.25 6.25l1.21-1.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                    Llamar
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── FOOTER STRIP ──────────────────────────────────────────────────── */}
      <div className="mt-8" style={{ borderTop: '1px solid var(--secondary-sm)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#estudios"
            className="inline-flex items-center gap-2 font-space text-sm font-medium text-white/50 transition-colors group"
            style={{ color: 'var(--text)', opacity: 0.5 }}
          >
            <ArrowLeftIcon />
            Ver todos los estudios
          </Link>
          <p className="font-manrope text-xs text-white/25">
            © 2025 RESPIVER · Unidad de Medicina Respiratoria
          </p>
        </div>
      </div>
    </>
  )
}
