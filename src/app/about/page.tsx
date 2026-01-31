'use client'

import { Layout } from '@/components/layout/layout'
import { AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { AnimatedButton } from '@/components/ui/animated-elements'
import Link from 'next/link'

const timeline = [
  {
    year: '2012',
    title: 'Foundation',
    description: 'Qognition Agency was founded with a vision to bridge the gap between technology and business growth.',
  },
  {
    year: '2014',
    title: 'Expansion',
    description: 'Opened our first international office in London and expanded our service offerings.',
  },
  {
    year: '2016',
    title: 'Innovation',
    description: 'Launched our proprietary AI-powered marketing automation platform.',
  },
  {
    year: '2018',
    title: 'Growth',
    description: 'Reached 100+ clients and expanded to multiple regions including USA and APAC.',
  },
  {
    year: '2020',
    title: 'Excellence',
    description: 'Received multiple industry awards for digital innovation and client results.',
  },
  {
    year: '2022',
    title: 'Transformation',
    description: 'Pioneered next-gen SEO strategies and helped clients navigate digital transformation.',
  },
  {
    year: '2024',
    title: 'Future Ready',
    description: 'Continued innovation with AI integration and sustainable digital solutions.',
  },
]

const leadership = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in digital transformation and business strategy.',
    expertise: 'Strategic Planning, Business Growth, Digital Innovation',
  },
  {
    name: 'Sarah Martinez',
    role: 'CTO',
    bio: 'Technology expert specializing in scalable architectures and emerging technologies.',
    expertise: 'Cloud Architecture, AI/ML, DevOps',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Marketing',
    bio: 'Marketing strategist with proven track record of driving exponential growth.',
    expertise: 'Growth Marketing, SEO, Performance Marketing',
  },
  {
    name: 'Emily Davis',
    role: 'Creative Director',
    bio: 'Award-winning creative leader passionate about brand transformation.',
    expertise: 'Brand Strategy, UX/UI Design, Creative Direction',
  },
]

const values = [
  {
    title: 'Innovation First',
    description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
    icon: '💡',
  },
  {
    title: 'Client Success',
    description: 'Your success is our success. We measure our growth by the results we deliver.',
    icon: '🎯',
  },
  {
    title: 'Data-Driven',
    description: 'Every decision we make is backed by data, analytics, and measurable insights.',
    icon: '📊',
  },
  {
    title: 'Partnership',
    description: 'We work as an extension of your team, building lasting relationships based on trust.',
    icon: '🤝',
  },
]

export default function AboutPage() {
  return (
    <Layout>
      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h1 className="heading-xl mb-8">
              About <span className="text-qog-teal">Qognition</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg max-w-4xl text-gray-300 mb-16">
              We are a team of passionate digital experts dedicated to engineering growth 
              through intelligent systems. Founded in 2012, we've helped hundreds of businesses 
              transform their digital presence and achieve remarkable results.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-16 text-center">
              Our <span className="text-qog-teal">Journey</span>
            </h2>
          </AnimatedText>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-qog-teal"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2"></div>
                    <div className="w-12 h-12 bg-qog-teal rounded-full flex items-center justify-center z-10">
                      <div className="w-6 h-6 bg-qog-black rounded-full"></div>
                    </div>
                    <div className="w-1/2 px-8">
                      <div className="bg-gray-100 p-6">
                        <div className="text-qog-teal font-semibold mb-2">{item.year}</div>
                        <h3 className="heading-md text-qog-black mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg mb-16 text-center">
              Our <span className="text-qog-teal">Values</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h3 className="heading-md text-qog-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-16 text-center">
              Leadership <span className="text-qog-teal">Team</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="bg-qog-black p-6 h-full">
                  <div className="w-24 h-24 bg-qog-teal rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-3xl text-qog-black font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <h3 className="heading-md text-qog-white mb-2 text-center">{leader.name}</h3>
                  <div className="text-qog-teal font-semibold mb-4 text-center">{leader.role}</div>
                  <p className="text-gray-300 text-sm mb-4">{leader.bio}</p>
                  
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Expertise</div>
                    <p className="text-gray-400 text-sm">{leader.expertise}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg mb-16 text-center">
              By the <span className="text-qog-teal">Numbers</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="text-center">
                <div className="text-5xl font-bold text-qog-teal mb-4">12+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-bold text-qog-teal mb-4">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-bold text-qog-teal mb-4">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4}>
              <div className="text-center">
                <div className="text-5xl font-bold text-qog-teal mb-4">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-8 text-center">
              Our <span className="text-qog-teal">Approach</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <AnimatedCard delay={0.1}>
              <div>
                <div className="w-16 h-16 bg-qog-teal rounded-full flex items-center justify-center mb-6">
                  <div className="text-2xl text-qog-black">🔍</div>
                </div>
                <h3 className="heading-md text-qog-black mb-4">Discover</h3>
                <p className="text-gray-600">
                  We start by understanding your business, goals, challenges, and opportunities 
                  through comprehensive research and analysis.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div>
                <div className="w-16 h-16 bg-qog-teal rounded-full flex items-center justify-center mb-6">
                  <div className="text-2xl text-qog-black">🎯</div>
                </div>
                <h3 className="heading-md text-qog-black mb-4">Strategize</h3>
                <p className="text-gray-600">
                  Based on insights, we develop tailored strategies that align with your objectives 
                  and deliver measurable results.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div>
                <div className="w-16 h-16 bg-qog-teal rounded-full flex items-center justify-center mb-6">
                  <div className="text-2xl text-qog-black">🚀</div>
                </div>
                <h3 className="heading-md text-qog-black mb-4">Execute</h3>
                <p className="text-gray-600">
                  Our expert team implements strategies with precision, using cutting-edge tools 
                  and best practices for optimal results.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog text-center">
          <AnimatedText>
            <h2 className="heading-lg mb-8">
              Join Our <span className="text-qog-teal">Mission</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg text-gray-300 max-w-3xl mx-auto mb-12">
              We're always looking for talented individuals who share our passion for 
              innovation and client success. Check out our open positions.
            </p>
          </AnimatedText>
          
          <AnimatedCard delay={0.3}>
            <Link href="/careers">
              <AnimatedButton variant="primary">
                View Career Opportunities
              </AnimatedButton>
            </Link>
          </AnimatedCard>
        </div>
      </section>
    </Layout>
  )
}