import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, ShoppingBag, Globe, Zap } from 'lucide-react';
import { FEATURED_CASE_STUDY } from '../data/agencyData';

interface FeaturedProjectProps {
  onOpenCaseStudy: () => void;
}

export default function FeaturedProject({ onOpenCaseStudy }: FeaturedProjectProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'solution'>('overview');

  return (
    <section id="work" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-700 uppercase mb-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-600 inline-block animate-pulse" />
              <span>FLAGSHIP CASE STUDY · JAIPUR & GLOBAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              FEATURED <span className="text-gradient-multicolor">PROJECT.</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="font-mono text-sm text-slate-500 font-semibold">PROJECT / 01</span>
          </div>
        </div>

        {/* Large Mockup Showcase Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-50 border border-slate-200 shadow-xl relative overflow-hidden group">
          {/* Top Info Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 mb-2 font-semibold">
                <span>Luxury E-commerce & Heritage Jewels</span>
                <span>·</span>
                <span>Jaipur & Geneva Atelier</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
                {FEATURED_CASE_STUDY.title}
              </h3>
            </div>

            {/* Services delivered */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-700">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-medium">Headless Shopify</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-medium">3D WebGL</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-medium">SEO Architecture</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-medium">Paid Performance</span>
            </div>
          </div>

          {/* Huge Website Mockup Visual */}
          <div className="relative my-8 rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 bg-slate-900 shadow-lg">
            <img
              src={FEATURED_CASE_STUDY.image}
              alt={FEATURED_CASE_STUDY.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

            {/* Floating live tag */}
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 font-semibold shadow-md">
              <Globe className="w-3.5 h-3.5 text-cyan-600" />
              <span>aurelia-atelier.in</span>
            </div>
          </div>

          {/* Metrics & Results Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm mb-8">
            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Organic Traffic</div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-cyan-700 mt-1">
                {FEATURED_CASE_STUDY.results.traffic}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Google PMax & Technical SEO</div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Store Conversions</div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-600 mt-1">
                {FEATURED_CASE_STUDY.results.conversions}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Headless checkout + 3D customizer</div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Blended ROAS</div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-amber-600 mt-1">
                {FEATURED_CASE_STUDY.results.roi}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Meta CAPI + High-LTV Retargeting</div>
            </div>
          </div>

          {/* Testimonial Quote & Modal Trigger */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
            <p className="text-xs sm:text-sm text-slate-600 italic max-w-xl">
              "{FEATURED_CASE_STUDY.testimonialQuote}"
              <span className="block not-italic font-bold font-mono text-xs text-slate-900 mt-1">
                — {FEATURED_CASE_STUDY.testimonialAuthor}
              </span>
            </p>

            <button
              onClick={onOpenCaseStudy}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md active:scale-95 shrink-0"
            >
              <span>Explore In-Depth Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
