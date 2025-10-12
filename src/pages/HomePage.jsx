// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import ExperienceSection from '../components/ExperienceSection';
import PortfolioPreview from '../components/PortfolioPreview';
import { TypeAnimation } from 'react-type-animation';
import { Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// HeroSection Component
function HeroSection() {
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh] text-center relative bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none " style={{ animationDelay: '0.1s' }}>
            Hi, I am <span className="gradient-text">Zimeng Yan</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl " style={{ animationDelay: '0.5s' }}>
            Art, motion and voice - a decade of practice, curiosity and care
          </p>
          <div className="flex gap-4 mt-8 " style={{ animationDelay: '0.9s' }}>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const location = useLocation();

  // Handle scrolling when landing on "/#section"
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <HeroSection />

      {/* About me/Art/Dance/Speeches */}
      <PortfolioPreview />

      {/* My Journey / Experiences */}
      <section id="experiences" className="scroll-mt-24">
        <ExperienceSection />
      </section>
    </div>
  );
}

export default HomePage;