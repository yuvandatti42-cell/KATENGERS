import React, { useState } from 'react';
import Badge from './Badge';
import { Cpu, Palette, Zap, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SquadSection({ onContactClick }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const squadMembers = [
    {
      id: 'architect',
      name: 'Captain Whisker',
      role: 'Lead AI Architect',
      codename: 'AGENT 01',
      badge: 'CORE SYSTEM',
      image: '/squad/architect.svg',
      icon: Cpu,
      bio: 'Specializes in orchestrating high-performance LLM backends, custom vector embeddings, and zero-latency retrieval pipelines.',
      skills: ['Full-Stack AI Architecture', 'Custom LLM Orchestration', 'RAG & Vector Datastores', 'Python / Microservices'],
      stats: { speed: '99.8%', accuracy: '100%', uptime: '99.99%' },
      color: 'border-kt-orange/60 hover:border-kt-orange'
    },
    {
      id: 'designer',
      name: 'Pixel Paw',
      role: 'Head of UI/UX Engineering',
      codename: 'AGENT 02',
      badge: 'INTERACTION',
      image: '/squad/designer.svg',
      icon: Palette,
      bio: 'Crafts bespoke digital design systems, glassmorphism interfaces, and fluid micro-animations that turn users into brand champions.',
      skills: ['Modern React & Web Apps', 'Tailwind & Custom CSS Systems', 'UX Design Systems', 'Interactive Prototypes'],
      stats: { aesthetic: '10/10', responsiveness: '100%', smoothness: '60fps' },
      color: 'border-kt-yellow/80 hover:border-kt-yellow'
    },
    {
      id: 'engineer',
      name: 'Byte Claw',
      role: 'Full-Stack & Performance Ninja',
      codename: 'AGENT 03',
      badge: 'VELOCITY',
      image: '/squad/engineer.svg',
      icon: Zap,
      bio: 'Engineers lightning-fast web infrastructure, serverless functions, and automated background data processing workflows.',
      skills: ['High-Speed Web Infrastructure', 'Automated Workflows', 'API Integration Tunnels', 'Database Optimization'],
      stats: { throughput: '10x Fast', latency: '< 50ms', codeQuality: '100%' },
      color: 'border-kt-orange/60 hover:border-kt-orange'
    },
    {
      id: 'security',
      name: 'Shadow Purr',
      role: 'Data Privacy & Guard Officer',
      codename: 'AGENT 04',
      badge: 'SECURITY',
      image: '/squad/security.svg',
      icon: Shield,
      bio: 'Guards proprietary business intelligence with SOC2-compliant encryption, isolated vector boundaries, and zero-leak guarantees.',
      skills: ['Bank-Grade Encryption', 'SOC2 Privacy Compliance', 'Isolated Vector Stores', 'API Security Audits'],
      stats: { compliance: 'SOC2 Ready', security: '100%', isolation: 'Strict' },
      color: 'border-kt-yellow/80 hover:border-kt-yellow'
    }
  ];

  return (
    <section id="squad" className="py-20 md:py-32 bg-kt-cream relative border-t border-kt-fog">
      {/* Background Accent Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1d1d06_1px,transparent_1px),linear-gradient(to_bottom,#1a1d1d06_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="yellow" className="mb-4">THE KATENGERS SQUAD</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-kt-ink tracking-tight mb-4">
            Meet the Specialists Behind Your Digital Products.
          </h2>
          <p className="font-body text-kt-slate text-base sm:text-lg leading-relaxed">
            Every project is built by an elite, multidisciplinary squad trained in custom software engineering, modern UX design, high-speed performance, and strict data privacy.
          </p>
        </div>

        {/* 4 Squad Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {squadMembers.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.id}
                className={`bg-kt-white border border-kt-fog rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
              >
                <div>
                  {/* Top Image Container with Badge */}
                  <div className="relative bg-kt-fog/30 aspect-square overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Codename Pill */}
                    <div className="absolute top-3 left-3 bg-kt-ink/90 text-kt-white px-2.5 py-1 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider backdrop-blur-md">
                      {member.codename}
                    </div>

                    {/* Floating Icon Pill */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-kt-yellow text-kt-ink flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-kt-orange font-bold">
                        {member.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-kt-ink mb-1 group-hover:text-kt-orange transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className="font-body font-semibold text-xs text-kt-slate mb-4">
                      {member.role}
                    </p>

                    <p className="font-body text-kt-slate text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] font-semibold bg-kt-cream text-kt-ink border border-kt-fog px-2 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-2.5 px-4 rounded-xl border border-kt-fog bg-kt-fog/40 hover:bg-kt-yellow hover:border-kt-yellow hover:text-kt-ink text-kt-ink font-display font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <span>View Agent Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Squad Callout Footer */}
        <div className="bg-kt-ink text-kt-white rounded-2xl p-8 sm:p-10 border border-kt-slate/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-kt-yellow text-kt-ink flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-kt-white mb-1">
                Need a full squad for your project?
              </h3>
              <p className="font-body text-kt-fog text-sm sm:text-base">
                We assemble custom project teams tailored specifically to your tech stack & timeline.
              </p>
            </div>
          </div>

          <button
            onClick={onContactClick}
            className="shrink-0 bg-kt-yellow hover:bg-kt-orange hover:text-kt-white text-kt-ink font-display font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md flex items-center gap-2"
          >
            <span>Assemble Your Squad</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Agent Dossier Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kt-ink/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-kt-white border border-kt-fog rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-kt-slate hover:text-kt-ink text-xl font-bold w-8 h-8 rounded-full bg-kt-fog flex items-center justify-center transition-colors"
            >
              ×
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-20 h-20 rounded-xl object-cover border border-kt-fog bg-kt-cream"
              />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-kt-orange font-bold">
                  {selectedMember.codename} • {selectedMember.badge}
                </span>
                <h3 className="font-display font-bold text-2xl text-kt-ink">
                  {selectedMember.name}
                </h3>
                <p className="font-body text-sm font-semibold text-kt-slate">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            <p className="font-body text-kt-slate text-sm leading-relaxed mb-6">
              {selectedMember.bio}
            </p>

            <h4 className="font-display font-bold text-sm text-kt-ink mb-3 uppercase tracking-wider">
              Core Technical Capabilities
            </h4>
            <div className="space-y-2 mb-6">
              {selectedMember.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 font-body text-xs text-kt-ink">
                  <CheckCircle2 className="w-4 h-4 text-kt-orange shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-kt-fog flex items-center justify-between">
              <span className="font-mono text-xs text-kt-slate">Status: READY FOR DEPLOYMENT</span>
              <button
                onClick={() => {
                  setSelectedMember(null);
                  if (onContactClick) onContactClick();
                }}
                className="bg-kt-ink text-kt-white hover:bg-kt-orange font-display font-bold text-xs px-4 py-2 rounded-lg transition-colors"
              >
                Hire Squad
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
