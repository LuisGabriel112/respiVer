'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

export type SeccionData = {
  tipo: 'texto' | 'cta' | 'banner' | 'texto_imagen'
  posicion: string
  visible: boolean
  titulo: string
  subtitulo: string
  contenido: string
  boton_texto: string
  boton_enlace: string
  imagen?: string | null
}

function SeccionTexto({ s }: { s: SeccionData }) {
  return (
    <FadeIn>
      <div className="max-w-3xl mx-auto text-center py-12 px-4">
        {s.subtitulo && (
          <span className="inline-block font-space text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: 'var(--accent)' }}>
            {s.subtitulo}
          </span>
        )}
        {s.titulo && (
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-white mb-5 leading-tight">
            {s.titulo}
          </h2>
        )}
        {s.contenido && (
          <p className="font-manrope text-lg text-white/60 leading-relaxed">
            {s.contenido}
          </p>
        )}
        {s.boton_texto && s.boton_enlace && (
          <a href={s.boton_enlace}
            className="inline-flex items-center gap-2 font-space font-semibold text-sm px-7 py-3.5 rounded-xl mt-8 transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}>
            {s.boton_texto}
          </a>
        )}
      </div>
    </FadeIn>
  )
}

function SeccionCTA({ s }: { s: SeccionData }) {
  return (
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-2xl overflow-hidden p-8 lg:p-12 text-center"
          style={{ background: 'var(--cta-bar)', border: '1px solid var(--card-border)' }}>
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 opacity-60" aria-hidden="true"
            style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />
          {s.subtitulo && (
            <p className="font-space text-xs font-semibold tracking-[0.16em] uppercase mb-3"
              style={{ color: 'var(--accent)' }}>
              {s.subtitulo}
            </p>
          )}
          {s.titulo && (
            <h2 className="font-jakarta font-bold text-2xl sm:text-3xl text-white mb-4 leading-tight">
              {s.titulo}
            </h2>
          )}
          {s.contenido && (
            <p className="font-manrope text-base text-white/55 mb-8 max-w-2xl mx-auto">
              {s.contenido}
            </p>
          )}
          {s.boton_texto && s.boton_enlace && (
            <a href={s.boton_enlace}
              className="inline-flex items-center gap-2 font-space font-semibold text-sm px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}>
              {s.boton_texto}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

function SeccionBanner({ s }: { s: SeccionData }) {
  return (
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: 'var(--accent-faint)', border: '1px solid var(--icon-border)' }}>
          <div>
            {s.titulo && (
              <p className="font-jakarta font-bold text-base text-white">{s.titulo}</p>
            )}
            {s.contenido && (
              <p className="font-manrope text-sm text-white/60 mt-1">{s.contenido}</p>
            )}
          </div>
          {s.boton_texto && s.boton_enlace && (
            <a href={s.boton_enlace}
              className="flex-shrink-0 inline-flex items-center gap-2 font-space font-semibold text-sm px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}>
              {s.boton_texto}
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

function SeccionTextoImagen({ s }: { s: SeccionData }) {
  return (
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5">
            {s.subtitulo && (
              <span className="inline-block font-space text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: 'var(--accent)' }}>
                {s.subtitulo}
              </span>
            )}
            {s.titulo && (
              <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-white leading-tight">
                {s.titulo}
              </h2>
            )}
            {s.contenido && (
              <p className="font-manrope text-base text-white/60 leading-relaxed">
                {s.contenido}
              </p>
            )}
            {s.boton_texto && s.boton_enlace && (
              <a href={s.boton_enlace}
                className="inline-flex items-center gap-2 font-space font-semibold text-sm px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}>
                {s.boton_texto}
              </a>
            )}
          </div>
          {s.imagen && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--card-border)', minHeight: 300 }}
            >
              <Image src={s.imagen} alt={s.titulo || 'Imagen de sección'}
                fill className="object-cover" />
            </motion.div>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

export default function SeccionPersonalizada({ seccion }: { seccion: SeccionData }) {
  if (!seccion.visible) return null

  switch (seccion.tipo) {
    case 'cta':           return <SeccionCTA s={seccion} />
    case 'banner':        return <SeccionBanner s={seccion} />
    case 'texto_imagen':  return <SeccionTextoImagen s={seccion} />
    default:              return <SeccionTexto s={seccion} />
  }
}
