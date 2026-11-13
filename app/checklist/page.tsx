'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Check,
  FileText,
  User,
  Mail,
  Download,
  Lock,
  ArrowLeft,
  ArrowRight,
  FileDown,
  ArrowDown,
} from 'lucide-react';

export default function ChecklistLandingPage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  useEffect(() => {
    if (!isSubmitted) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, router]);

  return (
    <div className="relative min-h-screen bg-[#050814] text-slate-100 font-sans selection:bg-brand-secondary selection:text-slate-950 flex flex-col justify-between overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-emerald-500/15 blur-[140px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[550px] h-[550px] rounded-full bg-cyan-500/15 blur-[140px]"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/hero-bg-pattern.svg" alt="" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
      </div>

      {/* Minimal Header (No full nav links) */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" title="Return to FAMTRIX Homepage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/famtrix-logo.png" alt="FAMTRIX Techno Solutions" className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </header>

      {/* Main Centered Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-5xl w-full">
          
          {!isSubmitted ? (
            <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FREE 2026 EDITION • 25-POINT ACTION PLAN</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] text-white">
                    Get the Free Marketing Checklist for <span className="animated-gradient-text">Local Businesses</span>
                  </h1>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Stop guessing how to grow in Mysuru. This step-by-step PDF roadmap shows you exactly how to rank #1 on Google Maps, capture direct WhatsApp orders, and generate qualified local leads on a bootstrapped budget.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">Google Maps & Local SEO:</strong> 7 tweaks to outrank competitors in Mysuru search results.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-full bg-cyan-500/20 text-cyan-400 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">WhatsApp Conversion Funnel:</strong> Convert mobile website visitors into direct chats in seconds.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-full bg-blue-500/20 text-blue-400 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">Low-Budget Ad Blueprint:</strong> How to test hyper-targeted local ads without wasting money.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-full bg-purple-500/20 text-purple-400 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-white">Website Speed & Trust Score:</strong> Critical fixes to prevent customers from leaving your site.
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-cyan-600 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white font-bold">RK</div>
                      <div className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white font-bold">AR</div>
                      <div className="w-7 h-7 rounded-full bg-purple-600 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white font-bold">VH</div>
                    </div>
                    <span>Downloaded by <strong>150+</strong> business owners and founders in Mysuru</span>
                  </div>
                </div>

                {/* Right Column: Visual Preview & Form */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950/80 shadow-2xl group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/digital-marketing-service.png"
                      alt="FAMTRIX Marketing Checklist Preview"
                      className="w-full h-44 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/90 text-slate-950 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 shadow-md">
                        <FileText className="w-3.5 h-3.5" />
                        <span>25-Point Checklist (PDF)</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 font-mono text-[11px] border border-white/10">
                        Instant Download
                      </span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/10">
                    <div className="mb-4">
                      <h2 className="text-base font-bold text-white">Where should we send your free checklist?</h2>
                      <p className="text-xs text-slate-400 mt-0.5">Enter your email for immediate PDF access.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="user-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="user-name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="user-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-emerald-400">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            id="user-email"
                            required
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            placeholder="e.g. rahul@business.com"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-900 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all font-medium"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="shiny-button w-full py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] shadow-glow-button flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Preparing Download...</span>
                        ) : (
                          <>
                            <span>Download Free Checklist</span>
                            <Download className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                        <Lock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>100% Free • No Spam Guarantee • One-Click Unsubscribe</span>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            /* Thank You & Redirect State */
            <div className="glass-card rounded-3xl p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center shadow-glow-emerald">
                <Check className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Your Checklist is Ready!</h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  We have dispatched the <strong className="text-white">25-Point Marketing Checklist</strong> to{' '}
                  <span className="text-emerald-400 font-semibold font-mono">{userEmail}</span>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 text-left flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <FileDown className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">FAMTRIX_Marketing_Checklist_2026.pdf</div>
                    <div className="text-xs text-slate-400 font-mono">Size: 2.4 MB • Complete Action Blueprint</div>
                  </div>
                </div>
                <button
                  onClick={() => alert('Starting your download for FAMTRIX Marketing Checklist 2026...')}
                  className="px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs whitespace-nowrap flex items-center gap-1.5 transition-colors"
                >
                  <span>Download</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-4 space-y-3">
                <div className="text-sm text-slate-400">
                  Redirecting you back to the FAMTRIX homepage in{' '}
                  <strong className="text-white font-mono text-base">{countdown}</strong> seconds...
                </div>

                <div>
                  <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-brand-glow hover:underline font-semibold">
                    <span>Click here if you are not redirected automatically</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-6 px-4 border-t border-white/5 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 FAMTRIX. All rights reserved. • Built with pride in Mysuru, India.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Email: <a href="mailto:contact@famtrix.in" className="hover:text-white">contact@famtrix.in</a></span>
            <span>•</span>
            <span>WhatsApp: <a href="https://wa.me/918317477430" className="hover:text-emerald-400">8317477430</a></span>
          </div>
        </div>
      </footer>

    </div>
  );
}
