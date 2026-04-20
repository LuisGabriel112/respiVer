import type { Metadata } from 'next'
import { plusJakartaSans, manrope, spaceGrotesk } from '@/lib/fonts'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://respiver.mx'),
  title: 'RESPIVER | Unidad de Medicina Respiratoria',
  description:
    'Especialistas en pruebas de función respiratoria en Veracruz. Tecnología avanzada para el diagnóstico y seguimiento de asma, EPOC, fibrosis pulmonar, apnea del sueño y más.',
  keywords: [
    'función respiratoria',
    'espirometría',
    'neumología',
    'Veracruz',
    'EPOC',
    'asma',
    'polisomnografía',
    'pletismografía',
    'DLCO',
    'FeNO',
    'medicina respiratoria',
    'pruebas pulmonares',
  ],
  authors: [{ name: 'RESPIVER' }],
  openGraph: {
    title: 'RESPIVER | Unidad de Medicina Respiratoria',
    description:
      'Especialistas en pruebas de función respiratoria en Veracruz. Tecnología avanzada para asma, EPOC, fibrosis pulmonar, apnea del sueño y más.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'RESPIVER',
    images: [
      {
        url: '/logo.jpeg',
        width: 431,
        height: 570,
        alt: 'RESPIVER – Unidad de Medicina Respiratoria',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'RESPIVER | Unidad de Medicina Respiratoria',
    description: 'Especialistas en pruebas de función respiratoria en Veracruz.',
    images: ['/logo.jpeg'],
  },
}

// Runs before first paint — prevents FOUC on dark mode default
const themeScript = `(function(){try{var t=localStorage.getItem('respiver-theme');if(t!=='light'){document.documentElement.classList.add('dark');}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>
      <body className="font-manrope antialiased overflow-x-hidden">
        {/* Skip to content — accessibility */}
        <a href="#main-content" className="skip-to-content">Saltar al contenido</a>
        {/* Inline script runs synchronously before render — prevents FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
