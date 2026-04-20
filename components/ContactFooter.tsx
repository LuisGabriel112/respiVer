'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './FadeIn'

// ── Lazy Google Maps iframe ───────────────────────────────────────────────────
function LazyMap() {
  const ref = useRef<HTMLDivElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoad(true); obs.disconnect() } },
      { rootMargin: '200px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      {load ? (
        <iframe
          title="Ubicación RESPIVER"
          src="https://maps.google.com/maps?q=Av+Paseo+La+Ni%C3%B1a+103%2C+Fraccionamiento+Las+Americas%2C+Boca+del+R%C3%ADo%2C+Veracruz+94299%2C+M%C3%A9xico&output=embed&z=16&hl=es"
          width="100%" height="100%"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'var(--secondary-sm)' }}>
          <svg className="w-8 h-8 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      )}
    </div>
  )
}

// ── Icon helpers ──────────────────────────────────────────────────────────────
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.556 4.113 1.524 5.843L.057 23.07l5.348-1.43A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.273-1.536l-.378-.224-3.926 1.05 1.045-3.818-.246-.393A9.818 9.818 0 0112 2.182c5.42 0 9.818 4.398 9.818 9.818S17.42 21.818 12 21.818z"/>
    </svg>
  )
}

// ── Contact Form ──────────────────────────────────────────────────────────────
type FormState = { nombre: string; telefono: string; motivo: string; mensaje: string }
type FormStatus = 'idle' | 'loading' | 'success'
type FormErrors = Partial<FormState>

