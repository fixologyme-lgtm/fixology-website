export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: '#030309' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#6366F1', letterSpacing: '0.15em' }}>
              About Fixology
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              We build the digital{' '}
              <span style={{
                background: 'linear-gradient(135deg, #818CF8, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>backbone</span>
              {' '}of modern businesses
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#64748B' }}>
              Fixology is a UK-based agency specialising in AI automation, custom app development, and business growth systems. We work with founders, SMEs, and enterprise teams who want to move fast and build properly.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#64748B' }}>
              We don&apos;t just deliver code — we embed into your team. Every project comes with direct Slack access, weekly demos, and a real commitment to your outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/qualify"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
              >
                Start a project
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:hello@fixology.co.uk"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm"
                style={{ color: '#94A3B8', border: '1px solid #1E2235' }}
              >
                hello@fixology.co.uk
              </a>
            </div>
          </div>

          {/* Right: value props */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'MVPs in weeks, not months. We move quickly without cutting corners.' },
              { icon: '🔒', title: 'Fully Transparent', desc: 'Fixed prices, weekly updates, no hidden costs or nasty surprises.' },
              { icon: '🎯', title: 'Outcome-Focused', desc: 'We measure success by your results — not by billable hours.' },
              { icon: '🇬🇧', title: 'UK-Based Team', desc: 'Local team you can actually call. Global reach when you need it.' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ background: '#0D0F1C', border: '1px solid #1E2235' }}
              >
                <div className="text-2xl mb-4">{item.icon}</div>
                <div className="font-semibold text-white text-sm mb-2">{item.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#475569' }}>{item.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
