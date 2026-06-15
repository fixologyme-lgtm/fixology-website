export type Suggestion = {
  query: string
  category: 'AI & Automation' | 'App Development' | 'Website' | 'Business Growth'
  icon: string
}

export const SUGGESTIONS: Suggestion[] = [
  // AI & Automation
  { query: 'Automate my customer support with AI', category: 'AI & Automation', icon: '🤖' },
  { query: 'Build me an AI chatbot for my website', category: 'AI & Automation', icon: '🤖' },
  { query: 'Automate my social media posts', category: 'AI & Automation', icon: '🤖' },
  { query: 'Create an AI email reply system', category: 'AI & Automation', icon: '🤖' },
  { query: 'Automate my invoice and billing process', category: 'AI & Automation', icon: '🤖' },
  { query: 'Build an AI voice assistant for my business', category: 'AI & Automation', icon: '🤖' },
  { query: 'Create AI-powered product recommendations', category: 'AI & Automation', icon: '🤖' },
  { query: 'Automate my lead follow-ups', category: 'AI & Automation', icon: '🤖' },
  { query: 'Build a smart appointment booking system', category: 'AI & Automation', icon: '🤖' },
  { query: 'Automate my WhatsApp business messages', category: 'AI & Automation', icon: '🤖' },
  { query: 'Create an AI content writer for my blog', category: 'AI & Automation', icon: '🤖' },
  { query: 'Automate my HR onboarding process', category: 'AI & Automation', icon: '🤖' },
  { query: 'Build an AI that handles my customer reviews', category: 'AI & Automation', icon: '🤖' },
  { query: 'Automate my data entry and reporting', category: 'AI & Automation', icon: '🤖' },
  { query: 'Create a chatbot that books appointments', category: 'AI & Automation', icon: '🤖' },

  // App Development
  { query: 'Build me a mobile app for my business', category: 'App Development', icon: '📱' },
  { query: 'Create an e-commerce app', category: 'App Development', icon: '📱' },
  { query: 'Build a booking app for my salon or clinic', category: 'App Development', icon: '📱' },
  { query: 'Create a food delivery app', category: 'App Development', icon: '📱' },
  { query: 'Build a fitness and wellness tracking app', category: 'App Development', icon: '📱' },
  { query: 'Create a marketplace platform', category: 'App Development', icon: '📱' },
  { query: 'Build an employee management system', category: 'App Development', icon: '📱' },
  { query: 'Create a customer loyalty rewards app', category: 'App Development', icon: '📱' },
  { query: 'Build an on-demand service app', category: 'App Development', icon: '📱' },
  { query: 'Create a subscription management platform', category: 'App Development', icon: '📱' },
  { query: 'Build a property management app', category: 'App Development', icon: '📱' },
  { query: 'Create a telemedicine or health app', category: 'App Development', icon: '📱' },
  { query: 'Build a learning management system', category: 'App Development', icon: '📱' },
  { query: 'Create a fleet management app', category: 'App Development', icon: '📱' },

  // Website
  { query: 'Build me a professional agency website', category: 'Website', icon: '🌐' },
  { query: 'Create a landing page that converts visitors', category: 'Website', icon: '🌐' },
  { query: 'Redesign my outdated website', category: 'Website', icon: '🌐' },
  { query: 'Build an e-commerce website', category: 'Website', icon: '🌐' },
  { query: 'Create a membership portal', category: 'Website', icon: '🌐' },
  { query: 'Build a property listing website', category: 'Website', icon: '🌐' },
  { query: 'Create a restaurant website with online ordering', category: 'Website', icon: '🌐' },
  { query: 'Build a coaching website with booking', category: 'Website', icon: '🌐' },
  { query: 'Create a SaaS product website', category: 'Website', icon: '🌐' },
  { query: 'Build a blog or media website', category: 'Website', icon: '🌐' },
  { query: 'Create a portfolio or showcase website', category: 'Website', icon: '🌐' },
  { query: 'Build an events and ticketing website', category: 'Website', icon: '🌐' },

  // Business Growth
  { query: 'Help me scale my business with AI', category: 'Business Growth', icon: '📈' },
  { query: 'Build a CRM for my sales team', category: 'Business Growth', icon: '📈' },
  { query: 'Create a marketing automation system', category: 'Business Growth', icon: '📈' },
  { query: 'Build a business intelligence dashboard', category: 'Business Growth', icon: '📈' },
  { query: 'Help me generate more leads online', category: 'Business Growth', icon: '📈' },
  { query: 'Create an automated sales funnel', category: 'Business Growth', icon: '📈' },
  { query: 'Build a referral program for my business', category: 'Business Growth', icon: '📈' },
  { query: 'Automate my entire business operations', category: 'Business Growth', icon: '📈' },
  { query: 'Build a client reporting dashboard', category: 'Business Growth', icon: '📈' },
  { query: 'Create a system to manage my team remotely', category: 'Business Growth', icon: '📈' },
]

export function searchSuggestions(query: string, limit = 8): Suggestion[] {
  if (!query || query.trim().length < 2) return []

  const q = query.toLowerCase().trim()
  const tokens = q.split(/\s+/).filter(t => t.length > 1)

  const scored = SUGGESTIONS.map(s => {
    const text = s.query.toLowerCase()
    let score = 0

    if (text.startsWith(q)) score += 100
    if (text.includes(q)) score += 50

    tokens.forEach(token => {
      if (text.includes(token)) score += 10
    })

    return { ...s, score }
  })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scored
}

export const EXAMPLE_CHIPS = [
  'AI Chatbot',
  'Mobile App',
  'Automation',
  'E-commerce',
  'Website Redesign',
  'Sales System',
]
