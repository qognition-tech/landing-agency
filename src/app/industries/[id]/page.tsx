'use client'

import { Layout } from '@/components/layout/layout'
import { AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { AnimatedButton } from '@/components/ui/animated-elements'
import { industries } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface IndustryPageProps {
  params: {
    id: string
  }
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = industries.find(i => i.id === params.id)
  
  if (!industry) {
    notFound()
  }

  const challenges = [
    {
      title: "Digital Competition",
      description: "Standing out in crowded digital marketplaces requires innovative strategies."
    },
    {
      title: "Customer Acquisition",
      description: "Attracting and converting high-value customers in your specific industry."
    },
    {
      title: "Brand Authority",
      description: "Establishing trust and credibility in your industry sector."
    },
    {
      title: "ROI Optimization",
      description: "Maximizing return on digital marketing investments."
    }
  ]

  const solutions = [
    {
      title: "Industry-Specific SEO",
      description: "Targeted search optimization for industry-relevant keywords and audience."
    },
    {
      title: "Compliance Marketing",
      description: "Marketing strategies that comply with industry regulations and standards."
    },
    {
      title: "Thought Leadership",
      description: "Content strategies that position your brand as an industry expert."
    },
    {
      title: "Data-Driven Growth",
      description: "Analytics and insights tailored to industry-specific metrics."
    }
  ]

  return (
    <Layout>
      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <nav className="mb-8">
            <Link href="/industries" className="text-gray-400 hover:text-qog-teal transition-colors">
              ← Back to Industries
            </Link>
          </nav>
          
          <AnimatedText>
            <h1 className="heading-xl mb-8">
              {industry.title}
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg max-w-4xl text-gray-300 mb-16">
              {industry.description}
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black mb-16 text-center">
              Industry <span className="text-qog-teal">Specializations</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.subcategories.map((subcategory, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="bg-gray-100 p-6 h-full">
                  <h3 className="font-semibold text-qog-black mb-2">{subcategory}</h3>
                  <p className="text-gray-600 text-sm">
                    Specialized digital strategies for {subcategory.toLowerCase()} businesses.
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedCard delay={0.1}>
              <div>
                <h2 className="heading-md mb-8">Common Challenges</h2>
                <div className="space-y-6">
                  {challenges.map((challenge, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-qog-teal mb-2">{challenge.title}</h3>
                      <p className="text-gray-300">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div>
                <h2 className="heading-md mb-8">Our Solutions</h2>
                <div className="space-y-6">
                  {solutions.map((solution, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-qog-teal mb-2">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <AnimatedText>
            <h2 className="heading-lg text-qog-black text-center mb-16">
              Success <span className="text-qog-teal">Metrics</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-qog-teal mb-2">280%</div>
                <div className="text-gray-600">Average Lead Increase</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-qog-teal mb-2">65%</div>
                <div className="text-gray-600">Cost Per Lead Reduction</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="text-center">
                <div className="text-4xl font-bold text-qog-teal mb-2">4.2x</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4}>
              <div className="text-center">
                <div className="text-4xl font-bold text-qog-teal mb-2">92%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-qog-black">
        <div className="container-qog text-center">
          <AnimatedText>
            <h2 className="heading-lg mb-8">
              Transform Your <span className="text-qog-teal">Industry Presence</span>
            </h2>
          </AnimatedText>
          
          <AnimatedCard delay={0.3}>
            <Link href="/contact">
              <AnimatedButton variant="primary">
                Get Industry-Specific Strategy
              </AnimatedButton>
            </Link>
          </AnimatedCard>
        </div>
      </section>
    </Layout>
  )
}