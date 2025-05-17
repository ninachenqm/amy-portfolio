// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 

function Navbar() {
  const location = useLocation(); 


  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {

      const navbarHeight = 80; 
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

    const handleNavClick = (event, href) => {
    if (href.startsWith('#') && location.pathname === '/') {
      scrollToSection(event, href.substring(1));
    }
    // 如果是普通的路由链接 (如 /dance)，则正常跳转
    // 如果是锚点链接但不在首页，Link to="/#about" 会先跳到首页，然后浏览器会尝试定位（可能不平滑）
    // 这是一个可以后续优化的地方
  };

  return (
    <nav className="bg-card text-card-foreground shadow-md py-4 sticky top-0 z-50"> {/* 添加 sticky top-0 z-50 使其固定 */}
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e, '#home')} 
          className="text-2xl font-bold text-primary hover:text-primary/80"
        >
          Amy Yan
        </Link>
        <div className="space-x-4">
          <Link 
            to={location.pathname === '/' ? '#home' : '/'} 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="hover:text-primary"
          >
            Home
          </Link>
          <Link 
            to={location.pathname === '/' ? '#about' : '/#about'} // 如果不在首页，则先跳到首页的锚点
            onClick={(e) => handleNavClick(e, '#about')} 
            className="hover:text-primary"
          >
            About
          </Link>
          <Link to="/dance" className="hover:text-primary">Dance</Link>
          <Link to="/art" className="hover:text-primary">Art</Link>
          <Link to="/speeches" className="hover:text-primary">Speeches</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
