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
            My ultimate goal is to become an ER physician or a psychiatrist focused on research. Driven by my passion for emergency medicine and a strong desire to help communities in need. I love seeing people smile, and I find it super heartwarming to witness communities come together and support each other. I also love exploring why people think and behave the way they do, and I’m especially interested in ethical and philosophical questions about human nature and decision making. This curiosity drove me deeper into understanding different perspectives and motivates my goal of combining medicine with empathy in my future career.
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
