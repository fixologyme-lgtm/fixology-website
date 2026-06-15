import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: '#030309' }}
    >
      <div
        className="text-8xl font-black mb-6"
        style={{
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        404
      </div>
      <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
      <p className="mb-8 max-w-sm" style={{ color: '#64748B' }}>
        This page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl font-semibold text-white text-sm"
          style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
        >
          Go home
        </Link>
        <Link
          href="/qualify"
          className="px-6 py-3 rounded-xl text-sm font-medium"
          style={{ color: '#94A3B8', border: '1px solid #1E2235' }}
        >
          Start a project
        </Link>
      </div>
    </div>
  )
}
