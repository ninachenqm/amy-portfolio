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
            Amy's detailed intro
          </p>
          {/* 之后可以在这里添加更多内容，比如个人照片、特长卡片等 */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
