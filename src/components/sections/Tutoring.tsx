'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowUpRight } from 'lucide-react';

export function Tutoring() {
  const { content } = useLanguage();
  return (
    <section id="tutoring" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">{content.ui.sections.tutoring.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{content.ui.sections.tutoring.title2}</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl">{content.ui.sections.tutoring.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {content.tutoring.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{item.role}</h3>
                      <p className="text-blue-400 text-sm font-medium mt-1">{item.organization}</p>
                    </div>
                    <span className="text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-slate-300 text-sm flex gap-3 items-start">
                        <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                        <span className="leading-relaxed opacity-90">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative h-full min-h-[300px] rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-blue-900/40 to-slate-900/80 backdrop-blur-xl flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030305]/50 to-[#030305]" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-500">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">PadMath</h3>
              <p className="text-cyan-100/80 mb-8 max-w-sm mx-auto">
                {content.ui.sections.tutoring.description}
              </p>
              
              <a 
                href="https://padmath.de/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                {content.ui.sections.tutoring.cta}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
