'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.556 4.113 1.524 5.843L.057 23.07l5.348-1.43A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.273-1.536l-.378-.224-3.926 1.05 1.045-3.818-.246-.393A9.818 9.818 0 0112 2.182c5.42 0 9.818 4.398 9.818 9.818S17.42 21.818 12 21.818z"/>
    </svg>
  )
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          className="fixed bottom-6 right-5 z-50 flex items-center gap-3"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-2xl animate-ping opacity-20"
            style={{ background: '#25D366' }} aria-hidden="true" />

          <a
            href="https://wa.me/522215878583?text=Hola%20RESPIVER%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="relative flex items-center gap-2.5 px-4 py-3 rounded-2xl font-space font-semibold text-sm text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none"
            style={{ background: '#25D366', boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">Agendar cita</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
