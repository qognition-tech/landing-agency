import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-qog-white text-qog-black">
      <div className="container-qog section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="heading-md mb-6">QOGNITION AGENCY</h3>
            <p className="body-lg mb-8 text-gray-600">
              We engineer growth through intelligent digital systems. 
              Transform your business with data-driven strategies and cutting-edge technology.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-qog-teal transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-qog-teal transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-qog-teal transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/seo" className="text-gray-600 hover:text-qog-teal transition-colors">SEO</Link></li>
              <li><Link href="/services/ppc" className="text-gray-600 hover:text-qog-teal transition-colors">PPC Advertising</Link></li>
              <li><Link href="/services/web-development" className="text-gray-600 hover:text-qog-teal transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app" className="text-gray-600 hover:text-qog-teal transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/branding" className="text-gray-600 hover:text-qog-teal transition-colors">Branding</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              <li><Link href="/industries/law-firms" className="text-gray-600 hover:text-qog-teal transition-colors">Law Firms</Link></li>
              <li><Link href="/industries/financial-services" className="text-gray-600 hover:text-qog-teal transition-colors">Financial Services</Link></li>
              <li><Link href="/industries/healthcare" className="text-gray-600 hover:text-qog-teal transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/real-estate" className="text-gray-600 hover:text-qog-teal transition-colors">Real Estate</Link></li>
              <li><Link href="/industries/ecommerce" className="text-gray-600 hover:text-qog-teal transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-qog-teal transition-colors">About Us</Link></li>
              <li><Link href="/work" className="text-gray-600 hover:text-qog-teal transition-colors">Our Work</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-qog-teal transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-qog-teal transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-qog-teal transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">
              © {currentYear} Qognition Agency. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-qog-teal transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-qog-teal transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}