export interface SubService {
  name: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  subServices: SubService[];
  icon: string;
  kpis: string[];
  faqs: FAQ[];
  process: ProcessStep[];
  techStack: string[];
  relatedIndustries: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  subIndustries: string[];
  painPoints: string[];
  solutions: string[];
  relatedServices: string[];
  caseStudyRef?: string;
  faqs: FAQ[];
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  description: string;
  marketFocus: string[];
  localStrategy: string;
  officeCoordinates: string;
  faqs: FAQ[];
  marketDynamics: string;
  competitiveLandscape: string;
  localInsights: string[];
  stats: { label: string; value: string }[];
  relatedCaseStudy?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  image: string;
  tags: string[];
  stats: { label: string; value: string }[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ClientLogo {
  name: string;
  url: string;
}

export interface SchemaData {
  title: string;
  description: string;
  url: string;
  image?: string;
  type: 'Organization' | 'WebSite' | 'Service' | 'Article' | 'Place';
}