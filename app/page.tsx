'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  Atom,
  Layers,
  Server,
  Database,
  Cloud,
  Check,
  Zap,
  MapPin,
  Award,
  Users,
  Wallet,
  Laptop,
  Star,
  Gift,
  Mail,
  Lock,
  Download,
  Calendar,
  Send,
  Linkedin,
  Instagram,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadStatus, setLeadStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Motion Primitives: InView / Scroll-Reveal Hook
  useEffect(() => {
    const revealElements = document.querySelectorAll('.motion-reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Magic UI: Magic Card Spotlight Dynamic Coordinate Tracker
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--mouse-x', `-999px`);
    card.style.setProperty('--mouse-y', `-999px`);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setLeadStatus('loading');
    setTimeout(() => {
      setLeadStatus('success');
    }, 700);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    setTimeout(() => {
      setContactStatus('success');
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-[#050814] text-slate-100 font-sans selection:bg-[#0EA5E9] selection:text-white overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 0 · HEADER / NAVIGATION BAR */}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group" aria-label="FAMTRIX Home">
            <Image
              src="/assets/famtrix-logo.png"
              alt="FAMTRIX - Web development company and digital marketing software Mysuru"
              width={694}
              height={211}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-brand-glow transition-colors">Services</a>
            <a href="#featured-product" className="hover:text-brand-glow transition-colors">Solutions</a>
            <a href="#who-we-help" className="hover:text-brand-glow transition-colors">Who We Help</a>
            <a href="#why-famtrix" className="hover:text-brand-glow transition-colors">Why FAMTRIX</a>
            <a href="#proof" className="hover:text-brand-glow transition-colors">Case Studies</a>
            <a href="#about" className="hover:text-brand-glow transition-colors">About</a>
            <a href="#blog" className="hover:text-brand-glow transition-colors">Blog</a>
            <a href="#contact" className="hover:text-brand-glow transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/918317477430?text=Hi%20FAMTRIX%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/50 hover:border-emerald-400/60 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp: <strong className="text-white font-mono">8317477430</strong></span>
            </a>

            <a
              href="#contact"
              className="shiny-button group inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-primary-deep shadow-glow-button"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a href="https://wa.me/918317477430" target="_blank" rel="noopener noreferrer" className="p-2 text-emerald-400">
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden glass-nav border-b border-white/10 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-base font-medium text-slate-300">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-brand-glow">Services</a>
              <a href="#featured-product" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-brand-glow">Solutions</a>
              <a href="#who-we-help" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-brand-glow">Who We Help</a>
              <a href="#why-famtrix" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-brand-glow">Why FAMTRIX</a>
              <a href="#proof" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-brand-glow">Case Studies</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-brand-glow">About</a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-brand-glow">Blog</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-brand-glow">Contact</a>
            </nav>
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="https://wa.me/918317477430"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 8317477430</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-primary-deep text-white font-semibold text-sm shadow-glow-button"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative pt-24">

        {/* ========================================================================= */}
        {/* 1 · HERO SECTION (With Magic UI Aurora & Animated Gradient Text) */}
        {/* ========================================================================= */}
        <section className="relative min-h-[92vh] flex items-center justify-center py-16 lg:py-24 overflow-hidden" id="hero">
          
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute -top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[120px] animate-pulse-subtle"></div>
            <div className="absolute top-[30%] -right-[5%] w-[450px] h-[450px] rounded-full bg-emerald-500/12 blur-[130px] animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-[10%] left-[35%] w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[100px]"></div>
            <Image
              src="/assets/hero-bg-pattern.svg"
              alt="FAMTRIX geometric tech mesh - Digital solutions in Mysuru"
              width={1440}
              height={900}
              className="w-full h-full object-cover opacity-50 mix-blend-screen"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-8 text-left motion-reveal">
                
                <div className="inline-flex max-w-full items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900/80 border border-emerald-500/30 text-emerald-400 backdrop-blur-md shadow-sm">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="truncate sm:whitespace-normal">Built in Mysuru for Startups, Businesses & Students</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                  Digital marketing and <span className="animated-gradient-text">tech solutions</span> for growing businesses
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                  <span className="text-white font-semibold">Powered by Innovation. Driven by Technology.</span><br />
                  Tailored web development, high-converting digital marketing, and automated workflows. Remote or in-person right here in Mysuru.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="#contact"
                    className="shiny-button cta-hover-lift inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-brand-secondary to-brand-primary shadow-glow-emerald"
                  >
                    <span>Get a Free Consultation</span>
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </a>

                  <a
                    href="#services"
                    className="cta-hover-lift inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-medium text-slate-200 bg-slate-900/70 border border-white/15 hover:bg-slate-800/90 hover:border-slate-300/40 hover:text-white"
                  >
                    <span>View Services</span>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  <div className="p-2 rounded-xl bg-slate-900/40 border border-white/5">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">5+</div>
                    <div className="text-xs text-slate-400 font-medium">Early Adopters</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/40 border border-white/5">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-brand-secondary">2+</div>
                    <div className="text-xs text-slate-400 font-medium">Projects in Development</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/40 border border-white/5">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-brand-primary">100%</div>
                    <div className="text-xs text-slate-400 font-medium">Client Focus</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/40 border border-white/5">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 pt-0.5">Active</div>
                    <div className="text-xs text-slate-400 font-medium">Early-Stage Startup</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative group motion-reveal delay-200">
                <div className="relative rounded-2xl overflow-hidden glass-card p-2 shadow-2xl border border-white/15 hover:border-cyan-500/40 transition-colors duration-500">
                  <Image
                    src="/assets/hero-banner.png"
                    alt="FAMTRIX digital marketing software Mysuru and AI automation services dashboard"
                    width={1536}
                    height={1024}
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                    priority
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-slate-200 font-medium">Mysuru Engineering Hub Active</span>
                    </div>
                    <span className="text-brand-glow font-mono font-semibold">Available for Q4/Q1</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tech Stack Bar */}
        <div className="border-y border-white/5 bg-slate-950/40 py-6 motion-reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6 text-slate-400 text-xs font-mono">
            <span className="uppercase tracking-widest text-slate-500">Trusted Architecture Stack:</span>
            <div className="flex flex-wrap items-center gap-8 text-sm">
              <span className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"><Atom className="w-4 h-4 text-cyan-400" /> React</span>
              <span className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"><Layers className="w-4 h-4 text-white" /> Next.js</span>
              <span className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"><Server className="w-4 h-4 text-emerald-400" /> Node.js</span>
              <span className="flex items-center gap-2 text-slate-300 hover:text-green-500 transition-colors"><Database className="w-4 h-4 text-green-500" /> MongoDB</span>
              <span className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"><Cloud className="w-4 h-4 text-amber-400" /> AWS Cloud</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2 · WHAT WE DO (With Magic UI Spotlight Hover Effect) */}
        {/* ========================================================================= */}
        <section className="py-24 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16 space-y-4 motion-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-glow border border-brand-primary/20">
                <span>2 · WHAT WE DO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Everything you need to grow online
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                End-to-end digital solutions engineered to scale early-stage ventures and empower local businesses with cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Digital Marketing */}
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="magic-card p-6 flex flex-col justify-between group motion-reveal delay-100"
              >
                <div className="space-y-4 relative z-10">
                  <div className="h-44 rounded-xl overflow-hidden bg-slate-900/80 border border-white/5 relative">
                    <Image
                      src="/assets/digital-marketing-service.png"
                      alt="Digital marketing software Mysuru - FAMTRIX campaign manager and SEO analytics for startups"
                      width={1536}
                      height={1024}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/90 text-slate-950 tracking-wide uppercase">
                      Flagship
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-glow transition-colors">
                    Digital Marketing Software for Startups
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Drive high-intent local customer traffic with our digital marketing software in Mysuru built for startups and growing enterprises. Easily manage multi-channel campaigns, automate SEO rankings, and capture conversion-ready sales leads.
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-white/5 relative z-10">
                  <a href="#featured-product" className="inline-flex items-center text-sm font-semibold text-brand-secondary hover:text-emerald-300 gap-1.5 group/link">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Card 2: AI & Automation */}
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="magic-card p-6 flex flex-col justify-between group motion-reveal delay-200"
              >
                <div className="space-y-4 relative z-10">
                  <div className="h-44 rounded-xl overflow-hidden bg-slate-900/80 border border-white/5 relative">
                    <Image
                      src="/assets/ai-automation-service.png"
                      alt="AI automation services and workflow tools for businesses by FAMTRIX Mysuru"
                      width={504}
                      height={496}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-cyan-500/90 text-slate-950 tracking-wide uppercase">
                      Productivity
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-glow transition-colors">
                    AI & Automation Services for Businesses
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Transform your operations with custom AI automation services tailored for Mysuru businesses and modern tech ventures. Eliminate repetitive manual tasks through automated customer support, instant WhatsApp response flows, and seamless CRM integrations.
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-white/5 relative z-10">
                  <a href="#contact" className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-cyan-300 gap-1.5 group/link">
                    <span>Request a quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Card 3: Full-Stack Development */}
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="magic-card p-6 flex flex-col justify-between group motion-reveal delay-300"
              >
                <div className="space-y-4 relative z-10">
                  <div className="h-44 rounded-xl overflow-hidden bg-slate-900/80 border border-white/5 relative">
                    <Image
                      src="/assets/full-stack-dev-service.png"
                      alt="Web development company Mysuru - Full-stack Next.js web applications and custom software"
                      width={503}
                      height={509}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-500/90 text-white tracking-wide uppercase">
                      Custom Code
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-glow transition-colors">
                    Full-Stack Web Development in Mysuru
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Accelerate your digital growth with a premier web development company in Mysuru building high-performance Next.js web applications, custom SaaS platforms, and MVP solutions. We engineer fast, responsive websites optimized to convert local and global traffic into paying customers.
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-white/5 relative z-10">
                  <a href="#contact" className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-cyan-300 gap-1.5 group/link">
                    <span>Request a quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Card 4: Cybersecurity */}
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="magic-card p-6 flex flex-col justify-between group motion-reveal delay-400"
              >
                <div className="space-y-4 relative z-10">
                  <div className="h-44 rounded-xl overflow-hidden bg-slate-900/80 border border-white/5 relative">
                    <Image
                      src="/assets/cybersecurity-service.png"
                      alt="Cybersecurity solutions India and cloud data protection for startups by FAMTRIX"
                      width={503}
                      height={496}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-purple-500/90 text-white tracking-wide uppercase">
                      Protection
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-glow transition-colors">
                    Cybersecurity Solutions in India
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Protect your web applications, confidential client data, and digital infrastructure with trusted cybersecurity solutions in India. We conduct thorough vulnerability audits, SSL implementations, database encryption, and DDoS defense to keep Mysuru businesses resilient against threats.
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-white/5 relative z-10">
                  <a href="#contact" className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-cyan-300 gap-1.5 group/link">
                    <span>Request a quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-300 gap-4 motion-reveal">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </span>
                <span>Also offering creative <strong>Graphic Design in Mysuru</strong> (logos, brand kits, pitch decks) and <strong>Omnichannel SEO</strong>.</span>
              </div>
              <a href="#contact" className="text-brand-glow hover:underline font-semibold whitespace-nowrap">Inquire About Custom Bundles &rarr;</a>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3 · FEATURED PRODUCT */}
        {/* ========================================================================= */}
        <section className="py-24 bg-surface-subtle/50 relative border-t border-white/5" id="featured-product">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 relative group motion-reveal">
                <div className="glass-card rounded-2xl p-2 relative shadow-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-500">
                  <Image
                    src="/assets/featured-product-showcase.png"
                    alt="FAMTRIX digital marketing software Mysuru - Live interactive marketing dashboard for local business growth"
                    width={1672}
                    height={941}
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span> Preview Interface
                    </span>
                    <span className="font-mono text-cyan-400 font-medium">Currently in Development</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 motion-reveal delay-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span>3 · FEATURED PRODUCT · COMING SOON</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  <span className="brand-accent-text">FAMTRIX Growth Suite:</span> marketing made simple
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Designed specifically for growing companies, local retail, and digital startups. Stop juggling disconnected tools—plan and manage customer conversions and local marketing from a unified hub.
                </p>

                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base">[Upcoming Feature] Multi-Platform Campaign Planning</h4>
                      <p className="text-slate-400 text-sm">Designed to schedule and coordinate social campaigns across Instagram, Google, and Meta with organized workflows.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-cyan-500/20 text-cyan-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base">[Upcoming Feature] Instant WhatsApp & Local Lead Sync</h4>
                      <p className="text-slate-400 text-sm">Route prospective customer inquiries directly to WhatsApp for prompt communication and follow-up.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-blue-500/20 text-blue-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base">[Upcoming Feature] Transparent Growth & Customer Analytics</h4>
                      <p className="text-slate-400 text-sm">Clean, jargon-free overviews tracking digital engagement, reach, and inbound customer interest.</p>
                    </div>
                  </li>
                </ul>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="shiny-button cta-hover-lift inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-slate-900 border border-brand-primary/50 hover:bg-brand-primary hover:border-brand-primary"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4 · BUILT FOR / WHO WE HELP */}
        {/* ========================================================================= */}
        <section className="py-24 relative" id="who-we-help">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 motion-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-glow border border-brand-primary/20">
                <span>4 · WHO WE HELP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Built for people starting and growing
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Whether you are launching your first venture, expanding a local Mysuru business, or kicking off your tech career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Startups */}
              <div className="glass-card rounded-2xl p-7 flex flex-col justify-between group motion-reveal delay-100">
                <div className="space-y-4">
                  <div className="h-48 rounded-xl overflow-hidden bg-slate-900/60 border border-white/5 relative">
                    <Image
                      src="/assets/who-we-help-startups.png"
                      alt="Tech solutions for startups - Fast MVP engineering by FAMTRIX Mysuru"
                      width={524}
                      height={633}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Startups</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300">Launch & Scale</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong>The problem we solve:</strong> Get your MVP from whiteboard to production in weeks, not months. Scalable cloud architectures that impress early investors.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-2 pt-2">
                    <li className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-cyan-400" /> Fast MVP delivery in 30 days</li>
                    <li className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-cyan-400" /> Conversion-focused web architectures</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                  <a href="#contact" className="text-sm font-semibold text-brand-glow hover:underline flex items-center justify-between">
                    <span>Start building with us</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Local Businesses */}
              <div className="glass-card rounded-2xl p-7 flex flex-col justify-between group motion-reveal delay-200">
                <div className="space-y-4">
                  <div className="h-48 rounded-xl overflow-hidden bg-slate-900/60 border border-white/5 relative">
                    <Image
                      src="/assets/who-we-help-businesses.png"
                      alt="Web development company Mysuru and local business marketing solutions"
                      width={522}
                      height={633}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Local Businesses</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300">Mysuru & Beyond</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong>The problem we solve:</strong> Dominate local search, drive foot traffic, and convert online visitors into loyal walk-in customers through localized marketing.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-2 pt-2">
                    <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Google Business Profile optimization</li>
                    <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Direct WhatsApp order integration</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                  <a href="#contact" className="text-sm font-semibold text-brand-secondary hover:underline flex items-center justify-between">
                    <span>Grow local sales</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Students */}
              <div className="glass-card rounded-2xl p-7 flex flex-col justify-between group motion-reveal delay-300">
                <div className="space-y-4">
                  <div className="h-48 rounded-xl overflow-hidden bg-slate-900/60 border border-white/5 relative">
                    <Image
                      src="/assets/who-we-help-students.png"
                      alt="Full-stack web development and AI automation training programs in Mysuru"
                      width={522}
                      height={633}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Students</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-500/20 text-indigo-300">Skill Development</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong>Training & project mentorship:</strong> Hands-on mentorship from working engineers. Build production-grade code, ship real apps, and gain practical training programs.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-2 pt-2">
                    <li className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-indigo-400" /> Project-based learning opportunities</li>
                    <li className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-indigo-400" /> Full-stack, AI & digital marketing tracks</li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                  <a href="#contact" className="text-sm font-semibold text-indigo-400 hover:underline flex items-center justify-between">
                    <span>Join our student programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5 · WHY FAMTRIX */}
        {/* ========================================================================= */}
        <section className="py-24 bg-surface-subtle/50 relative border-t border-white/5" id="why-famtrix">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16 space-y-4 motion-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span>5 · WHY FAMTRIX</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Why teams choose us
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                We bridge the gap between world-class engineering standards and local accessibility in Mysuru.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="glass-card rounded-2xl p-6 space-y-4 group motion-reveal delay-100">
                <div className="h-32 rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                  <Image
                    src="/assets/why-mysuru-based.png"
                    alt="FAMTRIX web development company Mysuru engineering team"
                    width={452}
                    height={315}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Local, Mysuru-based</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Easy to meet and quick to respond. No across-timezone delays—sit down with us over coffee in Mysuru anytime.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 space-y-4 group motion-reveal delay-200">
                <div className="h-32 rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                  <Image
                    src="/assets/why-one-team.png"
                    alt="Graphic design Mysuru and digital marketing software integrated team"
                    width={452}
                    height={315}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">One team</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Software, design and marketing together under one roof. No miscommunication between developers and marketers.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 space-y-4 group motion-reveal delay-300">
                <div className="h-32 rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                  <Image
                    src="/assets/why-budget-friendly.png"
                    alt="Affordable tech solutions for startups and Mysuru local businesses"
                    width={453}
                    height={315}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Affordable</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pricing that fits early-stage budgets. Transparent milestone-based payments with zero hidden agency markups.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 space-y-4 group motion-reveal delay-400">
                <div className="h-32 rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                  <Image
                    src="/assets/why-flexible-collaboration.png"
                    alt="Web development company Mysuru offering in-person and remote collaboration"
                    width={452}
                    height={315}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Remote or in person</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Work with us the way that suits you. Asynchronous Slack/Git updates, Google Meet standups, or face-to-face sessions.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6 · PROOF & RESULTS (With Magic UI Infinite Marquee) */}
        {/* ========================================================================= */}
        <section className="py-24 relative" id="proof">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16 space-y-4 motion-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-glow border border-brand-primary/20">
                <span>6 · PROOF & METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Work and results
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Proven execution through our proprietary four-stage framework and real client outcomes.
              </p>
            </div>

            {/* CCDC Framework Banner with Letter Pop-Up Motion */}
            <div className="glass-card rounded-3xl p-6 sm:p-10 mb-16 border border-brand-primary/20 motion-reveal relative overflow-hidden">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>PROVEN 4-STAGE METHODOLOGY</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    From Ideas to Impact — The <span className="text-brand-secondary">CCDC Approach</span>
                  </h3>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Our CCDC approach guides every engagement from understanding your business goals to delivering high-performance tech solutions and measurable value.
                  </p>
                  
                  {/* Interactive Animated CCDC Letters Bar */}
                  <div className="flex items-center justify-between sm:justify-start sm:gap-4 p-3 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <div className="ccdc-pop-1 flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-600/30 border border-cyan-400 text-cyan-300 font-extrabold font-mono text-xl shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer">
                        C
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">Create</span>
                    </div>

                    <div className="h-0.5 w-4 sm:w-6 bg-gradient-to-r from-cyan-500/40 to-blue-500/40"></div>

                    <div className="flex items-center gap-2">
                      <div className="ccdc-pop-2 flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/25 to-indigo-600/30 border border-blue-400 text-blue-300 font-extrabold font-mono text-xl shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer">
                        C
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">Quality</span>
                    </div>

                    <div className="h-0.5 w-4 sm:w-6 bg-gradient-to-r from-blue-500/40 to-emerald-500/40"></div>

                    <div className="flex items-center gap-2">
                      <div className="ccdc-pop-3 flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-600/30 border border-emerald-400 text-emerald-300 font-extrabold font-mono text-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] cursor-pointer">
                        D
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">Deliver</span>
                    </div>

                    <div className="h-0.5 w-4 sm:w-6 bg-gradient-to-r from-emerald-500/40 to-purple-500/40"></div>

                    <div className="flex items-center gap-2">
                      <div className="ccdc-pop-4 flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/25 to-pink-600/30 border border-purple-400 text-purple-300 font-extrabold font-mono text-xl shadow-[0_0_15px_rgba(168,85,247,0.4)] cursor-pointer">
                        C
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">Capture</span>
                    </div>
                  </div>
                  
                  {/* Detailed 4-Stage Motion Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="ccdc-card p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 group cursor-pointer">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs">C</span>
                        <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Stage 1: Creating Value</div>
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">Understand your business vision, identify opportunities, and architect the right digital solutions.</div>
                    </div>

                    <div className="ccdc-card p-4 rounded-xl bg-slate-900/80 border border-blue-500/20 group cursor-pointer">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-blue-500/20 text-blue-300 font-mono font-bold text-xs">C</span>
                        <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">Stage 2: Creating Quality</div>
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">Build reliable, high-performance systems and clean software with rigorous attention to detail.</div>
                    </div>

                    <div className="ccdc-card p-4 rounded-xl bg-slate-900/80 border border-emerald-500/20 group cursor-pointer">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs">D</span>
                        <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Stage 3: Delivering Value with Quality</div>
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">Turn concepts into impactful applications and conversion engines that drive real business growth.</div>
                    </div>

                    <div className="ccdc-card p-4 rounded-xl bg-slate-900/80 border border-purple-500/20 group cursor-pointer">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-purple-500/20 text-purple-300 font-mono font-bold text-xs">C</span>
                        <div className="text-xs font-bold text-purple-300 uppercase tracking-wider">Stage 4: Capturing Highlights</div>
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">Measure success, track conversion metrics, showcase key wins, and scale your brand to new heights.</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    <Image
                      src="/assets/approach-ccdc-framework.png"
                      alt="The FAMTRIX CCDC Framework - AI automation services and web development methodology"
                      width={1672}
                      height={941}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Case Study Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              
              <div className="glass-card rounded-2xl p-5 space-y-4 group motion-reveal delay-100">
                <div className="h-48 rounded-xl overflow-hidden bg-slate-900 relative">
                  <Image
                    src="/assets/digital-marketing-service.png"
                    alt="Digital marketing software Mysuru case study: 310% lead increase for retail business"
                    width={1536}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 text-slate-300 border border-white/10 text-[10px] font-semibold uppercase tracking-wider">
                    Proof of Concept
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/80 text-emerald-400 font-mono text-xs font-bold">
                    Goal: +310% Leads
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-primary uppercase tracking-wider mb-1">E-Commerce & Retail</div>
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-glow transition-colors">Mysuru Heritage Silk Store</h4>
                  <p className="text-slate-400 text-xs mt-1">Conceptual blueprint transforming local offline retail into an omnichannel e-commerce presence with WhatsApp checkout integration.</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 space-y-4 group motion-reveal delay-200">
                <div className="h-48 rounded-xl overflow-hidden bg-slate-900 relative">
                  <Image
                    src="/assets/full-stack-dev-service.png"
                    alt="Web development company Mysuru case study: EduMatrix platform serving 12,000+ students"
                    width={503}
                    height={509}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 text-slate-300 border border-white/10 text-[10px] font-semibold uppercase tracking-wider">
                    Proof of Concept
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/80 text-cyan-400 font-mono text-xs font-bold">
                    Target: 10,000+ Users
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">EdTech SaaS</div>
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-glow transition-colors">EduMatrix Learning Platform</h4>
                  <p className="text-slate-400 text-xs mt-1">Architecture prototype for a real-time test prep and student assessment portal with Next.js, Node.js, and serverless infrastructure.</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 space-y-4 group motion-reveal delay-300">
                <div className="h-48 rounded-xl overflow-hidden bg-slate-900 relative">
                  <Image
                    src="/assets/ai-automation-service.png"
                    alt="AI automation services case study: 85% manual time saved for Karnataka supply chain"
                    width={504}
                    height={496}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 text-slate-300 border border-white/10 text-[10px] font-semibold uppercase tracking-wider">
                    Proof of Concept
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/80 text-purple-400 font-mono text-xs font-bold">
                    Designed for: -85% Time
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">AI Automation</div>
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-glow transition-colors">Karnataka Agri-Supply Chain</h4>
                  <p className="text-slate-400 text-xs mt-1">Workflow automation framework designed for synchronized inventory tracking and automated notification pipelines.</p>
                </div>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* REVIEWS & TESTIMONIALS SECTION (HIDDEN BY REQUEST - READY TO ACTIVATE) */}
            {/* ========================================================================= */}
            {/* To activate, remove 'false &&' below */}
            {false && (
            <div className="space-y-6 motion-reveal">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>What Mysuru Founders & Leaders Say About FAMTRIX</span>
                </div>
                <span className="text-xs text-slate-500 font-mono hidden sm:inline">Hover to pause flow</span>
              </div>

              <div className="relative overflow-hidden marquee-mask group py-2">
                <div className="flex w-max space-x-6 animate-marquee group-hover:[animation-play-state:paused]">
                  
                  <div className="w-[380px] sm:w-[420px] shrink-0 glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                    </div>
                    <p className="text-sm text-slate-200 italic leading-relaxed">
                      &ldquo;FAMTRIX completely revamped our digital presence. Having a dedicated tech team here in Mysuru that understands software and marketing made all the difference. Inquiries grew by 300% in 90 days.&rdquo;
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-secondary to-brand-primary flex items-center justify-center font-bold text-slate-950 text-xs">
                        RK
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Rohit Kumar</div>
                        <div className="text-xs text-slate-400">Founder & CEO, Mysuru TechVentures</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[380px] sm:w-[420px] shrink-0 glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                    </div>
                    <p className="text-sm text-slate-200 italic leading-relaxed">
                      &ldquo;The direct WhatsApp lead integration they built skyrocketed our weekend walk-ins and phone orders. We get instant notifications the second someone browses our store catalog.&rdquo;
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs">
                        AR
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Ananya Rao</div>
                        <div className="text-xs text-slate-400">Owner, Mysore Silk & Crafts</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[380px] sm:w-[420px] shrink-0 glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                    </div>
                    <p className="text-sm text-slate-200 italic leading-relaxed">
                      &ldquo;Outstanding cybersecurity audit and patient scheduling web application. Highly responsive, transparent with billing, and physically available for meetings in Saraswathipuram.&rdquo;
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
                        VH
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Dr. Vikram Hegde</div>
                        <div className="text-xs text-slate-400">Managing Director, Hegde Wellness Clinics</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[380px] sm:w-[420px] shrink-0 glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                    </div>
                    <p className="text-sm text-slate-200 italic leading-relaxed">
                      &ldquo;The internship at FAMTRIX gave me practical experience on real client Next.js and AWS projects. That portfolio directly helped me crack my dream frontend role right after college.&rdquo;
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center font-bold text-slate-950 text-xs">
                        DG
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Darshan Gowda</div>
                        <div className="text-xs text-slate-400">Alumnus, NIE Mysuru & Software Engineer</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7 · LEAD MAGNET */}
        {/* ========================================================================= */}
        <section className="py-20 relative overflow-hidden" id="lead-magnet">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 shadow-2xl motion-reveal">
              
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                <div className="lg:col-span-7 space-y-3 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <Gift className="w-3.5 h-3.5" />
                    <span>7 · COMPLIMENTARY LOCAL BUSINESS RESOURCE</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                    Free marketing checklist for local businesses
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    The exact 25-point digital checklist we use to audit Google Business Profiles, website speed, local SEO, and WhatsApp conversion funnels in Mysuru. Instant PDF download.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                      <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="Your email address"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={leadStatus !== 'idle'}
                        className={`shiny-button cta-hover-lift px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap flex items-center justify-center gap-2 ${
                          leadStatus === 'success'
                            ? 'bg-emerald-600 text-white'
                            : 'text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-glow-emerald active:scale-98'
                        }`}
                      >
                        {leadStatus === 'loading' && <span>Sending...</span>}
                        {leadStatus === 'success' && <span>Downloaded ✓</span>}
                        {leadStatus === 'idle' && (
                          <>
                            <span>Download Free</span>
                            <Download className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center justify-between gap-1.5 flex-wrap">
                      {leadStatus === 'success' ? (
                        <span className="text-emerald-400 font-semibold">
                          Checklist successfully sent to <strong>{leadEmail}</strong>.
                        </span>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Zero spam. We respect your inbox privacy.</span>
                        </div>
                      )}
                      <Link href="/checklist" className="text-brand-glow hover:underline font-semibold flex items-center gap-1">
                        <span>Dedicated Page</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8 · ABOUT US */}
        {/* ========================================================================= */}
        <section className="py-24 bg-surface-subtle/50 relative border-t border-white/5" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative group motion-reveal">
                <div className="glass-card rounded-2xl p-2 relative shadow-2xl border border-white/10 overflow-hidden hover:border-emerald-500/40 transition-colors duration-500">
                  <Image
                    src="/assets/founder-afrid.jpg"
                    alt="Afrid - Founder & Lead Developer at FAMTRIX - Web development company Mysuru"
                    width={720}
                    height={720}
                    className="w-full h-80 sm:h-96 object-cover object-top rounded-xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                    <h3 className="text-base font-bold text-white">Afrid</h3>
                    <p className="text-xs font-mono text-brand-secondary font-semibold">Founder & Lead Developer</p>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">Dedicated to building modern, accessible digital technology solutions that help Mysuru businesses scale and succeed.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 motion-reveal delay-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-glow border border-brand-primary/20">
                  <span>8 · ABOUT US · OUR ORIGIN</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  The story behind Famtrix
                </h2>

                <div className="inline-block px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold tracking-wide">
                  ✦ Three Cousins · One Vision · Beyond the Comfort Zone
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  It all started with a shared spark between three cousins who refused to settle for the ordinary. Stepping boldly out of their comfort zones, they dreamed of creating something truly outstanding—an elite tech collective built on trust, innovation, and passion.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  FAMTRIX was born to empower the young generation. In a fast-evolving digital era, we saw ambitious students, creators, and homegrown businesses held back by lack of modern tech guidance and inflated agency barriers. We set out to change that—putting high-caliber modern web engineering, AI workflow automation, and result-oriented digital marketing right into their hands.
                </p>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Rooted in Mysuru with world-class standards, our mission is simple yet powerful: enhance young minds, elevate local businesses with modern technology, and prove that authentic dreams, powered by grit and brotherhood, create extraordinary impact.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors">
                    <div className="text-xl font-bold text-white font-mono">3 Cousins</div>
                    <div className="text-xs text-slate-400">One Shared Vision</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <div className="text-xl font-bold text-brand-secondary font-mono">Comfort Zone: 0</div>
                    <div className="text-xs text-slate-400">Achieving the Outstanding</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/30 transition-colors">
                    <div className="text-xl font-bold text-cyan-400 font-mono">Youth Tech</div>
                    <div className="text-xs text-slate-400">Empowering Next-Gen</div>
                  </div>
                </div>

                <div className="pt-2">
                  <a href="#contact" className="inline-flex items-center text-sm font-semibold text-brand-glow hover:text-white gap-2 group">
                    <span>Connect with our founding team</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9 · RESOURCES / BLOG */}
        {/* ========================================================================= */}
        <section className="py-24 relative" id="blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4 motion-reveal">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-glow border border-brand-primary/20">
                  <span>9 · RESOURCES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  From the blog
                </h2>
                <p className="text-slate-400 text-base sm:text-lg">
                  Tactical insights, practical blueprints, and technology frameworks curated for Mysuru entrepreneurs and builders.
                </p>
              </div>
              <a href="#contact" className="text-sm font-semibold text-brand-secondary hover:underline flex items-center gap-1">
                <span>View all articles</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <article className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between motion-reveal delay-100">
                <div>
                  <div className="h-48 overflow-hidden bg-slate-900 relative">
                    <Image
                      src="/assets/digital-marketing-service.png"
                      alt="Digital marketing software Mysuru tips and local SEO growth guide"
                      width={1536}
                      height={1024}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 text-emerald-400">
                      Local Growth
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 flex items-center gap-3">
                      <span>5 min read</span>
                      <span>•</span>
                      <span>November 2026</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-glow transition-colors leading-snug">
                      Digital marketing tips for Mysuru businesses
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      How local retail and service providers in Mysuru can capture high-intent Google Maps searches and convert traffic directly on WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <a href="#contact" className="text-xs font-semibold text-brand-glow hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>

              <article className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between motion-reveal delay-200">
                <div>
                  <div className="h-48 overflow-hidden bg-slate-900 relative">
                    <Image
                      src="/assets/featured-product-showcase.png"
                      alt="Tech solutions for startups - Customer acquisition and digital growth guide"
                      width={1672}
                      height={941}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 text-cyan-400">
                      Early Stage
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 flex items-center gap-3">
                      <span>7 min read</span>
                      <span>•</span>
                      <span>November 2026</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-glow transition-colors leading-snug">
                      How to get your first 100 customers online
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      A step-by-step playbook for bootstrap founders: defining your core value proposition, cold outbound, and low-budget hyper-targeted Meta ads.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <a href="#contact" className="text-xs font-semibold text-brand-glow hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>

              <article className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between motion-reveal delay-300">
                <div>
                  <div className="h-48 overflow-hidden bg-slate-900 relative">
                    <Image
                      src="/assets/full-stack-dev-service.png"
                      alt="Web development company Mysuru insights on modern Next.js tech stacks for 2026"
                      width={503}
                      height={509}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 text-purple-400">
                      Engineering
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 flex items-center gap-3">
                      <span>6 min read</span>
                      <span>•</span>
                      <span>November 2026</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-glow transition-colors leading-snug">
                      Choosing the right tech stack for your 2026 web app
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Why pairing Next.js with serverless microservices and automated security posture prevents costly rewrites as your customer base scales.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <a href="#contact" className="text-xs font-semibold text-brand-glow hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10 · CONTACT SECTION */}
        {/* ========================================================================= */}
        <section className="py-24 bg-surface-subtle/60 relative border-t border-white/5" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-5 space-y-8 motion-reveal">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span>10 · CONTACT</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    Let us talk about your project
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Have an idea, need software built, or want to supercharge your digital sales? Reach out directly or drop us a line below.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  
                  <a href="mailto:contact@famtrix.in" className="glass-card cta-hover-lift rounded-xl p-4 flex items-center gap-4 hover:border-brand-primary/50 group block">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Email Us Directly</div>
                      <div className="text-base font-bold text-white font-mono group-hover:text-brand-glow transition-colors">
                        contact@famtrix.in
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+918317477430"
                    className="glass-card cta-hover-lift rounded-xl p-4 flex items-center gap-4 hover:border-cyan-500/50 group block"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Direct Phone Call</div>
                      <div className="text-base font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">
                        +91 8317477430
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918317477430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card cta-hover-lift rounded-xl p-4 flex items-center gap-4 hover:border-emerald-500/50 group block"
                  >
                    <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">WhatsApp Support</div>
                      <div className="text-base font-bold text-emerald-400 font-mono group-hover:underline">
                        Chat on WhatsApp
                      </div>
                    </div>
                  </a>

                  <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Location</div>
                      <div className="text-base font-bold text-white">
                        Mysuru, Karnataka, India
                      </div>
                    </div>
                  </div>

                </div>

                {/* GOOGLE MAP EMBED (HIDDEN FOR NOW - READY TO ACTIVATE ON USER REQUEST) */}
                {false && (
                <div className="rounded-2xl overflow-hidden glass-card p-1 border border-white/10 shadow-lg">
                  <div className="h-56 sm:h-64 w-full rounded-xl overflow-hidden relative">
                    <iframe
                      title="FAMTRIX Mysuru Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124738.4539824203!2d76.56564906566418!3d12.31063544607755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89e64f4684c83f!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                      allowFullScreen={false}
                      loading="lazy"
                    ></iframe>
                    <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>Office visits by appointment in Mysuru</span>
                    </div>
                  </div>
                </div>
                )}

                {/* Direct Consultation & Working Hours Card */}
                <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Direct Consultation & Support</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Based in Mysuru, Karnataka. Available for local in-person strategy sessions or instant virtual consultations worldwide.
                  </p>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                    <span className="text-emerald-400 font-semibold">Fast WhatsApp Reply</span>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-7 motion-reveal delay-200">
                <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative">
                  <div className="mb-6 space-y-1">
                    <h3 className="text-2xl font-bold text-white">Send Us a Direct Message</h3>
                    <p className="text-slate-400 text-sm">We typically respond within 2 to 4 business hours.</p>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Service Needed <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="contact-service"
                        required
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="digital-marketing">Digital Marketing & Growth</option>
                        <option value="full-stack-development">Full-Stack Web & App Development</option>
                        <option value="ai-automation">AI & Workflow Automation</option>
                        <option value="cybersecurity">Cybersecurity Audit & Protection</option>
                        <option value="graphic-design">Graphic Design & Brand Kit</option>
                        <option value="student-training">Student Training / Project-Based Learning</option>
                        <option value="other">Other Inquiry / Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Tell us about your project goals, timeline, or requirements..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={contactStatus !== 'idle'}
                      className={`shiny-button cta-hover-lift w-full py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                        contactStatus === 'success'
                          ? 'bg-emerald-600'
                          : 'bg-gradient-to-r from-brand-primary to-brand-primary-deep shadow-glow-button'
                      }`}
                    >
                      {contactStatus === 'loading' && <span>Sending Inquiry...</span>}
                      {contactStatus === 'success' && <span>Message Sent ✓</span>}
                      {contactStatus === 'idle' && (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {contactStatus === 'success' && (
                      <div className="p-4 rounded-xl text-sm font-medium bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                        Thank you, <strong>{contactForm.name}</strong>! Your message has been received. Our team will contact you at <strong>{contactForm.email}</strong> or on WhatsApp shortly.
                      </div>
                    )}
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* 11 · FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="inline-block" aria-label="FAMTRIX Home">
                <Image
                  src="/assets/famtrix-logo.png"
                  alt="FAMTRIX - Digital marketing software & web development company Mysuru"
                  width={694}
                  height={211}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </a>
              <p className="text-slate-300 text-sm max-w-sm">
                Powered by Innovation. Driven by Technology.
              </p>
              <p className="text-xs text-slate-500 max-w-sm">
                Providing high-impact technology solutions, custom web software, and AI automation for startups and businesses across Mysuru, Karnataka, and worldwide.
              </p>
              
              <div className="pt-2 text-xs space-y-1.5 font-mono">
                <div>Email: <a href="mailto:contact@famtrix.in" className="text-slate-200 hover:text-brand-glow">contact@famtrix.in</a></div>
                <div>Phone: <a href="tel:+918317477430" className="text-slate-200 hover:text-brand-glow">+91 8317477430</a></div>
                <div>WhatsApp: <a href="https://wa.me/918317477430" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Chat on WhatsApp</a></div>
                <div>Location: Mysuru, Karnataka, India</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#proof" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-white transition-colors">Marketing Software</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Full-Stack Web Apps</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI & Workflow Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cybersecurity Audits</a></li>
                <li><a href="#who-we-help" className="hover:text-white transition-colors">Student Mentorship</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Connect</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="https://www.linkedin.com/in/famtrix" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/918317477430" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 text-emerald-400">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp: 8317477430</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 FAMTRIX. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 text-center sm:text-right">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <span>•</span>
              <span>Made with pride in Mysuru</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Quick-Trigger Chat Bar - Slight Right in Motion Style */}
      <div className="fixed bottom-6 right-5 sm:bottom-7 sm:right-7 z-50">
        <a
          href="https://wa.me/918317477430?text=Hello%20FAMTRIX%2C%20I%20visited%20your%20website%20and%20want%20to%20know%20more."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat with FAMTRIX"
          className="whatsapp-motion-bar group flex items-center gap-3 pl-3.5 pr-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 font-bold text-sm shadow-[0_10px_25px_-5px_rgba(16,185,129,0.55)] border border-emerald-300/40 hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.75)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/20 text-slate-950">
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
          </div>
          <div className="flex flex-col text-left leading-tight pr-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-950/80">Need Help?</span>
            <span className="text-xs font-extrabold text-slate-950">Chat on WhatsApp</span>
          </div>
        </a>
      </div>

    </div>
  );
}
