import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Button from './Button';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['home', 'solutions', 'why-us', 'team', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', href: '#solutions', id: 'solutions' },
    { name: 'Why Katengers', href: '#why-us', id: 'why-us' },
    { name: 'Our Team', href: '#team', id: 'team' },
    { name: 'Our Process', href: '#process', id: 'process' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-kt-white/95 backdrop-blur-md border-b border-kt-fog py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-kt-orange rounded-md p-1">
            <Logo showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-body font-medium text-sm transition-colors relative py-1 hover:text-kt-orange ${isActive ? 'text-kt-ink font-semibold' : 'text-kt-slate'}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-kt-orange rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" size="sm" onClick={onContactClick} icon={ArrowRight}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-kt-ink hover:text-kt-orange rounded-md focus:outline-none focus:ring-2 focus:ring-kt-orange"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-kt-white/98 backdrop-blur-lg border-b border-kt-fog px-5 pt-3 pb-6 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body font-semibold text-base text-kt-ink hover:text-kt-orange py-2.5 border-b border-kt-fog/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-kt-orange font-mono text-xs">→</span>
              </a>
            ))}
            <div className="pt-3">
              <Button variant="primary" className="w-full" onClick={() => { setMobileMenuOpen(false); onContactClick(); }} icon={ArrowRight}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
