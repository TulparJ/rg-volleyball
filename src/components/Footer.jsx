import Icon from './Icon'
import { NAV_LINKS, PROGRAMS, SERVICE_AREAS } from '../utils/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060f1e] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-bebas text-white text-lg tracking-wide">RG</span>
              </div>
              <div>
                <div className="font-bebas text-white text-[1.1rem] tracking-[0.06em] leading-none">RG VOLLEYBALL</div>
                <div className="text-[0.6rem] font-bold tracking-[0.1em] uppercase text-white/40 leading-tight">TRAINING</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-7 mb-6">
              Youth volleyball coaching in the Princeton, NJ area. Building skills, confidence, and a love for the game.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {['instagram', 'facebook', 'twitter'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-brand-blue/20 hover:border-brand-accent/40 hover:text-white transition-all duration-200"
                  aria-label={s}
                >
                  <Icon name={s} size={16} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/50 text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-5">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/50 text-sm no-underline hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white/50 text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-5">Programs</h4>
            <div className="flex flex-col gap-2.5">
              {PROGRAMS.map(p => (
                <a key={p.title} href="#programs" className="text-white/50 text-sm no-underline hover:text-white transition-colors duration-200">
                  {p.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/50 text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-5">Contact</h4>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: 'mail', text: 'rgvolleyball@email.com' },
                { icon: 'phone', text: '(609) 555-0123' },
                { icon: 'location', text: 'Princeton, NJ Area' },
              ].map(c => (
                <div key={c.icon} className="flex items-center gap-3 text-white/50 text-sm">
                  <Icon name={c.icon} size={14} color="currentColor" />
                  {c.text}
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              Book Free Consult
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {year} RG Volleyball Training. All rights reserved.
          </p>
          <p className="text-white/25 text-xs text-center sm:text-right">
            Serving Princeton, West Windsor, East Windsor, Plainsboro & Lawrenceville, NJ
          </p>
        </div>
      </div>
    </footer>
  )
}
