import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const texGyreAdventor = localFont({
  src: '../public/fonts/texgyreadventor-bold.otf',
  variable: '--font-texgyre-adventor',
  display: 'swap',
  weight: '700',
})

export const metadata: Metadata = {
  title: 'RunRise Nation - Run and Rise Together',
  description: 'RunRise Nation is a passionate running community dedicated to fostering a culture of fitness, endurance, and camaraderie. Join our community for high-quality running events, virtual challenges, and an inclusive environment where every step counts towards a healthier, stronger future.',
  keywords: [
    'running community',
    'running events',
    'marathon training',
    'virtual run',
    'running group',
    'fitness community',
    'running challenges',
    'running bootcamp',
    'running pacers',
    'running stories',
    'Bangladesh running',
    'Dhaka running',
    'running medals',
    'running races'
  ],
  authors: [{ name: 'RunRise Nation' }],
  creator: 'RunRise Nation',
  publisher: 'RunRise Nation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://runrisenation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RunRise Nation - Run and Rise Together',
    description: 'Join our passionate running community for high-quality events, virtual challenges, and an inclusive environment where every step counts.',
    url: 'https://runrisenation.com',
    siteName: 'RunRise Nation',
    images: [
      {
        url: 'https://runrisenation.com/assets/img/nnr_20250525084451.jpg',
        width: 1200,
        height: 630,
        alt: 'RunRise Nation Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RunRise Nation - Run and Rise Together',
    description: 'Join our passionate running community for high-quality events, virtual challenges, and an inclusive environment.',
    images: ['https://runrisenation.com/assets/img/nnr_20250525084451.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://runrisenation.com/assets/img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={texGyreAdventor.variable}>
        <div className="min-h-screen bg-gradient-to-br from-[#B8BCC8] via-[#C8CCD8] to-[#BCC0CC]">
          {/* Navigation */}
          <Navbar />
          
          {/* Main Content */}
          <main className="pt-24 transition-all duration-300 ease-in-out" id="main-content">
            {children}
          </main>
          
          {/* Footer */}
          <div className="mt-6 lg:mt-8">
            <Footer />
          </div>
        </div>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  )
}