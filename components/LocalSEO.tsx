import { StructuredData } from './StructuredData'

// Local Business Schema
export function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://runrisenation.com/#localbusiness",
    "name": "RunRise Nation",
    "description": "A passionate running community dedicated to fostering a culture of fitness, endurance, and camaraderie in Bangladesh.",
    "url": "https://runrisenation.com",
    "logo": "https://runrisenation.com/assets/img/logo.png",
    "image": "https://runrisenation.com/assets/img/nnr_20250525084451.jpg",
    "telephone": "+880-XXX-XXXXXX",
    "email": "info@runrisenation.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dhanmondi Lake Area",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka",
      "postalCode": "1205",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.7465",
      "longitude": "90.3760"
    },
    "openingHours": [
      "Mo-Fr 06:00-08:00",
      "Sa-Su 06:00-09:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Mobile Banking",
    "currenciesAccepted": "BDT",
    "areaServed": [
      {
        "@type": "City",
        "name": "Dhaka",
        "containedInPlace": {
          "@type": "Country",
          "name": "Bangladesh"
        }
      },
      {
        "@type": "City", 
        "name": "Chittagong",
        "containedInPlace": {
          "@type": "Country",
          "name": "Bangladesh"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "23.7465",
        "longitude": "90.3760"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Running Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Running Events",
            "description": "Organized running events and races"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Training Programs",
            "description": "Running training and coaching programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Community Membership",
            "description": "Join our running community"
          }
        }
      ]
    },
    "sameAs": [
      "https://facebook.com/runrisenation",
      "https://instagram.com/runrisenation",
      "https://twitter.com/runrisenation",
      "https://youtube.com/runrisenation"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Ahmed"
        },
        "reviewBody": "Amazing running community! The events are well-organized and the people are incredibly supportive."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mohammad Rahman"
        },
        "reviewBody": "Best running group in Dhaka. Great training programs and friendly atmosphere."
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData, null, 2)
      }}
    />
  )
}

// Sports Organization Schema
export function SportsOrganizationSchema() {
  const sportsOrgData = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "RunRise Nation",
    "alternateName": "RRN",
    "description": "A passionate running community dedicated to fostering a culture of fitness, endurance, and camaraderie.",
    "url": "https://runrisenation.com",
    "logo": "https://runrisenation.com/assets/img/logo.png",
    "foundingDate": "2020",
    "sport": "Running",
    "location": {
      "@type": "Place",
      "name": "Dhaka, Bangladesh",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      }
    },
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "Bangladesh Running Federation"
    },
    "sponsor": [
      {
        "@type": "Organization",
        "name": "Local Sports Brands"
      }
    ],
    "athlete": [
      {
        "@type": "Person",
        "name": "Elite Pacers",
        "description": "Professional running pacers and coaches"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(sportsOrgData, null, 2)
      }}
    />
  )
}

// Event Schema for running events
export function RunningEventSchema(eventData: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  price?: string
  organizer: string
}) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": eventData.name,
    "description": eventData.description,
    "startDate": eventData.startDate,
    "endDate": eventData.endDate,
    "location": {
      "@type": "Place",
      "name": eventData.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": eventData.organizer,
      "url": "https://runrisenation.com"
    },
    "offers": {
      "@type": "Offer",
      "price": eventData.price || "0",
      "priceCurrency": "BDT",
      "availability": "https://schema.org/InStock",
      "url": "https://runrisenation.com/events"
    },
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "sport": "Running",
    "audience": {
      "@type": "Audience",
      "audienceType": "Running Enthusiasts"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(eventSchema, null, 2)
      }}
    />
  )
}

// FAQ Schema for common questions
export function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I join RunRise Nation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can join RunRise Nation by registering on our website, attending our events, or connecting with us on social media. We welcome runners of all levels."
        }
      },
      {
        "@type": "Question",
        "name": "What types of running events do you organize?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We organize various running events including 5K fun runs, 10K races, half marathons, full marathons, and training sessions for all skill levels."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be an experienced runner to join?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, RunRise Nation welcomes runners of all levels, from beginners to experienced athletes. We have programs and events suitable for everyone."
        }
      },
      {
        "@type": "Question",
        "name": "Where are your running events held?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our events are primarily held in Dhaka, Bangladesh, with regular runs at Dhanmondi Lake and other scenic locations around the city."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get training and coaching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have experienced pacers and coaches who provide training sessions, personalized coaching, and group training programs for members."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData, null, 2)
      }}
    />
  )
}

// Breadcrumb Schema
export function BreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://runrisenation.com${crumb.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData, null, 2)
      }}
    />
  )
}
