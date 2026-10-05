import { ServiceItem, ProjectItem, TestimonialItem, ProcessStep, PricingPlan, FaqItem } from '../types';

export const HERO_ASSET = '/src/assets/images/hero_agency_visual_1791102289705.jpg';
export const ECOMMERCE_ASSET = '/src/assets/images/project_ecommerce_luxury_1791102305225.jpg';
export const FINTECH_ASSET = '/src/assets/images/project_fintech_platform_1791102326296.jpg';
export const AI_BRAND_ASSET = '/src/assets/images/project_ai_brand_1791102341008.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development & Platforms',
    shortDesc: 'Bespoke, high-performance web applications and interactive flagships built with modern frameworks and sub-second load times.',
    fullDesc: 'We architect ultra-fast, headless websites, web applications, and immersive digital platforms. Every product is engineered for zero layout shift, seamless mobile fluidity across Indian networks, enterprise security, and 100% Core Web Vitals compliance.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'WebGL'],
    deliverables: ['Custom Front-end Engineering', 'Headless CMS Architecture', 'Interactive WebGL Elements', 'Razorpay & UPI Payment Gateways', 'Full Performance & Speed Audit'],
    metricHighlight: '<0.38s First Contentful Paint',
    iconName: 'Code2',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
  },
  {
    id: 'social-media',
    number: '02',
    title: 'Social Media Marketing',
    shortDesc: 'Hyper-targeted content strategies, viral reels, and community growth systems that make your brand impossible to ignore.',
    fullDesc: 'We turn passive scrollers into passionate brand advocates. From cinematic short-form video production in our Jaipur studio to executive personal branding and multi-channel editorial calendars, we build organic momentum that compounds.',
    tags: ['Instagram', 'YouTube Shorts', 'LinkedIn', 'Short-form Video', 'Influencer Collabs'],
    deliverables: ['Editorial Calendar Architecture', 'Viral Creative Production', 'Indian Creator Collaborations', 'Community Moderation', 'Monthly Attribution Modeling'],
    metricHighlight: '4.8x Organic Reach Acceleration',
    iconName: 'Share2',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent'
  },
  {
    id: 'seo',
    number: '03',
    title: 'Search Engine Optimization',
    shortDesc: 'Technical SEO, topical authority clusters, and algorithmic dominance designed to capture high-intent buyer search volume.',
    fullDesc: 'We eliminate technical debt and structure your digital properties for supreme search dominance. We reverse-engineer search intent, build programmatic search silos, and secure high-authority placements that drive compounding inbound revenue across India and overseas.',
    tags: ['Technical SEO', 'Schema Architecture', 'Pan-India Ranking', 'Backlink Outreach'],
    deliverables: ['Full Technical Crawl & Audit', 'Topical Authority Mapping', 'Entity & Schema.org Implementation', 'High-Domain Authority Link Building', 'SERP Tracking Dashboard'],
    metricHighlight: '+240% Inbound Organic Traffic',
    iconName: 'Search',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent'
  },
  {
    id: 'paid-ads',
    number: '04',
    title: 'Google & Meta Ads (ROAS)',
    shortDesc: 'Precision-engineered paid acquisition funnels with ruthless ROAS optimization, dynamic creative testing, and multi-touch attribution.',
    fullDesc: 'Scalable paid traffic engines that eliminate ad waste. We build predictive audience cohorts, test hundreds of high-velocity creative variations, and deploy automated bidding frameworks across Google Ads, Meta Advantage+, YouTube, and performance channels in India.',
    tags: ['Google Search & PMax', 'Meta Advantage+ (CAPI)', 'YouTube Ads', 'ROAS Optimization'],
    deliverables: ['Creative Testing Matrix', 'PMax & Search Restructuring', 'Conversion API (CAPI) Integration', 'Predictive LTV Modeling', 'Weekly Performance Sprint Reviews'],
    metricHighlight: '6.4x Average Blended ROAS',
    iconName: 'TrendingUp',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent'
  },
  {
    id: 'branding',
    number: '05',
    title: 'Brand Identity & Strategy',
    shortDesc: 'Iconic visual identities, bespoke typography systems, brand guidelines, and positioning that command premium market pricing.',
    fullDesc: 'We build timeless brand languages that forge instant emotional connections. From brand positioning and verbal tone to typography, 3D motion guidelines, and comprehensive design tokens, we make your company unmistakably memorable.',
    tags: ['Visual Identity', 'Typography Systems', 'Design Tokens', 'Luxury Packaging'],
    deliverables: ['Primary & Secondary Brandmarks', 'Custom Typography & Color Matrix', 'Brand Narrative & Tone Guide', 'Packaging & Digital Guidelines', 'Vector Asset Repository'],
    metricHighlight: '+65% Perceived Value Command',
    iconName: 'Sparkles',
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent'
  },
  {
    id: 'content-creation',
    number: '06',
    title: 'Content Creation & Motion',
    shortDesc: 'High-production 3D product renders, cinematic brand films, motion graphics, and editorial copy engineered for attention.',
    fullDesc: 'In a world saturated with mediocrity, exceptional creative is your ultimate moat. Our Jaipur creative studio produces 4K brand commercials, 3D jewelry and product animations, editorial thought leadership, and high-velocity social assets.',
    tags: ['3D Motion Graphics', '4K Cinematography', 'Copywriting', 'Product Renders'],
    deliverables: ['High-Fidelity 3D Assets', 'Social Asset Battery (Reels/Stories)', 'Hero Motion Design', 'Conversion-Optimized Sales Copy', 'Modular Creative Vault'],
    metricHighlight: '3.2x Engagement Dwell Time',
    iconName: 'Video',
    gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent'
  },
  {
    id: 'ecommerce',
    number: '07',
    title: 'High-Scale E-commerce',
    shortDesc: 'Headless Shopify and custom commerce architectures crafted to turn cold traffic into high-ticket repeat buyers.',
    fullDesc: 'We architect frictionless shopping funnels with lightning-fast checkout experiences, one-click upsells, custom product configurators, WhatsApp Business order alerts, and hyper-personalized post-purchase flows that maximize customer lifetime value.',
    tags: ['Shopify Plus', 'Custom Headless', 'WhatsApp D2C Flows', 'UPI & COD Optimization'],
    deliverables: ['Headless Storefront Engineering', 'Conversion Rate Optimization (CRO)', 'Custom Bundle & Upsell Flow', 'ERP & Logistics Integration (Shiprocket/Bluedart)', 'Retention Email Architecture'],
    metricHighlight: '+76% Storefront Conversion Rate',
    iconName: 'ShoppingBag',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent'
  },
  {
    id: 'ai-marketing',
    number: '08',
    title: 'AI Marketing & Automation',
    shortDesc: 'Autonomous lead scoring, predictive churn prevention, automated personalized outbound, and AI content pipeline engines.',
    fullDesc: 'Deploy modern artificial intelligence across your entire revenue operation. We build custom multi-agent automations that ingest incoming leads, score buyer propensity, auto-generate contextual messaging, and optimize budget allocation in real time.',
    tags: ['Multi-Agent Systems', 'Predictive Analytics', 'Lead Scoring', 'CRM Automations'],
    deliverables: ['Custom Agentic Workflows', 'Dynamic Lead Scoring Pipeline', 'Automated Content Engine', 'Real-Time Ad Telemetry Sync', 'Executive Decision Dashboard'],
    metricHighlight: '10x Pipeline Throughput Speed',
    iconName: 'Cpu',
    gradient: 'from-cyan-400/20 via-indigo-600/10 to-transparent'
  }
];

