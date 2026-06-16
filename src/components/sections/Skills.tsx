'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { GlassCard } from '@/components/ui/GlassCard';

export function Skills() {
  const { content } = useLanguage();
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-4">{content.ui.sections.skills.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{content.ui.sections.skills.title2}</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{content.ui.sections.skills.subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {content.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-200 text-sm font-medium hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors cursor-default">
                {skill}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {content.languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <GlassCard className="text-center p-6 flex flex-col items-center justify-center h-full">
                <h3 className="text-xl font-bold text-white mb-2">{lang.name}</h3>
                <p className="text-blue-400 text-sm">{lang.level}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
