export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  deliverables: string[];
  metricHighlight: string;
  iconName: string;
  gradient: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Websites' | 'Branding' | 'Social Media' | 'E-commerce' | 'AI Marketing';
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    traffic?: string;
    conversions?: string;
    revenue?: string;
    roi?: string;
    engagement?: string;
  };
  technologies: string[];
  year: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  highlight: string;
  rating: number;
  metric: string;
}

export interface ProcessStep {
  step: string;
  name: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  description: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  bestFor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
