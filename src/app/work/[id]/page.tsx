'use client'

import { Layout } from '@/components/layout/layout'
import { AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { AnimatedButton } from '@/components/ui/animated-elements'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const allPortfolioItems = [
  {
    id: 1,
    title: 'Luxury Retail Transformation',
    category: 'Web Development',
    industry: 'Luxury Retail',
    client: 'Luxury Fashion Brand',
    duration: '6 months',
    image: '/projects/luxury-retail.jpg',
    overview: 'Complete digital transformation of a luxury retail brand, including e-commerce platform redesign, marketing automation, and customer experience optimization.',
    challenge: 'The client was struggling with low online conversion rates, outdated user experience, and inefficient marketing spend across multiple channels.',
    solution: 'We developed a comprehensive digital strategy including a modern e-commerce platform, personalized customer journeys, and data-driven marketing automation.',
    results: { traffic: '+250%', conversion: '+180%', revenue: '+320%', roi: '420%' },
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Segment'],
  },
  {
    id: 2,
    title: 'FinTech Mobile App Launch',
    category: 'Mobile Development',
    industry: 'Financial Services',
    client: 'FinTech Startup',
    duration: '4 months',
    image: '/projects/fintech-app.jpg',
    overview: 'Development and launch of a revolutionary mobile banking app with advanced security features and user-friendly interface.',
    challenge: 'The client needed a secure, compliant mobile solution that could compete with established banking apps while offering innovative features.',
    solution: 'Built a native mobile app with biometric authentication, real-time transactions, and AI-powered financial insights with bank-level security.',
    results: { downloads: '500K+', retention: '85%', rating: '4.8★', users: '250K active' },
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Stripe API', 'Plaid'],
  },
  {
    id: 3,
    title: 'Healthcare SEO Campaign',
    category: 'SEO',
    industry: 'Healthcare',
    client: 'Medical Practice Group',
    duration: '8 months',
    image: '/projects/healthcare-seo.jpg',
    overview: 'Comprehensive SEO strategy for a multi-location medical practice focusing on local search and patient acquisition.',
    challenge: 'The practice was invisible in search results for key medical procedures and losing patients to competitors with better online visibility.',
    solution: 'Implemented technical SEO fixes, content strategy, local SEO optimization, and built high-quality medical backlinks to establish authority.',
    results: { ranking: '#1-3', leads: '+400%', roi: '540%', appointments: '+280%' },
    technologies: ['Technical SEO', 'Content Strategy', 'Local SEO', 'Schema Markup', 'Google Analytics'],
  }
]

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allPortfolioItems.find(p => p.id === parseInt(params.id))
  
  if (!project) {
    notFound()
  }

  return (
    <Layout>
      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <nav className="mb-8">
            <Link href="/work" className="text-gray-400 hover:text-qog-teal transition-colors">
              ← Back to Our Work
            </Link>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedCard delay={0.1}>
              <div>
                <div className="text-sm text-qog-teal font-semibold mb-4">{project.category}</div>
                <h1 className="heading-xl mb-6">{project.title}</h1>
                <div className="space-y-4 text-gray-300">
                  <div><span className="font-semibold text-qog-white">Client:</span> {project.client}</div>
                  <div><span className="font-semibold text-qog-white">Industry:</span> {project.industry}</div>
                  <div><span className="font-semibold text-qog-white">Duration:</span> {project.duration}</div>
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-qog-teal/20 to-qog-black/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <p className="text-gray-600">Project Showcase</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-8">Project Overview</h2>
          </AnimatedText>
          
          <AnimatedCard delay={0.2}>
            <p className="body-lg text-gray-600 max-w-4xl">
              {project.overview}
            </p>
          </AnimatedCard>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedCard delay={0.1}>
              <div>
                <h2 className="heading-md mb-8">The Challenge</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div>
                <h2 className="heading-md mb-8">Our Solution</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-16 text-center">
              Results & <span className="text-qog-teal">Impact</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {Object.entries(project.results).map(([key, value]) => (
              <AnimatedCard key={key} delay={0.1}>
                <div className="text-center bg-qog-black p-8 h-full">
                  <div className="text-4xl font-bold text-qog-teal mb-3">{value}</div>
                  <div className="text-gray-300 capitalize">{key.replace(/_/g, ' ')}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard delay={0.3}>
            <div className="bg-gray-100 p-8">
              <h3 className="heading-md text-qog-black mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-qog-teal text-qog-black px-4 py-2 rounded-full text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog text-center">
          <AnimatedText>
            <h2 className="heading-lg mb-8">
              Ready to <span className="text-qog-teal">Transform Your Business?</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg text-gray-300 max-w-3xl mx-auto mb-12">
              Let's create a success story for your business. Get in touch with our team 
              to discuss how we can help you achieve similar results.
            </p>
          </AnimatedText>
          
          <AnimatedCard delay={0.3}>
            <Link href="/contact">
              <AnimatedButton variant="primary">
                Start Your Project
              </AnimatedButton>
            </Link>
          </AnimatedCard>
        </div>
      </section>
    </Layout>
  )
}