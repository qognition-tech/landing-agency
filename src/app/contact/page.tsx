'use client'

import { useState } from 'react'
import { Layout } from '@/components/layout/layout'
import { AnimatedText, AnimatedCard } from '@/components/ui/animated-elements'
import { AnimatedButton } from '@/components/ui/animated-elements'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      title: 'Email',
      content: 'hello@qognition-agency.com',
      icon: '✉️',
    },
    {
      title: 'Phone',
      content: '+1 (555) 123-4567',
      icon: '📞',
    },
    {
      title: 'Address',
      content: '123 Business Ave, Suite 100\nNew York, NY 10001',
      icon: '📍',
    },
  ]

  const offices = [
    {
      city: 'New York',
      country: 'USA',
      address: '123 Business Ave, Suite 100',
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Tech Street, Level 5',
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: '789 Innovation Hub, Tower A',
    },
  ]

  return (
    <Layout>
      <section className="section-padding bg-qog-black">
        <div className="container-qog">
          <AnimatedText>
            <h1 className="heading-xl mb-8">
              Let's <span className="text-qog-teal">Connect</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg max-w-4xl text-gray-300 mb-16">
              Ready to transform your digital presence? We're here to help. Reach out to discuss 
              your project, get a free consultation, or learn more about how we can accelerate your growth.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding bg-qog-white">
        <div className="container-qog">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedCard delay={0.1}>
              <div>
                <h2 className="heading-lg text-qog-black mb-8">Get in Touch</h2>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qog-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qog-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qog-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qog-teal focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="seo">SEO</option>
                        <option value="ppc">PPC Advertising</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="branding">Branding</option>
                        <option value="automation">Automation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qog-teal focus:border-transparent"
                      />
                    </div>

                    <AnimatedButton 
                      type="submit" 
                      variant="primary" 
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </AnimatedButton>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="heading-md text-qog-black mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-8">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <AnimatedButton 
                      variant="primary" 
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </AnimatedButton>
                  </motion.div>
                )}
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div>
                <h2 className="heading-lg text-qog-black mb-8">Contact Information</h2>
                
                <div className="space-y-8 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-qog-black mb-2">{info.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="heading-md text-qog-black mb-6">Office Locations</h3>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="bg-gray-100 p-6">
                        <h4 className="font-semibold text-qog-black mb-1">
                          {office.city}
                        </h4>
                        <div className="text-gray-600 text-sm mb-1">{office.country}</div>
                        <div className="text-gray-600">{office.address}</div>
                      </div>
                    ))}
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
              Frequently Asked <span className="text-qog-teal">Questions</span>
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="bg-qog-white p-8">
                <h3 className="heading-md text-qog-black mb-4">How quickly can we start?</h3>
                <p className="text-gray-600">
                  We typically begin projects within 1-2 weeks of contract signing, 
                  depending on project complexity and resource availability.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="bg-qog-white p-8">
                <h3 className="heading-md text-qog-black mb-4">What industries do you specialize in?</h3>
                <p className="text-gray-600">
                  We work across all industries but have deep expertise in legal, 
                  financial services, healthcare, e-commerce, and professional services.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="bg-qog-white p-8">
                <h3 className="heading-md text-qog-black mb-4">Do you offer ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive maintenance and support packages 
                  tailored to your needs after project completion.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4}>
              <div className="bg-qog-white p-8">
                <h3 className="heading-md text-qog-black mb-4">What's your pricing model?</h3>
                <p className="text-gray-600">
                  We offer flexible pricing including fixed-price projects, 
                  retainers, and hourly rates based on your requirements.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </Layout>
  )
}