export const STATS_DATA = [
  { value: 250, suffix: '+', label: 'Projects Delivered', description: 'Across Jaipur, Mumbai, Delhi NCR, Bengaluru & Global Hubs' },
  { value: 120, suffix: '+', label: 'Brand Partners', description: 'Funded Indian D2C brands, Shark Tank startups & heritage enterprises' },
  { value: 4.9, suffix: '/5', label: 'Client Satisfaction', description: 'Verified Google Reviews, Clutch & AgencySpotter' },
  { value: 120, suffix: 'Cr+', label: 'Client Revenue Generated (₹)', description: 'Audited GMV and commercial pipeline generated for partners' }
];

export const CLIENT_LOGOS = [
  { name: 'JOHARI LUXE', symbol: '💎', tag: 'Jaipur Heritage Jewels' },
  { name: 'HYPERION TECH', symbol: '⚡', tag: 'Bengaluru AI Unicorn' },
  { name: 'SHEKHAWAT CRAFTS', symbol: '🧵', tag: 'Artisanal D2C Apparel' },
  { name: 'PULSE CAPITAL', symbol: '📈', tag: 'Mumbai Wealth Tech' },
  { name: 'VELOCE DESERT', symbol: '🏎️', tag: 'Rajasthan Rally Experience' },
  { name: 'AURELIA ATELIER', symbol: '⏱️', tag: 'Bespoke Horlogerie' },
  { name: 'AMRIT AYURVEDA', symbol: '🌿', tag: 'Organic Wellness D2C' },
  { name: 'KINETIX CLOUD', symbol: '🌐', tag: 'Pan-India Enterprise SaaS' }
];

