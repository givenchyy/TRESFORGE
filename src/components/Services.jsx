import React from 'react';
import { Code, Server, Palette, Cloud, Smartphone, Database, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Веб-разработка',
      description: 'Создаем современные веб-приложения и сайты с использованием последних технологий: React, Vue, Node.js, Python.',
      features: ['Frontend разработка', 'Backend API', 'Адаптивная верстка', 'SEO оптимизация']
    },
    {
      icon: <Server size={32} />,
      title: 'DevOps и инфраструктура',
      description: 'Настраиваем CI/CD пайплайны, автоматизируем развертывание и обеспечиваем надежную инфраструктуру.',
      features: ['CI/CD настройка', 'Docker контейнеризация', 'Kubernetes оркестрация', 'Мониторинг систем']
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX дизайн',
      description: 'Разрабатываем интуитивные интерфейсы и создаем уникальный пользовательский опыт для ваших продуктов.',
      features: ['Дизайн интерфейсов', 'UX исследования', 'Прототипирование', 'Дизайн-системы']
    },
    {
      icon: <Cloud size={32} />,
      title: 'Облачные решения',
      description: 'Миграция в облако, настройка облачной инфраструктуры и оптимизация затрат на AWS, Google Cloud, Azure.',
      features: ['Миграция в облако', 'Архитектура решений', 'Оптимизация затрат', 'Безопасность']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Мобильная разработка',
      description: 'Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android.',
      features: ['React Native', 'Flutter разработка', 'Нативные приложения', 'App Store публикация']
    },
    {
      icon: <Database size={32} />,
      title: 'Базы данных',
      description: 'Проектируем и оптимизируем базы данных, настраиваем репликацию и обеспечиваем высокую производительность.',
      features: ['Проектирование БД', 'Оптимизация запросов', 'Репликация данных', 'Резервное копирование']
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Наши <span className="text-gradient">услуги</span>
          </h2>
          <p className="section-description">
            Полный спектр услуг для создания и развития вашего цифрового продукта
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <Zap size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

