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
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-kt-white">
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1d1d08_1px,transparent_1px),linear-gradient(to_bottom,#1a1d1d08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Pill Badge */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 px-2">
            <Badge variant="yellow">PRACTICAL AI FOR GROWTH</Badge>
            <span className="font-mono text-xs text-kt-slate hidden sm:inline-block">| No generic wrappers. No enterprise bloat.</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-kt-ink tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 break-words">
            Smarter Solutions.<br />
            Lower Costs.<br />
            <span className="text-kt-orange">Bigger Possibilities.</span>
          </h1>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full max-w-xs sm:max-w-none mx-auto px-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 py-3.5" onClick={onContactClick} icon={ArrowRight}>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-6 border-t border-kt-fog/60 max-w-2xl mx-auto w-full text-kt-slate font-body text-xs sm:text-sm font-medium">
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
        <div className="mt-12 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-6 sm:py-8 border-y border-kt-fog bg-kt-cream/50 px-4 sm:px-12 rounded-xl">
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
    </section>
  );
}
