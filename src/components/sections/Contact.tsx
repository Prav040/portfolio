'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  const { content, language } = useLanguage();
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{content.ui.sections.contact.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{content.ui.sections.contact.title2}</span></h2>
          <p className="text-lg text-slate-400 mb-12">
            {content.ui.sections.contact.description}
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a href={`mailto:${content.personal.email}`} className="group">
              <GlassCard className="flex flex-col items-center justify-center p-6 hover:border-blue-500/50 transition-colors h-full">
                <Mail className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-sm text-slate-400 mt-1">{content.personal.email}</p>
              </GlassCard>
            </a>
            
            <a href={content.personal.linkedin} target="_blank" rel="noreferrer" className="group">
              <GlassCard className="flex flex-col items-center justify-center p-6 hover:border-blue-500/50 transition-colors h-full">
                <svg className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                <h3 className="text-white font-medium">LinkedIn</h3>
                <p className="text-sm text-slate-400 mt-1">{language === 'de' ? 'Profil' : 'Profile'}</p>
              </GlassCard>
            </a>
            
            <a href={`tel:${content.personal.phone.replace(/\s/g, '')}`} className="group">
              <GlassCard className="flex flex-col items-center justify-center p-6 hover:border-blue-500/50 transition-colors h-full">
                <Phone className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-sm text-slate-400 mt-1">{content.personal.phone}</p>
              </GlassCard>
            </a>
          </div>
          
          <Button variant="primary" onClick={() => window.location.href = `mailto:${content.personal.email}`}>
            {content.ui.sections.contact.getInTouch}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
