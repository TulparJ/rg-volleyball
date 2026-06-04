import Icon from '../components/Icon'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #112240 45%, #1a3a6e 75%, #0a1628 100%)' }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 net-pattern pointer-events-none" />

      {/* Glow orbs */}
      <div
        className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,86,219,0.12) 0%, transparent 70%)', animation: 'pulseSlow 8s ease infinite 2s' }}
      />

      {/* Hero image — coach-spike in bg, darkened */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/coach-spike.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[75%_center] opacity-[0.12]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-[5%] pt-28 pb-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 mb-7"
          style={{ animation: 'fadeIn 0.6s ease forwards' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" style={{ animation: 'pulseSlow 2s ease infinite' }} />
          <span className="text-blue-300 text-xs font-bold tracking-[0.1em] uppercase">
            Now Enrolling — Princeton, NJ Area
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-bebas leading-[0.95] tracking-[0.02em] text-white max-w-4xl mb-7"
          style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)', animation: 'fadeUp 0.8s ease 0.2s both' }}
        >
          VOLLEYBALL COACHING<br />
          <span className="gradient-text">FOR YOUNG ATHLETES</span><br />
          IN THE PRINCETON AREA
        </h1>

        {/* Sub */}
        <p
          className="text-white/70 max-w-xl leading-relaxed mb-11 font-light"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', animation: 'fadeUp 0.8s ease 0.4s both' }}
        >
          Helping players build confidence, develop skills, and reach their potential through personalized volleyball training tailored to every level.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: 'fadeUp 0.8s ease 0.6s both' }}
        >
          <a href="#contact" className="btn-primary text-base py-4 px-8">
            Book a Free Consultation <Icon name="arrow" size={18} />
          </a>
          <a href="#programs" className="btn-outline-white text-base py-4 px-8">
            View Programs
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-12 mt-20"
          style={{ animation: 'fadeUp 0.8s ease 0.8s both' }}
        >
          {[
            { num: '8–18', label: 'Ages Served' },
            { num: '5+', label: 'Programs' },
            { num: '6', label: 'Communities' },
            { num: '100%', label: 'Personalized' },
          ].map(s => (
            <div key={s.num}>
              <div className="font-bebas text-[2.4rem] text-white tracking-[0.04em] leading-none">{s.num}</div>
              <div className="text-white/45 text-[0.72rem] font-semibold tracking-[0.1em] uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 animate-float">
        <span className="text-[0.65rem] tracking-[0.15em] uppercase">Scroll</span>
        <Icon name="chevronDown" size={18} color="rgba(255,255,255,0.35)" />
      </div>
    </section>
  )
}
