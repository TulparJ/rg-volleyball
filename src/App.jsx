import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import About from './sections/About'
import {
  Programs,
  Skills,
  WhyChoose,
  Pricing,
  Gallery,
  FAQ,
  ServiceArea,
  CTABanner,
  Contact,
} from './sections/Sections'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <Programs />
        <Skills />
        <WhyChoose />
        <Pricing />
        <Gallery />
        <FAQ />
        <ServiceArea />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
