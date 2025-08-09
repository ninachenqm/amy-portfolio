// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Menu Icon (Hamburger)
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

// Close Icon (X)
const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  const handleNavClick = (event, href) => {
    if (isMenuOpen) setIsMenuOpen(false);

    const isAnchorLink = href.startsWith('#');
    const sectionId = isAnchorLink ? href.substring(1) : null;

    if (isAnchorLink && sectionId) {
      event.preventDefault();
      if (location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        navigate(`/${href}`); // go to Home with hash, scroll handled there
      }
    }
  };

  // New order + in-page anchors
  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'art', href: '#art' },
    { name: 'dance', href: '#dance' },
    { name: 'speech', href: '#speeches' },
    { name: 'experience', href: '#experiences' },
    { name: 'volunteering/work', href: '#experiences' }, // same section as My Journey
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md text-card-foreground shadow-sm py-3 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand Name */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Zimeng Yan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href.startsWith('#') ? `/${item.href}` : item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary/80 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href.startsWith('#') ? `/${item.href}` : item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-card-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;