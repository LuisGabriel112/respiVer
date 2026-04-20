import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingCTA from '@/components/FloatingCTA'

// Below-fold sections — dynamically imported so their JS doesn't block initial load
const Ticker = dynamic(() => import('@/components/Ticker'))
const StatsSection = dynamic(() => import('@/components/StatsSection'))
const WhenSection = dynamic(() => import('@/components/WhenSection'))
const StudiesSection = dynamic(() => import('@/components/StudiesSection'))
const GallerySection = dynamic(() => import('@/components/GallerySection'))
const ContactFooter = dynamic(() => import('@/components/ContactFooter'))

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
