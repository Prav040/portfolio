'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/LanguageContext';

export function Hero() {
  const { content, language } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="about">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {language === 'de' ? 'Verfügbar für neue Möglichkeiten' : 'Available for new opportunities'}
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            {content.ui.hero.greeting} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {content.personal.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
            {content.personal.role}
          </h2>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mt-2">
            {content.personal.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              {content.ui.hero.viewProjects}
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {content.ui.hero.contactMe}
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex justify-center items-center mt-12 lg:mt-0"
        >
          {/* Photo Container */}
          <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl z-10 group">
            {/* 
              Instructing user via fallback. 
              The actual image is expected at /assets/photo/profile.jpg 
            */}
            <img 
              src="/assets/photo/profile.jpg" 
              alt={content.personal.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"; 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/20 to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 backdrop-blur border border-blue-500/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-200">{content.personal.location}</span>
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -right-4 top-16 md:-right-8 md:top-24 bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-xl z-20"
          >
            <span className="font-display font-bold text-2xl text-blue-400">AI</span>
            <p className="text-xs text-slate-400 font-medium">Consulting</p>
          </motion.div>
          
          <motion.div 
            animate={{ y: [15, -15, 15] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 bottom-24 md:-left-12 md:bottom-32 bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-xl z-20"
          >
            <span className="font-display font-bold text-2xl text-cyan-400">Data</span>
            <p className="text-xs text-slate-400 font-medium">Analytics</p>
          </motion.div>

          {/* Background orbital ring */}
          <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.2] -z-0" />
          <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.5] -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
