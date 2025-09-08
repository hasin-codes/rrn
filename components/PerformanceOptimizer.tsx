'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

interface PerformanceMetrics {
  lcp: number | null
  fid: number | null
  cls: number | null
  fcp: number | null
  ttfb: number | null
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  })

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
        })
      }).observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            setMetrics(prev => ({ ...prev, cls: clsValue }))
          }
        })
      }).observe({ entryTypes: ['layout-shift'] })

      // First Contentful Paint (FCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
        })
      }).observe({ entryTypes: ['paint'] })

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
      }
    }

    // Run measurements after page load
    if (typeof window !== 'undefined') {
      measureWebVitals()
    }
  }, [])

  // Log metrics for debugging (remove in production)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Core Web Vitals:', metrics)
    }
  }, [metrics])

  return null
}

// Resource hints for better performance
export function ResourceHints() {
  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Preload critical resources */}
      <link 
        rel="preload" 
        href="/fonts/texgyreadventor-bold.otf" 
        as="font" 
        type="font/otf" 
        crossOrigin="anonymous" 
      />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//vercel.com" />
      <link rel="dns-prefetch" href="//analytics.vercel.com" />
    </>
  )
}

// Lazy loading wrapper for non-critical components
export function LazyWrapper({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('lazy-content')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="lazy-content">
      {isVisible ? children : (fallback || <div className="animate-pulse bg-gray-200 h-32 rounded" />)}
    </div>
  )
}

// Critical CSS inliner
export function CriticalCSS() {
  return (
    <style jsx global>{`
      /* Critical above-the-fold styles */
      .min-h-screen {
        min-height: 100vh;
      }
      
      .bg-gradient-to-br {
        background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
      }
      
      .from-\\[\\#B8BCC8\\] {
        --tw-gradient-from: #B8BCC8;
        --tw-gradient-to: rgb(184 188 200 / 0);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
      }
      
      .via-\\[\\#C8CCD8\\] {
        --tw-gradient-to: rgb(200 204 216 / 0);
        --tw-gradient-stops: var(--tw-gradient-from), #C8CCD8, var(--tw-gradient-to);
      }
      
      .to-\\[\\#BCC0CC\\] {
        --tw-gradient-to: #BCC0CC;
      }
      
      /* Prevent layout shift */
      .neumorphic-card {
        background: var(--card-bg);
        box-shadow: var(--card-shadow-light), var(--card-shadow-dark);
        border: var(--card-border);
        border-radius: var(--card-border-radius);
        padding: var(--card-padding);
      }
      
      /* Optimize font loading */
      .font-texgyre-adventor {
        font-family: var(--font-texgyre-adventor), Arial, sans-serif;
        font-display: swap;
      }
    `}</style>
  )
}

// Service Worker registration for caching
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }
  }, [])

  return null
}

// Web Vitals reporting
export function WebVitalsReporter() {
  useEffect(() => {
    const reportWebVitals = (metric: any) => {
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        })
      }
    }

    // Use built-in Performance Observer for web vitals
    const trackWebVitals = () => {
      // LCP
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        reportWebVitals({ name: 'LCP', value: lastEntry.startTime, id: 'lcp' })
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // FID
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime
          reportWebVitals({ name: 'FID', value: fid, id: 'fid' })
        })
      }).observe({ entryTypes: ['first-input'] })

      // CLS
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            reportWebVitals({ name: 'CLS', value: clsValue, id: 'cls' })
          }
        })
      }).observe({ entryTypes: ['layout-shift'] })
    }

    if (typeof window !== 'undefined') {
      trackWebVitals()
    }
  }, [])

  return null
}
