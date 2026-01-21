import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingSMSButton } from '@/components/FloatingSMSButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emily Hanley Homes | Atlanta Real Estate',
  description: 'Your trusted Atlanta real estate team. From consult to closing, we have a strategy for success. Over 400+ homes sold in Metro Atlanta.',
  keywords: 'Atlanta real estate, Atlanta homes, buy home Atlanta, sell home Atlanta, Emily Hanley',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-white antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingSMSButton />
      </body>
    </html>
  )
}
