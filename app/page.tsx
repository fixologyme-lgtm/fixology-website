import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import About from '@/components/sections/About'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <About />
      <CTA />
      <Footer />
    </>
  )
}
