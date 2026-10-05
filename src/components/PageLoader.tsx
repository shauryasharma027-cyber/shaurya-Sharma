import { useEffect, useState } from 'react';
import NoveLogo from './NoveLogo';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Quick, elegant progress timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 20) + 15;
        return Math.min(prev + jump, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none -bottom-10" />

      {/* Agency Monogram / Logo Mark */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6">
          <NoveLogo size="xl" glow={true} showJaipur={true} />
        </div>

        <div className="flex items-center gap-2 mb-5 text-xs font-mono text-cyan-800 font-bold tracking-wider">
          <span>JAIPUR CREATIVE STUDIO</span>
          <span>·</span>
          <span>GLOBAL IMPACT</span>
        </div>

        {/* Minimalist progress bar */}
        <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between w-48 text-[11px] font-mono text-slate-500 font-medium">
          <span>INITIALIZING</span>
          <span className="tabular-nums font-bold text-slate-900">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
