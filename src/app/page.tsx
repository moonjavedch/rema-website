import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Hero from '@/features/home/Hero'
import TrustedBy from '@/features/home/TrustedBy'
import RemaSystem from '@/features/home/RemaSystem'
import Services from '@/features/home/Services'
import FeaturedWork from '@/features/home/FeaturedWork'
import Founder from '@/features/home/Founder'
import Stats from '@/features/home/Stats'
import Testimonials from '@/features/home/Testimonials'
import FinalCTA from '@/features/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <RemaSystem />
        <Services />
        <FeaturedWork />
        <Founder />
        <Stats />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}