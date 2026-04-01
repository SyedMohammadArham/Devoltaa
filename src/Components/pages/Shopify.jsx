import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Shopify.css';
import shopify1 from "../../Assets/shopify1.png";

const Shopify = () => {
    const shopifyData = {
        shopifys: [
            {
                img: shopify1,
                title: "Kids Fashion Store",
                link: "https://www.vgtkids.com",
            },
        ],
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="shopify-section">
            <h2 className="shopify-heading">
                Shopify <span>Projects</span>
            </h2>

            <p className="shop-disc">
                We handle everything  from custom web design, responsive layouts, SEO setup, performance optimization, to maintenance and security  so you can focus on what matters most: building your brand and attracting clients.
            </p>

            <div className="shopify-grid">
                {shopifyData.shopifys.map((shopify, index) => (
                    <div
                        className="shopify-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <img
                            src={shopify.img}
                            alt={shopify.title}
                            className="shopify-image"
                        />
                        <h4 className="shopify-title">{shopify.title}</h4>

                        {shopify.link && (
                            <a
                                href={shopify.link}
                                className="shopify-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Site
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shopify;
