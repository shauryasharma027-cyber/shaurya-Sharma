import { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/agencyData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-slate-50/60 relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient illumination */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-xs font-mono tracking-widest text-cyan-700 font-bold uppercase mb-3">
            VERIFIED OUTCOMES
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-3xl text-balance">
            WHAT VISIONARY <span className="text-gradient-multicolor">LEADERS SAY.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm max-w-xl font-normal">
            We judge our success exclusively by the commercial altitude and market dominance our brand partners achieve.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl relative overflow-hidden"
        >
          {/* Decorative quote glyph */}
          <div className="absolute top-6 right-8 text-slate-100 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          {/* Rating stars */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-xs font-mono font-bold text-slate-600">
              5.0 / 5.0 VERIFIED REVIEW
            </span>
          </div>

          {/* Quote Text */}
          <blockquote className="font-display text-lg sm:text-2xl text-slate-900 leading-relaxed font-semibold mb-8 relative z-10">
            "{current.quote}"
          </blockquote>

          {/* Key Metric Highlight */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 font-bold mb-8">
            <span>KEY OUTCOME:</span>
            <span>{current.highlight}</span>
          </div>

          {/* Author Details & Carousel Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 shadow-xs"
              />
              <div>
                <h4 className="font-display font-bold text-sm text-slate-900">
                  {current.name}
                </h4>
                <div className="text-xs text-slate-500 font-medium">
                  {current.role} · <span className="text-slate-800 font-semibold">{current.company}</span>
                </div>
              </div>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200 active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="px-3 font-mono text-xs text-slate-500 font-bold">
                {currentIndex + 1} / {TESTIMONIALS_DATA.length}
              </div>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200 active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
