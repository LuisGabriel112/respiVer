'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

// Número de placeholders por categoría
const EQUIPMENT_SLOTS = 6
const CLINIC_SLOTS = 5

function ComingSoonCard({
  index,
  delay,
  tall = false,
}: {
  index: number
  delay: number
  tall?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`relative rounded-2xl overflow-hidden ${tall ? 'row-span-2' : ''}`}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        minHeight: tall ? 320 : 180,
      }}
    >
      {/* Shimmer animated bg */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'linear-gradient(135deg, var(--secondary-sm) 0%, transparent 60%)',
            'linear-gradient(135deg, transparent 0%, var(--secondary-sm) 60%)',
            'linear-gradient(135deg, var(--secondary-sm) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Center content */}
      <div className="relative h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
        {/* Camera / image icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: 'var(--icon-bg)', border: '1px solid var(--icon-border)' }}
        >
          <svg
            className="w-6 h-6"
            style={{ color: 'var(--accent)', opacity: 0.7 }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>

        {/* Próximamente badge */}
        <span
          className="inline-flex items-center gap-1.5 font-space text-[10px] font-semibold tracking-[0.16em] uppercase px-3 py-1 rounded-full"
          style={{
            color: 'var(--accent)',
            background: 'var(--accent-faint)',
            border: '1px solid var(--icon-border)',
          }}
        >
          <motion.span
            className="w-1 h-1 rounded-full"
            style={{ background: 'var(--accent)' }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.2 }}
          />
          Próximamente
        </span>
      </div>
    </motion.div>
  )
}

function SectionHeader({
  icon,
  label,
  title,
  description,
}: {
  icon: React.ReactNode
  label: string
  title: string
  description: string
}) {
  return (
    <FadeIn className="mb-8">
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
          style={{ background: 'var(--icon-bg)', border: '1px solid var(--icon-border)', color: 'var(--accent)' }}
        >
          {icon}
        </div>
        <div>
          <span
            className="font-space text-xs font-semibold tracking-[0.15em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            {label}
          </span>
          <h3 className="font-jakarta font-bold text-xl sm:text-2xl text-white mt-1 mb-1.5">
            {title}
          </h3>
          <p className="font-manrope text-sm text-white/55 max-w-lg">{description}</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default function GallerySection() {
  return (
    <section
      id="galeria"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-deep), var(--bg))' }}
    >
      {/* Blob decorativo */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
        aria-hidden="true"
        style={{ background: 'var(--secondary-sm)', opacity: 0.6 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header principal */}
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <span
            className="inline-block font-space text-xs font-semibold tracking-[0.18em] uppercase mb-5"
            style={{ color: 'var(--accent)' }}
          >
            Galería
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-white mb-5">
            Conoce nuestras{' '}
            <span className="text-gradient">instalaciones y equipo</span>
          </h2>
          <p className="font-manrope text-lg text-white/55">
            Estamos preparando contenido visual de nuestros espacios y tecnología.
            Vuelve pronto para descubrirlo.
          </p>
        </FadeIn>

        {/* ── Galería del equipo ─────────────────────────────── */}
        <div className="mb-16">
          <SectionHeader
            label="Equipamiento"
            title="Galería del equipo"
            description="Tecnología de vanguardia para diagnóstico respiratorio de alta precisión."
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            }
          />

          {/* Grid equipamiento — layout asimétrico */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Tarjeta grande */}
            <div className="col-span-2 row-span-2">
              <ComingSoonCard index={0} delay={0} tall />
            </div>
            {Array.from({ length: EQUIPMENT_SLOTS - 1 }).map((_, i) => (
              <ComingSoonCard key={i + 1} index={i + 1} delay={(i + 1) * 0.07} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-16"
          style={{ background: 'linear-gradient(to right, transparent, var(--secondary-md), transparent)' }}
        />

        {/* ── Galería de la clínica ──────────────────────────── */}
        <div>
          <SectionHeader
            label="Instalaciones"
            title="Galería de la clínica"
            description="Espacios diseñados para la comodidad del paciente y la excelencia clínica."
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            }
          />

          {/* Grid clínica — layout diferente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* Tarjeta ancha en móvil */}
            <div className="sm:col-span-2 lg:col-span-1">
              <ComingSoonCard index={0} delay={0} tall />
            </div>
            {Array.from({ length: CLINIC_SLOTS - 1 }).map((_, i) => (
              <ComingSoonCard key={i + 1} index={i + 1} delay={(i + 1) * 0.07} />
            ))}
          </div>
        </div>

        {/* CTA de notificación */}
        <FadeIn delay={0.2} className="mt-14">
          <div
            className="relative rounded-2xl p-7 lg:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
            style={{ background: 'var(--cta-bar)', border: '1px solid var(--card-border)' }}
          >
            <div
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 opacity-60"
              aria-hidden="true"
              style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }}
            />
            <div>
              <p
                className="font-space text-xs font-semibold tracking-[0.15em] uppercase mb-1.5"
                style={{ color: 'var(--accent)' }}
              >
                Muy pronto
              </p>
              <p className="font-jakarta font-bold text-lg sm:text-xl text-white">
                ¿Quieres conocer la clínica antes de tu cita?
              </p>
              <p className="font-manrope text-sm text-white/55 mt-1">
                Contáctanos y con gusto te mostramos nuestras instalaciones.
              </p>
            </div>
            <a
              href="#contacto"
              className="flex-shrink-0 inline-flex items-center gap-2 font-space font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
            >
              Contáctanos
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
