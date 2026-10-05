import { ProjectItem } from '../types';
import { X, ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import NoveLogo from './NoveLogo';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartSimilarProject: (serviceName: string) => void;
}

export default function CaseStudyModal({
  project,
  onClose,
  onStartSimilarProject,
}: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors z-20"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <NoveLogo size="sm" showJaipur={true} />
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 font-semibold">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.client}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Mockup Display */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 bg-slate-900 mb-8 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        </div>

        {/* Metrics Grid in INR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
          <div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Traffic Velocity</div>
            <div className="text-xl sm:text-2xl font-bold font-display text-cyan-700 mt-0.5">
              {project.results.traffic || '+240%'}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Conversion Uplift</div>
            <div className="text-xl sm:text-2xl font-bold font-display text-emerald-600 mt-0.5">
              {project.results.conversions}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Pipeline Revenue</div>
            <div className="text-xl sm:text-2xl font-bold font-display text-purple-700 mt-0.5">
              {project.results.revenue}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Blended ROAS / ROI</div>
            <div className="text-xl sm:text-2xl font-bold font-display text-amber-600 mt-0.5">
              {project.results.roi}
            </div>
          </div>
        </div>

        {/* Narrative Columns: Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-slate-200">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
              The Strategic Challenge
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold mb-2">
              The Engineered Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack List */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
            Technology Stack & Methodologies
          </h4>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
            {project.technologies.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        {project.testimonialQuote && (
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-2 font-normal">
              "{project.testimonialQuote}"
            </p>
            <div className="text-xs font-mono font-bold text-slate-900">
              — {project.testimonialAuthor}
            </div>
          </div>
        )}

        {/* Modal Bottom CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <span className="text-xs font-mono text-slate-500">
            Case engineered by Nove Social Jaipur Studio.
          </span>

          <button
            onClick={() => {
              const cat = project.category;
              onClose();
              onStartSimilarProject(cat);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md active:scale-95"
          >
            <span>Commission Similar {project.category} Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
