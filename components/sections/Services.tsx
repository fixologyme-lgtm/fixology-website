'use client'

const services = [
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Stop doing things manually. We build AI systems that handle your customer support, social media, emails, invoices, and follow-ups — 24/7, without you lifting a finger.',
    features: ['Chatbots & AI assistants', 'Workflow automation', 'CRM & email automation', 'AI content systems'],
    color: '#818CF8',
    bg: 'rgba(99,102,241,0.06)',
    border: 'rgba(99,102,241,0.12)',
    glow: 'rgba(99,102,241,0.2)',
  },
  {
    icon: '📱',
    title: 'App Development',
    description: 'iOS, Android, and web apps built fast and built to scale. From a simple MVP to a full marketplace — we ship products users actually want to use.',
    features: ['Mobile apps (iOS & Android)', 'Web & SaaS platforms', 'E-commerce & marketplaces', 'Booking & scheduling apps'],
    color: '#22D3EE',
    bg: 'rgba(6,182,212,0.06)',
    border: 'rgba(6,182,212,0.12)',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    icon: '📈',
    title: 'Business Growth',
    description: 'The digital infrastructure that makes scaling possible. CRMs, dashboards, sales funnels, and marketing systems designed to compound your results.',
    features: ['CRM & sales systems', 'Marketing automation', 'Analytics dashboards', 'Lead generation funnels'],
    color: '#34D399',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.12)',
    glow: 'rgba(52,211,153,0.2)',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: '#030309' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#6366F1', letterSpacing: '0.15em' }}>
            What we do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Everything you need to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818CF8, #A78BFA, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>grow</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
            We cover the full stack — AI automation, custom apps, and the growth systems that compound.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col transition-all duration-300"
              style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 24px 48px ${s.glow}`
                e.currentTarget.style.borderColor = s.color.replace(')', ', 0.3)').replace('rgb', 'rgba')
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = s.border
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#64748B' }}>
                {s.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 pt-6" style={{ borderTop: `1px solid ${s.border}` }}>
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm" style={{ color: '#94A3B8' }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
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
