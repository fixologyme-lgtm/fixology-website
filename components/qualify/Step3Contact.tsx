'use client'

import type { FormData } from './QualifyForm'

const SOURCES = [
  { value: 'google', label: 'Google' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'referral', label: 'Referral' },
  { value: 'other', label: 'Other' },
]

type Props = {
  data: FormData
  update: (f: Partial<FormData>) => void
  onSubmit: () => void
  onBack: () => void
  submitting: boolean
}

export default function Step3Contact({ data, update, onSubmit, onBack, submitting }: Props) {
  const valid = data.name.trim().length > 1 && /\S+@\S+\.\S+/.test(data.email)

  const Field = ({
    label, id, type = 'text', value, onChange, placeholder, required,
  }: {
    label: string; id: string; type?: string; value: string
    onChange: (v: string) => void; placeholder?: string; required?: boolean
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-white">
        {label} {required && <span style={{ color: '#6366F1' }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
        style={{
          background: '#0D0F1C',
          border: '1px solid #1E2235',
          color: '#F8FAFC',
        }}
        onFocus={e => (e.currentTarget.style.borderColor = '#6366F1')}
        onBlur={e => (e.currentTarget.style.borderColor = '#1E2235')}
      />
    </div>
  )

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Almost there</h1>
      <p className="mb-8" style={{ color: '#64748B' }}>
        Leave your details and we&apos;ll be in touch within 24 hours.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <Field
          label="Full name" id="name"
          value={data.name} onChange={v => update({ name: v })}
          placeholder="Jane Smith" required
        />
        <Field
          label="Email address" id="email" type="email"
          value={data.email} onChange={v => update({ email: v })}
          placeholder="jane@company.com" required
        />
        <Field
          label="Phone number" id="phone" type="tel"
          value={data.phone} onChange={v => update({ phone: v })}
          placeholder="+44 7700 900000"
        />
        <Field
          label="Company name" id="company"
          value={data.company} onChange={v => update({ company: v })}
          placeholder="Acme Ltd (optional)"
        />
      </div>

      {/* How did you find us */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3 text-white">
          How did you find us?
        </label>
        <div className="grid grid-cols-4 gap-3">
          {SOURCES.map(s => (
            <button
              key={s.value}
              onClick={() => update({ source: s.value })}
              className="py-3 rounded-xl text-xs font-medium transition-all"
              style={{
                background: data.source === s.value ? 'rgba(99,102,241,0.15)' : '#0D0F1C',
                border: data.source === s.value ? '1px solid #6366F1' : '1px solid #1E2235',
                color: data.source === s.value ? '#A5B4FC' : '#64748B',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Privacy note */}
      <p className="text-xs mb-8" style={{ color: '#334155' }}>
        By submitting this form you agree to be contacted by Fixology regarding your project. We never spam and you can unsubscribe anytime.
      </p>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="px-6 py-4 rounded-xl text-sm font-medium transition-all"
          style={{ color: '#64748B', border: '1px solid #1E2235', background: 'transparent' }}
        >
          ← Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!valid || submitting}
          className="flex-1 py-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2"
          style={{
            background: valid && !submitting ? 'linear-gradient(135deg, #6366F1, #8B5CF6)' : '#1E2235',
            color: valid && !submitting ? '#fff' : '#475569',
            cursor: valid && !submitting ? 'pointer' : 'not-allowed',
            boxShadow: valid && !submitting ? '0 8px 30px rgba(99,102,241,0.25)' : 'none',
          }}
        >
          {submitting
            ? (<><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>)
            : 'Submit my project brief →'}
        </button>
      </div>
    </div>
  )
}
