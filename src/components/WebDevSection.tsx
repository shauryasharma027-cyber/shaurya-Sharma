import { useState } from 'react';
import { 
  Zap, 
  Smartphone, 
  Search, 
  Target, 
  ShieldCheck, 
  Bot, 
  ArrowUpRight,
  Gauge,
  Code
} from 'lucide-react';
import { FINTECH_ASSET } from '../data/agencyData';

interface WebDevSectionProps {
  onStartWebProject: () => void;
}

export default function WebDevSection({ onStartWebProject }: WebDevSectionProps) {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: 'Ultra-Fast Performance',
      badge: '0.34s LCP',
      desc: 'Sub-second load times built on modern static edge networks with 100/100 Google Lighthouse scores across 4G/5G Indian mobile networks.',
      metric: '99+ Core Web Vitals',
      codeSnippet: '// Edge Cached via Cloudflare / Fastly\nCache-Control: public, s-maxage=31536000, immutable'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-cyan-600" />,
      title: 'Fluid Responsive Across Devices',
      badge: '320px to 4K',
      desc: 'Bespoke layouts engineered with clamp typography and mathematical spacing that look razor-sharp on every smartphone, iPad, and desktop.',
      metric: 'Zero Layout Shift (CLS: 0.00)',
      codeSnippet: 'const clampScale = "clamp(1rem, 2.5vw, 1.75rem);";'
    },
    {
      icon: <Search className="w-5 h-5 text-emerald-600" />,
      title: 'Technical SEO Ready',
      badge: 'Topical Silos',
      desc: 'Deep Schema.org JSON-LD microdata, OpenGraph rich social cards, and semantic HTML structure built for supreme Google search rankings.',
      metric: '100% Crawl Efficiency',
      codeSnippet: '@type: "ProfessionalService", aggregateRating: 4.9'
    },
    {
      icon: <Target className="w-5 h-5 text-rose-500" />,
      title: 'Conversion Focused',
      badge: '+76% CRO',
      desc: 'Heatmap-validated user paths, micro-interactions, single-elevation cards, and low-friction checkout flows with UPI & Razorpay.',
      metric: '4.2x Lead-to-Close Velocity',
      codeSnippet: 'trackConversion("cta_primary_click", { intent: "high" });'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: 'Enterprise Security',
      badge: 'Zero Trust',
      desc: 'Strict Content Security Policies, hardened HTTP headers, automated DDoS scrubbing, and RBI/data protection compliance.',
      metric: 'A+ SSL Lab Rating',
      codeSnippet: 'Strict-Transport-Security: max-age=63072000; includeSubDomains'
    },
    {
      icon: <Bot className="w-5 h-5 text-purple-600" />,
      title: 'AI Growth Engines',
      badge: 'Real-time Tuning',
      desc: 'Dynamic personalized headlines, autonomous multivariate testing, and predictive visitor propensity routing.',
      metric: '12x Pipeline Speed',
      codeSnippet: 'const routingAgent = new PropensityClassifier(sessionEvents);'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50/60 relative overflow-hidden border-t border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 uppercase tracking-widest mb-4 font-bold">
            <Gauge className="w-3.5 h-3.5" />
            <span>ENGINEERED FOR SUPREMACY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-3xl text-balance">
            YOUR WEBSITE IS YOUR <span className="text-gradient-cyan">BEST SALESPERSON.</span>
          </h2>
          <p className="mt-5 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            Most agency websites are heavy, slow, and bleed conversions. We build lightning-fast web applications designed like precision instruments that turn first-time visitors into high-ticket clients.
          </p>
        </div>

        {/* Large Browser Mockup */}
        <div className="relative rounded-2xl p-2 sm:p-4 bg-white border border-slate-200 shadow-2xl mb-16">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 rounded-t-xl border-b border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>https://client-flagship.novesocial.agency</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
              <span>100 LIGHTHOUSE</span>
            </div>
          </div>

          {/* Browser Screen Content */}
          <div className="relative rounded-b-xl overflow-hidden aspect-[16/9] bg-slate-900 group">
            <img
              src={FINTECH_ASSET}
              alt="Engineered web application architecture preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

            {/* Bottom floating telemetry pill */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-4 text-xs font-mono text-slate-800">
              <div className="flex items-center gap-2 text-emerald-600 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>P99 RESPONSE: 42ms</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="text-slate-600 hidden sm:block">Built with React 19 + TypeScript + Tailwind</div>
            </div>
          </div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Result Benchmark:</span>
                <span className="font-bold text-cyan-700">{feat.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartWebProject}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg active:scale-95"
          >
            <span>Commission a Flagship Web Application</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
