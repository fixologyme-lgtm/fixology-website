const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Search for what you want to build. Our smart search understands your idea and gets you straight into a short brief — no long calls, no back-and-forth.',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We scope it fast',
    description: "One of our team reaches out within 24 hours. We dig into your idea, clarify requirements, and put together a clear proposal with timeline and price.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'We build & deliver',
    description: "Weekly demos, direct Slack access, and a product you can be proud of. We move fast and we ship — no missed deadlines, no surprise costs.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: '#07080F' }}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#6366F1', letterSpacing: '0.15em' }}>
            The process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            From idea to launch,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818CF8, #A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>fast</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748B' }}>
            No fluff, no long meetings, no surprises. Just focused execution from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl"
              style={{ background: '#0D0F1C', border: '1px solid #1E2235' }}
            >
              {/* Step number */}
              <div
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: '#334155', letterSpacing: '0.15em' }}
              >
                Step {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  color: '#818CF8',
                  border: '1px solid rgba(99,102,241,0.15)',
                }}
              >
                {step.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                {step.description}
              </p>

              {/* Arrow connector — desktop only */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full z-10"
                  style={{ background: '#0D0F1C', border: '1px solid #1E2235' }}
                >
                  <svg width="14" height="14" fill="none" stroke="#334155" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
