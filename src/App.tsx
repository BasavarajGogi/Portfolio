import React, { useState, useEffect, useRef } from 'react';
import { AutomotiveCanvas } from './components/Scene/AutomotiveCanvas';
import { LoadingScreen } from './components/UI/LoadingScreen';
import { Navbar } from './components/UI/Navbar';
import { ScrollTelemetry } from './components/UI/ScrollTelemetry';
import { CustomCursor } from './components/UI/CustomCursor';
import { Footer } from './components/UI/Footer';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';

import { useReducedMotion } from './hooks/useReducedMotion';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const mainContainerRef = useRef<HTMLDivElement>(null);

  // Scroll position listener for driving telemetry & camera interpolation
  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight <= 0) return;

      const currentScroll = Math.max(0, window.scrollY);
      const progress = Math.min(1, currentScroll / totalScrollHeight);
      setScrollProgress(progress);

      // Identify active section index based on scroll offset
      const sections = ['hero', 'about', 'education', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
      let currentIdx = 0;

      sections.forEach((id, idx) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= 0) {
            currentIdx = idx;
          }
        }
      });

      setActiveSectionIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToSection = (index: number) => {
    const sections = ['hero', 'about', 'education', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
    const targetId = index === -1 ? 'hero' : sections[index];
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <div ref={mainContainerRef} className="relative min-h-screen bg-[#0D0F12] text-white">
      {/* Interactive Custom Reticle Cursor */}
      <CustomCursor />

      {/* Startup Telemetry Loading Screen */}
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Persistent Three.js Vehicle Canvas Background */}
          <AutomotiveCanvas
            scrollProgress={scrollProgress}
            activeSectionIndex={activeSectionIndex}
            prefersReducedMotion={prefersReducedMotion}
            isEngineActive={true}
          />

          {/* Sticky Automotive Dashboard Header */}
          <Navbar
            activeSectionIndex={activeSectionIndex}
            onNavigate={handleNavigateToSection}
          />

          {/* Right Odometer & Telemetry Indicator */}
          <ScrollTelemetry
            scrollProgress={scrollProgress}
            activeSectionIndex={activeSectionIndex}
          />

          {/* Foreground Scrollable Content Sections */}
          <main className="relative z-10">
            <Hero onNavigateToProjects={() => handleNavigateToSection(3)} />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Certifications />
            <Achievements />
            <Contact />
          </main>

          {/* Footer Bar */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
