import React, { useState } from 'react';
import './Creativedesign.css';

const Softwaredevelopment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            id: 1,
            title: "Web Development",
            icon: "🌐",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            subtitle: "Modern Web Solutions",
            description: "Building responsive, high-performance websites with modern technologies.",
            examples: ["React.js", "Node.js", "PHP", "HTML/CSS", "JavaScript"], // Changed from 'features' to 'examples'
            color: "#667eea"
        },
        {
            id: 2,
            title: "UI/UX Designing",
            icon: "🎨",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", // Fixed gradient
            subtitle: "User-Centered Design",
            description: "Creating intuitive, user-centered designs that deliver exceptional experiences.",
            examples: ["Wireframing", "Prototyping", "User Research", "Interaction Design"],
            color: "#f093fb"
        },
        {
            id: 3,
            title: "App Development",
            icon: "📱",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Fixed gradient
            subtitle: "Mobile Solutions",
            description: "Building native and cross-platform mobile applications.",
            examples: ["React Native", "Flutter", "iOS", "Android"],
            color: "#4facfe"
        },
        {
            id: 4,
            title: "WordPress Development",
            icon: "⚡",
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", // Fixed gradient
            subtitle: "CMS Experts",
            description: "Professional WordPress development with custom themes and plugins.",
            examples: ["Custom Themes", "Plugins", "WooCommerce", "SEO Friendly"],
            color: "#43e97b"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Get visible cards (current, previous, next for a smooth effect)
    const getVisibleCards = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
            let index = (currentIndex + i + categories.length) % categories.length;
            visible.push({ ...categories[index], position: i });
        }
        return visible;
    };

    return (
        <div className="slider-container">
            {/* Header Section */}
            <div className="slider-header">
                <span className="badge">Software Development</span>
                <h1 className="slider-title">
                    Software Development
                    <span className="title-highlight"> Categories</span>
                </h1>
                <p className="slider-subtitle">
                    Explore our comprehensive software development services from web to mobile solutions
                </p>
            </div>

            {/* Carousel Cards */}
            <button className="nav-btn prev-btn" onClick={prevSlide} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <div className="carousel-wrapper">

                <div className="cards-container">
                    {getVisibleCards().map((card) => (
                        <div
                            key={card.id}
                            className={`card ${card.position === 0 ? 'card-center' : card.position === -1 ? 'card-left' : 'card-right'}`}
                            style={{
                                background: card.gradient, // Changed from card.bgGradient to card.gradient
                                zIndex: card.position === 0 ? 10 : 5,
                                transform: card.position === 0 ? 'scale(1)' : 'scale(0.85)',
                                opacity: card.position === 0 ? 1 : 0.5,
                                filter: card.position === 0 ? 'none' : 'blur(2px)'
                            }}
                        >
                            <div className="card-content">
                                <div className="card-icon">{card.icon}</div>
                                <h2 className="card-title">{card.title}</h2>
                                <p className="card-subtitle">{card.subtitle}</p>
                                <p className="card-description">{card.description}</p>

                                <div className="examples-section">
                                    <span className="examples-label">Technologies:</span>
                                    <div className="examples-tags">
                                        {card.examples.map((example, idx) => (
                                            <span key={idx} className="example-tag">{example}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <button className="nav-btn next-btn" onClick={nextSlide} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className="dots-container">
                {categories.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Optional: Category Counter */}
            <div className="counter-info">
                <span className="counter-current">{currentIndex + 1}</span>
                <span className="counter-separator">/</span>
                <span className="counter-total">{categories.length}</span>
            </div>
        </div>
    );
};

export default Softwaredevelopment;