import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Button from './Button';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
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

  // Lock body/page scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
    setTimeout(() => {
      setAnimateIn(true);
    }, 10);
  };

  const closeMobileMenu = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 400);
  };

  const handleLinkClick = (e, href) => {
    // Enable scrolling immediately so page navigation can work
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    setAnimateIn(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 400);
  };

  const handleGetStartedClick = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    setAnimateIn(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
      onContactClick();
    }, 400);
  };

  const navLinks = [
    { name: 'What We Do', href: '#solutions', id: 'solutions' },
    { name: 'Why Katengers', href: '#why-us', id: 'why-us' },
    { name: 'Our Team', href: '#team', id: 'team' },
    { name: 'Our Process', href: '#process', id: 'process' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-up ${isScrolled ? 'bg-kt-white/95 backdrop-blur-md border-b border-kt-fog py-3 shadow-sm' : 'bg-transparent border-b border-kt-fog/20 py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
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
              onClick={openMobileMenu}
              className="md:hidden p-2 text-kt-ink hover:text-kt-orange rounded-md focus:outline-none focus:ring-2 focus:ring-kt-orange"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-[9999] md:hidden bg-kt-white flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-out ${
            animateIn ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-kt-fog shrink-0">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="focus:outline-none focus:ring-2 focus:ring-kt-orange rounded-md p-1"
            >
              <Logo showTagline={true} />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeMobileMenu}
              className="w-12 h-12 flex items-center justify-center border border-kt-orange text-kt-orange rounded-md hover:bg-kt-orange/10 focus:outline-none focus:ring-2 focus:ring-kt-orange transition-colors cursor-pointer shrink-0"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-grow flex flex-col justify-center px-5 py-6 shrink-0">
            {navLinks.map((link, idx) => {
              const delayClass = 
                idx === 0 ? 'delay-[75ms]' :
                idx === 1 ? 'delay-[150ms]' :
                idx === 2 ? 'delay-[225ms]' :
                'delay-[300ms]';
              return (
                <div
                  key={link.name}
                  className={`transition-all duration-300 ease-out transform ${
                    animateIn ? `opacity-100 translate-y-0 ${delayClass}` : 'opacity-0 translate-y-4'
                  }`}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-5 border-b border-kt-fog group"
                  >
                    <span className="font-display font-bold text-[24px] text-kt-ink group-hover:text-kt-orange transition-colors">
                      {link.name}
                    </span>
                    <span className="text-kt-orange font-mono text-lg transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Get Started CTA */}
          <div
            className={`px-5 pb-[calc(20px+env(safe-area-inset-bottom))] shrink-0 transition-all duration-300 ease-out ${
              animateIn ? 'opacity-100 translate-y-0 scale-100 delay-[375ms]' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <Button
              variant="primary"
              className="w-full"
              onClick={handleGetStartedClick}
              icon={ArrowRight}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
