import QualifyForm from '@/components/qualify/QualifyForm'
import Link from 'next/link'

export const metadata = {
  title: 'Start a Project — Fixology',
  description: 'Tell us about your project and we\'ll come back with a plan within 24 hours.',
}

export default function QualifyPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#030309' }}>
      {/* Minimal nav */}
      <header className="px-6 py-5 flex items-center justify-between" style={{ borderBottom: '1px solid #0D0F1C' }}>
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
          >
            F
          </div>
          <span className="font-semibold text-white text-lg">Fixology</span>
        </Link>
        <Link href="/" className="text-sm flex items-center gap-1 transition-colors" style={{ color: '#64748B' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>
      </header>

      <main className="flex-1 flex items-start justify-center px-6 py-12">
        <QualifyForm />
      </main>
    </div>
  )
}
