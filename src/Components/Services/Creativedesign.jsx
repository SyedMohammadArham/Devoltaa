import React, { useState } from 'react';
import './Creativedesign.css'; // We'll create this file

const Creativedesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            id: 1,
            title: "Visual & Graphic Design",
            subtitle: "Brand Identity · Print · Marketing",
            description: "Logos, posters, packaging, and visual branding. The art of aesthetics, typography, and visual hierarchy that shapes how brands communicate with the world.",
            icon: "🎨",
            color: "#6366f1",
            bgGradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            examples: ["Logo Design", "Brochures", "Social Media Graphics"]
        },
        {
            id: 2,
            title: "Fashion & Textile Design",
            subtitle: "Apparel · Accessories · Patterns",
            description: "Wearable art and textile innovation. From haute couture to everyday fashion, expressing identity through garments, accessories, and surface patterns.",
            icon: "👗",
            color: "#ec489a",
            bgGradient: "linear-gradient(135deg, #ec489a 0%, #f43f5e 100%)",
            examples: ["Clothing", "Textile Prints"]
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
                <span className="badge">Design Disciplines</span>
                <h1 className="slider-title">
                    Creative Design
                    <span className="title-highlight"> Categories</span>
                </h1>
                <p className="slider-subtitle">
                    Explore the diverse world of creative design — from visual communication to immersive experiences
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
                                background: card.bgGradient,
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
                                    <span className="examples-label">Key areas:</span>
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

export default Creativedesign;