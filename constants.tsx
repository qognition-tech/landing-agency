import React from 'react';
import { Service, CaseStudy, NavItem, Industry, Region, Testimonial, ClientLogo } from './types';
import { Brain, Search, Globe, Zap, Smartphone, Code, PenTool, BarChart3, MapPin, Cpu, ShieldCheck, Users, Target, Rocket } from 'lucide-react';

export const CALENDLY_LINK = "https://calendly.com/qognition-agency/15min";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Expertise', path: '/services' },
  { label: 'Sectors', path: '/industries' },
  { label: 'Work', path: '/work' },
  { label: 'Regions', path: '/regions' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Magalu", url: "https://placehold.co/200x80/0B0B0B/FFFFFF?text=Magalu" },
  { name: "Wildberries", url: "https://placehold.co/200x80/0B0B0B/FFFFFF?text=Wildberries" },
  { name: "Meesho", url: "https://placehold.co/200x80/0B0B0B/FFFFFF?text=Meesho" },
  { name: "Daraz", url: "https://placehold.co/200x80/0B0B0B/FFFFFF?text=Daraz" },
  { name: "Noon", url: "https://placehold.co/200x80/0B0B0B/FFFFFF?text=Noon" },
  { name: "Accent Group", url: "https://placehold.co/200x80/0B0B0B/FFFFFF?text=Accent" },
  { name: "Ozon", url: "https://placehold.co/200x80/0B0B0B/FFFFFF?text=Ozon" },
  { name: "Rakuten", url: "https://placehold.co/200x80/0B0B0B/FFFFFF?text=Rakuten" }
];

export const ABOUT_DATA = {
  mission: "To engineer the digital infrastructure of the future, enabling ambitious brands to dominate their categories through AI, speed, and aesthetic precision.",
  vision: "A world where marketing is autonomous, beautiful, and hyper-personalized.",
  values: [
    { title: "Radical Transparency", desc: "No black boxes. We share our code, our data, and our logic." },
    { title: "Speed as a Habit", desc: "We move faster than the market. Velocity is our primary currency." },
    { title: "Aesthetic Integrity", desc: "Performance without beauty is spam. We refuse to ship ugly code." },
    { title: "Data Sovereignty", desc: "Your data is your asset. We build systems that you own and control." }
  ],
  stats: [
    { label: "Full-Time Experts", value: "120+" },
    { label: "Revenue Generated", value: "$500M+" },
    { label: "Global Hubs", value: "12" },
    { label: "Client Retention", value: "94%" }
  ]
};

