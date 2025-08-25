import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      number: '15+',
      label: 'Специалистов в команде',
      description: 'Опытные разработчики, дизайнеры и DevOps инженеры'
    },
    {
      icon: <Award size={32} />,
      number: '50+',
      label: 'Завершенных проектов',
      description: 'Успешно реализованные решения для различных отраслей'
    },
    {
      icon: <Clock size={32} />,
      number: '3',
      label: 'Года на рынке',
      description: 'Стабильный рост и развитие компании'
    },
    {
      icon: <Target size={32} />,
      number: '98%',
      label: 'Довольных клиентов',
      description: 'Высокий уровень удовлетворенности наших заказчиков'
    }
  ];

  const values = [
    {
      title: 'Качество',
      description: 'Мы никогда не идем на компромиссы в вопросах качества. Каждый проект проходит тщательное тестирование и код-ревью.'
    },
    {
      title: 'Инновации',
      description: 'Используем самые современные технологии и подходы, чтобы создавать решения, опережающие время.'
    },
    {
      title: 'Партнерство',
      description: 'Мы не просто выполняем заказы - мы становимся технологическими партнерами наших клиентов.'
    },
    {
      title: 'Прозрачность',
      description: 'Открытое общение, четкие сроки и регулярная отчетность на всех этапах разработки.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            О <span className="text-gradient">TRESFORGE</span>
          </h2>
          <p className="section-description">
            Мы - команда профессионалов, создающая цифровые решения мирового уровня
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Наша миссия</h3>
            <p className="about-description">
              TRESFORGE была основана с целью помочь компаниям любого размера реализовать их 
              цифровые амбиции. Мы объединяем креативность дизайна, мощь современных технологий 
              и надежность DevOps-практик, чтобы создавать продукты, которые не только решают 
              бизнес-задачи, но и вдохновляют пользователей.
            </p>
            <p className="about-description">
              Наша команда состоит из опытных специалистов, каждый из которых является экспертом 
              в своей области. Мы постоянно изучаем новые технологии и методологии, чтобы 
              предлагать нашим клиентам самые эффективные решения.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title text-center">Наши ценности</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section text-center">
          <h3 className="team-title">Готовы к сотрудничеству?</h3>
          <p className="team-description">
            Давайте обсудим ваш проект и найдем лучшее решение для ваших задач
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-primary btn-lg"
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

