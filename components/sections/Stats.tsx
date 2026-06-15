const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '24h', label: 'Response Time' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function Stats() {
  return (
    <section className="py-20 px-6" style={{ background: '#030309', borderTop: '1px solid #0D0F1C', borderBottom: '1px solid #0D0F1C' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-5xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #818CF8, #A78BFA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div className="text-sm" style={{ color: '#475569' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
