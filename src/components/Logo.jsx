import React from 'react';

export default function Logo({ className = "", isDark = false, showTagline = false }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Katengers Brand Logo PNG (Transparent BG) */}
      <div className="relative inline-flex items-center justify-center transition-transform hover:scale-105">
        <img 
          src="/logo.png" 
          alt="Katengers — AI Solutions" 
          className="h-9 sm:h-12 md:h-14 w-auto object-contain max-h-16"
        />
      </div>

      {showTagline && (
        <div className="hidden sm:flex flex-col justify-center border-l border-kt-slate/30 pl-3 ml-1">
          <span className={`font-mono text-[10px] uppercase tracking-widest font-bold ${isDark ? 'text-kt-white' : 'text-kt-ink'}`}>
            AI SOLUTIONS
          </span>
          <span className={`font-mono text-[9px] ${isDark ? 'text-kt-fog' : 'text-kt-slate'}`}>
            BUILT FOR BUSINESS
          </span>
        </div>
      )}
    </div>
  );
}

