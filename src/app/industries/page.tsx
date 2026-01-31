'use client'

import { Layout } from '@/components/layout/layout'
import { AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { industries } from '@/lib/data'
import Link from 'next/link'

export default function IndustriesPage() {
  return (
    <Layout>
      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h1 className="heading-xl mb-8">
              Industries We <span className="text-qog-teal">Support</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg max-w-4xl text-gray-300 mb-16">
              We work with startups, SMEs, law firms, professional services, e-commerce, 
              and technology companies to implement tailored digital growth strategies.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedCard key={industry.id} delay={index * 0.1}>
                <Link href={`/industries/${industry.id}`}>
                  <div className="bg-qog-black p-8 h-full group cursor-pointer transition-all duration-300 hover:bg-qog-teal">
                    <h3 className="heading-md text-qog-white mb-4 group-hover:text-qog-black">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 mb-6 group-hover:text-qog-black/80">
                      {industry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.subcategories.slice(0, 3).map((sub, idx) => (
                        <span key={idx} className="text-xs bg-qog-white/20 text-qog-white px-3 py-1 rounded-full group-hover:bg-qog-black/20 group-hover:text-qog-black">
                          {sub}
                        </span>
                      ))}
                      {industry.subcategories.length > 3 && (
                        <span className="text-xs bg-qog-white/20 text-qog-white px-3 py-1 rounded-full group-hover:bg-qog-black/20 group-hover:text-qog-black">
                          +{industry.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-qog-white group-hover:text-qog-black font-semibold mt-6">
                      Explore Industry
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-center mb-16">
              Global <span className="text-qog-teal">Reach</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {['USA', 'UK', 'Germany', 'France', 'Canada', 'Australia', 'KSA', 'Qatar', 'UAE', 'India'].map((region, index) => (
              <AnimatedCard key={region} delay={index * 0.1}>
                <div className="border border-gray-800 p-6 hover:border-qog-teal transition-all duration-300">
                  <div className="text-qog-teal font-semibold">{region}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog text-center">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-8">
              Industry-Specific <span className="text-qog-teal">Solutions</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto mb-16">
              Every industry has unique challenges and opportunities. Our tailored strategies 
              ensure your digital presence resonates with your target audience and drives business growth.
            </p>
          </AnimatedText>
          
          <AnimatedCard delay={0.3}>
            <Link href="/contact">
              <div className="inline-block bg-qog-teal text-qog-black px-12 py-6 font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-opacity-90 hover:scale-105">
                Discuss Your Industry Needs
              </div>
            </Link>
          </AnimatedCard>
        </div>
      </section>
    </Layout>
  )
}