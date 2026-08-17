import React, { useState } from 'react';
import Badge from './Badge';
import Button from './Button';
import { Send, CheckCircle2, AlertCircle, PhoneCall, Mail, Linkedin, Instagram } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: 'Workflow Automation',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage('Please provide both your name and business email address.');
      return;
    }

    setStatus('submitting');

    // Simulate clean API response submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectType: 'Workflow Automation',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-kt-ink text-kt-white relative border-t border-kt-slate/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Contact Overview Copy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Badge variant="yellow" className="mb-4">GET STARTED</Badge>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-kt-white tracking-tight mb-6">
              Let's build your AI solution together.
            </h2>

            <p className="font-body text-kt-fog text-base sm:text-lg leading-relaxed mb-8">
              Tell us about your operational challenges or AI project scope. We'll deliver a tailored proposal and technical prototype plan within 48 hours.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-4 font-body text-sm text-kt-fog w-full pt-6 border-t border-kt-slate/40">
              <a href="mailto:katengerstech@gmail.com" className="flex items-center gap-3 hover:text-kt-yellow transition-colors group">
                <div className="w-8 h-8 rounded-full bg-kt-yellow/20 text-kt-yellow group-hover:bg-kt-yellow group-hover:text-kt-ink flex items-center justify-center transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span>katengerstech@gmail.com</span>
              </a>

              <a href="tel:+919347340238" className="flex items-center gap-3 hover:text-kt-yellow transition-colors group">
                <div className="w-8 h-8 rounded-full bg-kt-yellow/20 text-kt-yellow group-hover:bg-kt-yellow group-hover:text-kt-ink flex items-center justify-center transition-all duration-300">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>+91 93473 40238</span>
              </a>

              <a href="https://www.linkedin.com/in/katengers-technologies-91b93742a/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-kt-yellow transition-colors group">
                <div className="w-8 h-8 rounded-full bg-kt-yellow/20 text-kt-yellow group-hover:bg-kt-yellow group-hover:text-kt-ink flex items-center justify-center transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn — Katengers Technologies</span>
              </a>

              <a href="https://www.instagram.com/katengers_/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-kt-yellow transition-colors group">
                <div className="w-8 h-8 rounded-full bg-kt-yellow/20 text-kt-yellow group-hover:bg-kt-yellow group-hover:text-kt-ink flex items-center justify-center transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram — @katengers_</span>
              </a>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="mt-8 bg-kt-slate/20 border border-kt-slate/40 p-4 rounded-lg w-full font-mono text-xs text-kt-yellow flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>48-Hour Technical Proposal & Fixed Quote Guarantee</span>
            </div>

          </div>

          {/* Right Form Component (Form Spec strictly applied) */}
          <div className="lg:col-span-7 bg-kt-white text-kt-ink p-5 sm:p-10 rounded-xl shadow-2xl relative">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-kt-ink mb-1.5 sm:mb-2">
              Send us a Project Brief
            </h3>
            <p className="font-body text-xs sm:text-sm text-kt-slate mb-6">
              Fill out the form below to connect directly with our engineering team.
            </p>

            {status === 'success' ? (
              <div className="bg-kt-cream border border-kt-success p-6 rounded-lg text-center space-y-4 my-8 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-kt-success/20 text-kt-success flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-xl text-kt-ink">
                  Brief Received Successfully!
                </h4>
                <p className="font-body text-sm text-kt-slate">
                  Thank you! An AI engineer from Katengers will review your requirements and reach out within 24 hours.
                </p>
                <Button variant="secondary" size="sm" onClick={() => setStatus('idle')}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                
                {/* Form Error Banner */}
                {status === 'error' && (
                  <div className="bg-red-50 border border-kt-error text-kt-error p-3 rounded-md text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block font-body font-medium text-xs text-kt-ink mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 bg-kt-white border-[1.5px] border-kt-fog rounded-md font-body text-base sm:text-sm text-kt-ink placeholder:text-kt-slate/60 focus:outline-none focus:border-kt-orange focus:ring-2 focus:ring-kt-orange/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-xs text-kt-ink mb-1.5 uppercase tracking-wide">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@company.com"
                      className="w-full px-3.5 py-2.5 bg-kt-white border-[1.5px] border-kt-fog rounded-md font-body text-base sm:text-sm text-kt-ink placeholder:text-kt-slate/60 focus:outline-none focus:border-kt-orange focus:ring-2 focus:ring-kt-orange/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Company & Project Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block font-body font-medium text-xs text-kt-ink mb-1.5 uppercase tracking-wide">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Innovations"
                      className="w-full px-3.5 py-2.5 bg-kt-white border-[1.5px] border-kt-fog rounded-md font-body text-base sm:text-sm text-kt-ink placeholder:text-kt-slate/60 focus:outline-none focus:border-kt-orange focus:ring-2 focus:ring-kt-orange/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block font-body font-medium text-xs text-kt-ink mb-1.5 uppercase tracking-wide">
                      Primary Goal
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-kt-white border-[1.5px] border-kt-fog rounded-md font-body text-base sm:text-sm text-kt-ink focus:outline-none focus:border-kt-orange focus:ring-2 focus:ring-kt-orange/20 transition-all"
                    >
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="Custom AI Application">Custom AI Application</option>
                      <option value="Enterprise Integration">Enterprise AI Integration</option>
                      <option value="Practical Analytics">Practical Predictive Analytics</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block font-body font-medium text-xs text-kt-ink mb-1.5 uppercase tracking-wide">
                    Project Details / Bottlenecks
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe the tasks or workflows you wish to automate..."
                    className="w-full px-3.5 py-2.5 bg-kt-white border-[1.5px] border-kt-fog rounded-md font-body text-base sm:text-sm text-kt-ink placeholder:text-kt-slate/60 focus:outline-none focus:border-kt-orange focus:ring-2 focus:ring-kt-orange/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full mt-2" 
                  disabled={status === 'submitting'}
                  icon={Send}
                >
                  {status === 'submitting' ? 'Submitting Brief...' : 'Send Message & Get Quote'}
                </Button>

                <p className="font-mono text-[11px] text-kt-slate text-center mt-2">
                  🔒 We respect your privacy. No spam ever.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
