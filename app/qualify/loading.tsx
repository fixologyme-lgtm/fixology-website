export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#030309' }}>
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: '#6366F1', borderTopColor: 'transparent' }}
        />
        <p className="text-sm" style={{ color: '#475569' }}>Loading...</p>
      </div>
    </div>
  )
}
