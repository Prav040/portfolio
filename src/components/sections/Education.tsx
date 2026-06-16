'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { GlassCard } from '@/components/ui/GlassCard';

export function Education() {
  const { content } = useLanguage();
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-4">{content.ui.sections.education.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{content.ui.sections.education.title2}</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {content.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <GlassCard className="h-full border-t-4 border-t-blue-500/50 hover:border-t-cyan-400">
                <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">{edu.period}</div>
                <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mb-6">{edu.institution}</p>
                
                <ul className="space-y-3 text-sm text-slate-300">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-500 shrink-0">·</span>
                      <span className="leading-relaxed opacity-90">{detail}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
