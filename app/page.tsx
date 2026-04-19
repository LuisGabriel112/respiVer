import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import StatsSection from '@/components/StatsSection'
import WhenSection from '@/components/WhenSection'
import StudiesSection from '@/components/StudiesSection'
import GallerySection from '@/components/GallerySection'
import ContactFooter from '@/components/ContactFooter'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Ticker />
      <StatsSection />
      <WhenSection />
      <StudiesSection />
      <GallerySection />
      <ContactFooter />
    </main>
  )
}
