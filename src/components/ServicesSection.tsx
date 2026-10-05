import { useState } from 'react';
import { 
  Code2, 
  Share2, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Video, 
  ShoppingBag, 
  Cpu, 
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForProject: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectServiceForProject }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Share2': return <Share2 className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-white overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-cyan-700 font-bold uppercase mb-3">
              CAPABILITIES & SERVICES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-2xl text-balance">
              WE TURN IDEAS INTO <span className="text-gradient-cyan">DIGITAL GROWTH.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            Full-funnel capabilities engineered to transform market leaders. Every service is calibrated for measurable, compounding business impact in INR and global markets.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveModalService(service)}
              className="group relative rounded-2xl p-7 bg-white border border-slate-200 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-900/5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-cyan-700 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-cyan-50 group-hover:border-cyan-200 flex items-center justify-center text-slate-700 group-hover:text-cyan-700 transition-all duration-300 group-hover:scale-110">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2.5 group-hover:text-cyan-800 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Row: Metric & Arrow */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-cyan-700">
                  {service.metricHighlight}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* Ambient Modal Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-cyan-700 font-bold">
                SERVICE {activeModalService.number}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                JAIPUR HEADQUARTERS
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {activeModalService.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              {activeModalService.fullDesc}
            </p>

            {/* Tags (Zero-Pill: Clean unboxed text with bullets) */}
            <div className="mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                Tech Stack & Methodology
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-700">
                {activeModalService.tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables List */}
            <div className="mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Key Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="text-xs font-mono text-slate-500">
                Performance Target: <span className="font-bold text-cyan-700">{activeModalService.metricHighlight}</span>
              </div>
              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForProject(serviceName);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md active:scale-95"
              >
                <span>Start with {activeModalService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
