import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const services = [
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    description: 'We don\'t just chase keywords; we chase intent. Our comprehensive SEO audits fix technical debt, optimize on-page elements, and build high-quality backlinks.',
    icon: 'search',
  },
  {
    id: 'smm',
    title: 'SMM (Social Media Marketing)',
    description: 'Social media is your brand\'s voice. We craft platform-specific strategies from viral Reels to professional LinkedIn thought leadership.',
    icon: 'share',
  },
  {
    id: 'ai-seo',
    title: 'AI SEO (Next-Gen Search Strategy)',
    description: 'Stop guessing what works. Our proprietary AI tools analyze millions of search queries to predict trending keywords before they peak.',
    icon: 'cpu',
  },
  {
    id: 'automation',
    title: 'Automation Setup',
    description: 'Streamline your operations with intelligent automation systems that reduce manual work and increase efficiency.',
    icon: 'gear',
  },
  {
    id: 'geo',
    title: 'Geo (Geo-Fencing & Local Targeting)',
    description: 'Reach the right people at the right place. Our Geo-fencing technology pushes your ads to mobile devices within precise physical boundaries.',
    icon: 'map-pin',
  },
  {
    id: 'ppc',
    title: 'PPC (Pay-Per-Click Advertising)',
    description: 'Don\'t burn your budget on bad clicks. We design data-backed PPC campaigns that target high-intent buyers.',
    icon: 'trending-up',
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Your website is your 24/7 salesperson. We build responsive, lightning-fast websites using modern frameworks.',
    icon: 'code',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    icon: 'smartphone',
  },
  {
    id: 'custom-webapp',
    title: 'Custom WebApp Development',
    description: 'Off-the-shelf software often falls short. We engineer custom web applications tailored to your specific business logic.',
    icon: 'globe',
  },
  {
    id: 'graphics',
    title: 'Graphics & Branding',
    description: 'Design is the silent ambassador of your brand. Our creative team produces cohesive visual identities.',
    icon: 'palette',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Marketing',
    description: 'Stop managing disjointed vendors. Our End-to-End service handles it all—from first brand awareness to final sale.',
    icon: 'layers',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX',
    description: 'User-centered design that creates intuitive, beautiful interfaces that users love and convert.',
    icon: 'layout',
  },
]

export const industries = [
  {
    id: 'law-firms',
    title: 'Law Firms & Legal Services',
    description: 'Comprehensive digital strategies for legal practices',
    subcategories: [
      'Corporate Law Firms',
      'Criminal Defense Attorneys',
      'Family & Divorce Lawyers',
      'Intellectual Property (IP) Lawyers',
      'Real Estate Legal Services',
      'Litigation & Arbitration Firms',
    ],
  },
  {
    id: 'accounting',
    title: 'Accounting & CPA Firms',
    description: 'Digital solutions for financial service providers',
    subcategories: [
      'Chartered Accounting Firms',
      'Tax Consultancy & Filing Services',
      'Audit & Assurance Firms',
      'Payroll & Compliance Services',
      'Bookkeeping & Outsourced Accounting',
      'GST / VAT Advisory Firms',
    ],
  },
  {
    id: 'financial-services',
    title: 'Financial Services & Investment Firms',
    description: 'Growth strategies for financial institutions',
    subcategories: [
      'Wealth Management Firms',
      'Investment Advisory Companies',
      'FinTech Companies',
      'Mutual Fund & Portfolio Managers',
      'Insurance Advisory Firms',
      'Financial Planning Consultants',
    ],
  },
  {
    id: 'consulting',
    title: 'Management & Business Consultancies',
    description: 'Digital presence for business advisors',
    subcategories: [
      'Strategy & Management Consulting',
      'Operations & Process Consulting',
      'HR & Talent Consulting',
      'Startup & MSME Advisory',
      'Risk & Compliance Consulting',
      'Digital Transformation Consulting',
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property Management Firms',
    description: 'Marketing solutions for property businesses',
    subcategories: [
      'Commercial Real Estate Brokers',
      'Residential Real Estate Agencies',
      'Property Management Companies',
      'Facility Management Services',
      'Leasing & Rental Consultants',
      'Real Estate Investment Firms',
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Firms',
    description: 'B2B digital marketing for industrial companies',
    subcategories: [
      'B2B Manufacturing Companies',
      'Industrial Equipment Manufacturers',
      'OEM (Original Equipment Manufacturers)',
      'Industrial Raw Material Suppliers',
      'Factory Automation Providers',
      'Engineering & Fabrication Units',
    ],
  },
  {
    id: 'coaching',
    title: 'Coaching & Consultancy',
    description: 'Digital growth for educational services',
    subcategories: [
      'Education & Exam Coaching Centers',
      'Job & Career Coaching Services',
      'Business & Entrepreneur Coaching',
      'Corporate Training Providers',
      'Skill Development Institutes',
      'Professional Certification Coaching',
    ],
  },
  {
    id: 'industrial-trade',
    title: 'Industrial & Trade Businesses',
    description: 'Digital strategies for industrial trade',
    subcategories: [
      'Manufacturing Units',
      'Heavy Equipment Manufacturers',
      'B2B Factories',
      'Industrial Supplies & Components',
      'Exporters & Importers',
      'Logistics & Supply Chain Companies',
    ],
  },
  {
    id: 'care-home',
    title: 'Care Home',
    description: 'Digital marketing for care facilities',
    subcategories: [
      'Assisted Living Facilities',
      'Home Nursing Care Services',
      'Medical Care Homes',
      'Rehabilitation Care Centers',
      'Disability Care Homes',
      'Post-Hospital Care Facilities',
    ],
  },
  {
    id: 'elder-home',
    title: 'Elder Home',
    description: 'Online presence for senior living communities',
    subcategories: [
      'Senior Living Communities',
      'Retirement Homes',
      'Memory Care (Dementia/Alzheimer\'s)',
      'Independent Living Homes',
      'Palliative Care Centers',
      'Long-Term Elder Care Facilities',
    ],
  },
  {
    id: 'waste-management',
    title: 'Waste Management Business',
    description: 'Digital solutions for environmental services',
    subcategories: [
      'Solid Waste Collection Services',
      'Recycling & Scrap Processing Units',
      'E-Waste Management Companies',
      'Biomedical Waste Disposal',
      'Hazardous Waste Treatment Services',
    ],
  },
]

export const regions = [
  'USA',
  'UK', 
  'Germany',
  'France',
  'Canada',
  'Australia',
  'KSA',
  'Qatar',
  'UAE',
  'India',
]

export const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Retail Transformation',
    category: 'Web Development',
    industry: 'Luxury Retail',
    image: '/projects/luxury-retail.jpg',
    metrics: { traffic: '+250%', conversion: '+180%', revenue: '+320%' },
  },
  {
    id: 2,
    title: 'FinTech Mobile App Launch',
    category: 'Mobile Development',
    industry: 'Financial Services',
    image: '/projects/fintech-app.jpg',
    metrics: { downloads: '500K+', retention: '85%', rating: '4.8★' },
  },
  {
    id: 3,
    title: 'Healthcare SEO Campaign',
    category: 'SEO',
    industry: 'Healthcare',
    image: '/projects/healthcare-seo.jpg',
    metrics: { ranking: '#1-3', leads: '+400%', roi: '540%' },
  },
]