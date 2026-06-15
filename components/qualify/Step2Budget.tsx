'use client'

import type { FormData } from './QualifyForm'

const BUDGETS = [
  { value: 'under-5k', label: 'Under £5,000', desc: 'Landing page / simple MVP' },
  { value: '5k-15k', label: '£5,000 – £15,000', desc: 'Full website or basic app' },
  { value: '15k-50k', label: '£15,000 – £50,000', desc: 'Complex app or platform' },
  { value: '50k-plus', label: '£50,000+', desc: 'Enterprise / full product' },
]

const TIMELINES = [
  { value: 'asap', label: 'ASAP', desc: 'Need it yesterday' },
  { value: '1-3m', label: '1 – 3 months', desc: 'Reasonable runway' },
  { value: '3-6m', label: '3 – 6 months', desc: 'Structured build' },
  { value: '6m-plus', label: '6+ months', desc: 'Long-term project' },
]

type Props = {
  data: FormData
  update: (f: Partial<FormData>) => void
  onNext: () => void
  onBack: () => void
}

export default function Step2Budget({ data, update, onNext, onBack }: Props) {
  const valid = data.budget && data.timeline

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Budget & timeline</h1>
      <p className="mb-8" style={{ color: '#64748B' }}>
        This helps us match the right solution to your situation.
      </p>

      {/* Budget */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3 text-white">
          What&apos;s your rough budget? <span style={{ color: '#6366F1' }}>*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {BUDGETS.map(b => (
            <button
              key={b.value}
              onClick={() => update({ budget: b.value })}
              className="px-4 py-4 rounded-xl text-left transition-all"
              style={{
                background: data.budget === b.value ? 'rgba(99,102,241,0.15)' : '#0D0F1C',
                border: data.budget === b.value ? '1px solid #6366F1' : '1px solid #1E2235',
              }}
            >
              <div className="font-semibold text-sm mb-1" style={{ color: data.budget === b.value ? '#A5B4FC' : '#F8FAFC' }}>
                {b.label}
              </div>
              <div className="text-xs" style={{ color: '#475569' }}>{b.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3 text-white">
          When do you need it? <span style={{ color: '#6366F1' }}>*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {TIMELINES.map(t => (
            <button
              key={t.value}
              onClick={() => update({ timeline: t.value })}
              className="px-4 py-4 rounded-xl text-left transition-all"
              style={{
                background: data.timeline === t.value ? 'rgba(99,102,241,0.15)' : '#0D0F1C',
                border: data.timeline === t.value ? '1px solid #6366F1' : '1px solid #1E2235',
              }}
            >
              <div className="font-semibold text-sm mb-1" style={{ color: data.timeline === t.value ? '#A5B4FC' : '#F8FAFC' }}>
                {t.label}
              </div>
              <div className="text-xs" style={{ color: '#475569' }}>{t.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Worked with agency before */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3 text-white">
          Have you worked with a development agency before?
        </label>
        <div className="flex gap-3">
          {['Yes', 'No'].map(v => (
            <button
              key={v}
              onClick={() => update({ workedWithAgency: v.toLowerCase() })}
              className="flex-1 py-3 rounded-xl text-sm font-medium transition-all"
              style={{
                background: data.workedWithAgency === v.toLowerCase() ? 'rgba(99,102,241,0.15)' : '#0D0F1C',
                border: data.workedWithAgency === v.toLowerCase() ? '1px solid #6366F1' : '1px solid #1E2235',
                color: data.workedWithAgency === v.toLowerCase() ? '#A5B4FC' : '#64748B',
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="px-6 py-4 rounded-xl text-sm font-medium transition-all"
          style={{ color: '#64748B', border: '1px solid #1E2235', background: 'transparent' }}
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!valid}
          className="flex-1 py-4 rounded-xl font-semibold text-white transition-all duration-200"
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
    </div>
  )
}
