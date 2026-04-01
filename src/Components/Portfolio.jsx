import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Portfolio.css';
import portfolio from "../Assets/portfolio.png";
import Website from "./pages/Website";
import Logo from "./pages/Logo";
import { Graphic } from "./pages/Graphic";
import Shopify from './pages/Shopify';

export const Portfolio = ({ showBanner = true }) => {
  const [activeSection, setActiveSection] = useState("website");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setFade(true);
      setTimeout(() => {
        setActiveSection(section);
        setFade(false);
      }, 200);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "website":
        return <Website />;
      case "logo":
        return <Logo />;
      case "graphic":
        return <Graphic />;
      case "shopify":
        return <Shopify />;
      default:
        return null;
    }
  };

  // Button configuration with icons and details
  const portfolioButtons = [
    {
      id: "website",
      label: "Websites",
      icon: "🌐",
      description: "Custom websites",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: "logo",
      label: "Logos",
      icon: "🎨",
      description: "Brand identity",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
    },
    {
      id: "graphic",
      label: "Graphic Design",
      icon: "✨",
      description: "Visual storytelling",
      gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"
    },
    {
      id: "shopify",
      label: "Shopify",
      icon: "🛍️",
      description: "Ecommerce stores",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
    }
  ];

  return (
    <div className="portfolio-bg">
      <div className="portfolio">
        {showBanner && (
          <div className="port-banner" data-aos="fade-down">
            <div className="port-banner-wrap">
              <div className="portfolio-banner-info">
                <h1>Portfolio</h1>
              </div>
              <div className="port-cher">
                <img src={portfolio} alt="Portfolio banner" />
              </div>
            </div>
          </div>
        )}

        <div className="portfolio-info" data-aos="fade-up">
          <h1>Our <span>Portfolio</span></h1>
          <p>Design, Develop, Deliver, Dominate</p>
        </div>

        {/* Modern Button Tabs */}
        <div className="portfolio-tabs" data-aos="zoom-in">
          <div className="tabs-container">
            {portfolioButtons.map((button) => (
              <button
                key={button.id}
                className={`portfolio-tab ${activeSection === button.id ? 'active' : ''}`}
                onClick={() => handleSectionChange(button.id)}
              >
                <div className="tab-icon">{button.icon}</div>
                <div className="tab-content">
                  <span className="tab-label">{button.label}</span>
                  <span className="tab-description">{button.description}</span>
                </div>
                {activeSection === button.id && (
                  <div className="tab-active-indicator"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content with fade animation */}
        <div className={`portfolio-content ${fade ? "fade-out" : "fade-in"}`}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};