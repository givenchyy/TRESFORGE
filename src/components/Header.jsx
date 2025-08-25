import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content container">
        {/* Логотип */}
        <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
          TRESFORGE
        </a>

        {/* Навигация для десктопа */}
        <nav className="nav">
          <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Главная</a>
          <a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>Услуги</a>
          <a href="#portfolio" className="nav-link" onClick={() => scrollToSection('portfolio')}>Портфолио</a>
          <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>О нас</a>
          <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Контакты</a>
        </nav>

        {/* CTA кнопка */}
        <div className="header-cta">
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn btn-primary"
          >
            Заказать проект
          </button>
        </div>

        {/* Мобильное меню кнопка */}
        <button 
          onClick={toggleMenu}
          className="mobile-menu-button"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-nav-link" onClick={() => scrollToSection('home')}>Главная</a>
          <a href="#services" className="mobile-nav-link" onClick={() => scrollToSection('services')}>Услуги</a>
          <a href="#portfolio" className="mobile-nav-link" onClick={() => scrollToSection('portfolio')}>Портфолио</a>
          <a href="#about" className="mobile-nav-link" onClick={() => scrollToSection('about')}>О нас</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => scrollToSection('contact')}>Контакты</a>
          <div className="mobile-cta">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary w-full"
            >
              Заказать проект
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