const COMMON_FAQS = [
    { question: "How do you integrate AI into your workflow?", answer: "We utilize a proprietary stack of LLMs for data analysis, semantic entity mapping, and predictive trend modeling, while maintaining human oversight for strategic creativity." },
    { question: "What is your typical engagement model?", answer: "We operate primarily on a retainer basis for long-term growth partnerships, with project-based execution for specific technical infrastructure builds." },
    { question: "How do you handle data privacy?", answer: "We are fully GDPR, CCPA, and SOC2 compliant. Your proprietary data is never used to train public models without explicit consent." }
];

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'SEO & Organic Growth',
    shortDescription: 'Technical & Content SEO for Enterprise Scale.',
    fullDescription: 'We dominate search results by combining technical excellence with semantic authority. Our strategies are future-proofed against core updates and AI search transitions (SGE). We move beyond keywords to own the entire entity graph of your brand.',
    icon: 'Search',
    kpis: ['+200% Organic Traffic', 'Top 3 Keywords', '50% Lower CAC'],
    subServices: [
        { name: 'Technical SEO', description: 'Crawlability, indexing, and core web vitals optimization. Javascript rendering audits.' },
        { name: 'Content SEO', description: 'Semantic clustering and authority building via long-form expert content.' },
        { name: 'Link Acquisition', description: 'High-DR backlink campaigns through digital PR and data journalism.' }
    ],
    process: [
        { title: "Audit & Forensic Analysis", description: "Deep dive into log files, crawl budgets, and JS rendering issues." },
        { title: "Semantic Mapping", description: "Building topic clusters that position you as the topical authority." },
        { title: "Execution & Monitoring", description: "Rapid deployment of fixes and real-time rank tracking." }
    ],
    techStack: ["Ahrefs", "SEMRush", "Screaming Frog", "Clearscope", "Google Search Console API", "Python Scripts"],
    relatedIndustries: ["Law Firms & Legal", "Financial Services", "E-commerce"],
    faqs: [
        { question: "How long to see SEO results?", answer: "Typically 3-6 months for significant revenue impact, though technical fixes often yield immediate visibility gains within weeks." },
        { question: "Do you handle international SEO?", answer: "Yes, we specialize in complex hreflang implementations and multi-regional site architecture for global brands." },
        { question: "What is your approach to link building?", answer: "We focus exclusively on high-authority, editorial links. No PBNs, no spam. We use digital PR and data journalism to earn placements in tier-1 publications." },
        { question: "How do you prepare for Google SGE?", answer: "We optimize for 'Information Gain' and entity authority, ensuring your content answers complex queries that AI snapshots are likely to surface." },
        { question: "Do you conduct Javascript SEO audits?", answer: "Yes, we are experts in rendering strategies (SSR, CSR, ISR) and ensuring Googlebot can fully execute and index your JS-heavy applications." },
        { question: "How do you measure SEO success?", answer: "We move beyond vanity metrics like 'traffic' to focus on revenue, conversion rate, and Share of Voice (SOV) within your category." },
        { question: "Can you help with a site migration?", answer: "Absolutely. We have successfully managed migrations for sites with millions of URLs, minimizing traffic loss and preserving link equity." },
        { question: "Do you offer white label SEO?", answer: "No, we act as a direct strategic partner to brands, though we do collaborate with other specialized agencies." },
        { question: "What is entity-based SEO?", answer: "It's moving beyond keywords to help search engines understand your brand as a distinct object (entity) with relationships to other concepts." },
        { question: "Do you fix Core Web Vitals?", answer: "Yes, our engineering team works directly with your developers to optimize INP, LCP, and CLS." },
        ...COMMON_FAQS
    ]
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    shortDescription: 'Brand building across social ecosystems.',
    fullDescription: 'Data-driven social strategies that build community and drive revenue. We manage end-to-end creative, from short-form video production to community management, ensuring your brand voice resonates globally.',
    icon: 'Globe',
    kpis: ['+150% Engagement', '4x ROAS', 'Viral Reach'],
    subServices: [
        { name: 'Strategy & Direction', description: 'Platform-specific content roadmaps and voice definition.' },
        { name: 'Community Management', description: '24/7 engagement and growth. Crisis management protocols.' },
        { name: 'Influencer Marketing', description: 'Global creator partnerships and campaign management.' }
    ],
    process: [
        { title: "Persona Development", description: "Identifying exactly who your audience is and where they live online." },
        { title: "Content Engine", description: "High-volume, high-quality production of Reels, TikToks, and posts." },
        { title: "Amplification", description: "Strategic boosting and cross-platform distribution." }
    ],
    techStack: ["Sprout Social", "Hootsuite", "Canva Enterprise", "Adobe Creative Suite", "TikTok Ads Manager"],
    relatedIndustries: ["Real Estate", "Coaching", "Care Homes"],
    faqs: [
        { question: "Which platforms do you cover?", answer: "We cover the full spectrum: LinkedIn, Instagram, TikTok, X (Twitter), YouTube, and even emerging platforms like Threads." },
        { question: "Is content creation included?", answer: "Yes, we have a full in-house production studio for video, motion graphics, and static design." },
        { question: "How do you handle community management?", answer: "Our team provides 24/7 monitoring and engagement, acting as an extension of your customer support and brand teams." },
        { question: "Do you work with influencers?", answer: "Yes, we handle end-to-end influencer campaigns, from identification and vetting to contract negotiation and performance tracking." },
        { question: "What is your video production capability?", answer: "We produce everything from iPhone-native UGC style content to cinema-grade brand films." },
        { question: "How do you measure social ROI?", answer: "We track full-funnel metrics, from reach and engagement to click-throughs and attributed revenue via pixel tracking." },
        { question: "Can you manage paid social campaigns?", answer: "Yes, our social team works closely with our PPC division to ensure organic and paid strategies are perfectly aligned." },
        { question: "Do you handle crisis management?", answer: "Yes, we have strict protocols for handling negative PR or viral backlash on social channels." },
        { question: "How often do you post?", answer: "It depends on the platform and strategy, but typically we aim for daily presence to maintain algorithmic favor." },
        { question: "Do you offer LinkedIn personal branding?", answer: "Yes, we manage the profiles of C-suite executives to build thought leadership and company authority." },
        ...COMMON_FAQS
    ]
  },
  {
    id: 'ai-seo',
    title: 'AI SEO & SGE Strategy',
    shortDescription: 'Next-Gen Search Strategy for LLMs.',
    fullDescription: 'Prepare for SGE (Search Generative Experience) and LLM-based discovery. We optimize your entity graph for machine readability, ensuring your brand is cited by ChatGPT, Gemini, and Claude.',
    icon: 'Brain',
    kpis: ['SGE Visibility', 'Entity Authority', 'LLM Citations'],
    subServices: [
        { name: 'Entity Optimization', description: 'Strengthening Knowledge Graph presence and schema markup.' },
        { name: 'SGE Readiness', description: 'Formatting content for AI snapshots and direct answers.' },
        { name: 'Voice Search', description: 'Conversational query optimization for natural language.' }
    ],
    process: [
        { title: "Entity Gap Analysis", description: "Determining missing nodes in your brand's knowledge graph." },
        { title: "Schema Injection", description: "Implementing advanced JSON-LD to feed search engines structured data." },
        { title: "LLM Training Content", description: "Creating content specifically structured for ingestion by Large Language Models." }
    ],
    techStack: ["InLinks", "Schema App", "OpenAI API", "Google Knowledge Graph API"],
    relatedIndustries: ["Tech SaaS", "Financial Services", "Medical"],
    faqs: [
        { question: "What is AI SEO?", answer: "It is the process of optimizing your digital presence to be understood and cited by AI models (LLMs) and AI-powered search engines like Google SGE." },
        { question: "How is this different from traditional SEO?", answer: "Traditional SEO focuses on keywords and links. AI SEO focuses on entities, relationships, and structured data that machines can parse." },
        { question: "Can you guarantee ChatGPT citations?", answer: "No agency can guarantee specific output from a black-box model, but we maximize probability by establishing high-confidence entity associations." },
        { question: "Is schema markup important?", answer: "Crucial. It is the language of entities. We implement nested, complex schemas that describe your business logic to bots." },
        { question: "How do we track AI visibility?", answer: "We use proxy metrics such as Knowledge Graph presence, snippet ownership, and brand mentions in AI-generated responses." },
        { question: "What is SGE?", answer: "Search Generative Experience is Google's AI-integrated search results. We optimize content to appear in these prime snapshots." },
        { question: "Do I need this if I am a small business?", answer: "If your customers ask questions online, yes. AI is rapidly becoming the first interface for information discovery." },
        { question: "Does AI SEO help voice search?", answer: "Yes, voice assistants like Siri and Alexa rely heavily on the same structured data and direct answers that drive AI search." },
        { question: "How do you audit for LLM readiness?", answer: "We analyze your brand's presence in common crawl datasets and check for consistent factual representation across the web." },
        { question: "Is this a one-time setup?", answer: "No, as AI models evolve, the strategies to influence them must also adapt. It requires ongoing monitoring." },
        ...COMMON_FAQS
    ]
  },
  {
    id: 'web-development',
    title: 'Web Design & Development',
    shortDescription: 'High-performance Next.js sites.',
    fullDescription: 'We build the fastest, most secure websites on the web using React, Next.js, and headless CMS architecture. Our sites are not just brochures; they are high-performance growth engines.',
    icon: 'Code',
    kpis: ['100 PageSpeed', '<1s Load Time', 'Award-Winning UI'],
    subServices: [
        { name: 'Corporate Sites', description: 'Scalable marketing sites with enterprise-grade security.' },
        { name: 'E-commerce', description: 'Shopify Plus & Headless Commerce implementations.' },
        { name: 'WebGL Experiences', description: 'Immersive 3D interactions and scroll-telling.' }
    ],
    process: [
        { title: "UX Discovery", description: "Wireframing and user journey mapping." },
        { title: "Component Development", description: "Building a reusable design system in React/Tailwind." },
        { title: "Performance Tuning", description: "Code splitting, image optimization, and edge caching." }
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Vercel"],
    relatedIndustries: ["SaaS", "Luxury Retail", "Manufacturing"],
    faqs: [
        { question: "Do you use templates?", answer: "Never. Every line of code is bespoke to your brand requirements." },
        { question: "Why Next.js over WordPress?", answer: "Security, speed, and scalability. Headless architectures allow for instantaneous page loads and better SEO core web vitals." },
        { question: "Can you integrate with our CRM?", answer: "Yes, we build custom API integrations for Salesforce, HubSpot, and proprietary internal systems." },
        { question: "Do you prioritize accessibility?", answer: "Yes, all our sites aim for WCAG 2.1 AA compliance to ensure inclusivity." },
        { question: "How do you handle hosting?", answer: "We typically deploy on Vercel or AWS for edge-network performance and global scalability." },
        { question: "Is the site editable by our team?", answer: "Yes, we implement user-friendly Headless CMS solutions like Sanity or Contentful for easy content management." },
        { question: "Do you offer post-launch support?", answer: "We offer comprehensive SLAs covering uptime monitoring, security patches, and iterative feature development." },
        { question: "Do you do mobile apps?", answer: "Yes, we build React Native apps that share codebases with your web platform for efficiency." },
        { question: "What is your design process?", answer: "We work in Figma, providing interactive prototypes and mood boards before writing a single line of code." },
        { question: "How secure are your sites?", answer: "Static site generation eliminates most database vulnerabilities common in WordPress, making our sites extremely secure." },
        ...COMMON_FAQS
    ]
  },
    {
    id: 'ppc',
    title: 'PPC & Performance',
    shortDescription: 'Paid acquisition with high ROAS.',
    fullDescription: 'Scientific paid media management across Google, Meta, and LinkedIn. We use predictive analytics and first-party data to bid smarter and scale faster.',
    icon: 'Zap',
    kpis: ['-25% CPA', '3.5x ROAS', 'Scale to $1M+ Spend'],
    subServices: [
        { name: 'Google Ads', description: 'Search, Display, and Shopping campaign management.' },
        { name: 'Social Ads', description: 'Meta, LinkedIn, TikTok Ads for full-funnel growth.' },
        { name: 'Retargeting', description: 'Cross-platform dynamic remarketing sequences.' }
    ],
    process: [
        { title: "Audit & Opportunity", description: "Analyzing account history to find wasted spend." },
        { title: "Creative Strategy", description: "Designing high-converting ad assets." },
        { title: "Bid Management", description: "Algorithmic bidding strategies for maximum efficiency." }
    ],
    techStack: ["Google Ads Editor", "Meta Ads Manager", "Supermetrics", "Looker Studio"],
    relatedIndustries: ["E-commerce", "SaaS", "Local Services"],
    faqs: [
        { question: "What is your minimum budget?", answer: "We typically work with ad spends starting at $5k/month to ensure statistical significance." },
        { question: "Do you charge a % of spend?", answer: "Our pricing is a hybrid of flat fee and performance incentives, ensuring our goals are aligned with yours." },
        { question: "How do you handle attribution?", answer: "We implement robust server-side tracking (CAPI) and use third-party attribution tools to see the full customer journey." },
        { question: "Can you audit our existing account?", answer: "Yes, we offer a comprehensive audit to identify wasted spend and opportunity gaps before we sign a contract." },
        { question: "Do you create the ad creatives?", answer: "Yes, our creative studio designs high-performance static and video assets tailored for each platform." },
        { question: "How fast can we scale?", answer: "Scaling depends on unit economics. Once we hit target CPA/ROAS, we uncap budgets to maximize volume." },
        { question: "Do you do programmatic advertising?", answer: "Yes, we have access to premium DSPs for programmatic display and connected TV (CTV) campaigns." },
        { question: "What about click fraud?", answer: "We use tools like ClickCease to block bot traffic and ensure your budget goes to real humans." },
        { question: "Do you handle landing pages?", answer: "Yes, we design and build high-converting landing pages specifically for paid campaigns." },
        { question: "How detailed is reporting?", answer: "You get a live 24/7 dashboard and weekly executive summaries with actionable insights." },
        ...COMMON_FAQS
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'law-legal',
    name: 'Law Firms & Legal',
    description: 'We help top-tier firms build authority and attract high-value cases through E-E-A-T focused digital strategies.',
    subIndustries: ['Corporate Law', 'Criminal Defense', 'Family & Divorce', 'IP Law', 'Real Estate Legal', 'Litigation'],
    painPoints: ['High CPA for leads', 'Difficulty differentiating', 'Strict advertising regulations'],
    solutions: ['Authority SEO', 'Professional Content Strategy', 'Local Services Ads'],
    relatedServices: ['seo', 'web-development'],
    caseStudyRef: 'fintech-scale',
    faqs: [
        { question: "Do you understand bar association advertising rules?", answer: "Yes, we ensure all campaigns are compliant with local and state bar advertising ethics." },
        { question: "How do you improve lead quality?", answer: "We use negative keywords, pre-qualifying forms, and high-intent content to filter out tire-kickers." },
        { question: "Can you help with lawyer branding?", answer: "Yes, we position partners as thought leaders through PR, LinkedIn, and authoritative publications." },
        { question: "Is SEO effective for law firms?", answer: "It is the primary channel for high-value cases. Ranking for 'corporate litigation' implies authority and trust." },
        { question: "How do you track signed cases?", answer: "We integrate with CRM systems like Clio or Salesforce to track leads from click to signed retainer." },
        { question: "Do you handle Local Service Ads (LSAs)?", answer: "Yes, we manage the verification and bidding process for Google Screened ads." },
        { question: "What about conflict of interest?", answer: "We typically offer category exclusivity in specific geographic markets." },
        { question: "Can you manage our Google reviews?", answer: "Yes, we have strategies to ethically request and manage client reviews to boost local SEO." },
        { question: "Do you write legal content?", answer: "We use legal writers or partner with your associates to ensure accuracy, then optimize it for SEO." },
        { question: "How fast can we get leads?", answer: "PPC can generate leads in 24 hours; SEO takes 3-6 months for significant volume." },
        ...COMMON_FAQS
    ]
  },
  {
    id: 'accounting-cpa',
    name: 'Accounting & CPA',
    description: 'Trust-based marketing for financial professionals. We turn compliance services into growth engines.',
    subIndustries: ['Chartered Accounting', 'Tax Consultancy', 'Audit & Assurance', 'Payroll', 'Bookkeeping', 'GST/VAT Advisory'],
    painPoints: ['Seasonal demand', 'Commoditization of services', 'Client retention'],
    solutions: ['Year-round Content Nurture', 'Automation of Client Onboarding', 'LinkedIn Thought Leadership'],
    relatedServices: ['automation', 'seo'],
    faqs: [
        { question: "How do we market during non-tax season?", answer: "We focus on advisory services, business consulting, and year-round financial planning content." },
        { question: "Can you help automate client intake?", answer: "Yes, we build secure portals and automated workflows to collect documents and onboard clients." },
        { question: "Is LinkedIn good for accountants?", answer: "Extremely. It is the best channel for B2B networking and establishing professional authority." },
        { question: "How do you handle technical financial content?", answer: "We work with subject matter experts to ensure all content is technically accurate and compliant." },
        { question: "Do you do email marketing?", answer: "Yes, client newsletters are vital for retention and upselling advisory services." },
        { question: "Can you revamp our firm's website?", answer: "Yes, we build professional, secure sites that reflect the trustworthiness of your firm." },
        { question: "How do we differentiate from software solutions?", answer: "We emphasize the human advisory element and strategic value that software cannot replace." },
        { question: "Do you work with small firms?", answer: "Yes, we have packages tailored for boutique firms looking to grow aggressively." },
        { question: "How do you target high-net-worth clients?", answer: "Through targeted content on tax planning, estate planning, and wealth preservation." },
        { question: "Can you help with recruitment?", answer: "Yes, we build employer branding campaigns to attract top CPA talent." },
        ...COMMON_FAQS
    ]
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Compliance-ready growth strategies for wealth management and fintech.',
    subIndustries: ['Wealth Management', 'Investment Advisory', 'FinTech', 'Mutual Funds', 'Insurance', 'Financial Planning'],
    painPoints: ['Trust barriers', 'Complex buyer journey', 'Regulatory constraints'],
    solutions: ['Secure Web Apps', 'Educational Video Content', 'Data-Driven Funnels'],
    relatedServices: ['ppc', 'web-development'],
    faqs: [
        { question: "Are you familiar with FINRA/SEC marketing rules?", answer: "Yes, we have experience creating compliant workflows and archiving processes for ad content." },
        { question: "How do you build trust online?", answer: "Through high-production value branding, social proof, clear value propositions, and educational content." },
        { question: "Can you target high-net-worth individuals?", answer: "Yes, we use precise data layering on LinkedIn and programmatic channels to reach affluent audiences." },
        { question: "Do you work with Fintech startups?", answer: "Yes, we help launch and scale fintech products, focusing on user acquisition and CAC reduction." },
        { question: "How important is mobile experience?", answer: "Critical. Most financial interactions now happen on mobile. We build mobile-first experiences." },
        { question: "Do you create explainer videos?", answer: "Yes, simplifying complex financial products through motion graphics is a core capability." },
        { question: "What is your data security protocol?", answer: "We adhere to strict data handling protocols and never store sensitive PII on insecure marketing servers." },
        { question: "Can you help with app store optimization?", answer: "Yes, for fintech apps, we optimize listings to drive downloads." },
        { question: "How do you reduce churn?", answer: "Through automated onboarding sequences and educational lifecycle marketing." },
        { question: "Do you handle PR?", answer: "We collaborate with PR partners to ensure product launches get media coverage." },
        ...COMMON_FAQS
    ]
  },
  {
    id: 'management-consulting',
    name: 'Management Consultancy',
    description: 'Positioning your firm as the undisputed expert in strategy and operations.',
    subIndustries: ['Strategy Consulting', 'Operations', 'HR & Talent', 'Startup Advisory', 'Risk & Compliance', 'Digital Transformation'],
    painPoints: ['Long sales cycles', 'High competition', 'Need for credibility'],
    solutions: ['Whitepaper Marketing', 'Webinars & Events', 'Executive Branding'],
    relatedServices: ['smm', 'ai-seo'],
    faqs: [
        { question: "How do you generate leads for consulting?", answer: "We use a thought-leadership model: White papers, webinars, and high-value content gates." },
        { question: "Can you manage our partners' personal brands?", answer: "Yes, we run executive branding campaigns on LinkedIn for senior partners." },
        { question: "Do you support event marketing?", answer: "Yes, both virtual webinars and physical industry event support." },
        { question: "How do you measure brand authority?", answer: "Through search volume for branded terms, share of voice, and engagement metrics on thought leadership." },
        { question: "Can you help with recruitment marketing?", answer: "Yes, attracting top talent is often as important as attracting clients. We build employer branding campaigns." },
        { question: "Do you write technical white papers?", answer: "We partner with your internal experts to translate their knowledge into compelling marketing assets." },
        { question: "What is Account Based Marketing (ABM)?", answer: "It is targeting specific dream clients with personalized campaigns. It is highly effective for consulting." },
        { question: "How long does a campaign take to ramp up?", answer: "Thought leadership takes time, but ABM can start generating conversations in 1-2 months." },
        { question: "Do you build slide decks?", answer: "Yes, our design team creates high-impact pitch decks and presentation materials." },
        { question: "Can you help us launch a podcast?", answer: "Yes, we handle production, editing, and distribution for B2B podcasts." },
        ...COMMON_FAQS
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Immersive digital experiences that sell properties before the viewing.',
    subIndustries: ['Commercial', 'Residential', 'Property Management', 'Facility Mgmt', 'Leasing', 'RE Investment'],
    painPoints: ['Visual dependency', 'Local competition', 'Lead quality'],
    solutions: ['Virtual Tours', 'Geo-Fencing Ads', 'Automated Lead Follow-up'],
    relatedServices: ['geo-fencing', 'smm'],
    faqs: [
        { question: "Do you do luxury real estate marketing?", answer: "Yes, we specialize in high-end property branding, video tours, and exclusive lead generation." },
        { question: "How does geo-fencing work?", answer: "We can target ads to mobile devices that have visited specific locations, like competitor open houses." },
        { question: "Can you generate seller leads?", answer: "Yes, through 'home valuation' funnels and local market report content." },
        { question: "Do you build property websites?", answer: "Yes, single-property microsites with immersive media and scheduling functionality." },
        { question: "Is SEO useful for realtors?", answer: "Local SEO is essential. Ranking for 'realtor near me' or specific neighborhood terms drives consistent leads." },
        { question: "Do you manage social media for agents?", answer: "Yes, showcasing listings and lifestyle content on Instagram and LinkedIn." },
        { question: "How do you handle lead speed?", answer: "We set up instant SMS and email auto-responders to ensure no lead goes cold." },
        { question: "Do you work with developers?", answer: "Yes, we manage pre-construction marketing campaigns for new developments." },
        { question: "Can you create 3D renders?", answer: "We partner with 3D studios to integrate renders into our web experiences." },
        { question: "What is the best channel for commercial RE?", answer: "LinkedIn for investor relations and Google Ads for leasing inquiries." },
        ...COMMON_FAQS
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Connecting industrial capability with global demand through B2B digital transformation.',
    subIndustries: ['B2B Manufacturing', 'Industrial Equipment', 'OEM', 'Raw Materials', 'Automation', 'Engineering'],
    painPoints: ['Niche audiences', 'Complex product specs', 'Global supply chain visibility'],
    solutions: ['Technical SEO catalogs', 'LinkedIn Account Based Marketing', 'Trade Show Support'],
    relatedServices: ['seo', 'web-development'],
    faqs: [
        { question: "Can you help us reach procurement managers?", answer: "Yes, LinkedIn ABM is the perfect tool to target decision-makers at specific companies." },
        { question: "Do you understand technical specs?", answer: "We are comfortable working with complex datasheets and engineering content." },
        { question: "Is SEO relevant for B2B manufacturing?", answer: "Yes, engineers search for parts and solutions online. Being visible in technical search is key." },
        { question: "Can you digitize our product catalog?", answer: "Yes, we build searchable, filterable online catalogs from your SKUs." },
        { question: "Do you support international expansion?", answer: "Yes, multi-language sites and global SEO strategies are our specialty." },
        { question: "How do you measure success in long sales cycles?", answer: "We track pipeline influence and engagement metrics, not just immediate conversion." },
        { question: "Do you attend trade shows?", answer: "We don't attend, but we support your booth with pre-show and post-show digital campaigns." },
        { question: "Can you integrate with our ERP?", answer: "Yes, we can sync inventory and order data with your web platform." },
        { question: "Do you do distributor marketing?", answer: "Yes, we build portals and assets to support your distributor network." },
        { question: "How do we compete with cheap overseas suppliers?", answer: "By emphasizing quality, reliability, and engineering expertise through premium content." },
        ...COMMON_FAQS
    ]
  }
];

export const REGIONS: Region[] = [
  { 
    id: 'usa', 
    name: 'USA', 
    slug: 'usa', 
    description: 'Serving the largest digital economy in the world with hubs in New York, San Francisco, and Austin.', 
    marketFocus: ['SaaS', 'Fintech', 'Enterprise'],
    localStrategy: "Aggressive growth hacking combined with Fortune 500 compliance standards.",
    officeCoordinates: "40.7128° N, 74.0060° W",
    relatedCaseStudy: 'saas-brand',
    marketDynamics: "The US market is characterized by extreme saturation and high cost-per-acquisition. Success here requires hyper-niche targeting and brand differentiation. It is a mature digital economy where AI adoption and voice search are rapidly becoming standard. Consumers demand seamless, omnichannel experiences and instant gratification.",
    competitiveLandscape: "The landscape is dominated by large holding companies and specialized boutique agencies. To compete, brands must leverage data-driven insights and automation. There is a fierce battle for attention, making creative quality and speed of execution critical differentiators.",
    localInsights: [
        "CCPA and State Privacy Laws: Strict compliance is non-negotiable for targeting CA, VA, CO residents.",
        "Voice Search Dominance: over 40% of US adults use voice search daily, necessitating conversational SEO strategies.",
        "Hispanic Market Growth: The rising purchasing power of the Hispanic demographic offers huge untapped potential.",
        "DTC Explosion: Direct-to-consumer brands are disrupting legacy retail, requiring agile e-commerce stacks."
    ],
    stats: [
        { label: "Ad Spend Managed", value: "$150M+" },
        { label: "US Leads Generated", value: "2.5M+" },
        { label: "Revenue Driven", value: "$400M" },
        { label: "States Covered", value: "50" }
    ],
    faqs: [
        { question: "Do you have a physical office in New York?", answer: "Yes, our US headquarters is located in Manhattan." },
        { question: "Do you understand US privacy laws (CCPA)?", answer: "Yes, we are fully compliant with CCPA and other state-level privacy regulations." },
        { question: "Can you handle coast-to-coast campaigns?", answer: "Yes, our team covers all US time zones." },
        { question: "Do you work with startups in Silicon Valley?", answer: "Yes, we have deep experience in the VC ecosystem and startup growth models." },
        { question: "What is your pricing for US clients?", answer: "We bill in USD and offer competitive rates for enterprise-level service." },
        { question: "Do you handle US media buying?", answer: "Yes, we have relationships with major US media networks and platforms." },
        { question: "Are you familiar with US cultural nuances?", answer: "Our US team ensures all content is culturally relevant and resonant." },
        { question: "Do you work with government contracts?", answer: "Yes, we have the capability to bid on federal and state digital projects." },
        { question: "How do you handle US tax?", answer: "We have a dedicated finance team for US operations." },
        { question: "Can you scale teams quickly?", answer: "Yes, our 'squad' model allows us to deploy resources to US projects rapidly." },
        ...COMMON_FAQS
    ]
  },
  { 
    id: 'uk', 
    name: 'UK', 
    slug: 'uk', 
    description: 'Strategic headquarters in London with reach across Manchester and Edinburgh.', 
    marketFocus: ['Finance', 'Legal', 'Creative'],
    localStrategy: "Refined, authority-based marketing for heritage brands and disruptors alike.",
    officeCoordinates: "51.5074° N, 0.1278° W",
    relatedCaseStudy: 'fintech-scale',
    marketDynamics: "The UK is a leader in e-commerce penetration and fintech adoption. It acts as a bridge between US innovation and European regulation. The market values heritage and trust, but is quick to adopt new fintech and retail technologies. Post-Brexit data regulations add a layer of complexity to cross-border campaigns.",
    competitiveLandscape: "London remains a global creative hub, hosting some of the world's best design and advertising talent. The competition is driven by creativity and brand storytelling. However, technical SEO and data privacy expertise are increasingly becoming the primary battlegrounds for agency selection.",
    localInsights: [
        "GDPR & Data Sovereignty: Post-Brexit, data flow between UK and EU requires specific compliance frameworks.",
        "Fintech Adoption: The UK has one of the highest adoption rates of open banking and fintech apps.",
        "Sustainability Focus: UK consumers are highly sensitive to greenwashing; authentic ESG messaging is vital.",
        "Regional diversity: Marketing to the 'Northern Powerhouse' requires different cultural codes than London-centric campaigns."
    ],
    stats: [
        { label: "Client Retention", value: "96%" },
        { label: "Fintech Growth", value: "+240%" },
        { label: "GDPR Compliance", value: "100%" },
        { label: "Campaigns Run", value: "500+" }
    ],
    faqs: [
        { question: "Where is your London office?", answer: "We are located in Shoreditch, the heart of London's tech scene." },
        { question: "Are you GDPR compliant?", answer: "Absolutely. GDPR compliance is built into all our processes." },
        { question: "Do you work with UK heritage brands?", answer: "Yes, we help traditional brands modernize their digital presence." },
        { question: "Can you handle pan-European campaigns?", answer: "Yes, London is our hub for the entire EMEA region." },
        { question: "What sectors do you focus on in the UK?", answer: "Fintech, Legal, Luxury Retail, and Professional Services." },
        { question: "Do you offer localized UK English content?", answer: "Yes, strict adherence to British English spelling and grammar." },
        { question: "Are you a Google Partner in the UK?", answer: "Yes, we hold Premier Partner status." },
        { question: "Do you support UK charities?", answer: "Yes, we offer special rates for UK-registered charities." },
        { question: "How do you handle Brexit data issues?", answer: "We follow all current guidelines for data transfer between UK and EU." },
        { question: "Do you attend London Tech Week?", answer: "Yes, we are regular participants and speakers." },
        ...COMMON_FAQS
    ]
  },
  { 
    id: 'uae', 
    name: 'UAE', 
    slug: 'uae', 
    description: 'The gateway to the Middle East, operating out of Dubai Internet City.', 
    marketFocus: ['Real Estate', 'Tourism', 'Crypto'],
    localStrategy: "High-glamour, mobile-first campaigns targeting high-net-worth demographics.",
    officeCoordinates: "25.2048° N, 55.2708° E",
    relatedCaseStudy: 'retail-ai',
    marketDynamics: "The UAE is a hyper-connected, mobile-first society with huge expat diversity. It is a global hub for crypto, luxury real estate, and tourism. Marketing here is fast-paced, visual, and heavily influenced by social media personalities. The government's push for digital transformation is creating opportunities in B2B and gov-tech.",
    competitiveLandscape: "The market is a mix of large global network agencies and agile local boutiques. Speed and relationship-building are key. There is intense competition in real estate and hospitality marketing. Agencies that can navigate the bilingual (Arabic/English) landscape effectively have a significant advantage.",
    localInsights: [
        "WhatsApp Commerce: WhatsApp is not just a chat app; it is a primary business channel for sales and support.",
        "Influencer Power: The UAE has one of the highest per-capita influencer marketing spends in the world.",
        "Ramadan Seasonality: Marketing calendars must be heavily optimized around Ramadan and Eid spending spikes.",
        "Expat Segmentation: Campaigns must account for the diverse Indian, British, and Filipino expat communities."
    ],
    stats: [
        { label: "Property Sales Driven", value: "$200M" },
        { label: "Leads Generated", value: "80k+" },
        { label: "Influencer Reach", value: "5M+" },
        { label: "Languages", value: "En/Ar" }
    ],
    faqs: [
        { question: "Do you create Arabic content?", answer: "Yes, we have native Arabic copywriters and strategists." },
        { question: "Do you understand the local culture?", answer: "Yes, we are sensitive to cultural nuances and Islamic values in advertising." },
        { question: "Can you target expats in Dubai?", answer: "Yes, we have specific segmentation for the diverse expat community." },
        { question: "Do you work with government entities?", answer: "Yes, we have experience with semi-government and public sector projects." },
        { question: "Is WhatsApp marketing popular?", answer: "Extremely. We integrate WhatsApp automation into our strategies." },
        { question: "How do you handle crypto marketing?", answer: "We navigate the evolving regulatory landscape for crypto in the UAE." },
        { question: "Do you have a license in Dubai?", answer: "Yes, we are a licensed agency in Dubai Internet City." },
        { question: "Do you work with influencers in Dubai?", answer: "Yes, we have a network of approved influencers." },
        { question: "How is summer marketing different?", answer: "We shift focus to indoor and evening digital consumption patterns." },
        { question: "Can you handle real estate launches?", answer: "Yes, we manage high-velocity campaigns for off-plan property launches." },
        ...COMMON_FAQS
    ]
  },
  { 
    id: 'ksa', 
    name: 'Saudi Arabia', 
    slug: 'ksa', 
    description: 'Supporting Vision 2030 with digital transformation in Riyadh and Jeddah.', 
    marketFocus: ['Infrastructure', 'Government', 'Entertainment'],
    localStrategy: "Bilingual (Arabic/English) dominance and alignment with Giga-projects.",
    officeCoordinates: "24.7136° N, 46.6753° E",
    relatedCaseStudy: 'fintech-scale',
    marketDynamics: "Saudi Arabia is undergoing massive social and economic transformation under Vision 2030. There is a booming youth demographic that is digitally native and eager for global brands. The market is pivoting from oil-dependence to entertainment, tourism, and tech, creating massive opportunities for digital agencies.",
    competitiveLandscape: "The landscape is dominated by government-related entities and large consultancy firms. However, there is a shortage of specialized digital execution capabilities. Agencies that can align with national goals and deliver localized, culturally resonant content are in high demand.",
    localInsights: [
        "Platform Dominance: Twitter (X), Snapchat, and YouTube consume a massive share of digital attention in KSA.",
        "Saudization: Brands must navigate and promote their alignment with local employment and content goals.",
        "Gaming & Esports: KSA is investing heavily to become a global hub for gaming; this is a key marketing vector.",
        "Arabic First: Unlike UAE, KSA campaigns must lead with high-quality, dialect-appropriate Arabic."
    ],
    stats: [
        { label: "Vision 2030 Aligned", value: "100%" },
        { label: "Youth Engagement", value: "High" },
        { label: "Twitter Reach", value: "10M+" },
        { label: "Gov Projects", value: "15+" }
    ],
    faqs: [
        { question: "Are you aligned with Vision 2030?", answer: "Yes, our strategies support the digital transformation goals of the Kingdom." },
        { question: "Do you have a presence in Riyadh?", answer: "Yes, we have a satellite team operating in Riyadh." },
        { question: "Can you help international brands enter KSA?", answer: "Yes, market entry strategy is a key service." },
        { question: "Do you create content for Saudi youth?", answer: "Yes, we understand the dynamic, tech-savvy youth demographic in KSA." },
        { question: "How do you handle localization?", answer: "We don't just translate; we transcreate for the Saudi dialect and culture." },
        { question: "Do you work with Giga-projects?", answer: "Yes, we support the marketing ecosystems of major infrastructure projects." },
        { question: "Is Snapchat important in KSA?", answer: "Vital. It is one of our primary channels for the Saudi market." },
        { question: "Do you handle Saudization requirements?", answer: "We support our clients in communicating their Saudization efforts." },
        { question: "How do you handle gender in ads?", answer: "We adhere to all ministry guidelines regarding representation in advertising." },
        { question: "Is Twitter/X popular in KSA?", answer: "Yes, it is a key platform for news and conversation in the Kingdom." },
        ...COMMON_FAQS
    ]
  },
  { 
    id: 'india', 
    name: 'India', 
    slug: 'india', 
    description: 'The global engine of technology and scale, centered in Bangalore and Mumbai.', 
    marketFocus: ['IT Services', 'Startups', 'Manufacturing'],
    localStrategy: "Scalable content production and high-volume technical execution.",
    officeCoordinates: "12.9716° N, 77.5946° E",
    relatedCaseStudy: 'saas-brand',
    marketDynamics: "India is a volume game with a rapidly digitizing middle class. It is a mobile-first, often mobile-only, market. The 'India Stack' digital infrastructure has leapfrogged many western systems. There is a massive D2C boom driven by affordable data and logistics improvements. Price sensitivity remains high, but value-conscious spending is robust.",
    competitiveLandscape: "Extremely competitive with a vast number of service providers ranging from freelancers to global consultancies. Differentiation comes from strategic depth and quality of execution, as the market is flooded with low-cost, low-quality options. Scale and automation are key to profitability.",
    localInsights: [
        "Bharat Users: The next billion users are coming online in regional languages; vernacular voice search is key.",
        "Video First: Video consumption on YouTube and Instagram Reels drives almost all discovery for consumer brands.",
        "Marketplace Dominance: Amazon and Flipkart are the primary search engines for products; optimization there is crucial.",
        "Start-up Ecosystem: Bangalore is the Silicon Valley of Asia; B2B marketing to SaaS founders is a distinct niche."
    ],
    stats: [
        { label: "Content Produced", value: "50k/mo" },
        { label: "Startups Scaled", value: "40+" },
        { label: "Regional Langs", value: "8+" },
        { label: "IT Clients", value: "25+" }
    ],
    faqs: [
        { question: "Do you work with Indian startups?", answer: "Yes, we help unicorns and early-stage startups scale rapidly." },
        { question: "Can you handle vernacular languages?", answer: "Yes, we support major Indian languages for regional reach." },
        { question: "Is your team based in India?", answer: "We have a large center of excellence in Bangalore." },
        { question: "Do you offer cost-effective packages?", answer: "We offer global quality at competitive rates for the Indian market." },
        { question: "How do you handle scale?", answer: "Our Indian hub allows us to scale production velocity overnight." },
        { question: "Do you work with D2C brands?", answer: "Yes, D2C is a major focus area for us in India." },
        { question: "Do you handle marketplace optimization (Amazon/Flipkart)?", answer: "Yes, we have specialists for marketplace listing and ads." },
        { question: "Can you help with US market entry?", answer: "Yes, we help Indian SaaS companies break into the US market." },
        { question: "Do you do WhatsApp business API?", answer: "Yes, extensive experience with WhatsApp automation." },
        { question: "What about Tier 2/3 cities?", answer: "We have strategies specifically for reaching 'Bharat' audiences." },
        ...COMMON_FAQS
    ]
  },
  { 
    id: 'australia', 
    name: 'Australia', 
    slug: 'australia', 
    description: 'Serving APAC from Sydney and Melbourne with localized western strategies.', 
    marketFocus: ['Mining', 'Tech', 'Services'],
    localStrategy: "Market differentiation and local SEO dominance.",
    officeCoordinates: "33.8688° S, 151.2093° E",
    relatedCaseStudy: 'fintech-scale',
    marketDynamics: "Australia is a wealthy, high-cost market similar to the UK and US but with distinct isolation factors. Digital adoption is high, but logistics can be challenging. There is a strong emphasis on work-life balance which reflects in consumer habits. The mining and resources sector drives much B2B activity.",
    competitiveLandscape: "The agency market is consolidated, with a few major holding companies and strong independents. Creativity is highly valued, often with a humorous, 'larrikin' tone that is distinct to the region. SEO competition is slightly lower than the US, offering better ROI for early movers.",
    localInsights: [
        "APAC Gateway: Australia is often used as a test market for Asian expansion or a Western foothold in APAC.",
        "Privacy Reforms: Australia is tightening its privacy laws and tech regulation, requiring proactive compliance.",
        "Social Usage: High penetration of Facebook and Instagram; growing influence of TikTok in the suburbs.",
        "Local Search: 'Near me' searches are critical due to the vast geography and urban density of coastal cities."
    ],
    stats: [
        { label: "Market Share", value: "Top 5" },
        { label: "B2B Leads", value: "+180%" },
        { label: "Export Grants", value: "Supported" },
        { label: "Timezone", value: "GMT+10" }
    ],
    faqs: [
        { question: "Do you cover New Zealand?", answer: "Yes, our Australian team manages campaigns for NZ as well." },
        { question: "Do you understand the Aussie market?", answer: "Yes, we know the local tone and consumer behavior." },
        { question: "How do you handle time zones?", answer: "Our follow-the-sun model ensures coverage during Australian business hours." },
        { question: "Do you work with B2B mining?", answer: "Yes, we support the industrial and resources sector." },
        { question: "Is SEO competitive in Australia?", answer: "Yes, but less saturated than the US, offering great opportunity." },
        { question: "Do you handle Google Ads for AU?", answer: "Yes, optimized for local search intent and CPCs." },
        { question: "Do you work with government grants?", answer: "We can support clients utilizing export grants for digital marketing." },
        { question: "How is e-commerce in Australia?", answer: "Growing rapidly. We work with Shopify and Magento merchants." },
        { question: "Do you do Asian language marketing from AU?", answer: "Yes, we can target Asian diasporas in Australia." },
        { question: "What is your typical contract length?", answer: "Usually 6-12 months for sustained growth." },
        ...COMMON_FAQS
    ]
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-scale',
    client: 'NovaPay',
    industry: 'FinTech',
    title: 'Scaling User Acquisition for Series B Fintech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['SEO', 'Web Design', 'Performance'],
    stats: [
      { label: 'User Growth', value: '+315%' },
      { label: 'CAC Reduction', value: '-40%' }
    ]
  },
  {
    id: 'saas-brand',
    client: 'FlowState',
    industry: 'SaaS',
    title: 'Rebranding an Enterprise Workflow Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['Branding', 'Web Dev'],
    stats: [
      { label: 'Demo Requests', value: '+150%' },
      { label: 'Session Duration', value: '4m 20s' }
    ]
  },
  {
    id: 'retail-ai',
    client: 'LuxeCart',
    industry: 'E-commerce',
    title: 'AI-Driven Personalization Engine',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
    tags: ['AI', 'Automation'],
    stats: [
      { label: 'Conversion Rate', value: '+22%' },
      { label: 'AOV', value: '+15%' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Qognition's architectural approach to SEO is simply unrivaled. They didn't just optimize our site; they restructured our entire digital footprint for the AI era.",
    author: "Sarah Jenkins",
    role: "Global CMO",
    company: "Noon Group"
  },
  {
    quote: "We needed a partner who understood the luxury aesthetic while delivering hard-core technical performance. Qognition delivered on both fronts flawlessly.",
    author: "Michael Ross",
    role: "Director of Digital",
    company: "Accent Group"
  },
  {
    quote: "Their team acts less like an agency and more like a high-performance special ops unit embedded in our company. The velocity of execution is insane.",
    author: "Priya Patel",
    role: "Founder",
    company: "FinTech Scale"
  }
];