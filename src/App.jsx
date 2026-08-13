import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import WhyUsSection from './components/WhyUsSection';
import TeamCarousel from './components/TeamCarousel';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-kt-white text-kt-ink font-body selection:bg-kt-yellow selection:text-kt-ink">
      {/* Navigation Header */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Page Content */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection onContactClick={scrollToContact} />

        {/* Section 2: What We Do */}
        <WhatWeDoSection onContactClick={scrollToContact} />

        {/* Section 3: Why Katengers (Interactive 3D Perspective Right-to-Left Carousel) */}
        <WhyUsSection />

        {/* Section 4: Horizontally-Scrolling Team Carousel */}
        <TeamCarousel />

        {/* Section 5: Condensed 12-Stage Process Sequence */}
        <ProcessSection />

        {/* Section 6: Contact & Brief Submission Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
