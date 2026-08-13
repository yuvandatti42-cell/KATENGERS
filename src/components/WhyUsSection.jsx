import React, { useState, useEffect } from 'react';
import Badge from './Badge';
import { IndianRupee, Code2, Wrench, Scaling, ShieldCheck, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pillars = [
    {
      step: '01',
      title: 'Affordable Pricing',
      subtitle: 'Predictable, fair pricing in Indian Rupees (₹) for growing businesses.',
      icon: IndianRupee,
      badge: 'TRANSPARENT VALUE',
      description: 'No multi-lakh monthly retainer traps or hidden consulting fees. Clear fixed-scope ₹ INR pricing designed for Indian and global teams.',
      highlights: [
        'Fixed-scope project pricing with zero hidden fees',
        'Tailored packages in ₹ INR for growing startups & SMEs',
        'Clear deliverables timeline with 48-hour quotes'
      ]
    },
    {
      step: '02',
      title: 'Custom-Built',
      subtitle: 'Tailored code, zero cookie-cutter wrappers.',
      icon: Code2,
      badge: 'BESPOKE ARCHITECTURE',
      description: 'We don\'t paste your prompt into a generic tool. We engineer bespoke architectures fine-tuned specifically for your workflow and data schemas.',
      highlights: [
        '100% proprietary code owned by your business',
        'Custom microservices & database schemas',
        'No dependency on fragile 3rd-party SaaS wrappers'
      ]
    },
    {
      step: '03',
      title: 'Practical',
      subtitle: 'Built to solve real daily operational friction.',
      icon: Wrench,
      badge: 'HIGH-ROI AUTOMATION',
      description: 'Focus strictly on high-ROI automation that saves employee hours immediately. No speculative research projects or buzzword gimmicks.',
      highlights: [
        'Targets real manual bottlenecks saving employee hours',
        'Immediate operational velocity boost from Day 1',
        'Built for daily business adoption and staff ease'
      ]
    },
    {
      step: '04',
      title: 'Scalable',
      subtitle: 'Architected to handle enterprise load effortlessly.',
      icon: Scaling,
      badge: 'HIGH-PERFORMANCE INFRA',
      description: 'Engineered on modern cloud microservices and efficient LLM backends that scale gracefully as your customer volume grows 10x.',
      highlights: [
        'Sub-100ms API latency & vector datastores',
        'Auto-scaling serverless cloud infrastructure',
        'Built to handle 10x traffic growth seamlessly'
      ]
    },
    {
      step: '05',
      title: 'Modern & Secure',
      subtitle: 'Bank-grade privacy and cutting-edge AI stack.',
      icon: ShieldCheck,
      badge: 'BANK-GRADE PRIVACY',
      description: 'Your proprietary business data stays private. We implement SOC2-compliant data handling, local vector stores, and encrypted API tunnels.',
      highlights: [
        'SOC2-compliant data privacy & encryption',
        'Private local vector databases & isolated stores',
        'Strict zero data retention boundary rules'
      ]
    }
  ];

  // Auto-play 3D Carousel sliding right to left
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, pillars.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % pillars.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  return (
    <section id="why-us" className="py-20 md:py-32 bg-kt-cream relative border-t border-kt-fog overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1d1d06_1px,transparent_1px),linear-gradient(to_bottom,#1a1d1d06_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Badge variant="outline" className="mb-4">WHY KATENGERS</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-kt-ink tracking-tight mb-4">
            Engineered differently than typical software agencies.
          </h2>
          <p className="font-body text-kt-slate text-base sm:text-lg leading-relaxed">
            We bridge the gap between expensive enterprise consultancies and fragile off-the-shelf software wrappers.
          </p>
        </div>

        {/* Top Service Navigation Tabs */}
        <div 
          className="flex overflow-x-auto pb-3 pt-1 scrollbar-hide sm:flex-wrap sm:justify-center gap-2 mb-8 sm:mb-12 w-full justify-start snap-x px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;
            const TabIcon = pillar.icon;
            return (
              <button
                key={pillar.step}
                onClick={() => setActiveIndex(index)}
                className={`px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-display text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 snap-start transition-all duration-300 ${
                  isActive 
                    ? 'bg-kt-ink text-kt-white shadow-lg scale-105 ring-2 ring-kt-orange/40' 
                    : 'bg-kt-white/80 text-kt-slate hover:bg-kt-white hover:text-kt-ink border border-kt-fog'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-kt-yellow' : 'text-kt-slate'}`} />
                <span>{pillar.step}. {pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main 3D Right-to-Left Perspective Carousel Stage */}
        <div 
          className="relative max-w-4xl mx-auto perspective-[1200px] py-2 sm:py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          {/* Card Container Stage */}
          <div className="relative min-h-[440px] sm:min-h-[380px] flex items-center justify-center">
            {pillars.map((pillar, idx) => {
              const offset = (idx - activeIndex + pillars.length) % pillars.length;

              let cardStyle = "opacity-0 pointer-events-none translate-x-full scale-75 z-0";

              if (offset === 0) {
                // Active Center 3D Card
                cardStyle = "opacity-100 z-30 scale-100 translate-x-0 rotate-y-0 shadow-2xl border-kt-orange/50 bg-kt-white cursor-default";
              } else if (offset === 1 || (activeIndex === pillars.length - 1 && idx === 0)) {
                // Next Card (Sliding in from Right with 3D Depth)
                cardStyle = "opacity-40 z-20 scale-90 translate-x-[35%] rotate-y-[-15deg] hidden sm:flex border-kt-fog bg-kt-white/90 cursor-pointer hover:opacity-70";
              } else if (offset === pillars.length - 1) {
                // Previous Card (Sliding out to Left with 3D Depth)
                cardStyle = "opacity-40 z-10 scale-90 -translate-x-[35%] rotate-y-[15deg] hidden sm:flex border-kt-fog bg-kt-white/90 cursor-pointer hover:opacity-70";
              }

              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.step}
                  onClick={() => offset !== 0 && setActiveIndex(idx)}
                  className={`absolute inset-0 w-full border rounded-2xl p-6 sm:p-10 transition-all duration-700 ease-out flex flex-col justify-between ${cardStyle}`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div>
                    {/* Top Pillar Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-kt-fog/80">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-kt-yellow/30 text-kt-ink flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 stroke-[2.2]" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-kt-orange">
                            PILLAR {pillar.step} • {pillar.badge}
                          </span>
                          <h3 className="font-display font-bold text-2xl sm:text-3xl text-kt-ink">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-kt-slate font-semibold bg-kt-cream px-3 py-1 rounded-full border border-kt-fog">
                        {pillar.subtitle}
                      </span>
                    </div>

                    {/* Pillar Description */}
                    <p className="font-body text-kt-slate text-base sm:text-lg leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Feature Highlights Checklist */}
                    <div className="space-y-2.5 mb-4">
                      {pillar.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 font-body text-xs sm:text-sm text-kt-ink font-medium">
                          <CheckCircle2 className="w-4 h-4 text-kt-orange shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-kt-fog/80 flex items-center justify-between font-mono text-xs text-kt-slate font-semibold">
                    <span>3D Slide {activeIndex + 1} of {pillars.length}</span>
                    <div className="flex items-center gap-2 text-kt-orange">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{pillar.badge}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Left & Right 3D Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-kt-ink hover:bg-kt-orange text-kt-white flex items-center justify-center transition-all duration-200 shadow-xl active:scale-95"
            aria-label="Previous 3D Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-kt-ink hover:bg-kt-orange text-kt-white flex items-center justify-center transition-all duration-200 shadow-xl active:scale-95"
            aria-label="Next 3D Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* 3D Carousel Progress Dots & Auto-Play Caption */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {pillars.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === dotIdx 
                    ? 'w-8 bg-kt-orange' 
                    : 'w-2.5 bg-kt-slate/40 hover:bg-kt-ink'
                }`}
                aria-label={`Go to pillar ${dotIdx + 1}`}
              />
            ))}
          </div>
          <span className="font-mono text-xs text-kt-slate flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-kt-orange animate-ping" />
            <span>∞ 3D Right-to-Left Slide Carousel • Hover to pause ∞</span>
          </span>
        </div>

      </div>
    </section>
  );
}
