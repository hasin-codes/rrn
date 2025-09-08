import { useEffect } from 'react'

// Canonical URL Management
export function CanonicalURL({ url }: { url: string }) {
  const baseUrl = 'https://runrisenation.com'
  const canonicalUrl = url.startsWith('http') ? url : `${baseUrl}${url}`

  return (
    <link rel="canonical" href={canonicalUrl} />
  )
}

// Language and Hreflang Tags
export function LanguageTags({ 
  currentLang = 'en', 
  alternateLanguages = [] 
}: {
  currentLang?: string
  alternateLanguages?: Array<{ lang: string; url: string }>
}) {
  return (
    <>
      <html lang={currentLang} />
      {alternateLanguages.map((alt) => (
        <link
          key={alt.lang}
          rel="alternate"
          hrefLang={alt.lang}
          href={alt.url}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href="https://runrisenation.com" />
    </>
  )
}

// Preload Critical Resources
export function CriticalResourcePreloader() {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/fonts/texgyreadventor-bold.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical CSS */}
      <link
        rel="preload"
        href="/globals.css"
        as="style"
      />
      
      {/* Preload critical images */}
      <link
        rel="preload"
        href="/assets/img/nnr_20250525084451.jpg"
        as="image"
      />
      
      {/* Preload critical JavaScript */}
      <link
        rel="modulepreload"
        href="/_next/static/chunks/main.js"
      />
    </>
  )
}

// Security Headers
export function SecurityHeaders() {
  return (
    <>
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
    </>
  )
}

// Mobile Optimization
export function MobileOptimization() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RunRise Nation" />
      <meta name="application-name" content="RunRise Nation" />
      <meta name="msapplication-TileColor" content="#B8BCC8" />
      <meta name="theme-color" content="#B8BCC8" />
    </>
  )
}

// PWA Manifest
export function PWAManifest() {
  return (
    <link
      rel="manifest"
      href="/manifest.json"
    />
  )
}

// Favicon and App Icons
export function FaviconAndIcons() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
      <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
    </>
  )
}

// Search Engine Verification
export function SearchEngineVerification() {
  return (
    <>
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      <meta name="bing-site-verification" content="YOUR_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
      <meta name="baidu-site-verification" content="YOUR_BAIDU_VERIFICATION_CODE" />
    </>
  )
}

// URL Structure Optimization
export function URLStructureOptimizer() {
  useEffect(() => {
    // Remove trailing slashes for consistency
    const currentPath = window.location.pathname
    if (currentPath !== '/' && currentPath.endsWith('/')) {
      const newPath = currentPath.slice(0, -1)
      window.history.replaceState({}, '', newPath)
    }

    // Ensure HTTPS redirect
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.replace(`https:${window.location.href.substring(window.location.protocol.length)}`)
    }
  }, [])

  return null
}

// Internal Linking Optimization
export function InternalLinkingOptimizer() {
  useEffect(() => {
    // Add internal linking suggestions
    const addInternalLinks = () => {
      const content = document.querySelector('main')
      if (!content) return

      // Find keywords and add internal links
      const keywords = [
        { keyword: 'running events', link: '/events' },
        { keyword: 'running community', link: '/about' },
        { keyword: 'training', link: '/events' },
        { keyword: 'marathon', link: '/events' },
        { keyword: 'running tips', link: '/blog' },
        { keyword: 'join us', link: '/engage/register' },
      ]

      keywords.forEach(({ keyword, link }) => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
        const walker = document.createTreeWalker(
          content,
          NodeFilter.SHOW_TEXT
        )

        let node
        while (node = walker.nextNode()) {
          if (node.textContent && regex.test(node.textContent)) {
            const parent = node.parentElement
            if (parent && !parent.querySelector('a')) {
              const newHTML = node.textContent.replace(regex, `<a href="${link}" class="text-blue-600 hover:text-blue-800 underline">${keyword}</a>`)
              parent.innerHTML = newHTML
            }
          }
        }
      })
    }

    // Run after page load
    setTimeout(addInternalLinks, 1000)
  }, [])

  return null
}

// Content Optimization
export function ContentOptimizer() {
  useEffect(() => {
    // Optimize headings structure
    const optimizeHeadings = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)))
      
      // Ensure proper heading hierarchy
      let currentLevel = 0
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1))
        if (level > currentLevel + 1) {
          console.warn(`Heading hierarchy issue: ${heading.tagName} at index ${index}`)
        }
        currentLevel = level
      })
    }

    // Add skip links for accessibility
    const addSkipLinks = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Run optimizations
    optimizeHeadings()
    addSkipLinks()
  }, [])

  return null
}

// Performance Monitoring
export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      // LCP
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // FID
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          console.log('FID:', entry.processingStart - entry.startTime)
        })
      }).observe({ entryTypes: ['first-input'] })

      // CLS
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            console.log('CLS:', clsValue)
          }
        })
      }).observe({ entryTypes: ['layout-shift'] })
    }

    if (typeof window !== 'undefined') {
      monitorWebVitals()
    }
  }, [])

  return null
}
