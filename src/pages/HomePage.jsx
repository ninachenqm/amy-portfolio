// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
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
          <div className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl min-h-[60px] md:min-h-[30px] " style={{ animationDelay: '0.3s' }}>
            <TypeAnimation sequence={['Dancer', 1500, 'Artist', 1500, 'Gymnast', 1500, 'Pre-Med Student', 1500]} wrapper="span" speed={50} repeat={Infinity} className="font-semibold" />
          </div>
          <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl " style={{ animationDelay: '0.5s' }}>
            Explore my dance moments, artistic creations and wonderful expressions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 " style={{ animationDelay: '0.7s' }}>
            <a href="#about" onClick={(e) => smoothScrollTo(e, 'about')} className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Explore more
            </a>
          </div>
          <div className="flex gap-4 mt-8 " style={{ animationDelay: '0.9s' }}>
            <a href="mailto:amyyan189@gmail.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base group" aria-label="Email Amy Yan at amyyan189@gmail.com">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 mr-2 flex-shrink-0 transition-colors group-hover:text-primary" />
              <span className="group-hover:text-primary transition-colors">amyyan189@gmail.com</span>
            </a>
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
      <AboutSection />


      {/* PortfolioPreview is assumed to include Art/Dance/Speeches content */}
      <PortfolioPreview />

      {/* Ensure My Journey / Experiences is targetable */}
      <section id="experiences" className="scroll-mt-24">
        <ExperienceSection />
      </section>
    </div>
  );
}

export default HomePage;
