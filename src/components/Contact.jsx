import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
  };

  const services = [
    "Веб-разработка",
    "DevOps и инфраструктура",
    "UI/UX дизайн",
    "Мобильная разработка",
    "Облачные решения",
    "Консультации",
    "Другое",
  ];

  const budgetRanges = [
    "До $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Свыше $100,000",
    "Обсудим индивидуально",
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Свяжитесь <span className="text-gradient">с нами</span>
          </h2>
          <p className="section-description">
            Готовы обсудить ваш проект? Мы ответим в течение 24 часов
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card card">
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:hello@tresforge.com">hello@tresforge.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>Телефон</h4>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>Офис</h4>
                    <span>Москва, Россия</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <MessageCircle size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>Telegram</h4>
                    <a href="https://t.me/tresforge">@tresforge</a>
                  </div>
                </div>
              </div>

              <div className="response-time">
                <div className="response-indicator">
                  <div className="response-dot"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form card">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Имя *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Компания</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Название компании"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Интересующая услуга</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Примерный бюджет</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Выберите диапазон</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Расскажите подробнее о вашем проекте..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg form-submit"
              >
                <Send size={20} />
                Отправить сообщение
              </button>

              <p className="form-note">
                * Обязательные поля. Мы не передаем ваши данные третьим лицам.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
