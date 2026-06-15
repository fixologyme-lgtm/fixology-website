const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description:
      'Search for what you want to build. Our smart search understands your idea — from rough concepts to detailed specs.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We scope it out',
    description:
      "You fill out a short brief. One of our team calls you within 24 hours to go deep on your idea and work out exactly what we're building.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'We build it fast',
    description:
      "Our team gets to work. Weekly demos, clear progress, and a product you can be proud of — delivered on time, every time.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6" style={{ background: '#07080F' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 uppercase tracking-widest" style={{ color: '#6366F1' }}>
            The process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From idea to launch,{' '}
            <span className="gradient-text">fast</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748B' }}>
            No fluff, no long meetings, no surprises. Just focused execution from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #1E2235 20%, #1E2235 80%, transparent)' }}
          />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 z-10"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  color: '#818CF8',
                }}
              >
                {step.icon}
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', color: '#fff' }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
