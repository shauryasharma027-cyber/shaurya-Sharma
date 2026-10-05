interface NoveLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  glow?: boolean;
  showJaipur?: boolean;
}

export default function NoveLogo({
  size = 'md',
  className = '',
  glow = false,
  showJaipur = false,
}: NoveLogoProps) {
  const sizeClasses = {
    sm: 'text-[11px] h-6',
    md: 'text-xs sm:text-sm h-8',
    lg: 'text-base sm:text-lg h-11',
    xl: 'text-xl sm:text-2xl h-14',
  };

  const paddingClasses = {
    sm: 'px-2 py-0.5',
    md: 'px-3 py-1',
    lg: 'px-4 py-1.5',
    xl: 'px-6 py-2.5',
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        className={`inline-flex items-center font-sans uppercase select-none rounded-[2px] overflow-hidden border-2 border-black ${
          glow ? 'shadow-[0_2px_15px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_20px_rgba(2,132,199,0.3)]' : ''
        } transition-all duration-300 ${sizeClasses[size]}`}
      >
        {/* Left block: Solid black background with white "NOVE" */}
        <div
          className={`bg-black text-white font-bold flex items-center justify-center tracking-[0.18em] ${paddingClasses[size]}`}
        >
          NOVE
        </div>

        {/* Right block: Solid white background with black "SOCIAL" */}
        <div
          className={`bg-white text-black font-black flex items-center justify-center tracking-[0.14em] ${paddingClasses[size]}`}
        >
          SOCIAL
        </div>
      </div>

      {showJaipur && (
        <span className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
          JAIPUR
        </span>
      )}
    </div>
  );
}
