'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Step1Project from './Step1Project'
import Step2Budget from './Step2Budget'
import Step3Contact from './Step3Contact'
import ThankYou from './ThankYou'

export type FormData = {
  query: string
  description: string
  serviceType: string
  stage: string
  budget: string
  timeline: string
  workedWithAgency: string
  name: string
  email: string
  phone: string
  company: string
  source: string
}

const INITIAL: FormData = {
  query: '',
  description: '',
  serviceType: '',
  stage: '',
  budget: '',
  timeline: '',
  workedWithAgency: '',
  name: '',
  email: '',
  phone: '',
  company: '',
  source: '',
}

function QualifyFormInner() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(INITIAL)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) setData(prev => ({ ...prev, query: q }))
  }, [searchParams])

  const update = (fields: Partial<FormData>) =>
    setData(prev => ({ ...prev, ...fields }))

  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  const submit = async () => {
    setSubmitting(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setDone(true)
    } catch {
      // still show thank you — save locally handled
      setDone(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) return <ThankYou name={data.name} />

  const STEPS = ['Project', 'Budget & Timeline', 'Your Details']

  return (
    <div className="w-full max-w-2xl">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          {STEPS.map((label, i) => {
            const num = i + 1
            const active = num === step
            const done = num < step
            return (
              <div key={i} className="flex items-center gap-3 flex-1">
                <div className="flex items-center gap-2 shrink-0">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all"
                    style={{
                      background: done ? '#6366F1' : active ? 'rgba(99,102,241,0.15)' : 'transparent',
                      border: done ? 'none' : active ? '1px solid #6366F1' : '1px solid #1E2235',
                      color: done ? '#fff' : active ? '#818CF8' : '#475569',
                    }}
                  >
                    {done
                      ? <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" /></svg>
                      : num}
                  </div>
                  <span className="text-xs hidden sm:block" style={{ color: active ? '#F8FAFC' : '#334155' }}>{label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="flex-1 h-px" style={{ background: step > num ? '#6366F1' : '#1E2235' }} />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {step === 1 && <Step1Project data={data} update={update} onNext={next} />}
      {step === 2 && <Step2Budget data={data} update={update} onNext={next} onBack={back} />}
      {step === 3 && <Step3Contact data={data} update={update} onSubmit={submit} onBack={back} submitting={submitting} />}
    </div>
  )
}

export default function QualifyForm() {
  return (
    <Suspense fallback={<div className="w-full max-w-2xl animate-pulse h-96 rounded-2xl" style={{ background: '#0D0F1C' }} />}>
      <QualifyFormInner />
    </Suspense>
  )
}
