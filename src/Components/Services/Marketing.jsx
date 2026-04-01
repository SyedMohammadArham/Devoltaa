import React, { useState } from 'react';
import './Ecommerce.css';

const Ecommerce = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            id: 1,
            title: "Digital Advertising",
            icon: "📢",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            subtitle: "High-ROI Campaign Management",
            description: "Maximize your advertising ROI with data-driven campaigns across Google, Meta, LinkedIn, and programmatic platforms.",
            examples: ["PPC Management", "Social Media Ads", "Retargeting", "Display Ads"],
            stats: "320% Avg. ROAS",
            color: "#667eea"
        },
        {
            id: 2,
            title: "Content Marketing",
            icon: "📝",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
            subtitle: "Storytelling That Converts",
            description: "Create compelling content that educates, engages, and converts. From blog posts to video series, we craft narratives that build authority.",
            examples: ["Blog Strategy", "Video Production", "Case Studies", "Whitepapers"],
            stats: "450% Traffic Growth",
            color: "#f59e0b"
        },
        {
            id: 3,
            title: "Social Media Strategy",
            icon: "📱",
            gradient: "linear-gradient(135deg, #ec489a 0%, #8b5cf6 100%)",
            subtitle: "Build Communities That Matter",
            description: "Strategic social media management that builds authentic communities, drives engagement, and turns followers into brand advocates.",
            examples: ["Community Management", "Influencer Partnerships", "Social Listening", "Content Calendar"],
            stats: "2.5M+ Engagements",
            color: "#ec489a"
        },
        {
            id: 4,
            title: "SEO & Organic Growth",
            icon: "🔍",
            gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
            subtitle: "Dominate Search Rankings",
            description: "Comprehensive SEO strategies that increase organic visibility, drive qualified traffic, and establish your brand as an industry authority.",
            examples: ["Technical SEO", "Link Building", "Local SEO", "Voice Search"],
            stats: "287% Organic Traffic",
            color: "#10b981"
        },
        {
            id: 5,
            title: "Email Marketing",
            icon: "✉️",
            gradient: "linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)",
            subtitle: "Personalized Customer Journeys",
            description: "Automated email campaigns that nurture leads, recover abandoned carts, and build lasting customer relationships with personalized messaging.",
            examples: ["Newsletters", "Drip Campaigns", "Segmentation", "A/B Testing"],
            stats: "42x ROI Average",
            color: "#3b82f6"
        },
        {
            id: 6,
            title: "Analytics & Attribution",
            icon: "📊",
            gradient: "linear-gradient(135deg, #475569 0%, #1e293b 100%)",
            subtitle: "Know What Actually Works",
            description: "Advanced analytics and multi-touch attribution models that reveal exactly which channels drive results, enabling data-backed decisions.",
            examples: ["Dashboard Setup", "Conversion Tracking", "Attribution Modeling", "Predictive Analytics"],
            stats: "Real-Time Insights",
            color: "#475569"
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
        <div className="ecommerce-slider-container">
            {/* Header Section */}
            <div className="ecommerce-header">
                <span className="ecommerce-badge">Marketing</span>
                <h1 className="ecommerce-title">
                    Marke
                    <span className="title-highlight">ting</span>
                </h1>
                <p className="ecommerce-subtitle">
                    Create meaningful customer experiences with our integrated marketing solutions designed to understand your audience, personalize interactions, and build lasting brand loyalty.
                </p>
            </div>

            {/* Stats Overview */}
            <div className="stats-overview">
                <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Stores Launched</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">99.9%</div>
                    <div className="stat-label">Uptime Guarantee</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">$100k</div>
                    <div className="stat-label">Sales Generated</div>
                </div>
            </div>

            {/* Carousel Cards */}
            <button className="ecommerce-nav-btn ecommerce-prev-btn" onClick={prevSlide} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <div className="ecommerce-carousel-wrapper">
                <div className="ecommerce-cards-container">
                    {getVisibleCards().map((card) => (
                        <div
                            key={card.id}
                            className={`ecommerce-card ${card.position === 0 ? 'card-center' : card.position === -1 ? 'card-left' : 'card-right'}`}
                            style={{
                                background: card.gradient,
                                zIndex: card.position === 0 ? 10 : 5,
                                transform: card.position === 0 ? 'scale(1)' : 'scale(0.85)',
                                opacity: card.position === 0 ? 1 : 0.5,
                                filter: card.position === 0 ? 'none' : 'blur(2px)'
                            }}
                        >
                            <div className="ecommerce-card-content">
                                <div className="ecommerce-card-icon">{card.icon}</div>
                                <h2 className="ecommerce-card-title">{card.title}</h2>
                                <p className="ecommerce-card-subtitle">{card.subtitle}</p>
                                <p className="ecommerce-card-description">{card.description}</p>

                                <div className="ecommerce-stats-badge">
                                    <span className="stats-badge-icon">🚀</span>
                                    <span className="stats-badge-text">{card.stats}</span>
                                </div>

                                <div className="ecommerce-examples-section">
                                    <span className="ecommerce-examples-label">Services:</span>
                                    <div className="ecommerce-examples-tags">
                                        {card.examples.map((example, idx) => (
                                            <span key={idx} className="ecommerce-example-tag">{example}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="ecommerce-nav-btn ecommerce-next-btn" onClick={nextSlide} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className="ecommerce-dots-container">
                {categories.map((_, index) => (
                    <button
                        key={index}
                        className={`ecommerce-dot ${index === currentIndex ? 'ecommerce-dot-active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Category Counter */}
            <div className="ecommerce-counter-info">
                <span className="ecommerce-counter-current">{currentIndex + 1}</span>
                <span className="ecommerce-counter-separator">/</span>
                <span className="ecommerce-counter-total">{categories.length}</span>
            </div>
        </div>
    );
};

export default Ecommerce;