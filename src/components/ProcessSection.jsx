import React, { useState, useRef, useEffect } from 'react';
import Badge from './Badge';
import { Search, Code, CheckCircle, Rocket, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function ProcessSection() {
  const [activePhase, setActivePhase] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  const processSteps = [
    // Phase 1
    { step: '01', phase: 'discovery', title: 'Discovery & Needs Audit', desc: 'Map current workflow friction, data sources, and business objectives.' },
    { step: '02', phase: 'discovery', title: 'Data & Security Strategy', desc: 'Establish data boundary rules, privacy constraints, and API connections.' },
    { step: '03', phase: 'discovery', title: 'Architecture Blueprint', desc: 'Design lean system specs, selecting ideal LLMs and vector datastores.' },
    
    // Phase 2
    { step: '04', phase: 'engineering', title: 'Model & Pipeline Setup', desc: 'Fine-tune model parameters, prompt pipelines, and retrieval logic.' },
    { step: '05', phase: 'engineering', title: 'Custom UI/UX Engineering', desc: 'Build responsive, intuitive interfaces using Katengers component design.' },
    { step: '06', phase: 'engineering', title: 'Workflow Agent Coding', desc: 'Develop autonomous background scripts and transaction handlers.' },

    // Phase 3
    { step: '07', phase: 'integration', title: 'System Integration', desc: 'Connect AI engines securely into existing ERP, CRM, or cloud tools.' },
    { step: '08', phase: 'integration', title: 'Rigorous QA & Edge Tests', desc: 'Run hallucination bounds tests, load stress tests, and security audits.' },
    { step: '09', phase: 'integration', title: 'Team Acceptance Testing', desc: 'Gather direct stakeholder feedback and optimize UI interaction flows.' },

    // Phase 4
    { step: '10', phase: 'deployment', title: 'Production Deployment', desc: 'Deploy microservices to high-availability serverless cloud infrastructure.' },
    { step: '11', phase: 'deployment', title: 'Hand-off & Training', desc: 'Deliver full proprietary source code, documentation, and staff guides.' },
    { step: '12', phase: 'deployment', title: 'Continuous Optimization', desc: 'Monitor telemetry, latency metrics, and refine models over time.' }
  ];

  const filteredSteps = activePhase === 'all' 
    ? processSteps 
    : processSteps.filter(s => s.phase === activePhase);

  const phaseTabs = [
    { id: 'all', label: 'All 12 Stages', icon: Rocket },
    { id: 'discovery', label: '1. Discovery & Strategy', icon: Search },
    { id: 'engineering', label: '2. Engineering', icon: Code },
    { id: 'integration', label: '3. QA & Integration', icon: CheckCircle },
    { id: 'deployment', label: '4. Deploy & Scale', icon: Rocket },
  ];

  // Automatic Smooth Right-to-Left Scroll Loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth - 20;

        if (scrollLeft >= maxScroll) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused, filteredSteps]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-20 md:py-32 bg-kt-white relative border-t border-kt-fog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge variant="yellow" className="mb-4">OUR WORKING PROCESS</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-kt-ink tracking-tight mb-4">
            Condensed 12-Stage Development Lifecycle.
          </h2>
          <p className="font-body text-kt-slate text-lg leading-relaxed">
            From initial workflow audit to production launch, our process is structured for speed, transparency, and reliable execution.
          </p>
        </div>

        {/* Phase Filter Tabs & Scroll Controls Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:justify-center w-full sm:w-auto justify-start snap-x gap-2 px-1">
            {phaseTabs.map((tab) => {
              const isActive = activePhase === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePhase(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold shrink-0 snap-start transition-all duration-200 ${isActive ? 'bg-kt-ink text-kt-white shadow-md' : 'bg-kt-fog/60 text-kt-slate hover:bg-kt-fog hover:text-kt-ink'}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Left / Right Scroll Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-lg bg-kt-fog text-kt-ink flex items-center justify-center hover:bg-kt-orange hover:text-kt-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-lg bg-kt-fog text-kt-ink flex items-center justify-center hover:bg-kt-orange hover:text-kt-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Infinite Continuous Marquee Container (Right to Left) */}
        <div 
          className="w-full overflow-hidden py-4 marquee-hover-pause"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="animate-marquee-rtl flex gap-4 sm:gap-6"
            style={{
              animationPlayState: (isPaused || isHovered) ? 'paused' : 'running'
            }}
          >
            {/* Render 2 identical sets of items for 100% seamless infinite looping */}
            {[...filteredSteps, ...filteredSteps].map((item, index) => (
              <div 
                key={`${item.step}-${index}`}
                className="min-w-[260px] xs:min-w-[280px] sm:min-w-[320px] max-w-[340px] shrink-0 bg-kt-cream/40 border border-kt-fog p-5 sm:p-6 rounded-xl relative hover:border-kt-orange/50 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold px-2.5 py-0.5 sm:py-1 bg-kt-yellow text-kt-ink rounded-full">
                      STAGE {item.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-kt-orange group-hover:scale-150 transition-transform" />
                  </div>
                  
                  <h3 className="font-display font-bold text-base sm:text-lg text-kt-ink mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="font-body text-kt-slate text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 border-t border-kt-fog/40 flex items-center justify-between text-[11px] sm:text-xs font-mono text-kt-orange font-semibold">
                  <span>Phase {item.phase.toUpperCase()}</span>
                  <span className="text-kt-slate group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Helper Caption */}
        <div className="text-center font-mono text-xs text-kt-slate mt-4">
          ∞ Continuous Infinite Lifecycle • Hover to pause ∞
        </div>

      </div>
    </section>
  );
}
