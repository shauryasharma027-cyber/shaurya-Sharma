import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Heart, CheckCircle2, Bot, Eye } from 'lucide-react';
import { HERO_ASSET } from '../data/agencyData';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export default function HeroSection({ onStartProject, onExploreWork }: HeroSectionProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Words for staggered animation - shorter and punchy
  const headlineWords = [
    { text: 'WE', gradient: false },
    { text: 'BUILD', gradient: false },
    { text: 'BRANDS', gradient: true, gradClass: 'text-gradient-cyan' },
    { text: 'THAT', gradient: false },
    { text: 'SCALE.', gradient: true, gradClass: 'text-gradient-purple' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-white bg-grid-pattern"
    >
      {/* Dynamic Ambient Glow Blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-400/15 blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Kicker Label */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono tracking-widest text-cyan-800 font-bold mb-6 uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping inline-block" />
            <span>JAIPUR CREATIVE HUB · GLOBAL DIGITAL AGENCY</span>
          </div>

          {/* Staggered Word Headline */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] max-w-3xl text-center text-slate-900">
            {headlineWords.map((item, idx) => (
              <span
                key={idx}
                className={`inline-block mr-2 sm:mr-3.5 transition-all duration-700 ${
                  item.gradient ? item.gradClass : 'text-slate-900'
                }`}
              >
                {item.text}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed text-center font-normal">
            We design high-converting websites, powerful brands, and data-driven marketing campaigns that turn attention into compounding revenue for Indian and global brands.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto relative group overflow-hidden rounded-full p-[1px] shadow-xl shadow-slate-900/10 active:scale-95 transition-transform"
            >
              <span className="absolute inset-0 bg-slate-900 rounded-full" />
              <span className="relative flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-full shadow-xs transition-all active:scale-95"
            >
              <span>Explore Our Work</span>
              <span className="text-cyan-700">↓</span>
            </button>
          </div>

          {/* Trust Statement */}
          <div className="mt-8 flex items-center gap-3 text-xs font-mono text-slate-500 tracking-wider font-medium">
            <span>Web Dev</span>
            <span aria-hidden="true" className="text-cyan-600">·</span>
            <span>Social Marketing</span>
            <span aria-hidden="true" className="text-purple-600">·</span>
            <span>Brand Design</span>
            <span aria-hidden="true" className="text-cyan-600">·</span>
            <span>Autonomous AI</span>
          </div>
        </div>

        {/* Hero Visual Mockup Container with Parallax & Floating Cards */}
        <div className="mt-12 lg:mt-16 relative mx-auto max-w-5xl">
          {/* Outer glowing frame */}
          <div
            className="relative rounded-2xl p-2 sm:p-3 bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/60 backdrop-blur-xl transition-transform duration-500 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * -3.5}deg) rotateY(${mousePos.x * 3.5}deg)`,
            }}
          >
            {/* Top Browser chrome pill bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 bg-slate-100/90 rounded-t-xl text-xs text-slate-600 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 font-mono text-[11px] text-slate-700 font-medium shadow-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                <span>novesocial.agency/live-telemetry</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-700 font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="hidden sm:inline">60 FPS REALTIME</span>
              </div>
            </div>

            {/* Main Showcase Visual Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 group">
              <img
                src={HERO_ASSET}
                alt="Nove Social Creative Agency Platform Visualization"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* FLOATING CARD 1: Revenue & Growth (Top-Right) */}
            <div
              className="absolute -top-6 -right-4 sm:-right-8 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-xl transition-transform duration-500 pointer-events-auto"
              style={{
                transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18}px)`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Quarterly Growth</div>
                  <div className="text-lg font-bold font-display text-slate-900 flex items-center gap-1.5">
                    <span className="text-emerald-600">+340%</span>
                    <span className="text-xs font-normal text-slate-600">Revenue (INR)</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-[10px] font-mono text-slate-500 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3 h-3 text-cyan-600" />
                <span>Meta CAPI + Google PMax Attribution</span>
              </div>
            </div>

            {/* FLOATING CARD 2: Instagram / Social Reel (Bottom-Left) */}
            <div
              className="absolute -bottom-6 -left-3 sm:-left-8 p-3 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-xl transition-transform duration-500 max-w-[210px] sm:max-w-[240px]"
              style={{
                transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-[10px] text-white font-bold">
                    N
                  </div>
                  <span>novesocial.in</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-700 font-bold bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">VIRAL</span>
              </div>
              <div className="h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-100 to-cyan-100 opacity-60" />
                <span className="relative z-10 text-[11px] font-semibold text-slate-800">Viral Indian D2C Engine</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-700 font-mono font-medium">
                <span className="flex items-center gap-1 text-rose-600">
                  <Heart className="w-3 h-3 fill-rose-600" /> 14.8K
                </span>
                <span className="flex items-center gap-1 text-cyan-700">
                  <Eye className="w-3 h-3" /> 128.4K
                </span>
              </div>
            </div>

            {/* FLOATING CARD 3: AI Assistant Automation (Bottom-Right) */}
            <div
              className="hidden md:flex absolute -bottom-8 right-12 p-3.5 rounded-xl bg-white shadow-xl transition-transform duration-500 items-center gap-3 border border-cyan-500/40"
              style={{
                transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
              }}
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700">
                <Bot className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                  <span>AI Neural Optimizer</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="text-[10px] font-mono text-cyan-800 font-medium">
                  8.4x ROAS · Budget auto-rebalanced
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