export const FEATURED_CASE_STUDY: ProjectItem = {
  id: 'aurelia-horlogerie',
  title: 'Aurelia Haute Horlogerie & Heritage Jewels',
  client: 'Aurelia Heritage Atelier · Jaipur & Geneva',
  category: 'E-commerce',
  image: ECOMMERCE_ASSET,
  summary: 'Complete brand repositioning, headless 3D e-commerce experience, and multi-channel performance marketing for a luxury bespoke timepiece and gemstone jewelry atelier in Jaipur.',
  challenge: 'Aurelia faced stagnating direct-to-consumer sales and heavy reliance on traditional exhibition middlemen. Their digital presence failed to convey the handcrafted gemstone and mechanical artistry of their pieces to high-net-worth Indian and NRI collectors.',
  solution: 'We engineered a bespoke headless web application featuring 60FPS 3D interactive timepiece and jewelry customizers, frictionless VIP concierge WhatsApp booking, and targeted performance campaigns directed at ultra-high-net-worth buyers across Mumbai, Delhi, Dubai, and London.',
  results: {
    traffic: '+184%',
    conversions: '+76%',
    revenue: '₹4.8 Cr+',
    roi: '9.2x',
    engagement: '5m 14s avg session'
  },
  technologies: ['Headless Shopify', 'Three.js / WebGL', 'TypeScript', 'Google Performance Max', 'Meta Advantage+ (CAPI)'],
  year: '2025-2026',
  testimonialQuote: 'Nove Social did not just rebuild our website; they completely redefined how luxury collectors across India and abroad interact with our jewelry and timepieces. The 76% surge in direct sales and ₹4.8 Crore revenue transformed our atelier.',
  testimonialAuthor: 'Raghav Singhania, Co-Founder of Aurelia Heritage Jaipur'
};

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  FEATURED_CASE_STUDY,
  {
    id: 'shekhawat-branding',
    title: 'Shekhawat Royal Textiles & D2C',
    client: 'Shekhawat Heritage Crafts · Jaipur',
    category: 'Branding',
    image: HERO_ASSET,
    summary: 'Complete brand narrative, 3D design system, and global export packaging for a premium artisanal block-print and silk label based in Jaipur.',
    challenge: 'Transitioning from domestic wholesale to premium international D2C export required a visual language capable of commanding luxury global pricing.',
    solution: 'Developed an editorial brutalist identity honoring traditional Rajasthani craft motifs while employing Swiss geometric typography and high-definition product staging.',
    results: {
      revenue: '₹8.5 Cr GMV in Year 1',
      conversions: '+140% Export Growth',
      roi: '11.5x'
    },
    technologies: ['Brand Identity', '3D Motion Design', 'Packaging System', 'Figma Tokens'],
    year: '2025',
    testimonialQuote: 'Nove Social positioned our Jaipur craftsmanship at par with Milan and Paris luxury houses. Our export orders sold out three quarters in advance.',
    testimonialAuthor: 'Aditya Shekhawat, Creative Director'
  },
  {
    id: 'pulse-fintech',
    title: 'Pulse Capital Analytics',
    client: 'Pulse Dynamics India · Mumbai',
    category: 'Websites',
    image: FINTECH_ASSET,
    summary: 'Institutional wealth intelligence platform with sub-second WebSocket telemetry, bespoke BSE/NSE data visualization, and SOC-2 enterprise security.',
    challenge: 'Legacy financial portals in India lacked modern clarity. Pulse needed an interface capable of displaying live market feeds with zero latency.',
    solution: 'Designed and developed a clean glassmorphic portal with custom WebGL charts, multi-workspace tabs, and responsive biometric authentication.',
    results: {
      traffic: '+310%',
      conversions: '+92%',
      revenue: '₹14.2 Cr ARR',
      roi: '8.4x'
    },
    technologies: ['React 19', 'Tailwind CSS', 'Canvas / WebGL', 'WebSockets', 'Next.js'],
    year: '2025',
    testimonialQuote: 'The speed and visual elegance of the platform engineered by Nove Social won us institutional mandates from tier-1 Indian asset managers in our first quarter post-launch.',
    testimonialAuthor: 'Evelyn Reed, Chief Product Officer'
  },
  {
    id: 'nexus-ai-engine',
    title: 'Synthex AI Platform',
    client: 'Synthex Neural Labs · Gurgaon',
    category: 'AI Marketing',
    image: AI_BRAND_ASSET,
    summary: 'Autonomous AI marketing engine automating predictive customer segmentation, dynamic ad variant deployment, and cross-channel attribution.',
    challenge: 'Indian marketing teams spent 40+ hours per week manually generating variations and monitoring bids across four ad networks.',
    solution: 'Engineered an autonomous multi-agent command console connecting directly into Meta, Google, and TikTok APIs with self-balancing budget logic.',
    results: {
      traffic: '+450%',
      conversions: '+118%',
      revenue: '₹2.4 Cr Saved',
      roi: '12.1x'
    },
    technologies: ['Python Agents', 'TypeScript', 'Tailwind', 'REST / GraphQL', 'OpenAI / Gemini SDK'],
    year: '2026',
    testimonialQuote: 'Nove Social built an automation system that outperforms our entire historical ad agency benchmarks at a fraction of the response time.',
    testimonialAuthor: 'Marcus Vance, Head of Growth'
  },
  {
    id: 'veloce-social',
    title: 'Veloce Desert Rally Experience',
    client: 'Veloce Motorsports · Rajasthan & Dubai',
    category: 'Social Media',
    image: ECOMMERCE_ASSET,
    summary: 'Viral multi-platform social media campaign and cinematic micro-documentary series capturing high-speed dune racing across Thar desert.',
    challenge: 'Traditional luxury automotive rallies in India lacked viral digital storytelling and dynamic social conversion funnels.',
    solution: 'Crafted hyper-sensory audio-visual reels, POV 4K drone track experiences, and live-streamed Thar rally debuts that dominated Instagram Explore & YouTube trending.',
    results: {
      traffic: '+4.2M views in 7 days',
      engagement: '+340% social shares',
      conversions: '100% rally entries booked',
      roi: '14.8x'
    },
    technologies: ['4K Cinema Camera', 'Davinci Resolve', 'Instagram Explore Strategy', 'Influencer Activation'],
    year: '2025',
    testimonialQuote: 'Every single premium rally slot was reserved within 48 hours of Nove Social launching the cinematic campaign series.',
    testimonialAuthor: 'Kabir Rathore, Event Director'
  }
];

