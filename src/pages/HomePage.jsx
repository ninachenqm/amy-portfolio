// src/pages/HomePage.jsx
import React from 'react';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import { TypeAnimation } from 'react-type-animation'; // 1. 导入 TypeAnimation
import { Download, Mail, Github, Linkedin, ArrowUpCircle, Youtube } from 'lucide-react'; // 2. 导入所需图标 (Youtube 是示例)

// HeroSection 组件
function HeroSection() {
  // 平滑滚动到指定ID的元素，并考虑Navbar的高度
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80; // 动态获取或使用默认 Navbar 高度
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh] text-center relative bg-gradient-to-b from-background via-background to-muted/20" // 参考项目的背景和最小高度
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-6 md:space-y-8"> 

          {/* main title */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none " style={{ animationDelay: '0.1s' }}>
            Hi, I am <span className="gradient-text">Amy Yan</span>
          </h1>

          {/* Typing  */}
          <div className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl min-h-[60px] md:min-h-[30px] " style={{ animationDelay: '0.3s' }}>
            <TypeAnimation
              sequence={[

                'Dancer', 1500,
                'Artist', 1500,
                'Gymnast', 1500,
                'Pre-Med Student', 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold"
            />
          </div>

          {/* Brief Intro */}
          <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl " style={{ animationDelay: '0.5s' }}>
            Explore my dance moments, artistic creations and wonderful expressions.
          </p>

          {/* Explore more */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 " style={{ animationDelay: '0.7s' }}>
            <a
              href="#about"
              onClick={(e) => smoothScrollTo(e, 'about')} 
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

            >
              Explore more
            </a>
            {/* 可写：下载简历按钮 (如果 Amy 有简历PDF) */}
            {/*
            <a
              href="/amy_yan_resume.pdf" // 假设简历在 public/amy_yan_resume.pdf
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-8 py-3 text-base font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
            */}
          </div>

          {/* 社交/联系图标链接 (可选) */}
          <div className="flex gap-4 mt-8 " style={{ animationDelay: '0.9s' }}>
            <a href="amyyan189@gmail.com" //Amy's Gmail
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Amy Yan">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            {/* 如果有其他相关平台的链接，继续添加 */}
            {/* 例如:
            <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" // 替换为真实YouTube链接
               target="_blank"
               rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors"
               aria-label="Amy's Youtube Channel">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
            */}
          </div>
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
      <ExperienceSection />

      {/* <section id="portfolio-preview" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
            作品撷英 (Portfolio Highlights)
          </h2>
          {/* ... 之后添加作品预览内容 ... */}
      {/* <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">舞蹈瞬间 (Dance Moments)</h3>
              {/* 舞蹈图片/视频预览 */}
      {/* </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">绘画拾珍 (Artistic Gems)</h3>
              {/* 绘画作品预览 */}
      {/* </div>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}

export default HomePage;
