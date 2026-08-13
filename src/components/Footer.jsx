import React from 'react';
import Logo from './Logo';
import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-kt-white text-kt-ink border-t border-kt-fog py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-kt-fog">
          
          {/* Logo & Tagline Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo isDark={false} showTagline={true} className="mb-4" />
            <p className="font-body text-kt-slate text-sm max-w-sm leading-relaxed mb-6">
              Katengers provides affordable, custom-built, practical, and scalable AI solutions for startups and growing enterprises worldwide.
            </p>
            <div className="font-mono text-xs text-kt-orange font-semibold uppercase tracking-wider">
              "Affordable AI. Built for Business."
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="md:col-span-3">
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
                <a href="#process" className="hover:text-kt-orange transition-colors">Our 12-Stage Lifecycle</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-kt-orange transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Socials & Connectivity Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-kt-ink font-bold mb-4">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-kt-fog text-kt-ink flex items-center justify-center hover:bg-kt-orange hover:text-kt-white transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-kt-fog text-kt-ink flex items-center justify-center hover:bg-kt-orange hover:text-kt-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-kt-fog text-kt-ink flex items-center justify-center hover:bg-kt-orange hover:text-kt-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-kt-slate hover:text-kt-orange transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-kt-slate text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Katengers Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#home" className="hover:text-kt-orange transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-kt-orange transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-kt-orange transition-colors">Security Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
