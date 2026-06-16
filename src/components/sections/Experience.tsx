'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { GlassCard } from '@/components/ui/GlassCard';

export function Experience() {
  const { content } = useLanguage();
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">{content.ui.sections.experience.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{content.ui.sections.experience.title2}</span></h2>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {content.experience.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#030305] shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] py-2"
              >
                <GlassCard className="hover:border-blue-500/30">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-6 gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">{exp.role}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-slate-300 text-sm flex gap-3 items-start">
                        <span className="text-blue-500 mt-0.5 shrink-0">▹</span>
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
