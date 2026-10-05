import { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { ProjectItem } from '../types';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Websites', 'Branding', 'Social Media', 'E-commerce', 'AI Marketing'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-cyan-700 font-bold uppercase mb-3">
              SELECTED WORKS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              ARCHIVES OF <span className="text-gradient-cyan">IMPACT.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed font-normal">
            Every showcase represents a bespoke digital architecture designed to establish clear category leadership across India and global export channels.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white font-bold shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group rounded-3xl p-6 bg-slate-50 border border-slate-200 shadow-md hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Scale */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-mono font-bold text-slate-800 shadow-xs">
                    {project.category}
                  </div>

                  {/* View Details Arrow */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/95 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Project Metadata (Zero-Pill: clean text with dividers) */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2 font-medium">
                  <span>{project.client}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-6 font-normal">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Results Bar in INR */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>{project.results.revenue || project.results.conversions}</span>
                </div>

                <span className="text-cyan-700 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>View Case</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
