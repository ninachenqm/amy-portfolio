// src/pages/HomePage.jsx
import React from 'react';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection'; // 1. 导入 ExperienceSection

// HeroSection 组件可以之后独立出来，或者直接写在这里
function HeroSection() {
  return (
    <section id="home" className="text-center py-20 md:py-32 min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-b from-background to-muted/30"> {/* 添加渐变背景示例 */}
      <div className="container mx-auto px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary gradient-text animate-in" style={{animationDelay: '0.2s'}}>
          Hi, I am Amy Yan.
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in" style={{animationDelay: '0.4s'}}>
          Explore my dance moments, artistic creations and wonderful expressions.
        </p>
        <div className="mt-10 space-x-4 animate-in" style={{animationDelay: '0.6s'}}>
          <a
            href="#about"
            onClick={(e) => { 
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
          >
            Explore more
          </a>
          {/* 可以添加一个链接到作品集页面的按钮 */}
          {/* <Link to="/dance" className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
            欣赏作品
          </Link> */}
        </div>
      </div>
    </section>
  );
}


function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExperienceSection /> {/* 2. 添加 ExperienceSection */}

      {/* <section id="portfolio-preview" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
            作品撷英
          </h2>
          {/* ... 之后添加作品预览内容 ... */}
      {/* <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">舞蹈瞬间</h3>
              {/* 舞蹈图片/视频预览 */}
      {/* </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">绘画拾珍</h3>
              {/* 绘画作品预览 */}
      {/* parallèle
            </div>
          </div>
        </div>
      </section> 
      */}
    </div>
  );
}

export default HomePage;
