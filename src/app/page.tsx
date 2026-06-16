import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Tutoring } from '@/components/sections/Tutoring';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { Scene } from '@/components/3d/Scene';

export default function Home() {
  return (
    <>
      <Scene />
      <Navbar />
      <main className="relative z-10 flex flex-col gap-8 md:gap-16">
        <Hero />
        <Skills />
        <Experience />
        <Tutoring />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
