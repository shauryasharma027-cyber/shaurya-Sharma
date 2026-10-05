import { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '../data/agencyData';

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = STATS_DATA.map((item) => item.value);
    const duration = 1800; // ms
    const frameRate = 30; // updates per sec
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(
        targets.map((val) => {
          if (val % 1 !== 0) {
            return Number((val * ease).toFixed(1));
          }
          return Math.round(val * ease);
        })
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-50/80 relative border-y border-slate-200/80 overflow-hidden"
    >
      {/* Background glow gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(2,132,199,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS_DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight flex items-baseline">
                <span className="tabular-nums text-gradient-cyan">
                  {counts[index]}
                </span>
                <span className="text-cyan-700 ml-1 text-2xl sm:text-3xl lg:text-4xl font-black">
                  {item.suffix}
                </span>
              </div>
              <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900 text-center sm:text-left">
                {item.label}
              </h3>
              <p className="mt-1 text-xs text-slate-500 text-center sm:text-left leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
