// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // 导入 useNavigate

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80; 
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (event, href) => {
    const isHomePage = location.pathname === '/';
    const isAnchorLink = href.startsWith('#');
    const sectionId = isAnchorLink ? href.substring(1) : null;

    if (isAnchorLink) {
      event.preventDefault(); // 阻止所有锚点链接的默认行为
      if (isHomePage && sectionId) {
        scrollToSection(event, sectionId);
      } else if (sectionId) {
        // 如果不在首页，但目标是锚点，先导航到首页，然后尝试滚动
        // 使用 state 来传递滚动目标，在 HomePage 中用 useEffect 来处理
        navigate(`/#${sectionId}`);
      }
    }
    // 对于非锚点链接 (如 /dance, /art)，Link 组件会正常处理路由跳转
  };

  const navItems = [
    { name: 'Home', href: '#home', isExternal: false },
    { name: 'About', href: '#about', isExternal: false },
    { name: 'Experience', href: '#experiences', isExternal: false }, 
    { name: 'Dance', href: '/dance', isExternal: false },
    { name: 'Art', href: '/art', isExternal: false },
    { name: 'Speech', href: '/speeches', isExternal: false },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md text-card-foreground shadow-sm py-3 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Zimeng Yan
        </Link>
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              // 更新 to 的逻辑，以更好处理页面内锚点和跨页锚点
              to={item.href.startsWith('#') && location.pathname === '/' ? item.href : (item.href.startsWith('#') ? `/${item.href}` : item.href) }
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors nav-item"
              // 之后我们会添加 activeSection 高亮逻辑
            >
              {item.name}
            </Link>
          ))}
          {/* ModeToggle 之后添加 */}
        </div>
        <div className="md:hidden"> {/* 移动端菜单按钮之后添加 */}
          {/* <Button variant="ghost" size="icon"> <Menu /> </Button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
