import { ArrowRight, Sparkles } from 'lucide-react';
import NoveLogo from './NoveLogo';

interface FinalCtaSectionProps {
  onStartProject: () => void;
}

export default function FinalCtaSection({ onStartProject }: FinalCtaSectionProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-white overflow-hidden border-t border-slate-200/80">
      {/* Dramatic ambient glowing backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Logo and Top Kicker */}
        <div className="flex flex-col items-center mb-8">
          <NoveLogo size="lg" glow={true} showJaipur={true} className="mb-4" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono tracking-widest text-cyan-800 uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>JAIPUR'S PREMIER DIGITAL AGENCY · WORLDWIDE IMPACT</span>
          </div>
        </div>

        {/* Large Dramatic Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] text-balance">
          READY TO BUILD <span className="text-gradient-multicolor">SOMETHING AMAZING?</span>
        </h2>

        {/* Subheading */}
        <p className="mt-8 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Let's turn your idea into a digital experience that gets attention, builds trust, and drives scalable revenue for your brand.
        </p>

        {/* Large Glowing CTA Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto relative group overflow-hidden rounded-full p-[2px] shadow-xl shadow-slate-900/10 active:scale-95 transition-transform"
          >
            <span className="absolute inset-0 bg-slate-900 rounded-full" />
            <span className="relative flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-extrabold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all">
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Accepting Q3/Q4 Project Cohorts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-600" />
            <span>24-Hour Discovery Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span>GST Tax Compliant Invoices</span>
          </div>
        </div>
      </div>
    </section>
  );
}
