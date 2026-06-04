// Programs.jsx
import Icon from '../components/Icon'
import { PROGRAMS } from '../utils/constants'

export function Programs() {
  return (
    <section id="programs" className="bg-white py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <div className="section-label">Training Programs</div>
          <div className="flex flex-wrap justify-between items-end gap-6">
            <h2 className="font-bebas tracking-[0.03em] text-navy" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
              PROGRAMS FOR EVERY LEVEL
            </h2>
            <a href="#contact" className="btn-outline-navy whitespace-nowrap">Inquire About Programs</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.title}
              className="program-card reveal relative bg-white border border-slate-200 rounded-xl p-8 cursor-default overflow-hidden"
              style={{
                transitionDelay: `${i * 0.1}s`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#93c5fd'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(26,86,219,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-navy font-bold text-base mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>
              <ul className="flex flex-col gap-2.5">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Icon name="check" size={14} color="#1a56db" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="reveal rounded-xl p-8 flex flex-col justify-center"
            style={{
              background: 'linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)',
              transitionDelay: '0.5s',
            }}
          >
            <div className="font-bebas text-3xl text-white tracking-[0.04em] mb-3 leading-tight">
              NOT SURE WHICH PROGRAM?
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Book a free consultation and we'll find the perfect fit for your athlete's goals and experience level.
            </p>
            <a href="#contact" className="btn-primary self-start">
              Book Free Consult <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills.jsx
import { SKILLS } from '../utils/constants'

export function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="section-label justify-center">Curriculum</div>
          <h2 className="font-bebas tracking-[0.03em] text-navy" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            SKILLS WE DEVELOP
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mt-4 leading-relaxed text-sm">
            A comprehensive volleyball education covering every aspect of the game — from physical fundamentals to mental performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {SKILLS.map((s, i) => (
            <div
              key={s.name}
              className="reveal bg-white border border-slate-200 rounded-xl p-6 cursor-default group"
              style={{
                transitionDelay: `${i * 0.06}s`,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a56db'; e.currentTarget.style.borderColor = '#1a56db'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(26,86,219,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <div
                className="font-bold text-navy text-sm mb-1.5 transition-colors duration-200"
                style={{}}
              >{s.name}</div>
              <div className="text-gray-500 text-xs leading-relaxed transition-colors duration-200">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// WhyChoose.jsx
import Icon2 from '../components/Icon'

const WHY = [
  { icon: 'target', title: 'Personalized Coaching', desc: "Every session is tailored to the individual player's goals, strengths, and areas for growth." },
  { icon: 'heart', title: 'Positive Environment', desc: 'Athletes thrive when they feel safe, encouraged, and genuinely excited to be on the court.' },
  { icon: 'award', title: 'Fundamentals First', desc: "Strong fundamentals are the foundation of long-term success. We never skip the basics." },
  { icon: 'clock', title: 'Flexible Scheduling', desc: 'Sessions arranged around school and family schedules — evenings and weekends available.' },
  { icon: 'location', title: 'Local Princeton Area', desc: 'Serving Princeton, West Windsor, East Windsor, Plainsboro, Lawrenceville & surrounding areas.' },
  { icon: 'users', title: 'Youth Development', desc: "More than volleyball — we build confidence, discipline, and teamwork that players carry into every area of life." },
]

export function WhyChoose() {
  return (
    <section className="py-28 px-[5%] relative overflow-hidden" style={{ background: '#0a1628' }}>
      <div className="absolute inset-0 net-pattern pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="reveal text-center mb-16">
          <div className="section-label justify-center" style={{ color: '#60a5fa' }}>
            Why RG
          </div>
          <h2 className="font-bebas text-white tracking-[0.03em]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            WHY CHOOSE RG VOLLEYBALL TRAINING
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map((r, i) => (
            <div
              key={r.title}
              className="reveal cursor-default rounded-2xl p-8 border"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.08)',
                transitionDelay: `${i * 0.1}s`,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.1)'; e.currentTarget.style.borderColor = 'rgba(96,165,250,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(59,130,246,0.15)' }}>
                <Icon2 name={r.icon} size={22} color="#60a5fa" />
              </div>
              <h3 className="text-white font-bold text-base mb-3">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing.jsx
const PLANS = [
  {
    name: 'Private Lesson',
    price: '$40–$60',
    unit: 'per session',
    desc: "One-on-one coaching with full attention on your athlete's individual development.",
    features: ['1-hour session', 'Customized training plan', 'Personalized feedback', 'Flexible scheduling', 'Progress tracking'],
    cta: 'Book a Session',
  },
  {
    name: 'Small Group Session',
    price: '$25–$35',
    unit: 'per player',
    desc: 'Train with 2–6 athletes in a focused, collaborative environment.',
    features: ['2–6 players per session', '1-hour session', 'Team drills & exercises', 'Individual coaching cues', 'Fun competitive format'],
    cta: 'Book Group Session',
    featured: true,
  },
  {
    name: 'Training Packages',
    price: 'Custom',
    unit: 'pricing available',
    desc: 'Commit to a training plan and get the best value for your investment.',
    features: ['Multi-session bundles', 'Discounted package rates', 'Progress milestone reviews', 'Priority scheduling', 'Parent progress updates'],
    cta: 'Get Custom Quote',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-28 px-[5%]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="section-label justify-center">Investment</div>
          <h2 className="font-bebas tracking-[0.03em] text-navy" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            TRANSPARENT PRICING
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mt-4 leading-relaxed text-sm">
            No hidden fees. Contact us for customized training plans that fit your schedule and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative rounded-2xl p-10 text-center ${p.featured ? 'scale-105' : 'bg-white border border-slate-200'}`}
              style={{
                transitionDelay: `${i * 0.12}s`,
                ...(p.featured ? { background: '#0a1628' } : {}),
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = p.featured ? 'scale(1.05) translateY(-6px)' : 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(26,86,219,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = p.featured ? 'scale(1.05)' : 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[0.7rem] font-bold tracking-[0.1em] uppercase px-5 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className={`text-[0.8rem] font-bold tracking-[0.08em] uppercase mb-2 ${p.featured ? 'text-blue-300' : 'text-brand-blue'}`}>{p.name}</div>
              <div className={`font-bebas text-5xl tracking-[0.03em] leading-none mb-1 ${p.featured ? 'text-white' : 'text-navy'}`}>{p.price}</div>
              <div className={`text-xs mb-5 ${p.featured ? 'text-white/40' : 'text-gray-400'}`}>{p.unit}</div>
              <p className={`text-sm leading-relaxed mb-7 ${p.featured ? 'text-white/65' : 'text-gray-500'}`}>{p.desc}</p>
              <ul className="flex flex-col gap-2.5 mb-9 text-left">
                {p.features.map(f => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${p.featured ? 'text-white/80' : 'text-gray-700'}`}>
                    <Icon2 name="check" size={14} color={p.featured ? '#60a5fa' : '#1a56db'} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-lg font-bold text-sm no-underline transition-all duration-200 hover:-translate-y-0.5 ${p.featured
                  ? 'bg-brand-blue text-white hover:bg-blue-700'
                  : 'border border-slate-200 text-navy hover:bg-navy hover:text-white hover:border-navy'
                  }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10 bg-brand-blue/5 border border-brand-blue/10 rounded-xl py-5 px-6">
          <p className="text-gray-700 text-sm font-medium">
            Contact for customized training plans and family packages.{' '}
            <a href="#contact" className="text-brand-blue font-bold no-underline hover:underline">Get in Touch →</a>
          </p>
        </div>
      </div>
    </section>
  )
}

// Gallery.jsx
const GALLERY_ITEMS = [
  { src: '/coach-spike.png', label: 'Spike at the Net', pos: 'center 20%' },
  { src: '/coach-match.png', label: 'Match Competition', pos: 'center top' },
  { src: '/coach-holding.png', label: 'Pre-Game Focus', pos: 'center top' },
  { label: 'Serving Technique', placeholder: true },
  { label: 'Team Drills', placeholder: true },
  { label: 'Court Footwork', placeholder: true },
]

export function Gallery() {
  return (
    <section className="bg-white py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="section-label justify-center">Gallery</div>
          <h2 className="font-bebas tracking-[0.03em] text-navy" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            TRAINING IN ACTION
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal relative overflow-hidden rounded-2xl cursor-default"
              style={{
                aspectRatio: '4/3',
                background: item.placeholder ? 'linear-gradient(135deg, #0a1628, #1a3a6e)' : 'none',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {item.src ? (
                <>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ objectPosition: item.pos || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 text-white font-bold text-xs tracking-[0.1em] uppercase">{item.label}</div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 net-pattern" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="text-4xl mb-3">🏐</div>
                    <div className="text-white/60 text-xs font-bold tracking-[0.08em] uppercase">{item.label}</div>
                    <div className="text-white/30 text-xs mt-1">Photo coming soon</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ.jsx
import { useState } from 'react'
import { FAQS } from '../utils/constants'

export function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="bg-slate-50 py-28 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <div className="reveal mb-14">
          <div className="section-label">Questions</div>
          <h2 className="font-bebas tracking-[0.03em] text-navy" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="reveal divide-y divide-slate-200">
          {FAQS.map((f, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-5 flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer font-dm text-navy font-semibold text-base transition-colors duration-200 hover:text-brand-blue"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <Icon2 name={open === i ? 'chevronUp' : 'chevronDown'} size={20} color={open === i ? '#1a56db' : '#0a1628'} />
              </button>
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #0a1628, #1a3a6e)' }}>
          <div className="font-bebas text-[1.8rem] text-white tracking-[0.04em] mb-3">STILL HAVE QUESTIONS?</div>
          <p className="text-white/60 text-sm mb-8">Reach out directly — we're happy to answer anything about programs, scheduling, or logistics.</p>
          <a href="#contact" className="btn-primary">Contact Coach</a>
        </div>
      </div>
    </section>
  )
}

// ServiceArea.jsx
import { SERVICE_AREAS } from '../utils/constants'
import Icon3 from '../components/Icon'

export function ServiceArea() {
  return (
    <section className="bg-white py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <div className="section-label justify-center">Location</div>
          <h2 className="font-bebas tracking-[0.03em] text-navy" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            SERVICE AREA
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mt-4 text-sm leading-relaxed">
            Serving families and young athletes across Central New Jersey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map visual */}
          <div className="reveal-left relative rounded-2xl overflow-hidden border border-blue-100" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #e0f2fe, #dbeafe)', minHeight: 280 }}>
            <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(59,130,246,0.07) 0px, rgba(59,130,246,0.07) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(59,130,246,0.07) 0px, rgba(59,130,246,0.07) 1px, transparent 1px, transparent 40px)' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <Icon3 name="location" size={52} color="#1a56db" />
              <div className="font-bebas text-2xl text-navy tracking-[0.04em] mt-3">CENTRAL NEW JERSEY</div>
              <div className="text-gray-500 text-xs mt-1">Princeton & Surrounding Communities</div>
            </div>
            {/* Pin labels */}
            {[
              { name: 'Princeton', top: '28%', left: '42%' },
              { name: 'W. Windsor', top: '44%', left: '22%' },
              { name: 'Lawrenceville', top: '60%', left: '55%' },
            ].map(p => (
              <div key={p.name} className="absolute bg-brand-blue text-white text-[0.65rem] font-bold px-3 py-1 rounded-full shadow-lg" style={{ top: p.top, left: p.left }}>
                {p.name}
              </div>
            ))}
          </div>

          {/* List */}
          <div className="reveal-right">
            <h3 className="font-bold text-navy text-xl mb-3">Communities We Serve</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Training sessions held at convenient local facilities throughout these communities:</p>
            <div className="flex flex-col gap-3 mb-9">
              {SERVICE_AREAS.map((a, i) => (
                <div
                  key={a}
                  className={`flex items-center gap-4 px-5 py-3.5 rounded-xl border text-sm font-semibold text-navy ${i === SERVICE_AREAS.length - 1 ? 'bg-brand-blue/5 border-brand-blue/15 italic font-normal text-gray-500' : 'bg-white border-slate-200'}`}
                >
                  <Icon3 name="location" size={15} color="#1a56db" />
                  {a}
                </div>
              ))}
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
              <strong className="text-navy">Note:</strong> Additional locations may be available upon request. Contact us to discuss training near you.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTABanner.jsx
export function CTABanner() {
  return (
    <section className="py-24 px-[5%] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a56db 0%, #1a3a6e 100%)' }}>
      <div className="absolute inset-0 net-pattern pointer-events-none" />
      <div className="reveal max-w-3xl mx-auto text-center relative">
        <h2 className="font-bebas text-white leading-[1.05] tracking-[0.03em] mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          READY TO TAKE YOUR GAME TO THE NEXT LEVEL?
        </h2>
        <p className="text-white/75 text-base leading-relaxed mb-10">
          Book a free consultation and let's build a training plan that fits your athlete's goals, schedule, and experience level.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-navy font-bold text-base py-4 px-9 rounded-lg no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
          >
            Book Free Consultation <Icon2 name="arrow" size={18} />
          </a>
          <a href="mailto:tulparjanbolat0522@gmail.com" className="btn-outline-white text-base py-4 px-9">
            Email Coach
          </a>
        </div>
      </div>
    </section>
  )
}

// Contact.jsx
import { useState as useContactState } from 'react'

export function Contact() {
  const [form, setContactForm] = useContactState({ parentName: '', playerName: '', playerAge: '', experience: '', phone: '', email: '', trainingType: '', message: '' })
  const [submitted, setSubmitted] = useContactState(false)

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }
  const update = (k) => (e) => setContactForm(f => ({ ...f, [k]: e.target.value }))

  const inputClass = "w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-3.5 py-3 text-white text-sm outline-none font-dm placeholder:text-white/30 focus:border-brand-accent/60 transition-colors duration-200"
  const labelClass = "block text-white/50 text-[0.72rem] font-bold tracking-[0.08em] uppercase mb-2"

  return (
    <section id="contact" className="py-28 px-[5%] relative overflow-hidden" style={{ background: '#0a1628' }}>
      <div className="absolute inset-0 net-pattern pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <div className="reveal-left">
            <div className="section-label" style={{ color: '#60a5fa' }}>Get In Touch</div>
            <h2 className="font-bebas text-white tracking-[0.03em] mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
              CONTACT COACH
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-14">
              Ready to get started? Fill out the form and we'll respond within 24 hours to schedule your free consultation.
            </p>

            <div className="flex flex-col gap-7 mb-14">
              {[
                { icon: 'mail', label: 'Email', value: 'tulparjanbolat0522@gmail.com' },
                { icon: 'phone', label: 'Phone', value: '(609) 436-8537' },
                { icon: 'location', label: 'Area', value: 'Princeton, NJ & Surrounding Communities' },
                { icon: 'calendar', label: 'Availability', value: 'Evenings & Weekends — Flexible' },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.15)' }}>
                    <Icon3 name={c.icon} size={19} color="#60a5fa" />
                  </div>
                  <div>
                    <div className="text-white/35 text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-1">{c.label}</div>
                    <div className="text-white text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-white/35 text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-4">Follow Us</div>
              <div className="flex gap-3">
                {['instagram', 'facebook', 'twitter'].map(s => (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/50 border border-white/10 bg-white/5 hover:bg-brand-blue/20 hover:border-brand-accent/40 hover:text-white transition-all duration-200"
                  >
                    <Icon3 name={s} size={16} color="currentColor" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <div className="rounded-2xl p-10 backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-5">✅</div>
                  <div className="font-bebas text-3xl text-white tracking-[0.04em] mb-3">MESSAGE SENT!</div>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Thank you for reaching out. We'll respond within 24 hours to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-white font-bold text-base mb-1">Book a Free Consultation</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Parent / Guardian Name</label>
                      <input type="text" placeholder="Your name" required className={inputClass} value={form.parentName} onChange={update('parentName')} />
                    </div>
                    <div>
                      <label className={labelClass}>Player Name</label>
                      <input type="text" placeholder="Athlete's name" required className={inputClass} value={form.playerName} onChange={update('playerName')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Player Age</label>
                      <select className={inputClass} value={form.playerAge} onChange={update('playerAge')} style={{ colorScheme: 'dark' }}>
                        <option value="">Select age</option>
                        {Array.from({ length: 11 }, (_, i) => i + 8).map(a => <option key={a} value={a}>{a} years old</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Experience Level</label>
                      <select className={inputClass} value={form.experience} onChange={update('experience')} style={{ colorScheme: 'dark' }}>
                        <option value="">Select level</option>
                        <option value="none">No experience</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input type="tel" placeholder="(609) 555-0000" required className={inputClass} value={form.phone} onChange={update('phone')} />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input type="email" placeholder="parent@email.com" required className={inputClass} value={form.email} onChange={update('email')} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Preferred Training Type</label>
                    <select className={inputClass} value={form.trainingType} onChange={update('trainingType')} style={{ colorScheme: 'dark' }}>
                      <option value="">Select training type</option>
                      <option value="private">Private Lessons</option>
                      <option value="group">Small Group Training</option>
                      <option value="beginner">Beginner Program</option>
                      <option value="intermediate">Intermediate Development</option>
                      <option value="clinic">Summer Clinic</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Message (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your athlete's goals, preferred session times, or any questions..."
                      className={inputClass}
                      style={{ resize: 'vertical' }}
                      value={form.message}
                      onChange={update('message')}
                    />
                  </div>

                  <button type="submit" className="btn-primary justify-center w-full py-4 text-base mt-1">
                    Send Message & Book Free Consult <Icon3 name="arrow" size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
