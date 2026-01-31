'use client'

import { Layout } from '@/components/layout/layout'
import { AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { services } from '@/lib/data'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <Layout>
      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h1 className="heading-xl mb-8">
              Our <span className="text-qog-teal">Services</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg max-w-4xl text-gray-300 mb-16">
              From strategic planning to technical execution, we offer a comprehensive suite 
              of digital services designed to accelerate your business growth and maximize ROI.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={service.id} delay={index * 0.1}>
                <Link href={`/services/${service.id}`}>
                  <div className="bg-qog-black p-8 h-full group cursor-pointer transition-all duration-300 hover:bg-qog-teal">
                    <div className="w-16 h-16 bg-qog-teal rounded-lg flex items-center justify-center mb-6 group-hover:bg-qog-black">
                      <div className="text-2xl">⚡</div>
                    </div>
                    <h3 className="heading-md text-qog-white mb-4 group-hover:text-qog-black">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 group-hover:text-qog-black/80">
                      {service.description}
                    </p>
                    <div className="flex items-center text-qog-white group-hover:text-qog-black font-semibold">
                      Learn More
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
        <div className="container-qog text-center">
          <AnimatedText>
            <h2 className="heading-lg mb-8">
              Ready to <span className="text-qog-teal">Get Started?</span>
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