const TIMELINE = [
  'Began playing competitive volleyball in Mongolia',
  'Competed at high school championships — state/provincial level',
  "Earned official volleyball player certification through Mongolia's sports system",
  'Relocated to the United States; continued playing competitively',
  'Currently studying Computer Science at Rider University, NJ',
  'Now coaching and mentoring young athletes in the Princeton area',
]

const CREDENTIALS = [
  'Certified Volleyball Player',
  'Multi-Position Competitive Experience',
  'Youth Coaching & Mentoring',
  'Mongolia Championship Level',
]

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-28 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-20">
          <div className="section-label">About the Coach</div>
          <h2 className="font-bebas tracking-[0.03em] text-navy" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            MEET YOUR COACH
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — photo + credentials */}
          <div className="reveal-left">
            {/* Main headshot */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(10,22,40,0.2)]"
              style={{ aspectRatio: '3/4', maxWidth: 420, background: 'linear-gradient(135deg, #1a3a6e 0%, #112240 100%)' }}
            >
              <img
                src="/coach-holding.png"
                alt="Volleyball coach holding a volleyball"
                className="w-full h-full object-cover object-center"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy via-navy/80 to-transparent">
                <div className="text-white font-bold text-base">RG Volleyball Training</div>
                <div className="text-brand-accent text-sm mt-1">CS Student @ Rider University, NJ</div>
              </div>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              {CREDENTIALS.map(c => (
                <span
                  key={c}
                  className="bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-semibold text-navy shadow-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right — bio + action photo + timeline */}
          <div className="reveal-right">
            {/* Action photo */}
            <div className="relative rounded-2xl overflow-hidden mb-9" style={{ aspectRatio: '16/9' }}>
              <img
                src="/coach-spike.png"
                alt="Coach performing a spike during a volleyball match"
                className="w-full h-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white font-bold text-xs tracking-[0.1em] uppercase">
                Active Competitive Player
              </div>
            </div>

            {/* Quote / pull */}
            <h3
              className="font-serif-display text-navy mb-5 leading-snug"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', fontStyle: 'italic' }}
            >
              "A passion for the game, a commitment to the next generation."
            </h3>

            <p className="text-gray-500 leading-[1.85] text-sm mb-4">
              Originally from Mongolia, I grew up with volleyball as a core part of my competitive life. Throughout high school, I played at the highest levels — competing at state and provincial championships and earning an official volleyball player certification through Mongolia's sports system.
            </p>
            <p className="text-gray-500 leading-[1.85] text-sm mb-4">
              I was a versatile player comfortable in multiple positions, and I bring that broad technical understanding to every session. After moving to the United States, I continued playing and channeled my love for the sport into coaching.
            </p>
            <p className="text-gray-500 leading-[1.85] text-sm mb-10">
              Now studying Computer Science at Rider University in New Jersey, I founded RG Volleyball Training to give young athletes in the Princeton area access to quality, fundamentals-first coaching that shaped my own development.
            </p>

            {/* Philosophy */}
            <div
              className="relative rounded-xl p-7 mb-12 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0a1628, #1a3a6e)' }}
            >
              <div
                className="absolute -top-4 -right-2 text-[8rem] text-white/[0.05] font-serif leading-none pointer-events-none select-none"
              >"</div>
              <p className="text-white/85 text-sm leading-[1.85] italic relative">
                My goal is not only to teach volleyball skills, but also to help young athletes build confidence, discipline, teamwork, and a strong work ethic. Every player develops at their own pace, and I strive to create a positive environment where players can learn, improve, and enjoy the game.
              </p>
              <p className="text-brand-accent font-bold text-xs mt-4 tracking-wide">— RG Volleyball Training Coaching Philosophy</p>
            </div>

            {/* Timeline */}
            <h4 className="text-navy font-bold text-[0.8rem] tracking-[0.08em] uppercase mb-6">Volleyball Journey</h4>
            <div className="flex flex-col gap-0">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center flex-shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-brand-blue flex-shrink-0" />
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 min-h-[48px]" style={{ background: 'linear-gradient(to bottom, #3b82f6, transparent)' }} />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pb-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