export const SOCIAL_PROOF_METRICS = [
  { platform: 'Instagram Reels', metric: '+2.8 Lakh', label: 'Monthly Organic Reach', growth: '+48%' },
  { platform: 'YouTube', metric: '+3.2M', label: 'Video Views', growth: '+215%' },
  { platform: 'LinkedIn', metric: '+18.5K', label: 'B2B Executive Reach', growth: '+82%' },
  { platform: 'Meta Ads', metric: '6.4x', label: 'Average Blended ROAS', growth: '+31%' }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    name: 'DISCOVER',
    title: 'Deep Ingestion & Goal Alignment',
    description: 'We audit your current metrics, interview key stakeholders, dissect competitor vulnerabilities across the Indian market, and map exact commercial objectives.',
    deliverables: ['Full Digital Footprint Audit', 'Indian Competitor Gap Analysis', 'Buyer Persona Matrix', 'KPI Benchmark Agreement'],
    duration: 'Week 1'
  },
  {
    step: '02',
    name: 'STRATEGY',
    title: 'Architectural Blueprint & Funnel Design',
    description: 'We craft your bespoke growth playbook, encompassing UX wireframes, content architecture, media mix allocation, and technical tech stack choices.',
    deliverables: ['Interactive UX Wireframes', 'Channel Allocation Model', 'Topical Authority Plan', 'Conversion Architecture'],
    duration: 'Week 2'
  },
  {
    step: '03',
    name: 'CREATE',
    title: 'High-Fidelity Design & Development',
    description: 'Our Jaipur design and engineering teams build pixel-perfect interfaces, craft cinematic motion assets, and write persuasive conversion copy.',
    deliverables: ['Production Web Application', '3D Asset Battery', 'Ad Creative Variations', 'Performance Copy Suite'],
    duration: 'Weeks 3–5'
  },
  {
    step: '04',
    name: 'LAUNCH',
    title: 'Deployment & Telemetry Activation',
    description: 'We execute a zero-downtime deployment, calibrate tracking pixels, initiate paid ad flighting, and run live load-stress tests across Indian mobile networks.',
    deliverables: ['Production DNS Migration', 'Google Analytics & CAPI Verification', 'Campaign Flight Activation', 'Real-Time Monitoring'],
    duration: 'Week 6'
  },
  {
    step: '05',
    name: 'SCALE',
    title: 'Continuous Optimization & Growth',
    description: 'We analyze conversion funnels, conduct weekly A/B testing sprints, train custom AI agent automations, and expand channel budgets profitability.',
    deliverables: ['Bi-Weekly CRO Sprints', 'Budget Scaling Allocation', 'AI Pipeline Tuning', 'Executive ROI Reports in INR'],
    duration: 'Ongoing'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Priyanka Rathore',
    role: 'Creative Director & Founder',
    company: 'Shekhawat Heritage Jewels · Jaipur',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote: 'Nove Social transformed our digital identity from a traditional Johari Bazaar family jeweler into an internationally recognized luxury maison. Our online inquiries surged by 340%, with NRI orders coming from Dubai, London, and the US.',
    highlight: '+340% increase in luxury inquiries',
    rating: 5,
    metric: '₹6.2 Cr Inbound Orders'
  },
  {
    id: 'test-2',
    name: 'Aditya Mehta',
    role: 'Founder & CEO',
    company: 'Veloce Desert Motorsports · Rajasthan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'The cinematic reel production and viral distribution orchestrated by Nove Social is unparalleled. Their Jaipur studio created 4K reels that gathered over 4.2 million views in 7 days, selling out our entire Thar rally slots within 48 hours.',
    highlight: '100% rally entries booked in 48 hours',
    rating: 5,
    metric: '100% Sell-Out Rate'
  },
  {
    id: 'test-3',
    name: 'Rohan Deshmukh',
    role: 'VP of Growth',
    company: 'Pulse Capital India · Mumbai',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'We vetted agencies across Mumbai and Bengaluru, but Nove Social stood out for their unmatched technical mastery and design precision. They built our high-speed analytics web application that secured multiple institutional mandates in Q1.',
    highlight: 'Secured Tier-1 Indian AMC mandates',
    rating: 5,
    metric: '₹14.2 Cr Pipeline'
  },
  {
    id: 'test-4',
    name: 'Dr. Ananya Sen',
    role: 'Co-Founder',
    company: 'Amrit Organic Wellness D2C · Delhi NCR',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote: 'Nove Social completely took over our Meta Ads and Shopify store. They brought our blended ROAS from 2.1x to an astounding 6.4x while maintaining profitability during Diwali peak season. Truly an elite agency partner.',
    highlight: '6.4x Blended ROAS during peak season',
    rating: 5,
    metric: '6.4x Meta ROAS'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER LAUNCH',
    badge: 'Fast Launch',
    monthlyPrice: 39000,
    description: 'Designed for ambitious Indian brands, boutiques, and emerging startups establishing a world-class digital flagship.',
    popular: false,
    bestFor: 'Jaipur & Indian D2C boutiques, early-stage startups, and regional category leaders building credibility.',
    features: [
      'Bespoke 5–8 Page Custom Web Application',
      'Ultra-Fast Sub-Second Load Time Optimization',
      'Full Responsive Desktop, Tablet & Mobile Fluidity',
      'Foundational Technical SEO & Schema.org Setup',
      'Brand Identity Refresh & Design Tokens',
      '2 Rounds of Iterative Design Revision',
      'Dedicated WhatsApp & Slack Communication Channel',
      '100% Compliant GST Tax Invoices Provided',
      '14-Day Post-Launch Hypercare Support'
    ],
    notIncluded: [
      'Multi-agent AI marketing automations',
      'Dedicated media buying management'
    ]
  },
  {
    id: 'growth',
    name: 'GROWTH SCALE',
    badge: 'Most Popular',
    monthlyPrice: 89000,
    description: 'Our flagship full-stack growth partnership designed to scale customer acquisition, boost ROAS, and accelerate monthly revenue.',
    popular: true,
    bestFor: 'Scaling Indian D2C brands (₹50 Lakh – ₹10 Cr ARR), VC-backed startups, and luxury jewelers.',
    features: [
      'Comprehensive Web Application + Headless CMS',
      'Full Paid Ads Management (Google Ads & Meta CAPI)',
      'High-Velocity Creative Testing (12+ Video/Static Assets / Mo)',
      'Advanced Technical SEO & Topical Authority Silos',
      'Social Media Editorial Strategy & 4K Reel Video Production',
      'Conversion Rate Optimization (CRO) Bi-Weekly Sprints',
      'Custom Analytics & Real-Time Attribution Dashboard in INR',
      'AI Lead Scoring & Automated WhatsApp / CRM Ingestion',
      'Weekly Strategy Sprints with Lead Partner in Jaipur',
      'Guaranteed 24-Hour SLA Support & Dedicated Account Lead'
    ]
  },
  {
    id: 'scale',
    name: 'ENTERPRISE DOMINANCE',
    badge: 'Full Supremacy',
    monthlyPrice: 185000,
    description: 'Complete digital supremacy for established Indian enterprises and luxury export brands requiring 3D WebGL and autonomous AI systems.',
    popular: false,
    bestFor: 'National category leaders, heritage jewelry groups, and tier-one global export brands.',
    features: [
      'Full Enterprise WebGL & 3D Interactive Product Showcase',
      'Omnichannel Paid Media (Google, Meta, YouTube, LinkedIn)',
      'Unlimited Creative Production (3D Product Renders, Cinema Video)',
      'Custom Multi-Agent AI Marketing Operations Engine',
      'Predictive Churn Prevention & Dynamic LTV Modeling',
      'Global Multi-Region CDN & Multi-Language Localization',
      'Dedicated Full Creative & Engineering Squad (5 Specialists)',
      'Direct Executive Partner Access & Monthly In-Person Sprints in Jaipur/Delhi/Mumbai',
      'Razorpay, UPI & International Multi-Currency Payment Architecture',
      'Contractual Performance Milestone Guarantees'
    ]
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'How long does a website take to build and launch?',
    answer: 'Typical flagship builds take between 4 to 6 weeks from kickoff to launch. Our phased sprint structure allows us to iterate rapidly without sacrificing technical precision or design fidelity. For rapid-turnaround campaigns, we also offer 2-week express sprints for targeted landing experiences.',
    category: 'Web Development'
  },
  {
    question: 'Do you manage social media completely end-to-end?',
    answer: 'Yes. Our Jaipur in-house studio handles everything from creative ideation and storyboard scripting to 4K cinematic video production, editing, copy, community moderation, and algorithmic distribution across Instagram, YouTube, and LinkedIn. You simply approve monthly creative batches.',
    category: 'Social Media'
  },
  {
    question: 'Do you provide GST compliant invoices and Indian banking support?',
    answer: 'Yes, 100%. Nove Social is a registered Indian entity based in Jaipur, Rajasthan. We provide formal GST invoices (+18% GST) with input tax credit eligibility for Indian companies, and support Razorpay, UPI, NEFT/RTGS bank transfers, as well as international wire/card payments.',
    category: 'Billing & Compliance'
  },
  {
    question: 'Do you run Google and Meta Ads with real attribution for Indian brands?',
    answer: 'Yes. We manage performance budgets with rigorous focus on bottom-line ROAS, contribution margin, and cash-on-cash returns. We configure Meta Conversions API (CAPI) server-side tracking, Google Enhanced Conversions, and offline conversion tracking to guarantee zero data loss.',
    category: 'Paid Advertising'
  },
  {
    question: 'Can you work with both Indian D2C brands and global export clients?',
    answer: 'Absolutely. We are proudly headquartered in Jaipur, Rajasthan, and serve premier Indian D2C brands, luxury jewelers, and tech companies across Jaipur, Delhi NCR, Mumbai, and Bengaluru, as well as international clients across the US, UK, UAE, and Europe.',
    category: 'Agency Operations'
  },
  {
    question: 'Can we visit your Jaipur studio or arrange in-person discovery meetings?',
    answer: 'Yes, founders and marketing heads are always welcome at our Jaipur studio in C-Scheme. We also travel for key strategy sprints in Delhi NCR, Mumbai, and Bengaluru for our Growth and Enterprise partners.',
    category: 'Agency Operations'
  }
];
