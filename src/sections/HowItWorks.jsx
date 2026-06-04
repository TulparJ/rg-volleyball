import Icon from '../components/Icon'
import { PROCESS_STEPS } from '../utils/constants'

export default function HowItWorks() {
  return (
    <section className="bg-navy py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="section-label justify-center" style={{ color: '#60a5fa' }}>
            The Process
          </div>
          <h2 className="font-bebas text-white tracking-[0.03em]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            HOW IT WORKS
          </h2>
          <p className="text-white/50 max-w-md mx-auto mt-4 leading-relaxed text-sm">
            Getting started is simple. Here's what to expect from first contact to ongoing progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.n}
              className="reveal group cursor-default"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-9 h-full transition-all duration-300 group-hover:bg-brand-blue/10 group-hover:border-brand-accent/35">
                <div className="font-bebas text-5xl text-brand-accent/30 tracking-[0.04em] leading-none mb-4 transition-colors duration-300 group-hover:text-brand-accent/60">
                  {s.n}
                </div>
                <h3 className="text-white font-bold text-base mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-14">
          <a href="#contact" className="btn-primary text-base py-4 px-9">
            Book Your Free Consultation <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
