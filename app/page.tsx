import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingCTA from '@/components/FloatingCTA'
import SeccionPersonalizada from '@/components/SeccionPersonalizada'
import { getContacto, getHeroConfig, getTickerItems, getStats, getGaleria, getStudies, getPaginaConfig } from '@/lib/site-config'

const skeleton = (h: string) => () => <div className={`${h} w-full`} aria-hidden="true" />

const Ticker        = dynamic(() => import('@/components/Ticker'),        { loading: skeleton('h-12') })
const StatsSection  = dynamic(() => import('@/components/StatsSection'),  { loading: skeleton('h-40') })
const WhenSection   = dynamic(() => import('@/components/WhenSection'),   { loading: skeleton('h-96') })
const StudiesSection  = dynamic(() => import('@/components/StudiesSection'), { loading: skeleton('h-96') })
const GallerySection  = dynamic(() => import('@/components/GallerySection'), { loading: skeleton('h-96') })
const ContactFooter   = dynamic(() => import('@/components/ContactFooter'),  { loading: skeleton('h-64') })

// Secciones personalizadas filtradas por posición
function Secciones({ secciones, posicion }: { secciones: ReturnType<typeof Array.prototype.filter>; posicion: string }) {
  const filtered = secciones.filter((s: any) => s.posicion === posicion && s.visible)
  if (!filtered.length) return null
  return (
    <>
      {filtered.map((s: any, i: number) => (
        <SeccionPersonalizada key={`${posicion}-${i}`} seccion={s} />
      ))}
    </>
  )
}

export default async function Home() {
  const [contacto, heroConfig, tickerItems, stats, galeria, studies, pagina] = await Promise.all([
    getContacto(),
    getHeroConfig(),
    getTickerItems(),
    getStats(),
    getGaleria(),
    getStudies(),
    getPaginaConfig(),
  ])

  const secciones = pagina.secciones

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero contacto={contacto} heroConfig={heroConfig} />

      <Secciones secciones={secciones} posicion="post-hero" />

      {pagina.mostrar_ticker && <Ticker items={tickerItems} />}
      {pagina.mostrar_stats  && <StatsSection stats={stats} />}

      <Secciones secciones={secciones} posicion="post-stats" />

      {pagina.mostrar_cuando && <WhenSection />}
      <StudiesSection studies={studies} />

      <Secciones secciones={secciones} posicion="post-estudios" />

      {pagina.mostrar_galeria && <GallerySection galeria={galeria} />}

      <Secciones secciones={secciones} posicion="pre-contacto" />

      <ContactFooter contacto={contacto} />
      <FloatingCTA whatsappNumero={contacto.whatsapp_numero} />
    </main>
  )
}
