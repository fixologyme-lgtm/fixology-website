import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: '#030309', borderTop: '1px solid #0D0F1C' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
              >
                F
              </div>
              <span className="font-semibold text-white text-lg">Fixology</span>
            </Link>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#475569' }}>
              AI automation, app development, and business growth systems for ambitious businesses across the UK and beyond.
            </p>
            <a
              href="mailto:hello@fixology.co.uk"
              className="inline-block mt-4 text-sm"
              style={{ color: '#6366F1' }}
            >
              hello@fixology.co.uk
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#334155' }}>Services</p>
            <ul className="space-y-2">
              {['AI & Automation', 'App Development', 'Business Growth', 'Website Design'].map(s => (
                <li key={s}>
                  <Link href="/qualify" className="text-sm transition-colors" style={{ color: '#475569' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#94A3B8')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
                  >{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#334155' }}>Company</p>
            <ul className="space-y-2">
              {[['#about', 'About'], ['#how-it-works', 'How It Works'], ['/qualify', 'Start a Project'], ['mailto:hello@fixology.co.uk', 'Contact']].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-sm transition-colors" style={{ color: '#475569' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#94A3B8')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid #0D0F1C' }}>
          <p className="text-xs" style={{ color: '#1E293B' }}>
            © {new Date().getFullYear()} Fixology. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms'].map(t => (
              <Link key={t} href="#" className="text-xs transition-colors" style={{ color: '#1E293B' }}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
