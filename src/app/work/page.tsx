'use client'

import { useState } from 'react'
import { Layout } from '@/components/layout/layout'
import { AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { portfolioItems } from '@/lib/data'
import Link from 'next/link'

const allPortfolioItems = [
  ...portfolioItems,
  {
    id: 4,
    title: 'Real Estate Platform Launch',
    category: 'Web Development',
    industry: 'Real Estate',
    image: '/projects/real-estate.jpg',
    metrics: { leads: '+650%', traffic: '+300%', conversion: '+220%' },
  },
  {
    id: 5,
    title: 'Healthcare Brand Overhaul',
    category: 'Branding',
    industry: 'Healthcare',
    image: '/projects/healthcare-brand.jpg',
    metrics: { recognition: '+400%', trust: '+180%', engagement: '+250%' },
  },
  {
    id: 6,
    title: 'E-commerce Automation',
    category: 'Automation',
    industry: 'E-commerce',
    image: '/projects/ecommerce-auto.jpg',
    metrics: { efficiency: '+500%', costs: '-60%', accuracy: '99.8%' },
  },
  {
    id: 7,
    title: 'SaaS SEO Campaign',
    category: 'SEO',
    industry: 'Technology',
    image: '/projects/saas-seo.jpg',
    metrics: { ranking: '#1-5', mrr: '+400%', users: '+800%' },
  },
  {
    id: 8,
    title: 'Manufacturing Digital Twin',
    category: 'Custom Development',
    industry: 'Manufacturing',
    image: '/projects/manufacturing.jpg',
    metrics: { efficiency: '+350%', downtime: '-80%', quality: '+200%' },
  },
  {
    id: 9,
    title: 'FinTech Mobile Banking',
    category: 'Mobile Development',
    industry: 'Financial Services',
    image: '/projects/fintech-banking.jpg',
    metrics: { users: '1M+', retention: '92%', nps: '78' },
  },
]

const categories = ['All', 'Web Development', 'Mobile Development', 'SEO', 'Branding', 'Automation', 'Custom Development']

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All' 
    ? allPortfolioItems 
    : allPortfolioItems.filter(item => item.category === selectedCategory)

  return (
    <Layout>
      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h1 className="heading-xl mb-8">
              Our <span className="text-qog-teal">Work</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg max-w-4xl text-gray-300 mb-16">
              Discover how we've transformed businesses across industries with innovative 
              digital solutions that drive measurable results and sustainable growth.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-qog-teal text-qog-black'
                    : 'bg-qog-black text-qog-white hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedCard key={item.id} delay={index * 0.1}>
                <Link href={`/work/${item.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-qog-teal/20 to-qog-black/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🎨</div>
                          <p className="text-gray-600">{item.category}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-qog-black/0 group-hover:bg-qog-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                          <p className="font-semibold mb-2">View Project</p>
                          <p className="text-sm">{item.industry}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-xs text-qog-teal font-semibold uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="heading-md text-qog-black mb-4 group-hover:text-qog-teal transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {item.industry} • Exceptional results through strategic digital transformation
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(item.metrics).slice(0, 3).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-xl font-bold text-qog-teal mb-1">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
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
              Client <span className="text-qog-teal">Testimonials</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="bg-qog-white p-8 h-full">
                <div className="text-4xl text-qog-teal mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">
                  Qognition transformed our digital presence completely. Our leads increased by 340% in just 6 months.
                </p>
                <div className="font-semibold text-qog-black">Sarah Johnson</div>
                <div className="text-gray-600 text-sm">CEO, TechStartup</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="bg-qog-white p-8 h-full">
                <div className="text-4xl text-qog-teal mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">
                  Their data-driven approach to SEO got us to page 1 for our most competitive keywords.
                </p>
                <div className="font-semibold text-qog-black">Michael Chen</div>
                <div className="text-gray-600 text-sm">Marketing Director, Legal Firm</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="bg-qog-white p-8 h-full">
                <div className="text-4xl text-qog-teal mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">
                  The custom web app they built streamlined our operations and saved us thousands in costs.
                </p>
                <div className="font-semibold text-qog-black">Emily Davis</div>
                <div className="text-gray-600 text-sm">COO, Manufacturing Co</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog text-center">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-8">
              Ready to <span className="text-qog-teal">Start Your Project?</span>
            </h2>
          </AnimatedText>
          
          <AnimatedCard delay={0.3}>
            <Link href="/contact">
              <div className="inline-block bg-qog-teal text-qog-black px-12 py-6 font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-opacity-90 hover:scale-105">
                Discuss Your Project
              </div>
            </Link>
          </AnimatedCard>
        </div>
      </section>
    </Layout>
  )
}