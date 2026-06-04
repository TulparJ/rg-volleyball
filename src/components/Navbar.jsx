import { useState, useEffect } from 'react'
import Icon from './Icon'
import { NAV_LINKS } from '../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 no-underline">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 ${
              scrolled
                ? 'bg-brand-blue border-transparent'
                : 'bg-white/10 border-white/30'
            }`}
          >
            <span className="font-bebas text-white text-lg tracking-wide leading-none">RG</span>
          </div>
          <div>
            <div className={`font-bebas text-[1.1rem] tracking-[0.06em] leading-none transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}>
              RG VOLLEYBALL
            </div>
            <div className={`text-[0.6rem] font-bold tracking-[0.1em] uppercase leading-tight transition-colors duration-300 ${scrolled ? 'text-brand-blue' : 'text-white/60'}`}>
              TRAINING
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium tracking-wide no-underline transition-colors duration-200 ${
                scrolled ? 'text-navy hover:text-brand-blue' : 'text-white/85 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
            Book Free Consult
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-1 transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Icon name="menu" size={26} color="currentColor" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-navy flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-white"
          aria-label="Close menu"
        >
          <Icon name="x" size={28} color="white" />
        </button>

        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="font-bebas text-5xl tracking-[0.04em] text-white no-underline hover:text-brand-accent transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="btn-primary mt-4 text-base py-3.5 px-8"
        >
          Book Free Consult
        </a>

        <div className="absolute bottom-8 text-white/30 text-xs tracking-widest uppercase">
          RG Volleyball Training · Princeton, NJ
        </div>
      </div>
    </>
  )
}
