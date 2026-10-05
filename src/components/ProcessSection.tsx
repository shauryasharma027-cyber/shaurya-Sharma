import { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export default function ProcessSection({ onStartProject }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-slate-50/60 relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-xs font-mono tracking-widest text-cyan-700 font-bold uppercase mb-3">
            HOW WE PARTNER
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-3xl text-balance">
            AN OBSESSIVE <span className="text-gradient-cyan">5-STEP SPRINT.</span>
          </h2>
          <p className="mt-5 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            No endless meetings or mysterious delays. Our proven sprint methodology guarantees speed, alignment, and compounding performance for Indian and global brands.
          </p>
        </div>

        {/* Step Tabs for Fast Switching */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-10 no-scrollbar">
          {PROCESS_STEPS.map((p, idx) => (
            <button
              key={p.step}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                activeStep === idx
                  ? 'bg-slate-900 text-white font-bold shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{p.step}</span>
              <span className="font-sans font-semibold">{p.name}</span>
            </button>
          ))}
        </div>

        {/* Focused Active Step Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-cyan-700 mb-2">
                <span className="text-lg font-bold">STEP {PROCESS_STEPS[activeStep].step}</span>
                <span>—</span>
                <span className="uppercase tracking-widest font-bold">{PROCESS_STEPS[activeStep].name}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
                {PROCESS_STEPS[activeStep].title}
              </h3>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-semibold self-start lg:self-auto">
              <Clock className="w-4 h-4 text-cyan-600" />
              <span>Duration: {PROCESS_STEPS[activeStep].duration}</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl font-normal">
            {PROCESS_STEPS[activeStep].description}
          </p>

          <div className="mb-10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-4">
              Key Deliverables & Milestones
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <span className="text-xs font-mono text-slate-500">
              Phased sprints calibrated with dedicated Jaipur engineering and strategy leads.
            </span>

            <button
              onClick={onStartProject}
              className="flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md active:scale-95 self-start sm:self-auto"
            >
              <span>Initiate Sprint 01 with Nove Social</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
