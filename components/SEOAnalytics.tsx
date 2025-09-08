'use client'

import { useEffect } from 'react'

// Google Analytics 4 with SEO tracking
export function SEOAnalytics() {
  useEffect(() => {
    // Load Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    if (document.head) {
      document.head.appendChild(script)
    }

    // Initialize GA4
    (window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args)
    }
    (window as any).gtag = gtag

    // Initialize GA4 after script loads
    script.onload = () => {
      (window as any).gtag('js', new Date())
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'seo_metrics'
        }
      })
    }

    // Track SEO events
    const trackSEOEvent = (eventName: string, parameters: any = {}) => {
      (window as any).gtag('event', eventName, {
        event_category: 'SEO',
        ...parameters
      })
    }

    // Track page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        trackSEOEvent('page_load_time', {
          load_time: navigation.loadEventEnd - navigation.fetchStart,
          dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.fetchStart
        })
      }
    })

    // Track scroll depth
    let maxScrollDepth = 0
    const trackScrollDepth = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        if (scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackSEOEvent('scroll_depth', {
            scroll_percentage: scrollDepth
          })
        }
      }
    }

    window.addEventListener('scroll', trackScrollDepth)

    // Track time on page
    const startTime = Date.now()
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime
      trackSEOEvent('time_on_page', {
        time_seconds: Math.round(timeOnPage / 1000)
      })
    })

    return () => {
      window.removeEventListener('scroll', trackScrollDepth)
    }
  }, [])

  return null
}

// Search Console integration
export function SearchConsoleIntegration() {
  useEffect(() => {
    // Add Search Console verification
    const meta = document.createElement('meta')
    meta.name = 'google-site-verification'
    meta.content = 'YOUR_SEARCH_CONSOLE_VERIFICATION_CODE'
    document.head.appendChild(meta)

    // Track search queries (if available)
    const urlParams = new URLSearchParams(window.location.search)
    const searchQuery = urlParams.get('q')
    if (searchQuery && (window as any).gtag) {
      (window as any).gtag('event', 'search', {
        search_term: searchQuery
      })
    }
  }, [])

  return null
}

// SEO Score Monitoring
export function SEOScoreMonitor() {
  useEffect(() => {
    const checkSEOScore = () => {
      const issues: string[] = []
      const recommendations: string[] = []

      // Check for H1 tag
      const h1Tags = document.querySelectorAll('h1')
      if (h1Tags.length === 0) {
        issues.push('Missing H1 tag')
      } else if (h1Tags.length > 1) {
        issues.push('Multiple H1 tags found')
      }

      // Check for meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        issues.push('Missing meta description')
      } else {
        const description = metaDescription.getAttribute('content') || ''
        if (description.length < 120) {
          recommendations.push('Meta description is too short (recommended: 120-160 characters)')
        } else if (description.length > 160) {
          recommendations.push('Meta description is too long (recommended: 120-160 characters)')
        }
      }

      // Check for alt text on images
      const images = document.querySelectorAll('img')
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt)
      if (imagesWithoutAlt.length > 0) {
        issues.push(`${imagesWithoutAlt.length} images missing alt text`)
      }

      // Check for internal links
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="runrisenation.com"]')
      if (internalLinks.length < 5) {
        recommendations.push('Consider adding more internal links')
      }

      // Check for external links
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="runrisenation.com"])')
      if (externalLinks.length > 0) {
        recommendations.push('Consider adding rel="noopener" to external links')
      }

      // Log results
      console.log('SEO Score Check Results:')
      console.log('Issues:', issues)
      console.log('Recommendations:', recommendations)

      // Send to analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'seo_score_check', {
          issues_count: issues.length,
          recommendations_count: recommendations.length,
          issues: issues.join(', '),
          recommendations: recommendations.join(', ')
        })
      }
    }

    // Run check after page load
    setTimeout(checkSEOScore, 2000)
  }, [])

  return null
}

// Keyword Density Analyzer
export function KeywordDensityAnalyzer() {
  useEffect(() => {
    const analyzeKeywordDensity = () => {
      const content = document.querySelector('main')
      if (!content) return

      const text = content.textContent || ''
      const words = text.toLowerCase().match(/\b\w+\b/g) || []
      const wordCount = words.length

      // Target keywords
      const targetKeywords = [
        'running',
        'community',
        'events',
        'training',
        'marathon',
        'fitness',
        'bangladesh',
        'dhaka'
      ]

      const keywordDensity: { [key: string]: number } = {}

      targetKeywords.forEach(keyword => {
        const matches = words.filter(word => word === keyword.toLowerCase())
        const density = (matches.length / wordCount) * 100
        keywordDensity[keyword] = Math.round(density * 100) / 100
      })

      console.log('Keyword Density Analysis:', keywordDensity)

      // Send to analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'keyword_density_analysis', keywordDensity)
      }
    }

    setTimeout(analyzeKeywordDensity, 3000)
  }, [])

  return null
}

// Page Speed Insights Integration
export function PageSpeedInsights() {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // LCP
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        if ((window as any).gtag) {
          (window as any).gtag('event', 'web_vital', {
            metric_name: 'LCP',
            metric_value: Math.round(lastEntry.startTime),
            metric_rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
          })
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // FID
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime
          if ((window as any).gtag) {
            (window as any).gtag('event', 'web_vital', {
              metric_name: 'FID',
              metric_value: Math.round(fid),
              metric_rating: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor'
            })
          }
        })
      }).observe({ entryTypes: ['first-input'] })

      // CLS
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            if ((window as any).gtag) {
              (window as any).gtag('event', 'web_vital', {
                metric_name: 'CLS',
                metric_value: Math.round(clsValue * 1000) / 1000,
                metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
              })
            }
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

// SEO Reporting Dashboard
export function SEOReportingDashboard() {
  useEffect(() => {
    // Create SEO dashboard (for development)
    if (process.env.NODE_ENV === 'development') {
      const dashboard = document.createElement('div')
      dashboard.id = 'seo-dashboard'
      dashboard.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        width: 300px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 15px;
        font-family: monospace;
        font-size: 12px;
        z-index: 9999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      `

      const updateDashboard = () => {
        const h1Count = document.querySelectorAll('h1').length
        const h2Count = document.querySelectorAll('h2').length
        const imageCount = document.querySelectorAll('img').length
        const linkCount = document.querySelectorAll('a').length
        const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''

        dashboard.innerHTML = `
          <h3 style="margin: 0 0 10px 0; color: #333;">SEO Dashboard</h3>
          <div>H1 Tags: ${h1Count}</div>
          <div>H2 Tags: ${h2Count}</div>
          <div>Images: ${imageCount}</div>
          <div>Links: ${linkCount}</div>
          <div>Meta Description: ${metaDescription.length} chars</div>
          <div>Page Title: ${document.title.length} chars</div>
          <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 5px 10px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
        `
      }

      document.body.appendChild(dashboard)
      updateDashboard()

      // Update dashboard every 5 seconds
      const interval = setInterval(updateDashboard, 5000)

      return () => {
        clearInterval(interval)
        const existingDashboard = document.getElementById('seo-dashboard')
        if (existingDashboard) {
          existingDashboard.remove()
        }
      }
    }
  }, [])

  return null
}

