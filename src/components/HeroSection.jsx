import React from 'react';
import Button from './Button';
import Badge from './Badge';
import { ArrowRight, Bot, Cpu, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onContactClick }) {
  const stats = [
    { value: '3.5x', label: 'FASTER WORKFLOW TURNAROUND' },
    { value: '60%', label: 'LOWER OPERATIONAL COSTS' },
    { value: '100%', label: 'CUSTOM ARCHITECTURE & CODE' }
  ];

  return (
    <section id="home" className="relative min-h-screen md:min-h-0 flex flex-col justify-center overflow-hidden bg-kt-white">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO LAYOUT (Preserved exactly as-is, hidden on mobile)            */}
      {/* ========================================================================= */}
      <div className="hidden sm:block relative w-full pt-20 pb-20 md:pt-40 md:pb-28 z-10">
        {/* Background Decorative Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1d1d08_1px,transparent_1px),linear-gradient(to_bottom,#1a1d1d08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Top Pill Badge */}
            <div className="hidden sm:flex mb-6 flex-wrap items-center justify-center gap-2 px-2">
              <Badge variant="yellow">WE BUILD BETTER WEBSITES</Badge>
              <span className="font-mono text-xs text-kt-slate hidden sm:inline-block">| Beautiful design. Built to perform.</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-kt-ink tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 break-words">
              Smarter Solutions.<br />
              Lower Costs.<br />
              <span className="text-kt-orange">Bigger Possibilities.</span>
            </h1>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full max-w-xs sm:max-w-none mx-auto px-4">
              <Button variant="primary" size="lg" className="hidden sm:inline-flex w-full sm:w-auto text-base sm:text-lg px-8 py-3.5" onClick={onContactClick} icon={ArrowRight}>
                Get Started
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg" onClick={() => {
                const el = document.getElementById('why-us');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore Solutions
              </Button>
            </div>

            {/* Quick Trust Checklist */}
            <div className="hidden sm:flex sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-6 border-t border-kt-fog/60 max-w-2xl mx-auto w-full text-kt-slate font-body text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-kt-orange shrink-0" />
                <span>Zero Subscription Lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-kt-orange shrink-0" />
                <span>100% Owned Proprietary Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-kt-orange shrink-0" />
                <span>Rapid 2-Week Prototypes</span>
              </div>
            </div>

          </div>

          {/* Hero Bottom Stats Grid */}
          <div className="hidden sm:grid mt-12 sm:mt-24 grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-6 sm:py-8 border-y border-kt-fog bg-kt-cream/50 px-4 sm:px-12 rounded-xl">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="font-display font-bold text-4xl sm:text-6xl text-kt-orange mb-1">
                  {stat.value}
                </span>
                <span className="font-mono text-xs sm:text-sm text-kt-slate uppercase tracking-wider font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* REDESIGNED MOBILE-FIRST HERO LAYOUT (Visible only on mobile)               */}
      {/* ========================================================================= */}
      <div className="block sm:hidden w-full relative pt-28 pb-12 px-6 z-10">
        <div className="flex flex-col items-center justify-between min-h-[calc(100vh-10rem)] text-center">
          
          {/* Headline & Eyebrow Content Area */}
          <div className="w-full flex-grow flex flex-col justify-center pb-8 select-none">
            {/* Small Eyebrow Text */}
            <span className="font-mono text-[9px] tracking-[0.25em] text-kt-slate uppercase font-bold mb-5 block animate-fade-in delay-200">
              TECHNOLOGY • DESIGN • SOLUTIONS
            </span>

            {/* Redesigned Center-Aligned Mobile Headline */}
            <h1 className="font-display font-bold text-center tracking-tight leading-[1.08] mb-8 max-w-[310px] mx-auto">
              <span className="block text-[clamp(1.75rem,8vw,2.25rem)] text-kt-ink animate-fade-in-up delay-300">
                Smarter Solutions.
              </span>
              <span className="block text-[clamp(1.75rem,8vw,2.25rem)] text-kt-ink animate-fade-in-up delay-450 mt-1">
                Lower Costs.
              </span>
              <span className="block text-[clamp(2.25rem,10.5vw,2.85rem)] text-kt-orange animate-fade-in-up delay-600 mt-2.5">
                Bigger Possibilities.
              </span>
            </h1>

            {/* Compact CTA Button */}
            <div className="w-full px-4 animate-fade-in-up delay-800 flex justify-center">
              <Button 
                variant="secondary" 
                onClick={() => {
                  const el = document.getElementById('why-us');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={ArrowRight}
                className="w-full max-w-[250px]"
              >
                Explore Solutions
              </Button>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="w-full mt-auto pt-6 animate-fade-in delay-1000">
            <a 
              href="#solutions" 
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex flex-col items-center gap-2 text-kt-slate/60 hover:text-kt-orange transition-colors duration-300 group"
            >
              <span className="font-mono text-[8px] tracking-[0.2em] font-bold uppercase select-none">
                SCROLL TO EXPLORE
              </span>
              <svg 
                className="w-4 h-4 text-kt-slate/40 group-hover:text-kt-orange transition-colors duration-300 animate-scroll-bounce"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* REDESIGNED MOBILE BACKGROUND SYSTEM (Subtle Grid & SVG Geometric Graphic)  */}
      {/* ========================================================================= */}
      <div className="block sm:hidden absolute inset-0 overflow-hidden pointer-events-none select-none z-0 animate-fade-in">
        
        {/* Subtle responsive grid lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Vertical Lines */}
          <line x1="20%" y1="0%" x2="20%" y2="100%" stroke="var(--kt-fog)" strokeWidth="0.75" opacity="0.25" />
          <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="var(--kt-fog)" strokeWidth="0.75" opacity="0.25" />
          <line x1="80%" y1="0%" x2="80%" y2="100%" stroke="var(--kt-fog)" strokeWidth="0.75" opacity="0.25" />

          {/* Horizontal Lines */}
          <line x1="0%" y1="18%" x2="100%" y2="18%" stroke="var(--kt-fog)" strokeWidth="0.75" opacity="0.25" />
          <line x1="0%" y1="38%" x2="100%" y2="38%" stroke="var(--kt-fog)" strokeWidth="0.75" opacity="0.25" />
          <line x1="0%" y1="58%" x2="100%" y2="58%" stroke="var(--kt-fog)" strokeWidth="0.75" opacity="0.25" />
          <line x1="0%" y1="78%" x2="100%" y2="78%" stroke="var(--kt-fog)" strokeWidth="0.75" opacity="0.25" />

          {/* Diagonal geometric wireframe lines */}
          <line x1="20%" y1="18%" x2="50%" y2="38%" stroke="var(--kt-fog)" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
          <line x1="80%" y1="38%" x2="50%" y2="58%" stroke="var(--kt-orange)" strokeWidth="0.75" opacity="0.15" />
          <line x1="20%" y1="78%" x2="50%" y2="58%" stroke="var(--kt-fog)" strokeWidth="1" opacity="0.2" />

          {/* Pulsing Orange Grid Nodes */}
          <circle cx="20%" cy="18%" r="3.5" fill="var(--kt-orange)" className="animate-pulse" opacity="0.8" />
          <circle cx="80%" cy="38%" r="2.5" fill="var(--kt-orange)" opacity="0.6" />
          <circle cx="50%" cy="58%" r="4" fill="var(--kt-orange)" className="animate-pulse" style={{ animationDuration: '4s' }} opacity="0.7" />
          <circle cx="20%" cy="78%" r="2.5" fill="var(--kt-slate)" opacity="0.25" />
          <circle cx="80%" cy="78%" r="3" fill="var(--kt-orange)" opacity="0.5" />
        </svg>

        {/* Abstract Isometric Cube Shape - Slow Float animation */}
        <div className="absolute top-[26%] right-[10%] w-[160px] h-[160px] opacity-[0.14] animate-float-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <polygon points="50,15 80,32 50,50 20,32" stroke="var(--kt-ink)" strokeWidth="0.75" />
            <polygon points="50,50 80,32 80,68 50,85" stroke="var(--kt-ink)" strokeWidth="0.75" />
            <polygon points="50,50 20,32 20,68 50,85" stroke="var(--kt-ink)" strokeWidth="0.75" />
            <line x1="50" y1="15" x2="50" y2="50" stroke="var(--kt-orange)" strokeWidth="1.25" strokeDasharray="2 2" />
            
            <circle cx="50" cy="50" r="2.5" fill="var(--kt-orange)" />
            <circle cx="80" cy="32" r="1.5" fill="var(--kt-ink)" />
            <circle cx="20" cy="32" r="1.5" fill="var(--kt-ink)" />
            <circle cx="50" cy="85" r="1.5" fill="var(--kt-ink)" />
          </svg>
        </div>

        {/* Abstract Technical Circles Shape - Slower Float animation */}
        <div className="absolute bottom-[24%] left-[6%] w-[110px] h-[110px] opacity-[0.09] animate-float-slower">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="35" stroke="var(--kt-ink)" strokeWidth="0.5" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="20" stroke="var(--kt-orange)" strokeWidth="0.75" />
            
            <line x1="15" y1="50" x2="85" y2="50" stroke="var(--kt-ink)" strokeWidth="0.5" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="var(--kt-ink)" strokeWidth="0.5" />
            
            <circle cx="50" cy="15" r="2" fill="var(--kt-ink)" />
            <circle cx="50" cy="85" r="2" fill="var(--kt-ink)" />
            <circle cx="85" cy="50" r="2" fill="var(--kt-orange)" />
            <circle cx="15" cy="50" r="2" fill="var(--kt-ink)" />
          </svg>
        </div>
      </div>

    </section>
  );
}
