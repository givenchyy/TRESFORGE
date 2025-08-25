import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import TresforgeLogo from "./TresforgeLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content container">
        {/* Логотип */}

        <TresforgeLogo size={50} duration={6} />

        {/* Навигация для десктопа */}
        <nav className="nav">
          <a className="nav-link" onClick={() => scrollToSection("home")}>
            Главная
          </a>
          <a className="nav-link" onClick={() => scrollToSection("services")}>
            Услуги
          </a>
          <a className="nav-link" onClick={() => scrollToSection("portfolio")}>
            Портфолио
          </a>
          <a className="nav-link" onClick={() => scrollToSection("about")}>
            О нас
          </a>
          <a className="nav-link" onClick={() => scrollToSection("contact")}>
            Контакты
          </a>
        </nav>

        {/* CTA кнопка */}
        <div className="header-cta">
          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn-primary"
          >
            Заказать проект
          </button>
        </div>

        {/* Мобильное меню кнопка */}
        <button onClick={toggleMenu} className="mobile-menu-button">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {["home", "services", "portfolio", "about", "contact"].map((id) => (
            <a
              key={id}
              className="mobile-nav-link"
              onClick={() => scrollToSection(id)}
            >
              {id === "home"
                ? "Главная"
                : id === "services"
                ? "Услуги"
                : id === "portfolio"
                ? "Портфолио"
                : id === "about"
                ? "О нас"
                : "Контакты"}
            </a>
          ))}
          <div className="mobile-cta">
            <button
              onClick={() => scrollToSection("contact")}
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
