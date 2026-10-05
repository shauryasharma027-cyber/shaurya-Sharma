import { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Brain, 
  Network, 
  Sparkles, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2,
  Workflow
} from 'lucide-react';
import { AI_BRAND_ASSET } from '../data/agencyData';

interface AIMarketingSectionProps {
  onExploreAI: () => void;
}

export default function AIMarketingSection({ onExploreAI }: AIMarketingSectionProps) {
  const [activeModule, setActiveModule] = useState<number>(0);

  const modules = [
    {
      id: 'content',
      name: 'AI Content Engine',
      tag: '01. Generative Pipeline',
      icon: <Sparkles className="w-5 h-5 text-cyan-700" />,
      desc: 'Autonomous multi-modal content creation synthesizing 30+ personalized ad copy variations, social carousels, and landing headlines in seconds.',
      outputExample: 'Generated 42 multivariate hooks with 98.4% brand voice alignment score.',
      metrics: '10x Creative Output Velocity'
    },
    {
      id: 'insights',
      name: 'Predictive Insights',
      tag: '02. Behavioral Modeling',
      icon: <Brain className="w-5 h-5 text-purple-700" />,
      desc: 'Deep neural analysis of visitor sessions to forecast buyer propensity, predict churn risk, and calculate lifetime customer value before first purchase.',
      outputExample: 'Identified 38 high-intent enterprise accounts showing +85% buying signals.',
      metrics: '91% LTV Forecast Accuracy'
    },
    {
      id: 'automation',
      name: 'Autonomous Operations',
      tag: '03. Agent Workflows',
      icon: <Workflow className="w-5 h-5 text-blue-700" />,
      desc: 'Self-balancing ad budget allocation across Google, Meta, and performance ad channels. Automatically shifts spend toward winning cohorts with zero human delay.',
      outputExample: 'Real-time reallocated ₹1,50,000 ad budget into PMax high-ROAS campaign.',
      metrics: '24/7 Zero Latency Optimization'
    },
    {
      id: 'lead-gen',
      name: 'Intelligent Lead Scoring',
      tag: '04. Pipeline Routing',
      icon: <Network className="w-5 h-5 text-emerald-700" />,
      desc: 'Autonomous enrichment and routing of inbound inquiries, matching buyers with bespoke pitch briefs and WhatsApp booking links dynamically.',
      outputExample: 'Enriched 140 incoming leads with LinkedIn firmographics & ARR tiers.',
      metrics: '4.8x Lead-to-Meeting Rate'
    },
    {
      id: 'analytics',
      name: 'Attribution & Analytics',
      tag: '05. Real-Time Telemetry',
      icon: <BarChart3 className="w-5 h-5 text-amber-600" />,
      desc: 'Server-side multi-touch attribution synthesizing offline conversions, CRM events, and ad platform pixels into a unified revenue dashboard.',
      outputExample: 'Unified 100% of pipeline touchpoints with zero cookie-loss dropoff.',
      metrics: 'Zero-Cookie Data Certainty'
    }
  ];

  return (
    <section id="ai-marketing" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background radial gradients */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-mono text-purple-800 uppercase tracking-widest mb-4 font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>AUTONOMOUS REVENUE SYSTEMS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-3xl text-balance">
            THE FUTURE OF MARKETING IS <span className="text-gradient-purple">INTELLIGENT.</span>
          </h2>
          <p className="mt-5 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            Eliminate guesswork. We engineer proprietary multi-agent AI pipelines that generate creative, predict customer intent, and autonomously balance media budgets in real time for forward-thinking Indian businesses.
          </p>
        </div>

        {/* Interactive Neural Hub Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Module Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {modules.map((mod, idx) => (
              <div
                key={mod.id}
                onClick={() => setActiveModule(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeModule === idx
                    ? 'bg-slate-50 border-cyan-500/50 shadow-md translate-x-1.5'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeModule === idx ? 'bg-white shadow-xs' : 'bg-slate-100'}`}>
                      {mod.icon}
                    </div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                      {mod.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">{mod.tag}</span>
                </div>
                <p className="text-xs text-slate-600 pl-11 line-clamp-2">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic AI Engine Visual Console */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200 shadow-2xl relative overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-xs">
                    <Bot className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider">
                      NOVE SOCIAL NEURAL ENGINE
                    </div>
                    <div className="text-base font-display font-bold text-slate-900">
                      {modules[activeModule].name}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>AUTONOMOUS AGENT ACTIVE</span>
                </div>
              </div>

              {/* Showcase Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 bg-slate-900 mb-6 shadow-md">
                <img
                  src={AI_BRAND_ASSET}
                  alt="Nove Social AI Marketing System Visualizer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Floating telemetry tag */}
                <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 shadow-md">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Optimization Vector</div>
                  <div className="font-bold text-cyan-700">{modules[activeModule].metrics}</div>
                </div>
              </div>

              {/* Live Output Simulation Card */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs mb-6">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold mb-1">
                  Telemetry Output
                </div>
                <div className="font-mono text-xs text-slate-800 font-medium">
                  {modules[activeModule].outputExample}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <span className="text-xs font-mono text-slate-500">
                  Custom AI integration available across all enterprise tiers.
                </span>
                <button
                  onClick={onExploreAI}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md active:scale-95"
                >
                  <span>Deploy AI Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
