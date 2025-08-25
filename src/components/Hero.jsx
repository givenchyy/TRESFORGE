import React from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/images/analytics-dashboard.png";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Создаем цифровые решения нового поколения
            </h1>
            <p className="hero-subtitle">
              DevOps, веб-дизайн и разработка на высшем уровне. Превращаем ваши
              идеи в элегантные, масштабируемые решения.
            </p>

            <div className="hero-actions">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="btn btn-primary btn-lg"
              >
                Посмотреть работы
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-secondary btn-lg"
              >
                Начать проект
              </button>
            </div>

            <div className="hero-stats">
              {/* <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">проектов</span>
              </div> */}
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">года опыта</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">поддержка</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Превью аналитического дашборда" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
