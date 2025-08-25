import React from "react";
import { Users, Award, Clock, Target } from "lucide-react";
import TresforgeLogo from "./TresforgeLogo";
const About = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      number: "15+",
      label: "Специалистов в команде",
      description: "Опытные разработчики, дизайнеры и DevOps инженеры",
    },
    {
      icon: <Award size={32} />,
      number: "50+",
      label: "Завершенных проектов",
      description: "Успешно реализованные решения для различных отраслей",
    },
    {
      icon: <Clock size={32} />,
      number: "3",
      label: "Года на рынке",
      description: "Стабильный рост и развитие компании",
    },
    {
      icon: <Target size={32} />,
      number: "98%",
      label: "Довольных клиентов",
      description: "Высокий уровень удовлетворенности наших заказчиков",
    },
  ];

  return (
    <section id="about" className="section section-gray">
      <div className="container">
        <div className="section-header section-box-logo text-center">
          <TresforgeLogo size={120} duration={6} />
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Наша миссия</h3>
            <p>
              TRESFORGE была основана с целью помочь компаниям любого размера
              реализовать цифровые амбиции. Мы объединяем креативность дизайна,
              мощь современных технологий и надежность DevOps-практик, чтобы
              создавать продукты, которые не только решают бизнес-задачи, но и
              вдохновляют пользователей.
            </p>
            <p>
              Наша команда состоит из опытных специалистов, каждый из которых
              является экспертом в своей области. Мы постоянно изучаем новые
              технологии и методологии, чтобы предлагать нашим клиентам самые
              эффективные решения.
            </p>
          </div>
          {/* 
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-description">{stat.description}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
