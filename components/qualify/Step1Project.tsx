'use client'

import type { FormData } from './QualifyForm'

const SERVICE_TYPES = [
  { value: 'ai-automation', label: '🤖 AI & Automation' },
  { value: 'app-development', label: '📱 App Development' },
  { value: 'website', label: '🌐 Website' },
  { value: 'business-growth', label: '📈 Business Growth' },
  { value: 'other', label: '✨ Something else' },
]

const STAGES = [
  { value: 'idea', label: 'Just an idea' },
  { value: 'early', label: 'Early-stage / planning' },
  { value: 'growing', label: 'Established & growing' },
  { value: 'enterprise', label: 'Enterprise / scale-up' },
]

type Props = { data: FormData; update: (f: Partial<FormData>) => void; onNext: () => void }

export default function Step1Project({ data, update, onNext }: Props) {
  const valid = data.description.trim().length > 10 && data.serviceType && data.stage

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Tell us about your project</h1>
      <p className="mb-8" style={{ color: '#64748B' }}>
        The more detail you give us, the better we can help.
      </p>

      {data.query && (
        <div
          className="mb-6 px-4 py-3 rounded-xl text-sm flex items-start gap-3"
          style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <svg className="mt-0.5 shrink-0" width="16" height="16" fill="none" stroke="#818CF8" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="m21 21-4.35-4.35" />
          </svg>
          <span style={{ color: '#A5B4FC' }}>&ldquo;{data.query}&rdquo;</span>
        </div>
      )}

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-white">
          Describe what you want to build <span style={{ color: '#6366F1' }}>*</span>
        </label>
        <textarea
          value={data.description}
          onChange={e => update({ description: e.target.value })}
          placeholder="Give us as much detail as you can — what problem does it solve, who is it for, what features do you need?"
          rows={5}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all"
          style={{
            background: '#0D0F1C',
            border: '1px solid #1E2235',
            color: '#F8FAFC',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = '#6366F1')}
          onBlur={e => (e.currentTarget.style.borderColor = '#1E2235')}
        />
      </div>

      {/* Service type */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3 text-white">
          What type of project is this? <span style={{ color: '#6366F1' }}>*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SERVICE_TYPES.map(s => (
            <button
              key={s.value}
              onClick={() => update({ serviceType: s.value })}
              className="px-4 py-3 rounded-xl text-sm text-left transition-all"
              style={{
                background: data.serviceType === s.value ? 'rgba(99,102,241,0.15)' : '#0D0F1C',
                border: data.serviceType === s.value ? '1px solid #6366F1' : '1px solid #1E2235',
                color: data.serviceType === s.value ? '#A5B4FC' : '#64748B',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Business stage */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3 text-white">
          What stage is your business at? <span style={{ color: '#6366F1' }}>*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {STAGES.map(s => (
            <button
              key={s.value}
              onClick={() => update({ stage: s.value })}
              className="px-4 py-3 rounded-xl text-sm text-left transition-all"
              style={{
                background: data.stage === s.value ? 'rgba(99,102,241,0.15)' : '#0D0F1C',
                border: data.stage === s.value ? '1px solid #6366F1' : '1px solid #1E2235',
                color: data.stage === s.value ? '#A5B4FC' : '#64748B',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!valid}
        className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-200"
        style={{
          background: valid ? 'linear-gradient(135deg, #6366F1, #8B5CF6)' : '#1E2235',
          color: valid ? '#fff' : '#475569',
          cursor: valid ? 'pointer' : 'not-allowed',
          boxShadow: valid ? '0 8px 30px rgba(99,102,241,0.25)' : 'none',
        }}
      >
        Continue →
      </button>
    </div>
  )
}
