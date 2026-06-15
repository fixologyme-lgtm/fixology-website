'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(3,3,9,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,34,53,0.8)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
          >
            F
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">
            Fixology
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm transition-colors" style={{ color: '#94A3B8' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F8FAFC')}
            onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
            Services
          </Link>
          <Link href="#how-it-works" className="text-sm transition-colors" style={{ color: '#94A3B8' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F8FAFC')}
            onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
            How It Works
          </Link>
          <Link href="#about" className="text-sm transition-colors" style={{ color: '#94A3B8' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F8FAFC')}
            onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
            About
          </Link>
        </div>

        <Link
          href="/qualify"
          className="hidden md:flex px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Start a Project
        </Link>

        <button
          className="md:hidden p-2"
          style={{ color: '#94A3B8' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(3,3,9,0.98)', borderTop: '1px solid #1E2235' }}>
          <Link href="#services" onClick={() => setMenuOpen(false)} className="text-sm py-2" style={{ color: '#94A3B8' }}>Services</Link>
          <Link href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-sm py-2" style={{ color: '#94A3B8' }}>How It Works</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)} className="text-sm py-2" style={{ color: '#94A3B8' }}>About</Link>
          <Link href="/qualify" className="mt-2 px-5 py-3 rounded-lg text-sm font-medium text-white text-center" style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  )
}
