import { Metadata } from 'next'

const baseUrl = 'https://runrisenation.com'
const siteName = 'RunRise Nation'

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

// URLs that should be excluded from SEO indexing (sensitive/private content)
const EXCLUDED_SEO_PATHS = [
  '/profile',
  '/profile/',
  '/profile/my-profile',
  '/profile/my-events',
  '/profile/my-stories',
  '/profile/all-events',
  '/race/bib',
  '/race/certificates',
  '/api/',
  '/admin/',
  '/private/',
];

// Check if a URL should be excluded from SEO
function shouldExcludeFromSEO(url: string): boolean {
  return EXCLUDED_SEO_PATHS.some(excludedPath => url.startsWith(excludedPath));
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = '/assets/img/nnr_20250525084451.jpg',
    url = '',
    type = 'website',
    publishedTime,
    modifiedTime,
    author = 'RunRise Nation',
    section,
    tags = []
  } = config

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  // Check if this page should be excluded from SEO
  const isExcluded = shouldExcludeFromSEO(url);

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'running community',
      'running events',
      'marathon training',
      'Bangladesh running',
      'Dhaka running',
      'fitness community'
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: siteName,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl],
      creator: '@runrisenation',
      site: '@runrisenation',
    },
    robots: isExcluded ? {
      index: false,
      follow: false,
      noindex: true,
      nofollow: true,
      googleBot: {
        index: false,
        follow: false,
        noindex: true,
        nofollow: true,
      },
    } : {
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
  }

  return metadata
}

// Pre-configured metadata for different page types
export const pageMetadata = {
  home: generateMetadata({
    title: 'RunRise Nation - Run and Rise Together',
    description: 'Join our passionate running community for high-quality events, virtual challenges, and an inclusive environment where every step counts towards a healthier, stronger future.',
    keywords: ['running community', 'running events', 'marathon training', 'virtual run'],
    url: '/',
  }),

  about: generateMetadata({
    title: 'About RunRise Nation',
    description: 'Learn about our running community, mission, values, and the passionate team behind RunRise Nation. Discover how we foster fitness, endurance, and camaraderie.',
    keywords: ['about running community', 'running mission', 'fitness values', 'running team'],
    url: '/about',
  }),

  events: generateMetadata({
    title: 'Running Events & Training',
    description: 'Join our upcoming running events, training sessions, and community activities. From 5K fun runs to marathon training, we have something for every runner.',
    keywords: ['running events', 'marathon training', '5K runs', 'running bootcamp', 'training sessions'],
    url: '/events',
    type: 'website',
  }),

  blog: generateMetadata({
    title: 'Running Blog & Stories',
    description: 'Read inspiring running stories, training tips, and community insights from RunRise Nation members. Get expert advice and stay motivated on your running journey.',
    keywords: ['running blog', 'running stories', 'training tips', 'running advice', 'motivation'],
    url: '/blog',
    type: 'article',
  }),

  register: generateMetadata({
    title: 'Join RunRise Nation',
    description: 'Become a member of RunRise Nation running community. Register now to access exclusive events, training programs, and connect with fellow runners.',
    keywords: ['join running community', 'running membership', 'register running', 'running community signup'],
    url: '/engage/register',
  }),

  collab: generateMetadata({
    title: 'Partnership & Collaboration',
    description: 'Partner with RunRise Nation for running events, sponsorships, and community initiatives. Let\'s work together to promote fitness and healthy living.',
    keywords: ['running partnership', 'event sponsorship', 'fitness collaboration', 'running community partnership'],
    url: '/engage/collab',
  }),

  stories: generateMetadata({
    title: 'Share Your Running Story',
    description: 'Share your inspiring running journey with the RunRise Nation community. Your story can motivate others to start their fitness journey.',
    keywords: ['running stories', 'share running journey', 'running motivation', 'personal running story'],
    url: '/engage/stories',
  }),

  faq: generateMetadata({
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about RunRise Nation, our events, membership, training programs, and running community guidelines.',
    keywords: ['running FAQ', 'running questions', 'community guidelines', 'event information'],
    url: '/engage/faq',
  }),

  raceEssentials: generateMetadata({
    title: 'Race Day Essentials',
    description: 'Everything you need to know for race day preparation. Get your race day checklist, tips, and essential information for RunRise Nation events.',
    keywords: ['race day preparation', 'running checklist', 'race essentials', 'running tips'],
    url: '/race/essentials',
  }),
}

// Utility function to generate breadcrumb metadata
export function generateBreadcrumbMetadata(breadcrumbs: Array<{ name: string; url: string }>) {
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1]
  return generateMetadata({
    title: lastBreadcrumb.name,
    description: `Navigate to ${lastBreadcrumb.name} on RunRise Nation. ${breadcrumbs.map(b => b.name).join(' > ')}`,
    url: lastBreadcrumb.url,
  })
}

// Utility function to generate event-specific metadata
export function generateEventMetadata(eventData: {
  name: string
  description: string
  date: string
  location: string
  url: string
}) {
  return generateMetadata({
    title: eventData.name,
    description: eventData.description,
    keywords: ['running event', 'marathon', '5K', '10K', 'running race', eventData.location],
    url: eventData.url,
    type: 'website',
    publishedTime: new Date().toISOString(),
  })
}

// Utility function to generate blog post metadata
export function generateBlogMetadata(blogData: {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  author: string
  tags: string[]
  url: string
}) {
  return generateMetadata({
    title: blogData.title,
    description: blogData.description,
    keywords: blogData.tags,
    url: blogData.url,
    type: 'article',
    publishedTime: blogData.publishedTime,
    modifiedTime: blogData.modifiedTime,
    author: blogData.author,
    tags: blogData.tags,
  })
}
