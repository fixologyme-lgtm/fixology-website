export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ background: '#030309' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium mb-4 uppercase tracking-widest" style={{ color: '#6366F1' }}>
              About Fixology
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              We build the digital
              <br />
              <span className="gradient-text">backbone</span> of modern businesses
            </h2>
            <p className="mb-5 leading-relaxed" style={{ color: '#64748B' }}>
              Fixology is a UK-based digital agency specialising in AI automation, custom app
              development, and business growth systems. We work with founders, SMEs, and
              enterprise teams who want to move fast and build properly.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: '#64748B' }}>
              We don&apos;t just deliver code — we become part of your team. Every project comes
              with direct access to our team, weekly demos, and a genuine commitment to your
              outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/qualify"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
              >
                Start a project
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:hello@fixology.co.uk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{ color: '#94A3B8', border: '1px solid #1E2235' }}
              >
                Email us directly
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'MVPs in weeks, not months' },
              { icon: '🔒', title: 'Transparent', desc: 'Weekly updates, no surprises' },
              { icon: '🎯', title: 'Outcome-Focused', desc: 'We care about your results' },
              { icon: '🇬🇧', title: 'UK-Based', desc: 'Local team, global ambitions' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ background: '#0D0F1C', border: '1px solid #1E2235' }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                <div className="text-xs" style={{ color: '#475569' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
