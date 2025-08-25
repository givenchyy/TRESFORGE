import React from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="text-gradient">TRESFORGE</span>
              </div>
              <p className="footer-description">
                Создаем цифровые решения нового поколения. DevOps, веб-дизайн и
                разработка на высшем уровне.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Github">
                  <Github size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a
                  href="mailto:hello@tresforge.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-title">Услуги</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#services">Веб-разработка</a>
                  </li>
                  <li>
                    <a href="#services">DevOps</a>
                  </li>
                  <li>
                    <a href="#services">UI/UX дизайн</a>
                  </li>
                  <li>
                    <a href="#services">Мобильная разработка</a>
                  </li>
                  <li>
                    <a href="#services">Облачные решения</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Компания</h4>
                <ul className="footer-list">
                  <li>
                    <button onClick={() => scrollToSection("about")}>
                      О нас
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("portfolio")}>
                      Портфолио
                    </button>
                  </li>
                  <li>
                    <a href="#">Карьера</a>
                  </li>
                  <li>
                    <a href="#">Блог</a>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("contact")}>
                      Контакты
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Ресурсы</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">Документация</a>
                  </li>
                  <li>
                    <a href="#">API</a>
                  </li>
                  <li>
                    <a href="#">Поддержка</a>
                  </li>
                  <li>
                    <a href="#">Статус системы</a>
                  </li>
                  <li>
                    <a href="#">Changelog</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Контакты</h4>
                <ul className="footer-list">
                  <li>
                    <a href="mailto:hello@tresforge.com">hello@tresforge.com</a>
                  </li>
                  <li>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </li>
                  <li>
                    <a href="https://t.me/tresforge">Telegram: @tresforge</a>
                  </li>
                  <li>Москва, Россия</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <p>&copy; 2025 TRESFORGE. Все права защищены.</p>
              </div>
              <div className="footer-legal">
                <a href="#">Политика конфиденциальности</a>
                <a href="#">Условия использования</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Наверх"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
