import React, { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

// Импорт изображений
import portfolio1 from '../assets/images/portfolio-1.png';
import portfolio2 from '../assets/images/portfolio-2.png';
import portfolio3 from '../assets/images/portfolio-3.png';
import portfolio4 from '../assets/images/portfolio-4.png';
import portfolio5 from '../assets/images/portfolio-5.png';
import devopsDashboard from '../assets/images/devops-dashboard.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Современная платформа электронной коммерции с интегрированной системой платежей и управления заказами.',
      image: portfolio3,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2025',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'DevOps Monitoring Dashboard',
      category: 'devops',
      description: 'Комплексная система мониторинга инфраструктуры с real-time аналитикой и алертами.',
      image: portfolio4,
      technologies: ['Docker', 'Kubernetes', 'Grafana', 'Prometheus'],
      year: '2025',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Creative Mobile App',
      category: 'mobile',
      description: 'Мобильное приложение для творческих проектов с интуитивным интерфейсом и богатым функционалом.',
      image: portfolio5,
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      year: '2025',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'web',
      description: 'Корпоративный сайт с современным дизайном, CMS и интеграцией с внешними сервисами.',
      image: portfolio1,
      technologies: ['Next.js', 'Tailwind CSS', 'Strapi', 'Vercel'],
      year: '2023',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Developer Portfolio',
      category: 'design',
      description: 'Персональное портфолио разработчика с анимациями и интерактивными элементами.',
      image: portfolio2,
      technologies: ['Vue.js', 'GSAP', 'Three.js', 'Netlify'],
      year: '2023',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure',
      category: 'devops',
      description: 'Автоматизированная облачная инфраструктура с CI/CD пайплайнами и мониторингом.',
      image: devopsDashboard,
      technologies: ['AWS', 'Terraform', 'Jenkins', 'Docker'],
      year: '2023',
      link: '#',
      github: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'Все проекты' },
    { key: 'web', label: 'Веб-разработка' },
    { key: 'devops', label: 'DevOps' },
    { key: 'mobile', label: 'Мобильные' },
    { key: 'design', label: 'Дизайн' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Наше <span className="text-gradient">портфолио</span>
          </h2>
          <p className="section-description">
            Более 50 успешно реализованных проектов различной сложности
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="portfolio-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <a href={project.link} className="portfolio-action">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} className="portfolio-action">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-meta">
                  <span className="portfolio-year">
                    <Calendar size={16} />
                    {project.year}
                  </span>
                  <span className={`portfolio-category category-${project.category}`}>
                    {filters.find(f => f.key === project.category)?.label}
                  </span>
                </div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta text-center">
          <p className="cta-text">Хотите увидеть больше наших работ?</p>
          <button className="btn btn-primary btn-lg">
            Посмотреть все проекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

