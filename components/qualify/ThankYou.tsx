import Link from 'next/link'

export default function ThankYou({ name }: { name: string }) {
  const firstName = name.split(' ')[0]

  return (
    <div className="w-full max-w-xl text-center">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-8"
        style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
      >
        🎉
      </div>

      <h1 className="text-4xl font-bold text-white mb-4">
        Thanks{firstName ? `, ${firstName}` : ''}!
      </h1>

      <p className="text-lg mb-3" style={{ color: '#64748B' }}>
        Your brief has landed in our inbox.
      </p>
      <p className="mb-10" style={{ color: '#475569' }}>
        One of our team will reach out within <strong className="text-white">24 hours</strong> to dig into your project and chat next steps.
      </p>

      <div
        className="rounded-2xl p-6 mb-8 text-left"
        style={{ background: '#0D0F1C', border: '1px solid #1E2235' }}
      >
        <p className="text-sm font-semibold text-white mb-4">What happens next</p>
        {[
          { icon: '📞', text: 'We call or email you within 24 hours' },
          { icon: '🔍', text: 'Discovery call to scope your project properly' },
          { icon: '📋', text: 'We send you a proposal with timeline and price' },
          { icon: '🚀', text: 'We kick off and start building' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
            <span className="text-lg shrink-0">{item.icon}</span>
            <span className="text-sm" style={{ color: '#64748B' }}>{item.text}</span>
          </div>
        ))}
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm transition-colors"
        style={{ color: '#6366F1' }}
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to Fixology
      </Link>
    </div>
  )
}
