import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, any>[]
}

export function generateSEO(props: SEOProps): Metadata {
  const {
    title = 'Qognition Agency - We Engineer Growth Through Intelligent Digital Systems',
    description = 'Transform your business with data-driven digital strategies. Award-winning digital agency specializing in SEO, PPC, web development, and custom software solutions.',
    keywords = 'digital agency, SEO, PPC, web development, mobile apps, branding, automation, AI SEO',
    ogImage = '/og-image.jpg',
    canonical = 'https://qognition-agency.com',
    type = 'website',
    jsonLd,
  } = props

  const baseMetadata: Metadata = {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical,
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

  if (jsonLd) {
    // JSON-LD will be handled separately in the page component
  }

  return baseMetadata
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Qognition Agency',
    description: 'Award-winning digital agency specializing in SEO, PPC, web development, and custom software solutions.',
    url: 'https://qognition-agency.com',
    logo: 'https://qognition-agency.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'hello@qognition-agency.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Ave, Suite 100',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/qognition-agency',
      'https://twitter.com/qognitionagency',
      'https://facebook.com/qognitionagency',
    ],
    foundingDate: '2012',
    numberOfEmployees: '50',
  }
}

export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Qognition Agency',
      url: 'https://qognition-agency.com',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
          },
        },
      ],
    },
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  }
}

export function generateArticleSchema(title: string, description: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Qognition Agency',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Qognition Agency',
      logo: {
        '@type': 'ImageObject',
        url: 'https://qognition-agency.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://qognition-agency.com',
    },
  }
}

export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Qognition Agency',
      url: 'https://qognition-agency.com',
    },
    about: {
      '@type': 'Thing',
      name: 'Digital Marketing and Development Services',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://qognition-agency.com/og-image.jpg',
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Qognition Agency',
    description: 'Award-winning digital agency specializing in SEO, PPC, web development, and custom software solutions.',
    url: 'https://qognition-agency.com',
    telephone: '+1-555-123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Ave, Suite 100',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    paymentAccepted: 'Credit Card, Bank Transfer',
    currenciesAccepted: 'USD, EUR, GBP',
  }
}