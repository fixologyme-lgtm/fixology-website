import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-28 px-6" style={{ background: '#07080F' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="relative rounded-3xl p-12 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to build something{' '}
              <span className="gradient-text">great?</span>
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Tell us what you need. We&apos;ll come back within 24 hours with a plan, a timeline, and a price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/qualify"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', boxShadow: '0 8px 30px rgba(99,102,241,0.35)' }}
              >
                Start your project
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="mailto:hello@fixology.co.uk"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{ color: '#94A3B8', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                hello@fixology.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
