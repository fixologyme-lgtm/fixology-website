import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'Fixology — AI, Apps & Business Growth',
  description:
    'We build AI automation, apps, and digital systems that grow your business. Tell us what you need — we make it happen.',
  keywords: 'AI automation, app development, business growth, chatbot, website, UK agency',
  openGraph: {
    title: 'Fixology — AI, Apps & Business Growth',
    description: 'We build AI automation, apps, and digital systems that grow your business.',
    url: 'https://fixology.co.uk',
    siteName: 'Fixology',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fixology — AI, Apps & Business Growth',
    description: 'We build AI automation, apps, and digital systems that grow your business.',
  },
  metadataBase: new URL('https://fixology.co.uk'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="min-h-screen" style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
