'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-[#030305]/80 py-4 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter">
          Praveen<span className="text-blue-500">.</span>
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">{content.ui.nav.about}</a>
          <a href="#skills" className="hover:text-white transition-colors">{content.ui.nav.skills}</a>
          <a href="#experience" className="hover:text-white transition-colors">{content.ui.nav.experience}</a>
          <a href="#tutoring" className="hover:text-white transition-colors">{content.ui.sections.tutoring.navTitle}</a>
          <a href="#projects" className="hover:text-white transition-colors">{content.ui.nav.projects}</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1 bg-white/5 hover:bg-white/10"
            aria-label="Toggle Language"
          >
            {language === 'de' ? 'EN' : 'DE'}
          </button>
          <a 
            href="#contact" 
            className="hidden md:inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/10 transition-colors"
          >
            {content.ui.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
