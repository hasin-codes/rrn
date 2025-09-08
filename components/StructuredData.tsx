import { Metadata } from 'next'

interface StructuredDataProps {
  type: 'Organization' | 'Event' | 'WebSite' | 'BreadcrumbList' | 'FAQPage'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://runrisenation.com'
    
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RunRise Nation",
          "url": baseUrl,
          "logo": `${baseUrl}/assets/img/logo.png`,
          "description": "A passionate running community dedicated to fostering a culture of fitness, endurance, and camaraderie.",
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "RunRise Nation Team"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhaka",
            "addressCountry": "Bangladesh"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@runrisenation.com"
          },
          "sameAs": [
            "https://facebook.com/runrisenation",
            "https://instagram.com/runrisenation",
            "https://twitter.com/runrisenation"
          ],
          "memberOf": {
            "@type": "Organization",
            "name": "Bangladesh Running Community"
          }
        }

      case 'Event':
        return {
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          "name": data.name || "RunRise Nation Running Event",
          "description": data.description || "Join our running community for an exciting event",
          "startDate": data.startDate || "2024-12-01T06:00:00+06:00",
          "endDate": data.endDate || "2024-12-01T10:00:00+06:00",
          "location": {
            "@type": "Place",
            "name": data.location || "Dhanmondi Lake, Dhaka",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dhaka",
              "addressCountry": "Bangladesh"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "RunRise Nation",
            "url": baseUrl
          },
          "offers": {
            "@type": "Offer",
            "price": data.price || "0",
            "priceCurrency": "BDT",
            "availability": "https://schema.org/InStock"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RunRise Nation",
          "url": baseUrl,
          "description": "Join our passionate running community for high-quality events, virtual challenges, and an inclusive environment.",
          "publisher": {
            "@type": "Organization",
            "name": "RunRise Nation"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }

      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs.map((crumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${baseUrl}${crumb.url}`
          }))
        }

      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }

      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  )
}

// Pre-built structured data components
export function OrganizationStructuredData() {
  return <StructuredData type="Organization" data={{}} />
}

export function WebsiteStructuredData() {
  return <StructuredData type="WebSite" data={{}} />
}

export function EventStructuredData(eventData: any) {
  return <StructuredData type="Event" data={eventData} />
}

export function BreadcrumbStructuredData(breadcrumbs: any[]) {
  return <StructuredData type="BreadcrumbList" data={{ breadcrumbs }} />
}

export function FAQStructuredData(faqs: any[]) {
  return <StructuredData type="FAQPage" data={{ faqs }} />
}
