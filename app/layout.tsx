import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const texGyreAdventor = localFont({
  src: '../public/fonts/texgyreadventor-bold.otf',
  variable: '--font-texgyre-adventor',
  display: 'swap',
  weight: '700',
})

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your app description here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={texGyreAdventor.variable}>
        <div className="min-h-screen bg-[#dcdeea]">
          {/* Navigation */}
          
          
          {/* Main Content */}
          <main>
            {children}
          </main>
          
          {/* Footer */}
          <div className="mt-6 lg:mt-8">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}