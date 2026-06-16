'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: content.ui.nav.about },
    { href: "#skills", label: content.ui.nav.skills },
    { href: "#experience", label: content.ui.nav.experience },
    { href: "#tutoring", label: content.ui.sections.tutoring.navTitle },
    { href: "#projects", label: content.ui.nav.projects }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-[#030305]/80 py-4 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter z-50">
          Praveen<span className="text-blue-500">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
          ))}
        </div>
        
        <div className="flex items-center gap-4 z-50">
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
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#030305]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-4"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-blue-500/50 bg-blue-500/10 px-6 py-3 text-sm font-medium text-white transition-colors mt-4"
              >
                {content.ui.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
