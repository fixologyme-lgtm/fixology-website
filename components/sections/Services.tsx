'use client'

'use client'

const services = [
  {
    icon: '🤖',
    title: 'AI & Automation',
    tagline: 'Let machines handle the repetitive stuff',
    description:
      'From AI chatbots and customer support automation to invoice processing and social media scheduling — we build intelligent systems that run your business around the clock.',
    features: [
      'AI chatbots & virtual assistants',
      'Workflow & process automation',
      'AI content & email systems',
      'WhatsApp & CRM automation',
      'Lead gen & follow-up systems',
    ],
    gradient: 'from-violet-500 to-indigo-600',
    color: '#818CF8',
    bg: 'rgba(99,102,241,0.07)',
    border: 'rgba(99,102,241,0.15)',
  },
  {
    icon: '📱',
    title: 'App Development',
    tagline: 'Mobile & web apps that users love',
    description:
      'We build fast, scalable applications for iOS, Android, and web. Whether you need an MVP in 6 weeks or a full enterprise platform — we deliver.',
    features: [
      'iOS & Android mobile apps',
      'Web & SaaS platforms',
      'E-commerce & marketplaces',
      'Booking & scheduling systems',
      'Customer portals & dashboards',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    color: '#22D3EE',
    bg: 'rgba(6,182,212,0.07)',
    border: 'rgba(6,182,212,0.15)',
  },
  {
    icon: '📈',
    title: 'Business Growth',
    tagline: 'Systems that scale with your ambition',
    description:
      'CRM systems, marketing funnels, reporting dashboards, and growth infrastructure — we design and build the digital backbone your business needs to scale fast.',
    features: [
      'CRM & sales systems',
      'Marketing automation funnels',
      'Business dashboards & analytics',
      'Referral & loyalty programmes',
      'Lead generation systems',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.07)',
    border: 'rgba(52,211,153,0.15)',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6" style={{ background: '#030309' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 uppercase tracking-widest" style={{ color: '#6366F1' }}>
            What we do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need to
            <span className="gradient-text"> grow</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            We cover the full stack — from intelligent automation to beautiful apps to growth systems that compound.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col transition-all duration-300 group cursor-default"
              style={{ background: s.bg, border: `1px solid ${s.border}` }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 20px 60px ${s.bg.replace('0.07', '0.25')}`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="text-4xl mb-5">{s.icon}</div>
              <span className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: s.color }}>
                {s.tagline}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm mb-6 flex-1" style={{ color: '#64748B', lineHeight: '1.7' }}>
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#94A3B8' }}>
                    <svg width="14" height="14" fill="none" stroke={s.color} strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
