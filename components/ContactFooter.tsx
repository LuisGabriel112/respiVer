'use client'

import { FadeIn } from './FadeIn'

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

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 pb-16" style={{ borderBottom: '1px solid var(--secondary-sm)' }}>

          {/* Left column – brand + contact info */}
          <FadeIn>
            <div className="space-y-8">
              {/* Logo */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(to bottom right, var(--accent), var(--secondary))' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M10 2C7.5 2 6 4.5 6 7c0 1.5.4 2.8.9 4L5 13.5c-.4.7 0 1.5.8 1.5H7l.8-1.5h4.4l.8 1.5h1.2c.8 0 1.2-.8.8-1.5L13 11c.5-1.2.9-2.5.9-4C14 4.5 12.5 2 10 2z" fill="white"/>
                      <path d="M7.5 10.5c.8.8 4.2.8 5 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
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

              {/* Contact details */}
              <div className="space-y-4">
                <h3 className="font-space text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: 'var(--accent)' }}>
                  Contacto
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--icon-bg-2)', color: 'var(--accent)' }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-white/75">Av Paseo La Niña 103, Fracc. Las Américas</p>
                    <p className="font-manrope text-xs text-white/40">94299 Boca del Río, Veracruz</p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href="tel:2222251062"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: 'var(--icon-bg-2)', color: 'var(--accent)' }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3.09a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.14 7.85a16 16 0 006.25 6.25l1.21-1.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-white/75 group-hover:text-white transition-colors">222 225 1062</p>
                    <p className="font-manrope text-xs text-white/40">Teléfono</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/522215878583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: 'var(--icon-bg-2)', color: 'var(--accent)' }}>
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-manrope text-sm text-white/75 group-hover:text-white transition-colors">221 587 8583</p>
                    <p className="font-manrope text-xs text-white/40">WhatsApp</p>
                  </div>
                </a>
              </div>

              {/* Social */}
              <div className="space-y-3">
                <h3 className="font-space text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: 'var(--accent)' }}>
                  Redes sociales
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook @neumoclinical"
                    className="flex items-center gap-2 text-white/55 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                      style={{ background: 'var(--icon-bg-2)', border: '1px solid var(--secondary-sm)', color: 'var(--accent)' }}>
                      <FacebookIcon className="w-4 h-4" />
                    </div>
                    <span className="font-space text-xs">@neumoclinical</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram @neumoclinical"
                    className="flex items-center gap-2 text-white/55 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                      style={{ background: 'var(--icon-bg-2)', border: '1px solid var(--secondary-sm)', color: 'var(--accent)' }}>
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <span className="font-space text-xs">@neumoclinical</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right column – Map placeholder + schedule CTA */}
          <FadeIn delay={0.15}>
            <div className="space-y-6 h-full flex flex-col">
              <h3 className="font-space text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: 'var(--accent)' }}>
                Ubicación
              </h3>

              {/* Google Maps embed */}
              <div className="flex-1 min-h-[280px] rounded-2xl overflow-hidden relative"
                style={{ border: '1px solid var(--card-border)' }}>
                <iframe
                  title="Ubicación RESPIVER"
                  src="https://maps.google.com/maps?q=Av+Paseo+La+Ni%C3%B1a+103%2C+Fraccionamiento+Las+Americas%2C+Boca+del+R%C3%ADo%2C+Veracruz+94299%2C+M%C3%A9xico&output=embed&z=16&hl=es"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                />
              </div>

              {/* Dirección */}
              <a
                href="https://maps.google.com/?q=Av+Paseo+La+Ni%C3%B1a+103%2C+Boca+del+R%C3%ADo%2C+Veracruz+94299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                  style={{ background: 'var(--icon-bg-2)', color: 'var(--accent)' }}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="font-manrope text-sm text-white/75 group-hover:text-white transition-colors leading-snug">
                    Av Paseo La Niña 103, Fracc. Las Américas
                  </p>
                  <p className="font-manrope text-xs text-white/40 mt-0.5">
                    94299 Boca del Río, Veracruz · <span className="underline underline-offset-2">Ver en Google Maps</span>
                  </p>
                </div>
              </a>

              {/* Appointment CTA card */}
              <div className="rounded-2xl p-6" style={{ background: 'var(--cta-card)', border: '1px solid var(--card-border)' }}>
                <p className="font-space text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
                  ¿Listo para tu cita?
                </p>
                <p className="font-manrope text-sm text-white/60 mb-5 leading-relaxed">
                  Contáctanos por WhatsApp o teléfono y agenda tu estudio de función respiratoria.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/522215878583"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 font-space font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:2222251062"
                    className="flex-1 inline-flex items-center justify-center gap-2 font-space font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200"
                    style={{ color: 'var(--accent)', border: '1px solid var(--icon-border)' }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3.09a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.14 7.85a16 16 0 006.25 6.25l1.21-1.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                    Llamar
                  </a>
                </div>
              </div>
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
