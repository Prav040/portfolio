'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { Folder, ArrowUpRight, X } from 'lucide-react';
import { ContentType } from '@/data/content';

type Project = ContentType['projects'][0];

export function Projects() {
  const { content, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">{content.ui.sections.projects.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{content.ui.sections.projects.title2}</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {content.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <GlassCard 
                onClick={() => setSelectedProject(project)}
                className="h-full flex flex-col group cursor-pointer hover:bg-white/5 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <Folder size={28} />
                  </div>
                  <ArrowUpRight size={24} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm font-mono text-cyan-500/80 mb-4">{project.period}</p>
                
                <ul className="text-slate-400 text-sm space-y-2 flex-grow mb-6">
                  {project.details.slice(0, 3).map((detail, i) => (
                    <li key={i} className="line-clamp-2" title={detail}>
                      • {detail}
                    </li>
                  ))}
                  {project.details.length > 3 && (
                    <li className="text-blue-500/80 italic">{language === 'de' ? '...mehr anzeigen' : '...show more'}</li>
                  )}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative custom-scrollbar"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                    <Folder size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">{selectedProject.title}</h3>
                    <p className="text-cyan-400 text-sm mt-1">{selectedProject.period}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {selectedProject.longDescription && (
                    <div className="text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                      {selectedProject.longDescription}
                    </div>
                  )}

                  <div>
                    <h4 className="text-white font-medium mb-3">{language === 'de' ? 'Wichtige Aspekte & Technologien' : 'Key Highlights & Technologies'}</h4>
                    <ul className="space-y-3">
                      {selectedProject.details.map((detail, i) => (
                        <li key={i} className="text-slate-400 text-sm flex gap-3 items-start">
                          <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
