import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingCTA from '@/components/FloatingCTA'

const skeleton = (h: string) => () => <div className={`${h} w-full`} aria-hidden="true" />

// Below-fold sections — dynamically imported so their JS doesn't block initial load
const Ticker = dynamic(() => import('@/components/Ticker'), { loading: skeleton('h-12') })
const StatsSection = dynamic(() => import('@/components/StatsSection'), { loading: skeleton('h-40') })
const WhenSection = dynamic(() => import('@/components/WhenSection'), { loading: skeleton('h-96') })
const StudiesSection = dynamic(() => import('@/components/StudiesSection'), { loading: skeleton('h-96') })
const GallerySection = dynamic(() => import('@/components/GallerySection'), { loading: skeleton('h-96') })
const ContactFooter = dynamic(() => import('@/components/ContactFooter'), { loading: skeleton('h-64') })

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Ticker />
      <StatsSection />
      <WhenSection />
      <StudiesSection />
      <GallerySection />
      <ContactFooter />
      <FloatingCTA />
    </main>
  )
}
