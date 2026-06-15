import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fixology — AI, Apps & Business Growth'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#030309',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
        }} />

        {/* Logo mark */}
        <div style={{
          width: '80px', height: '80px', borderRadius: '18px',
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '32px',
        }}>
          <span style={{ color: 'white', fontSize: '44px', fontWeight: '700' }}>F</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: '72px', fontWeight: '800', margin: '0 0 16px',
          background: 'linear-gradient(135deg, #818CF8, #A78BFA, #22D3EE)',
          backgroundClip: 'text', color: 'transparent',
          letterSpacing: '-2px', textAlign: 'center', lineHeight: 1.1,
        }}>
          Fixology
        </h1>

        <p style={{
          fontSize: '28px', color: '#64748B', margin: '0 0 40px',
          textAlign: 'center', maxWidth: '700px', lineHeight: 1.4,
        }}>
          AI Automation · App Development · Business Growth
        </p>

        {/* Domain badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '10px 24px', borderRadius: '100px',
          background: 'rgba(99,102,241,0.12)',
          border: '1px solid rgba(99,102,241,0.3)',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80' }} />
          <span style={{ color: '#A5B4FC', fontSize: '20px', fontWeight: '500' }}>fixology.co.uk</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
