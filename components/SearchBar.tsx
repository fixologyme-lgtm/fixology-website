'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { searchSuggestions, EXAMPLE_CHIPS, type Suggestion } from '@/lib/suggestions'

const PLACEHOLDERS = [
  'Automate my customer support with AI...',
  'Build me a mobile app...',
  'Create a chatbot for my website...',
  'Help me scale my business...',
  'Redesign my e-commerce website...',
  'Build an automated sales system...',
]

export default function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const [isFocused, setIsFocused] = useState(false)
  const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0])
  const [placeholderVisible, setPlaceholderVisible] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const placeholderIndex = useRef(0)

  useEffect(() => {
    const cycle = () => {
      setPlaceholderVisible(false)
      setTimeout(() => {
        placeholderIndex.current = (placeholderIndex.current + 1) % PLACEHOLDERS.length
        setPlaceholder(PLACEHOLDERS[placeholderIndex.current])
        setPlaceholderVisible(true)
      }, 300)
    }
    const interval = setInterval(cycle, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const results = searchSuggestions(query)
    setSuggestions(results)
    setActiveIndex(-1)
  }, [query])

  const handleSubmit = useCallback(
    (value?: string) => {
      const q = (value ?? query).trim()
      if (!q) return
      router.push(`/qualify?q=${encodeURIComponent(q)}`)
    },
    [query, router]
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        handleSubmit(suggestions[activeIndex].query)
      } else {
        handleSubmit()
      }
    } else if (e.key === 'Escape') {
      setSuggestions([])
      inputRef.current?.blur()
    }
  }

  const showDropdown = isFocused && suggestions.length > 0

  const highlight = (text: string) => {
    if (!query.trim()) return text
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part)
        ? <mark key={i} style={{ background: 'transparent', color: '#818CF8', fontWeight: 600 }}>{part}</mark>
        : part
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        {/* Search box */}
        <div
          className="relative rounded-2xl overflow-visible transition-all duration-300"
          style={{
            background: '#fff',
            boxShadow: isFocused
              ? '0 0 0 2px #6366F1, 0 8px 60px rgba(0,0,0,0.5)'
              : '0 4px 40px rgba(0,0,0,0.4)',
          }}
        >
          <div className="flex items-center px-5 py-4">
            <svg className="shrink-0 mr-3" width="20" height="20" fill="none" stroke="#6366F1" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>

            <div className="relative flex-1">
              {/* Animated placeholder */}
              {!query && !isFocused && (
                <span
                  className="absolute inset-0 flex items-center text-base pointer-events-none transition-opacity duration-300"
                  style={{ color: '#9CA3AF', opacity: placeholderVisible ? 1 : 0 }}
                >
                  {placeholder}
                </span>
              )}
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                placeholder=""
                className="w-full bg-transparent outline-none text-base text-gray-900 placeholder-transparent"
                style={{ caretColor: '#6366F1' }}
              />
            </div>

            {query && (
              <button
                onClick={() => { setQuery(''); inputRef.current?.focus() }}
                className="shrink-0 ml-2 p-1 rounded-full transition-colors"
                style={{ color: '#9CA3AF' }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}

            <button
              onClick={() => handleSubmit()}
              className="shrink-0 ml-3 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
            >
              Search
            </button>
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute left-0 right-0 top-full mt-2 rounded-2xl overflow-hidden z-50"
              style={{
                background: '#fff',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                border: '1px solid #E5E7EB',
              }}
            >
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSubmit(s.query)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className="w-full flex items-center gap-3 px-5 py-3 text-left transition-colors text-sm"
                  style={{
                    background: activeIndex === i ? '#F5F3FF' : 'transparent',
                    color: activeIndex === i ? '#4F46E5' : '#374151',
                    borderBottom: i < suggestions.length - 1 ? '1px solid #F3F4F6' : 'none',
                  }}
                >
                  <span className="text-base shrink-0">{s.icon}</span>
                  <span className="flex-1">{highlight(s.query)}</span>
                  <span
                    className="shrink-0 text-xs px-2 py-0.5 rounded-full"
                    style={{ background: '#EEF2FF', color: '#6366F1' }}
                  >
                    {s.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Example chips */}
      <div className="flex flex-wrap gap-2 justify-center mt-5">
        {EXAMPLE_CHIPS.map(chip => (
          <button
            key={chip}
            onClick={() => { setQuery(chip); inputRef.current?.focus() }}
            className="px-4 py-1.5 rounded-full text-sm transition-all duration-200"
            style={{
              background: 'rgba(99,102,241,0.1)',
              color: '#A5B4FC',
              border: '1px solid rgba(99,102,241,0.2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.2)'
              e.currentTarget.style.color = '#C7D2FE'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
              e.currentTarget.style.color = '#A5B4FC'
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}
