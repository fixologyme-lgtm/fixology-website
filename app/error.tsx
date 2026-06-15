'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: '#030309' }}
    >
      <div className="text-5xl mb-6">⚡</div>
      <h1 className="text-2xl font-bold text-white mb-3">Something went wrong</h1>
      <p className="mb-8 max-w-sm" style={{ color: '#64748B' }}>
        An unexpected error occurred. Our team has been notified.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl font-semibold text-white text-sm"
          style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl text-sm font-medium"
          style={{ color: '#94A3B8', border: '1px solid #1E2235' }}
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
