// src/components/AboutSection.jsx
import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-4">
            I aspire to become an ER physician or psychiatrist with a strong focus on research, driven by my passion for emergency care and my desire to serve communities in need. Nothing excites me more than seeing people smile and watching communities come together to support one another. I’m also fascinated by the human mind—why people think and behave the way they do—and drawn to the ethical and philosophical questions that shape our decisions. This curiosity fuels my pursuit of medicine, inspiring me to combine science with empathy to make a meaningful impact.
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