const inputBase = {
  background: 'var(--secondary-sm)',
  border: '1px solid var(--secondary-md)',
  color: 'var(--text)',
  borderRadius: '0.75rem',
  padding: '0.625rem 0.875rem',
  width: '100%',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({ nombre: '', telefono: '', motivo: 'Agendar cita', mensaje: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm(f => ({ ...f, [field]: e.target.value }))
      if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }))
    }
  }

  function validate() {
    const e: FormErrors = {}
    if (!form.nombre.trim()) e.nombre = 'Ingresa tu nombre'
    if (!form.telefono.trim()) e.telefono = 'Ingresa tu número'
    if (!form.mensaje.trim()) e.mensaje = 'Escribe tu mensaje'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')

    const text = encodeURIComponent(
      `Hola RESPIVER 👋\n\nSoy *${form.nombre.trim()}*.\n*Motivo:* ${form.motivo}\n\n${form.mensaje.trim()}\n\n📞 ${form.telefono.trim()}`
    )

    setTimeout(() => {
      setStatus('success')
      window.open(`https://wa.me/522215878583?text=${text}`, '_blank', 'noopener,noreferrer')
    }, 700)
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-2xl h-full"
        style={{ background: 'var(--secondary-sm)', border: '1px solid var(--secondary-md)' }}
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
          style={{ background: 'rgba(37,211,102,0.12)' }}>
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h4 className="font-jakarta font-bold text-lg text-white mb-2">¡Mensaje enviado!</h4>
        <p className="font-manrope text-sm text-white/55 mb-5 leading-relaxed">
          Se abrió WhatsApp con tu mensaje listo. Si no se abrió automáticamente, escríbenos directamente.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <a href="https://wa.me/522215878583" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-space font-semibold text-sm px-5 py-2.5 rounded-xl"
            style={{ background: '#25D366', color: '#fff' }}>
            <WhatsAppIcon className="w-4 h-4" />
            Abrir WhatsApp
          </a>
          <button onClick={() => { setStatus('idle'); setForm({ nombre: '', telefono: '', motivo: 'Agendar cita', mensaje: '' }) }}
            className="font-space text-sm px-5 py-2.5 rounded-xl transition-colors"
            style={{ color: 'var(--accent)', border: '1px solid var(--secondary-md)' }}>
            Nuevo mensaje
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Formulario de contacto">
      {/* Nombre */}
      <div>
        <label htmlFor="cf-nombre" className="block font-space text-xs font-semibold mb-1.5"
          style={{ color: 'var(--accent)' }}>
          Nombre completo <span aria-hidden="true">*</span>
        </label>
        <input
          id="cf-nombre"
          type="text"
          autoComplete="name"
          placeholder="Dr. / Lic. / Sr. ..."
          value={form.nombre}
          onChange={set('nombre')}
          onFocus={() => setFocused('nombre')}
          onBlur={() => setFocused(null)}
          aria-required="true"
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? 'cf-nombre-error' : undefined}
          style={{
            ...inputBase,
            borderColor: errors.nombre ? '#F87171' : focused === 'nombre' ? 'var(--accent)' : 'var(--secondary-md)',
          }}
        />
        {errors.nombre && (
          <p id="cf-nombre-error" role="alert" className="mt-1 text-xs font-manrope" style={{ color: '#F87171' }}>
            {errors.nombre}
          </p>
        )}
      </div>

      {/* Teléfono + Motivo */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-tel" className="block font-space text-xs font-semibold mb-1.5"
            style={{ color: 'var(--accent)' }}>
            Teléfono / WhatsApp <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-tel"
            type="tel"
            autoComplete="tel"
            placeholder="222 000 0000"
            value={form.telefono}
            onChange={set('telefono')}
            onFocus={() => setFocused('telefono')}
            onBlur={() => setFocused(null)}
            aria-required="true"
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? 'cf-tel-error' : undefined}
            style={{
              ...inputBase,
              borderColor: errors.telefono ? '#F87171' : focused === 'telefono' ? 'var(--accent)' : 'var(--secondary-md)',
            }}
          />
          {errors.telefono && (
            <p id="cf-tel-error" role="alert" className="mt-1 text-xs font-manrope" style={{ color: '#F87171' }}>
              {errors.telefono}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-motivo" className="block font-space text-xs font-semibold mb-1.5"
            style={{ color: 'var(--accent)' }}>
            Motivo
          </label>
          <select
            id="cf-motivo"
            value={form.motivo}
            onChange={set('motivo')}
            onFocus={() => setFocused('motivo')}
            onBlur={() => setFocused(null)}
            style={{
              ...inputBase,
              borderColor: focused === 'motivo' ? 'var(--accent)' : 'var(--secondary-md)',
              cursor: 'pointer',
            }}
          >
            <option value="Agendar cita">Agendar cita</option>
            <option value="Información de estudios">Información de estudios</option>
            <option value="Precios y disponibilidad">Precios y disponibilidad</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="cf-mensaje" className="block font-space text-xs font-semibold mb-1.5"
          style={{ color: 'var(--accent)' }}>
          Mensaje <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-mensaje"
          rows={4}
          placeholder="Cuéntanos brevemente qué estudio necesitas o tu consulta..."
          value={form.mensaje}
          onChange={set('mensaje')}
          onFocus={() => setFocused('mensaje')}
          onBlur={() => setFocused(null)}
          aria-required="true"
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? 'cf-mensaje-error' : undefined}
          style={{
            ...inputBase,
            borderColor: errors.mensaje ? '#F87171' : focused === 'mensaje' ? 'var(--accent)' : 'var(--secondary-md)',
            resize: 'none',
          }}
        />
        {errors.mensaje && (
          <p id="cf-mensaje-error" role="alert" className="mt-1 text-xs font-manrope" style={{ color: '#F87171' }}>
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={status !== 'loading' ? { y: -2 } : {}}
        whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
        className="w-full flex items-center justify-center gap-2.5 font-space font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <WhatsAppIcon className="w-4 h-4" />
            Enviar por WhatsApp
          </>
        )}
      </motion.button>
      <p className="text-center font-manrope text-xs text-white/35">
        Tu mensaje se abrirá en WhatsApp listo para enviar
      </p>
    </form>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ContactFooter() {
  return (
    <footer id="contacto" className="relative" style={{ background: 'var(--footer-bg)' }}>
      {/* Top wave */}
      <div className="pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 28 Q360 0 720 28 Q1080 56 1440 28 L1440 0 L0 0 Z" fill="var(--footer-bg)" opacity="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">

        {/* Three-column grid: brand | form | map */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 pb-16"
          style={{ borderBottom: '1px solid var(--secondary-sm)' }}>

          {/* ── Col 1: Brand + contact info ── */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-7">
              {/* Logo */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Image src="/logo.jpeg" alt="RESPIVER logo" width={44} height={44}
                    className="rounded-xl object-contain" />
                  <div>
                    <div className="font-jakarta font-bold text-2xl text-white">
                      RESPI<span style={{ color: 'var(--accent)' }}>VER</span>
                    </div>
                    <div className="font-space text-xs text-white/45 tracking-wide">
                      Unidad de Medicina Respiratoria
                    </div>
                  </div>
                </div>
                <p className="font-manrope text-sm text-white/50 max-w-xs leading-relaxed">
                  Diagnóstico y seguimiento especializado de enfermedades respiratorias con tecnología de vanguardia.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <h3 className="font-space text-xs font-semibold tracking-[0.15em] uppercase"
                  style={{ color: 'var(--accent)' }}>Contacto directo</h3>

                <a href="tel:2222251062" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: 'var(--icon-bg-2)', color: 'var(--accent)' }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3.09a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.14 7.85a16 16 0 006.25 6.25l1.21-1.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-white/75 group-hover:text-white transition-colors">222 225 1062</p>
                    <p className="font-manrope text-xs text-white/40">Teléfono</p>
                  </div>
                </a>

                <a href="https://wa.me/522215878583" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: 'var(--icon-bg-2)', color: 'var(--accent)' }}>
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-white/75 group-hover:text-white transition-colors">221 587 8583</p>
                    <p className="font-manrope text-xs text-white/40">WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--icon-bg-2)', color: 'var(--accent)' }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-white/75 leading-snug">Av Paseo La Niña 103, Fracc. Las Américas</p>
                    <p className="font-manrope text-xs text-white/40">94299 Boca del Río, Veracruz</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="space-y-3">
                <h3 className="font-space text-xs font-semibold tracking-[0.15em] uppercase"
                  style={{ color: 'var(--accent)' }}>Redes sociales</h3>
                <div className="flex gap-3">
                  {[
                    { icon: <FacebookIcon className="w-4 h-4" />, label: 'Facebook', handle: '@neumoclinical' },
                    { icon: <InstagramIcon className="w-4 h-4" />, label: 'Instagram', handle: '@neumoclinical' },
                  ].map(({ icon, label, handle }) => (
                    <a key={label} href="#" target="_blank" rel="noopener noreferrer"
                      aria-label={`${label} ${handle}`}
                      className="flex items-center gap-2 text-white/55 hover:text-white/90 transition-colors group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all group-hover:scale-105"
                        style={{ background: 'var(--icon-bg-2)', border: '1px solid var(--secondary-sm)', color: 'var(--accent)' }}>
                        {icon}
                      </div>
                      <span className="font-space text-xs">{handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Col 2: Contact form ── */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-5 h-full">
              <h3 className="font-space text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: 'var(--accent)' }}>Envíanos un mensaje</h3>
              <ContactForm />
            </div>
          </FadeIn>

          {/* ── Col 3: Map + quick CTA ── */}
          <FadeIn delay={0.2} className="lg:col-span-1">
            <div className="space-y-5 h-full flex flex-col">
              <h3 className="font-space text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: 'var(--accent)' }}>Ubicación</h3>

              {/* Map */}
              <div className="flex-1 min-h-[200px] rounded-2xl overflow-hidden relative"
                style={{ border: '1px solid var(--card-border)' }}>
                <LazyMap />
              </div>

              {/* Address link */}
              <a href="https://maps.google.com/?q=Av+Paseo+La+Ni%C3%B1a+103%2C+Boca+del+R%C3%ADo%2C+Veracruz+94299"
                target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2.5 group">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5 transition-colors" style={{ color: 'var(--accent)' }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <p className="font-manrope text-xs text-white/50 group-hover:text-white/80 transition-colors leading-relaxed underline underline-offset-2 decoration-white/20">
                  Av Paseo La Niña 103, Fracc. Las Américas, 94299 Boca del Río, Ver.
                </p>
              </a>

              {/* Quick-dial CTA */}
              <a href="tel:2222251062"
                className="flex items-center justify-center gap-2 font-space font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3.09a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.14 7.85a16 16 0 006.25 6.25l1.21-1.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                Llamar ahora
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Footer bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-white/30">
            © 2025 RESPIVER · Unidad de Medicina Respiratoria · Veracruz, México
          </p>
          <p className="font-space text-xs text-white/25">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
