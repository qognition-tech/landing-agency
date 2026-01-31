import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { JSONLD } from '@/components/ui/jsonld'
import { generateOrganizationSchema } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Qognition Agency - We Engineer Growth Through Intelligent Digital Systems',
  description: 'Transform your business with data-driven digital strategies. Award-winning digital agency specializing in SEO, PPC, web development, and custom software solutions.',
  keywords: 'digital agency, SEO, PPC, web development, mobile apps, branding, automation, AI SEO',
  openGraph: {
    title: 'Qognition Agency - Digital Growth Experts',
    description: 'We engineer growth through intelligent digital systems',
    type: 'website',
    url: 'https://qognition-agency.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://qognition-agency.com',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JSONLD data={generateOrganizationSchema()} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}