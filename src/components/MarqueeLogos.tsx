import { CLIENT_LOGOS } from '../data/agencyData';

export default function MarqueeLogos() {
  // Double list for seamless marquee loop
  const marqueeList = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 border-y border-slate-200/80 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h2 className="text-xs font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
          TRUSTED BY AMBITIOUS INDIAN & GLOBAL BRANDS
        </h2>
      </div>

      {/* Marquee container with fade edges */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling rail */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-2">
          {marqueeList.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center gap-3 mx-4 sm:mx-8 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-400 hover:bg-slate-100 transition-all cursor-default group/item shadow-xs"
            >
              <span className="text-xl sm:text-2xl filter grayscale contrast-125 group-hover/item:grayscale-0 transition-all">
                {logo.symbol}
              </span>
              <div className="text-left">
                <span className="font-display text-sm sm:text-base font-bold tracking-wider text-slate-800 group-hover/item:text-slate-900 transition-colors block">
                  {logo.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500 block -mt-0.5">
                  {logo.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
}
