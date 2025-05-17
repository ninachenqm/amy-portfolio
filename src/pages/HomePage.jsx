// src/pages/HomePage.jsx
import React from 'react';
import AboutSection from '../components/AboutSection'; // 导入 AboutSection

function HomePage() {
  return (
    <div>
      {/* Hero Section - 我们之后会重点构建这里 */}
      <section id="home" className="text-center py-20 min-h-[70vh] flex flex-col justify-center"> {/* id="home" 用于导航 */}
        <h1 className="text-5xl font-bold text-primary gradient-text">
          Welcome to Amy Yan's World
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore my dance moments, artistic creations and wonderful expressions.
        </p>
        {/* 之后会添加更多内容，如主视觉图、CTA按钮等 */}
      </section>

      {/* About Me Section */}
      <AboutSection />

      {/* 未来可以添加作品预览区块等 */}
      {/* <section id="portfolio-preview" className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">作品概览</h2>
          // ... 预览内容 ...
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
