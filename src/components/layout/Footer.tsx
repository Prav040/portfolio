'use client';

import { useLanguage } from '@/lib/LanguageContext';

export function Footer() {
  const { content, language } = useLanguage();
  return (
    <footer className="py-8 border-t border-white/5 bg-[#030305]/50 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} {content.personal.name}. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
        </p>
        <p className="text-slate-500 text-xs mt-2">
          {language === 'de' 
            ? 'Entworfen mit Premium Glassmorphismus & Erstellt mit Next.js + Tailwind CSS + Framer Motion' 
            : 'Designed with Premium Glassmorphism & Built with Next.js + Tailwind CSS + Framer Motion'}
        </p>
      </div>
    </footer>
  );
}
