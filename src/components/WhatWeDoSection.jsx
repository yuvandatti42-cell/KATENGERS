import React, { useState, useEffect } from 'react';
import Badge from './Badge';
import Button from './Button';
import { Globe, Code2, Layers, Gauge, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

// Import service slideshow images from src/assets/services/
import websiteImg from '../assets/services/websites.png';
import customAppImg from '../assets/services/custom_apps.png';
import uiUxImg from '../assets/services/ui_ux.png';
import performanceImg from '../assets/services/performance.png';
import aiSolutionsImg from '../assets/services/ai_solutions.png';

export default function WhatWeDoSection({ onContactClick }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      number: "01",
      title: "Websites",
      subtitle: "High-Performance Modern Web Presence",
      description: "",
      features: [
        "Responsive across Desktop, Tablet & Mobile",
        "SEO Optimized & Fast Page Load Speeds",
        "Tailored Brand Identity & Modern Styling",
        "Integrated Lead Generation & Analytics"
      ],
      icon: Globe,
      image: websiteImg,
      badge: "CORE DIGITAL"
    },
    {
      number: "02",
      title: "Custom Web Apps",
      subtitle: "Bespoke Enterprise Software & Backends",
      description: "",
      features: [
        "100% Owned Proprietary Source Code",
        "Custom Database Architectures & Microservices",
        "Role-Based Authentication & Permissions",
        "Seamless Third-Party API Integrations"
      ],
      icon: Code2,
      image: customAppImg,
      badge: "FULL-STACK"
    },
    {
      number: "03",
      title: "UI/UX Design",
      subtitle: "Intuitive & Engaging Digital Interfaces",
      description: "",
      features: [
        "User Journey Mapping & Wireframing",
        "Custom Component Design Systems",
        "Micro-Animations & Micro-Interactions",
        "Accessibility & High-Contrast Standards"
      ],
      icon: Layers,
      image: uiUxImg,
      badge: "CREATIVE UX"
    },
    {
      number: "04",
      title: "Performance Optimization",
      subtitle: "Ultra-Fast Load Times & Smooth Responsiveness",
      description: "",
      features: [
        "Sub-100ms API & Database Query Speeds",
        "Lighthouse Score 95+ Performance Audits",
        "Asset Optimization & Edge CDN Caching",
        "Zero-Downtime Microservice Upgrades"
      ],
      icon: Gauge,
      image: performanceImg,
      badge: "VELOCITY"
    },
    {
      number: "05",
      title: "AI Solutions",
      subtitle: "Practical Automation & LLM Integration",
      description: "",
      features: [
        "Custom RAG & Document Search Engines",
        "Autonomous Background Agent Scripts",
        "SOC2-Compliant Private Data Vector Stores",
        "Zero Subscription Lock-In Infrastructure"
      ],
      icon: Sparkles,
      image: aiSolutionsImg,
      badge: "FEATURED AI"
    }
  ];

  // Auto-play slideshow loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % services.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, services.length]);

  const current = services[activeSlide];
  const IconComponent = current.icon;

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="solutions" className="py-20 md:py-32 bg-kt-white relative border-t border-kt-fog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge variant="yellow" className="mb-4">WHAT WE DO</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-kt-ink tracking-tight mb-4">
            Digital solutions, built around your business.
          </h2>
          <p className="hidden sm:block font-body text-kt-slate text-base sm:text-lg leading-relaxed">
            Explore our core services through our interactive showcase below.
          </p>
        </div>

        {/* Top Service Navigation Tabs */}
        <div 
          className="flex overflow-x-auto pb-3 pt-1 scrollbar-hide sm:flex-wrap sm:justify-center gap-2 mb-8 sm:mb-10 w-full justify-start snap-x px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          {services.map((service, index) => {
            const isActive = activeSlide === index;
            const TabIcon = service.icon;
            return (
              <button
                key={service.number}
                onClick={() => setActiveSlide(index)}
                className={`px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-display text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 snap-start transition-all duration-200 ${isActive ? 'bg-kt-ink text-kt-white shadow-md scale-105' : 'bg-kt-cream/80 text-kt-slate hover:bg-kt-fog hover:text-kt-ink border border-kt-fog'}`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-kt-yellow' : 'text-kt-slate'}`} />
                <span>{service.number}. {service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Slideshow Showcase Container (Medium Size Tile) */}
        <div 
          className="max-w-4xl mx-auto bg-kt-cream/50 border border-kt-fog rounded-2xl overflow-hidden shadow-lg transition-all duration-500 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          {/* Top Image Preview Frame (Medium Aspect Ratio) */}
          <div className="relative aspect-[4/3] sm:aspect-[16/7] bg-kt-ink overflow-hidden group">
            <img 
              src={current.image} 
              alt={current.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
            />
            
            {/* Top Left Floating Pill */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex items-center gap-2 max-w-[65%] sm:max-w-none">
              <span className="bg-kt-ink/90 text-kt-yellow px-2.5 py-1 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md truncate">
                SERVICE {current.number} • {current.badge}
              </span>
            </div>

            {/* Top Right Arrow Navigation Overlay */}
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-kt-ink/80 hover:bg-kt-orange text-kt-white flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-kt-ink/80 hover:bg-kt-orange text-kt-white flex items-center justify-center backdrop-blur-md transition-all shadow-md active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Explanation & Details Card */}
          <div className="p-5 sm:p-10 bg-kt-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              
              {/* Left Column: Title & Explanation */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-kt-yellow text-kt-ink flex items-center justify-center shadow-sm shrink-0">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-kt-orange font-bold">
                    {current.subtitle}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-3xl text-kt-ink mb-2 sm:mb-3 tracking-tight">
                  {current.title}
                </h3>

                {current.description && (
                  <p className="font-body text-kt-slate text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                    {current.description}
                  </p>
                )}

                {/* Deliverables Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-2">
                  {current.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-body text-xs sm:text-sm text-kt-ink font-medium">
                      <CheckCircle2 className="w-4 h-4 text-kt-orange shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: CTA Action Box */}
              <div className="shrink-0 flex flex-col items-start lg:items-end justify-center pt-5 sm:pt-6 lg:pt-0 border-t lg:border-t-0 border-kt-fog w-full lg:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={onContactClick} icon={ArrowRight}>
                  Build {current.title}
                </Button>
                <span className="font-mono text-[11px] text-kt-slate mt-2 self-center sm:self-start lg:self-end">
                  Fixed scope quote within 48 hours
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Slide Progress Dots */}
          <div className="bg-kt-fog/40 px-4 sm:px-6 py-3 border-t border-kt-fog flex items-center justify-between font-mono text-xs text-kt-slate">
            <span>Slide {activeSlide + 1} of {services.length}</span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {services.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveSlide(dotIdx)}
                  className={`h-2 rounded-full transition-all ${activeSlide === dotIdx ? 'bg-kt-orange w-5 sm:w-6' : 'bg-kt-slate/40 w-2 hover:bg-kt-ink'}`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
            <span className="hidden sm:inline">Auto-playing • Hover to pause</span>
          </div>

        </div>

      </div>
    </section>
  );
}
