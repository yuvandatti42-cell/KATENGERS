import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles } from 'lucide-react';
import Badge from './Badge';

// Import 7 UNIQUE Avengers suit Cat team cartoon illustrations from src/assets/team/
import capCatPhoto from '../assets/team/alex_architect.svg';
import thorCatPhoto from '../assets/team/sarah_designer.svg';
import spiderCatPhoto from '../assets/team/marcus_engineer.svg';
import pantherCatPhoto from '../assets/team/elena_security.svg';
import ironCatPhoto from '../assets/team/purrfect_rag.svg';
import captainMarvelPhoto from '../assets/team/captain_marvel.svg';
import blackWidowPhoto from '../assets/team/black_widow.svg';

const TEAM = [
  {
    name: 'Captain Americlaw',
    role: 'Lead Strategist',
    photo: capCatPhoto,
  },
  {
    name: 'Thor Paws',
    role: 'System Architect',
    photo: thorCatPhoto,
  },
  {
    name: 'Spider Cat',
    role: 'Full-Stack Ninja',
    photo: spiderCatPhoto,
  },
  {
    name: 'Black Meowthar',
    role: 'Data Security Officer',
    photo: pantherCatPhoto,
  },
  {
    name: 'Iron Purr',
    role: 'AI Engine Lead',
    photo: ironCatPhoto,
  },
  {
    name: 'Captain Meowvel',
    role: 'Cloud Infra Specialist',
    photo: captainMarvelPhoto,
  },
  {
    name: 'Black Catdow',
    role: 'UI/UX Specialist',
    photo: blackWidowPhoto,
  },
];

export default function TeamCarousel() {
  const [scrollDirection, setScrollDirection] = useState('rtl'); // 'rtl' or 'ltr'
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDirection = (dir) => {
    setScrollDirection(dir);
    setIsPaused(false);
  };

  // Duplicate team list 4x for 100% mathematically seamless infinite continuous scrolling
  const marqueeItems = [...TEAM, ...TEAM, ...TEAM, ...TEAM];

  return (
    <section id="team" className="py-20 md:py-28 bg-kt-cream relative border-t border-kt-fog overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1d1d05_1px,transparent_1px),linear-gradient(to_bottom,#1a1d1d05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <Badge variant="yellow">AVENGERS SQUAD</Badge>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kt-orange/10 text-kt-orange font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-kt-orange/20 animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                Infinite Continuous Scroll
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-kt-ink tracking-tight">
              Meet Our Superhero Specialists
            </h2>
            <p className="font-body text-kt-slate text-base sm:text-lg leading-relaxed mt-2 max-w-2xl">
              World-class developers, designers, and AI architects illustrated as Avengers cat heroes in continuous action.
            </p>
          </div>

          {/* Interactive Marquee Controls */}
          <div className="flex items-center justify-center sm:justify-start gap-3 shrink-0">
            <button
              onClick={() => toggleDirection('ltr')}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center transition-all duration-200 shadow-sm ${scrollDirection === 'ltr' && !isPaused ? 'bg-kt-orange text-kt-white border-kt-orange' : 'bg-kt-white border-kt-fog text-kt-ink hover:bg-kt-orange hover:text-kt-white hover:border-kt-orange'}`}
              title="Scroll Left-to-Right"
              aria-label="Scroll Left-to-Right"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center transition-all duration-200 shadow-sm ${(isPaused || isHovered) ? 'bg-kt-ink text-kt-white border-kt-ink' : 'bg-kt-white border-kt-fog text-kt-ink hover:bg-kt-ink hover:text-kt-white'}`}
              title={isPaused ? "Resume Infinite Scroll" : "Pause Infinite Scroll"}
              aria-label="Toggle Animation Play Pause"
            >
              {(isPaused || isHovered) ? <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" /> : <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
            </button>
            <button
              onClick={() => toggleDirection('rtl')}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center transition-all duration-200 shadow-sm ${scrollDirection === 'rtl' && !isPaused ? 'bg-kt-orange text-kt-white border-kt-orange' : 'bg-kt-white border-kt-fog text-kt-ink hover:bg-kt-orange hover:text-kt-white hover:border-kt-orange'}`}
              title="Scroll Right-to-Left"
              aria-label="Scroll Right-to-Left"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* 100% Seamless Infinite Continuous Marquee Scroller */}
        <div 
          className="w-full overflow-hidden py-4 sm:py-8 mask-linear-fade relative marquee-hover-pause"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Subtle Side Fade Gradients for Premium Vignette Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-kt-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-kt-cream to-transparent z-10 pointer-events-none" />

          <div
            className={`flex gap-6 sm:gap-10 pr-6 sm:pr-10 items-center ${
              scrollDirection === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee-ltr'
            }`}
            style={{
              animationPlayState: (isPaused || isHovered) ? 'paused' : 'running'
            }}
          >
            {marqueeItems.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="shrink-0 flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Floating Circular Photo Frame */}
                <div className="relative mb-3">
                  <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-3 sm:border-4 border-kt-yellow shadow-md p-1 bg-kt-cream group-hover:scale-105 group-hover:border-kt-orange group-hover:shadow-2xl transition-all duration-300">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Floating Mini Badge */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-kt-ink text-kt-white px-2 py-0.5 rounded-full font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider shadow-md whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:bg-kt-orange transition-colors">
                    {member.role}
                  </span>
                </div>

                {/* Cat Superhero Name */}
                <h3 className="font-display font-bold text-sm sm:text-lg text-kt-ink group-hover:text-kt-orange transition-colors mt-2 sm:mt-3 tracking-tight">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Helper Footer */}
        <div className="flex items-center justify-center gap-3 text-center font-mono text-xs text-kt-slate mt-6">
          <span className="w-2 h-2 rounded-full bg-kt-orange animate-ping" />
          <span>∞ Continuous Infinite Scroll active • Hover over any character to pause ∞</span>
        </div>

      </div>
    </section>
  );
}
