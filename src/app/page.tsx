'use client'

import { Layout } from '@/components/layout/layout'
import { AnimatedButton, AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { services, industries, portfolioItems } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-qog-black via-qog-black to-gray-900" />
        <div className="container-qog relative z-10 text-center">
          <AnimatedText delay={0.2}>
            <h1 className="heading-xl mb-8">
              We Engineer Growth Through
              <span className="text-qog-teal"> Intelligent Digital Systems</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.4}>
            <p className="body-lg max-w-3xl mx-auto mb-12 text-gray-300">
              Transform your business with data-driven strategies, cutting-edge technology, 
              and award-winning creative solutions that deliver measurable results.
            </p>
          </AnimatedText>
          
          <AnimatedCard delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <AnimatedButton variant="primary">Start Your Transformation</AnimatedButton>
              </Link>
              <Link href="/work">
                <AnimatedButton variant="secondary">View Our Work</AnimatedButton>
              </Link>
            </div>
          </AnimatedCard>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-qog-teal rounded-full flex justify-center">
            <div className="w-1 h-3 bg-qog-teal rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <div className="text-center mb-20">
            <AnimatedText>
              <h2 className="heading-lg text-qog-black mb-6">
                Our <span className="text-qog-teal">Services</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="body-lg text-gray-600 max-w-3xl mx-auto">
                From strategy to execution, we offer comprehensive digital solutions 
                tailored to accelerate your business growth.
              </p>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedCard key={service.id} delay={index * 0.1}>
                <Link href={`/services/${service.id}`}>
                  <div className="bg-qog-black p-8 h-full group cursor-pointer transition-all duration-300 hover:bg-qog-teal">
                    <h3 className="heading-md text-qog-white mb-4 group-hover:text-qog-black">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-qog-black/80">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <AnimatedButton variant="primary">View All Services</AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <div className="text-center mb-20">
            <AnimatedText>
              <h2 className="heading-lg mb-6">
                Industries We <span className="text-qog-teal">Transform</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="body-lg text-gray-300 max-w-3xl mx-auto">
                Specialized digital strategies for diverse industry verticals, 
                from professional services to healthcare and beyond.
              </p>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.slice(0, 8).map((industry, index) => (
              <AnimatedCard key={industry.id} delay={index * 0.1}>
                <Link href={`/industries/${industry.id}`}>
                  <div className="border border-gray-800 p-6 h-full group hover:border-qog-teal transition-all duration-300">
                    <h3 className="font-semibold text-qog-white mb-2 group-hover:text-qog-teal">
                      {industry.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/industries">
              <AnimatedButton variant="secondary">All Industries</AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <div className="text-center mb-20">
            <AnimatedText>
              <h2 className="heading-lg text-qog-black mb-6">
                Our <span className="text-qog-teal">Recent Work</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="body-lg text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped businesses like yours achieve 
                extraordinary digital success.
              </p>
            </AnimatedText>
          </div>

          <div className="space-y-24">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <AnimatedCard key={item.id} delay={index * 0.2}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div>
                    <div className="text-sm text-qog-teal font-semibold mb-2">{item.category}</div>
                    <h3 className="heading-md text-qog-black mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6">
                      {item.industry} • Delivered exceptional results through strategic digital transformation
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-3xl font-bold text-qog-teal mb-1">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-qog-teal/20 to-qog-black/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎨</div>
                        <p className="text-gray-600">Project Showcase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/work">
              <AnimatedButton variant="primary">View All Projects</AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
            <AnimatedCard delay={0.1}>
              <div className="text-center">
                <div className="text-5xl font-bold text-qog-teal mb-4">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-bold text-qog-teal mb-4">95%</div>
                <div className="text-gray-300">Client Retention</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-bold text-qog-teal mb-4">12+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <div className="text-center">
                <div className="text-5xl font-bold text-qog-teal mb-4">48h</div>
                <div className="text-gray-300">Average Response Time</div>
              </div>
            </AnimatedCard>
          </div>

          <div className="text-center">
            <AnimatedText>
              <h2 className="heading-lg mb-8">
                Ready to <span className="text-qog-teal">Transform</span> Your Digital Presence?
              </h2>
            </AnimatedText>
            <AnimatedCard delay={0.3}>
              <Link href="/contact">
                <AnimatedButton variant="primary" className="text-lg px-12 py-6">
                  Start Your Project Today
                </AnimatedButton>
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </Layout>
  )
}