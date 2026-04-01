import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Pricing.css";

export const Pricing = () => {
    const plans = [
        {
            title: "Web Sites",
            price: 250,
            description: ["Perfect For Startup Or Personal Brand"],
            features: [
                "Upto 5 Pages",
                "Home About Services Contact Us",
                "Mobile Responsive Design",
                "Basic SEO Setup",
                "Whatsapp & Contact Form Integration",
                "Social media linking",
                "Delivery in 7-10 days"
            ],
        },
        {
            title: "Graphic Designing",
            price: 180,
            description: ["A complete starter identity for fashionbeuty or lifestyle brands"],
            features: [
                "logo design (3 concepts +revisions)",
                "Brand color palette",
                "Typography",
                "Social Media Highlight Covers(upto 5 )",
                "Business card design",
                "File Formats: PNG,JPG,PDF,SVG",
            ],
        },
        {
            title: "Digital Marketing",
            price: 200,
            description: ["Ideal for small brands or those just getting started"],
            features: [
                "12 static posts per month",
                "4 stories per week ",
                "1 reel per week",
                "facebook and instagram management",
                "Ad Compaign Manegment ONE Compaign Per Month",
                "Monthly Perfomance Reports"
            ],
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="price-container">
            <h2>SESSION <span>PRICING</span></h2>
            <p>
                Driven by passion, united by purpose, we're the team behind the vision.
                <br /> Together, we turn ideas into impact with creativity, skill, and
                heart.
            </p>

            <div className="price-slider">
                {plans.map((plan, i) => (
                    <div
                        className="price-card"
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={i * 200} // delay for staggered animation
                    >
                        <h2>{plan.title}</h2>
                        <h1>Price ${plan.price}</h1>
                        <ul className="bullets">
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
