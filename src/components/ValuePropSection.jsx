import React, { useState, useEffect } from 'react';
import Badge from './Badge';
import Button from './Button';
import { Check, X, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Zap, ShieldCheck, Clock, DollarSign, Layers } from 'lucide-react';

export default function ValuePropSection({ onContactClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const comparisons = [
    {
      id: 'timeline',
      metric: 'Project Timeline',
      icon: Clock,
      badge: 'SPEED & ACCELERATION',
      traditional: '6 - 12 Months of Heavy Discovery',
      katengers: '2-Week Rapid Prototype to Production',
      impact: '6x Faster Time-To-Market',
      desc: 'Skip endless strategy slides. We build functional working prototypes in 14 days.'
    },
    {
      id: 'pricing',
      metric: 'Pricing Model',
      icon: DollarSign,
      badge: 'TRANSPARENT VALUE',
      traditional: '$150k+ Monthly Retainers & Hidden Fees',
      katengers: 'Fixed-Scope ₹ INR / $ Outcomes',
      impact: '60% Operational Cost Reduction',
      desc: 'No multi-lakh monthly consulting traps. Clear fixed-scope pricing built for growth.'
    },
    {
      id: 'architecture',
      metric: 'System Architecture',
      icon: Layers,
      badge: 'PROPRIETARY OWNERSHIP',
      traditional: 'Off-the-shelf locked tools & SaaS traps',
      katengers: '100% Owned Proprietary Source Code',
      impact: 'Zero Vendor Lock-In',
      desc: 'You own every line of code, database schema, and custom model weights forever.'
    },
    {
      id: 'overhead',
      metric: 'Operational Overhead',
      icon: ShieldCheck,
      badge: 'TURNKEY SIMPLICITY',
      traditional: 'Requires internal dedicated AI team',
      katengers: 'Turnkey deployment with zero friction',
      impact: '100% Autonomous Workflows',
      desc: 'Our AI engines integrate directly into your current CRM, ERP, and API stack.'
    },
    {
      id: 'alignment',
      metric: 'Business Alignment',
      icon: Zap,
      badge: 'PRACTICAL ROI',
      traditional: 'Generic slide decks & speculative fluff',
      katengers: 'Practical workflow automation',
      impact: 'Immediate Hours Saved Daily',
      desc: 'Strictly targeted at daily operational bottlenecks that boost your bottom line.'
    }
  ];

  // Auto-play 3D slide loop from right to left
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % comparisons.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, comparisons.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % comparisons.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + comparisons.length) % comparisons.length);
  };

  return (
    <section id="value-prop" className="py-20 md:py-32 bg-kt-ink text-kt-white relative overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 right-0 -mt-12 -mr-12 w-96 h-96 bg-kt-orange/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -mb-12 -ml-12 w-96 h-96 bg-kt-yellow/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="yellow" className="mb-4">BRAND POSITIONING</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-kt-white tracking-tight mb-4">
            Smarter Costs. <span className="text-kt-yellow">Real AI Outcomes.</span>
          </h2>
          <p className="font-body text-kt-fog text-base sm:text-lg leading-relaxed">
            Experience our 3D interactive comparison showcase. Katengers eliminates traditional consultancy overhead to deliver lean, production-ready AI software in record time.
          </p>
        </div>

        {/* Top Metric Navigation Tabs */}
        <div className="flex overflow-x-auto pb-3 pt-1 scrollbar-hide sm:flex-wrap sm:justify-center gap-2 mb-10 w-full justify-start snap-x px-1">
          {comparisons.map((item, idx) => {
            const isActive = activeIndex === idx;
            const IconComp = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-display text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 snap-start transition-all duration-300 ${
                  isActive 
                    ? 'bg-kt-yellow text-kt-ink shadow-lg scale-105 ring-2 ring-kt-yellow/50' 
                    : 'bg-kt-slate/20 text-kt-fog hover:bg-kt-slate/40 border border-kt-slate/40'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-kt-ink' : 'text-kt-yellow'}`} />
                <span>{item.metric}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Perspective Carousel Container (Sliding Right to Left) */}
        <div 
          className="relative max-w-4xl mx-auto perspective-[1200px] py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Main 3D Card Stage */}
          <div className="relative min-h-[560px] xs:min-h-[490px] sm:min-h-[380px] flex items-center justify-center">
            {comparisons.map((item, idx) => {
              // Calculate 3D Offset position relative to activeIndex
              const offset = (idx - activeIndex + comparisons.length) % comparisons.length;
              
              let cardStyle = "opacity-0 pointer-events-none translate-x-full scale-75 z-0";

              if (offset === 0) {
                // Active Card (Front & Center 3D)
                cardStyle = "opacity-100 z-30 scale-100 translate-x-0 rotate-y-0 shadow-[0_20px_50px_rgba(255,115,46,0.25)] border-kt-yellow/60";
              } else if (offset === 1 || (activeIndex === comparisons.length - 1 && idx === 0)) {
                // Next Card (Perspective Right 3D, sliding in from right)
                cardStyle = "opacity-40 z-20 scale-90 translate-x-[35%] rotate-y-[-15deg] pointer-events-none hidden sm:flex border-kt-slate/40";
              } else if (offset === comparisons.length - 1) {
                // Previous Card (Perspective Left 3D, sliding out to left)
                cardStyle = "opacity-40 z-10 scale-90 -translate-x-[35%] rotate-y-[15deg] pointer-events-none hidden sm:flex border-kt-slate/40";
              }

              const ItemIcon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 w-full bg-gradient-to-br from-kt-slate/40 via-kt-ink to-black/90 border rounded-2xl p-6 sm:p-10 transition-all duration-700 ease-out backdrop-blur-xl flex flex-col justify-between ${cardStyle}`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Top Card Header Bar */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-kt-slate/40">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-kt-yellow/20 text-kt-yellow flex items-center justify-center shadow-inner border border-kt-yellow/30">
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-kt-yellow">
                            {item.badge}
                          </span>
                          <h3 className="font-display font-bold text-2xl sm:text-3xl text-kt-white">
                            {item.metric}
                          </h3>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-kt-orange font-semibold bg-kt-orange/10 px-3 py-1 rounded-full border border-kt-orange/20">
                        {item.impact}
                      </span>
                    </div>

                    <p className="font-body text-kt-fog text-sm sm:text-base leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* 3D Comparison Columns Split */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                      
                      {/* Left Side: Traditional Consultancy (Strikethrough / Penalty Card) */}
                      <div className="bg-kt-slate/20 border border-kt-error/30 p-4 rounded-xl relative group">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 h-5 rounded-full bg-kt-error/20 text-kt-error flex items-center justify-center shrink-0">
                            <X className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="font-mono text-[11px] uppercase font-semibold text-kt-slate">
                            Traditional Consultancies
                          </span>
                        </div>
                        <p className="font-body text-xs sm:text-sm text-kt-fog/70 line-through font-medium pl-7">
                          {item.traditional}
                        </p>
                      </div>

                      {/* Right Side: Katengers Solution (Glow Card) */}
                      <div className="bg-gradient-to-r from-kt-yellow/10 to-kt-orange/10 border-2 border-kt-yellow/60 p-4 rounded-xl shadow-lg relative group">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 h-5 rounded-full bg-kt-yellow text-kt-ink flex items-center justify-center shrink-0 shadow-sm">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="font-mono text-[11px] uppercase font-bold text-kt-yellow tracking-wide">
                            Katengers 3D Outcome
                          </span>
                        </div>
                        <p className="font-body text-xs sm:text-sm text-kt-white font-bold pl-7">
                          {item.katengers}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Card Bottom Controls & Action */}
                  <div className="pt-4 border-t border-kt-slate/40 flex items-center justify-between">
                    <span className="font-mono text-xs text-kt-slate">
                      3D Slide {activeIndex + 1} of {comparisons.length}
                    </span>

                    <Button variant="accent" size="sm" onClick={onContactClick} icon={ArrowRight}>
                      Get {item.metric} Quote
                    </Button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Floating Left & Right Navigation Arrows (Desktop only) */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-kt-slate/40 border border-kt-slate/60 hover:bg-kt-orange hover:border-kt-orange text-kt-white items-center justify-center backdrop-blur-lg transition-all duration-200 shadow-xl active:scale-95"
            aria-label="Previous 3D Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-kt-slate/40 border border-kt-slate/60 hover:bg-kt-orange hover:border-kt-orange text-kt-white items-center justify-center backdrop-blur-lg transition-all duration-200 shadow-xl active:scale-95"
            aria-label="Next 3D Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* 3D Carousel Progress Indicators */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            {/* Mobile-only Previous button */}
            <button
              onClick={handlePrev}
              className="sm:hidden w-8 h-8 rounded-lg bg-kt-slate/40 border border-kt-slate/60 text-kt-white flex items-center justify-center shadow-sm active:scale-90"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {comparisons.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === dotIdx 
                      ? 'w-8 bg-kt-yellow' 
                      : 'w-2.5 bg-kt-slate/50 hover:bg-kt-fog'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Mobile-only Next button */}
            <button
              onClick={handleNext}
              className="sm:hidden w-8 h-8 rounded-lg bg-kt-slate/40 border border-kt-slate/60 text-kt-white flex items-center justify-center shadow-sm active:scale-90"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <span className="font-mono text-xs text-kt-slate flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-kt-yellow animate-ping" />
            <span>3D Right-to-Left Slide Animation • Hover card to pause</span>
          </span>
        </div>

        {/* Action Callout inside Dark Section */}
        <div className="text-center mt-12">
          <Button variant="primary" size="lg" onClick={onContactClick} icon={ArrowRight}>
            Schedule Your AI Strategy Audit
          </Button>
        </div>

      </div>
    </section>
  );
}
