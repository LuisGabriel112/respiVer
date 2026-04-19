'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#estudios', label: 'Estudios' },
  { href: '#contacto', label: 'Contacto' },
]

function SunIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const accentColor = 'var(--accent)'
  const textColor = 'var(--text)'

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--nav-border)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.15)',
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="RESPIVER inicio">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] flex items-center justify-center shadow-lg transition-shadow"
              style={{ boxShadow: '0 0 12px color-mix(in srgb, var(--accent) 25%, transparent)' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2C7.5 2 6 4.5 6 7c0 1.5.4 2.8.9 4L5 13.5c-.4.7 0 1.5.8 1.5H7l.8-1.5h4.4l.8 1.5h1.2c.8 0 1.2-.8.8-1.5L13 11c.5-1.2.9-2.5.9-4C14 4.5 12.5 2 10 2z" fill="white"/>
                <path d="M7.5 10.5c.8.8 4.2.8 5 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-jakarta font-bold text-xl tracking-tight" style={{ color: textColor }}>
              RESPI<span style={{ color: accentColor }}>VER</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-space text-sm font-medium transition-colors duration-200 group"
                style={{ color: 'var(--text)', opacity: 0.7 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)', e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)', e.currentTarget.style.opacity = '0.7')}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: 'var(--accent)' }} />
              </a>
            ))}

            {/* Theme toggle */}
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: 'var(--secondary-sm)',
                border: '1px solid var(--secondary-md)',
                color: 'var(--accent)',
              }}
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <a
              href="#contacto"
              className="font-space text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: 'var(--accent)',
                color: 'var(--accent-fg)',
                boxShadow: '0 0 0 0 transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-2)'
                e.currentTarget.style.boxShadow = '0 8px 24px color-mix(in srgb, var(--accent) 30%, transparent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 0 0 transparent'
              }}
            >
              Agendar cita
            </a>
          </div>

          {/* Mobile right: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--secondary-sm)', color: 'var(--accent)' }}
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2 -mr-2"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: 'var(--text)' }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: 'var(--text)' }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-0.5 rounded-full"
                style={{ background: 'var(--text)' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--nav-border)',
            }}
          >
            <div className="px-4 py-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-space text-sm font-medium transition-colors py-2.5"
                  style={{
                    color: 'var(--text)',
                    borderBottom: '1px solid var(--secondary-sm)',
                    opacity: 0.75,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="block font-space text-sm font-semibold px-5 py-3 rounded-xl text-center transition-colors"
                  style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
                >
                  Agendar cita
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
