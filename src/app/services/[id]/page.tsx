'use client'

import { Layout } from '@/components/layout/layout'
import { AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { AnimatedButton } from '@/components/ui/animated-elements'
import { services } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: {
    id: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.id === params.id)
  
  if (!service) {
    notFound()
  }

  return (
    <Layout>
      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <nav className="mb-8">
            <Link href="/services" className="text-gray-400 hover:text-qog-teal transition-colors">
              ← Back to Services
            </Link>
          </nav>
          
          <AnimatedText>
            <h1 className="heading-xl mb-8">
              {service.title}
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg max-w-4xl text-gray-300 mb-16">
              {service.description}
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedCard delay={0.1}>
              <div>
                <h2 className="heading-md text-qog-black mb-8">Our Approach</h2>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="font-semibold text-qog-teal mb-2">01. Discovery & Analysis</h3>
                    <p>We dive deep into your business goals, target audience, and competitive landscape to develop a comprehensive understanding of your needs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-qog-teal mb-2">02. Strategy Development</h3>
                    <p>Based on our findings, we craft a tailored strategy that aligns with your objectives and maximizes ROI.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-qog-teal mb-2">03. Implementation</h3>
                    <p>Our expert team executes the strategy with precision, utilizing cutting-edge tools and best practices.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-qog-teal mb-2">04. Optimization & Growth</h3>
                    <p>We continuously monitor performance, analyze data, and refine our approach to ensure sustainable growth.</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div>
                <h2 className="heading-md text-qog-black mb-8">Key Benefits</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-qog-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-qog-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-qog-black mb-2">Increased ROI</h3>
                      <p className="text-gray-600">Data-driven strategies that deliver measurable results and maximize your marketing budget.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-qog-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-qog-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-qog-black mb-2">Expert Team</h3>
                      <p className="text-gray-600">Access to specialists with deep industry knowledge and proven track records.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-qog-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-qog-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-qog-black mb-2">Scalable Solutions</h3>
                      <p className="text-gray-600">Flexible approaches that grow with your business and adapt to market changes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-center mb-16">
              Success <span className="text-qog-teal">Stories</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-qog-teal mb-2">340%</div>
                <div className="text-gray-300">Increase in Leads</div>
                <div className="text-gray-400 text-sm mt-2">E-commerce Client</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-qog-teal mb-2">89%</div>
                <div className="text-gray-300">Cost Reduction</div>
                <div className="text-gray-400 text-sm mt-2">Manufacturing Company</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="text-center">
                <div className="text-4xl font-bold text-qog-teal mb-2">Top 3</div>
                <div className="text-gray-300">Search Rankings</div>
                <div className="text-gray-400 text-sm mt-2">Professional Services</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog text-center">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-8">
              Transform Your <span className="text-qog-teal">Business Today</span>
            </h2>
          </AnimatedText>
          
          <AnimatedCard delay={0.3}>
            <Link href="/contact">
              <AnimatedButton variant="primary">
                Get Your Free Strategy Session
              </AnimatedButton>
            </Link>
          </AnimatedCard>
        </div>
      </section>
    </Layout>
  )
}