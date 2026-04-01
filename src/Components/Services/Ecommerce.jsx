import React, { useState } from 'react';
import './Ecommerce.css';

const Ecommerce = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = [
        {
            id: 1,
            title: "Ecommerce Development",
            icon: "🛒",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            subtitle: "Custom Online Stores",
            description: "Build powerful, scalable ecommerce platforms that deliver seamless shopping experiences and drive sales.",
            examples: ["Custom Development", "API Integration", "Payment Gateways", "Inventory Management"],
            stats: "99.9% Uptime",
            color: "#667eea"
        },
        {
            id: 2,
            title: "Shopify Development",
            icon: "🛍️",
            gradient: "linear-gradient(135deg, #7cb342 0%, #4caf50 100%)",
            subtitle: "Premium Shopify Solutions",
            description: "Expert Shopify development with custom themes, apps, and optimization for maximum conversion rates.",
            examples: ["Theme Customization", "Shopify Apps", "Liquid Programming", "Store Setup"],
            stats: "2.5M+ Sales",
            color: "#7cb342"
        },
        {
            id: 3,
            title: "WooCommerce Solutions",
            icon: "💪",
            gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
            subtitle: "WordPress Ecommerce",
            description: "Leverage the power of WordPress with custom WooCommerce stores that are flexible and feature-rich.",
            examples: ["Custom Plugins", "Product Configurators", "Membership Sites", "Subscription Boxes"],
            stats: "500+ Stores",
            color: "#9b59b6"
        },
        {
            id: 4,
            title: "Magento Development",
            icon: "⚡",
            gradient: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
            subtitle: "Enterprise Ecommerce",
            description: "Enterprise-level Magento solutions for businesses requiring scalability, multi-store functionality, and advanced features.",
            examples: ["B2B Ecommerce", "Multi-Store Setup", "Custom Extensions", "Migration Services"],
            stats: "100% Scalable",
            color: "#f39c12"
        },
        {
            id: 5,
            title: "Conversion Rate Optimization",
            icon: "📊",
            gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
            subtitle: "Turn Visitors into Customers",
            description: "Data-driven strategies to optimize your ecommerce store for maximum conversions and revenue.",
            examples: ["A/B Testing", "Checkout Optimization", "Cart Recovery", "Heatmaps Analysis"],
            stats: "85% CRO Increase",
            color: "#3498db"
        },
        {
            id: 6,
            title: "Ecommerce SEO",
            icon: "🔍",
            gradient: "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
            subtitle: "Boost Organic Traffic",
            description: "Comprehensive SEO strategies tailored for ecommerce stores to rank higher and attract quality traffic.",
            examples: ["Product SEO", "Category Optimization", "Schema Markup", "Link Building"],
            stats: "150% Traffic Growth",
            color: "#1abc9c"
        },
        {
            id: 7,
            title: "Mobile Commerce",
            icon: "📱",
            gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
            subtitle: "Mobile-First Shopping",
            description: "Optimize your ecommerce store for mobile shoppers with responsive design and native app experiences.",
            examples: ["PWA Development", "Mobile Apps", "Responsive Design", "Mobile Checkout"],
            stats: "67% Mobile Traffic",
            color: "#e74c3c"
        },
        {
            id: 8,
            title: "Ecommerce Analytics",
            icon: "📈",
            gradient: "linear-gradient(135deg, #34495e 0%, #2c3e50 100%)",
            subtitle: "Data-Driven Decisions",
            description: "Advanced analytics and reporting to track performance, understand customer behavior, and optimize strategies.",
            examples: ["Sales Analytics", "Customer Insights", "ROI Tracking", "Predictive Analytics"],
            stats: "Real-time Insights",
            color: "#34495e"
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
                <span className="ecommerce-badge">Ecommerce Excellence</span>
                <h1 className="ecommerce-title">
                    Ecommerce Development &
                    <span className="title-highlight"> Optimization</span>
                </h1>
                <p className="ecommerce-subtitle">
                    Build, scale, and optimize your online store with our comprehensive ecommerce solutions
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
                    <div className="stat-number">$150k</div>
                    <div className="stat-label">Sales Generated</div>
                </div>
            </div>

            <button className="ecommerce-nav-btn ecommerce-prev-btn" onClick={prevSlide} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            {/* Carousel Cards */}

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

            {/* CTA Section */}
            <div className="ecommerce-cta">
            </div>
        </div>
    );
};

export default Ecommerce;