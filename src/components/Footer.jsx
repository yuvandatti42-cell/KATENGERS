import React from 'react';
import Logo from './Logo';
import { Mail, Phone, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-kt-white text-kt-ink border-t border-kt-fog py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8 pb-8 border-b border-kt-fog">
          
          {/* Logo & Tagline Column */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start text-left">
            <Logo isDark={false} showTagline={true} className="mb-4" />
            <p className="font-body text-kt-slate text-sm max-w-sm leading-relaxed">
              Smart digital solutions for businesses that want to grow, simplify, and stand out.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-kt-ink font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-kt-slate">
              <li>
                <a href="#solutions" className="hover:text-kt-orange transition-colors">What We Do</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-kt-orange transition-colors">Why Katengers</a>
              </li>
              <li>
                <a href="#team" className="hover:text-kt-orange transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#process" className="hover:text-kt-orange transition-colors">Our Process</a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-kt-ink font-bold mb-4">
              Social
            </h4>
            <div className="flex flex-col items-start gap-2 w-full">
              <a 
                href="https://www.instagram.com/katengers_/" 
                target="_blank" 
                rel="noreferrer" 
                className="group inline-flex items-center gap-3 text-kt-slate hover:text-kt-orange transition-all duration-300 py-1 md:py-1 max-w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-kt-fog/50 text-kt-slate group-hover:bg-kt-orange/10 group-hover:text-kt-orange transition-all duration-300 shrink-0">
                  <Instagram className="w-4 h-4" />
                </span>
                <span className="font-body text-sm font-medium">
                  @katengers_
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/in/katengers-technologies-91b93742a/" 
                target="_blank" 
                rel="noreferrer" 
                className="group inline-flex items-center gap-3 text-kt-slate hover:text-kt-orange transition-all duration-300 py-1 md:py-1 max-w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-kt-fog/50 text-kt-slate group-hover:bg-kt-orange/10 group-hover:text-kt-orange transition-all duration-300 shrink-0">
                  <Linkedin className="w-4 h-4" />
                </span>
                <span className="font-body text-sm font-medium text-left">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-kt-ink font-bold mb-4">
              Contact
            </h4>
            <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-start gap-2 sm:gap-6 md:gap-2 w-full">
              <a 
                href="mailto:katengerstech@gmail.com" 
                className="group inline-flex items-center gap-3 text-kt-slate hover:text-kt-orange transition-all duration-300 py-1 md:py-1 max-w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-kt-fog/50 text-kt-slate group-hover:bg-kt-orange/10 group-hover:text-kt-orange transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="font-body text-sm font-medium break-all">
                  katengerstech@gmail.com
                </span>
              </a>
              <a 
                href="tel:+919347340238" 
                className="group inline-flex items-center gap-3 text-kt-slate hover:text-kt-orange transition-all duration-300 py-1 md:py-1 max-w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-kt-fog/50 text-kt-slate group-hover:bg-kt-orange/10 group-hover:text-kt-orange transition-all duration-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="font-body text-sm font-medium whitespace-nowrap">
                  +91 93473 40238
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-kt-slate text-left sm:text-left">
          <div>
            © 2026 Katengers. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-start sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
            <a href="#solutions" className="hover:text-kt-orange transition-colors">Privacy Policy</a>
            <a href="#why-us" className="hover:text-kt-orange transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-kt-orange transition-colors group ml-auto sm:ml-0"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
