import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Faqs.css';

const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    { question: "What types of software solutions does Devolta offer?", answer: "We offer custom web and mobile app development specifically for e-commerce and D2C brands. Our solutions include custom Shopify development, e-commerce mobile apps, custom web platforms, API integrations, and performance optimization. We also provide graphic design, brand identity, UI/UX design, and digital marketing everything you need to build, launch, and grow your online business in one place." },
    { question: "What makes Devolta different from other software agencies?", answer: "We specialize exclusively in e-commerce. Unlike generalist agencies, we understand the unique challenges of online retail cart abandonment, mobile optimization, conversion rates, and marketplace integrations. We also offer design and marketing under one roof, so you get a complete partner, not multiple vendors." },
    { question: "How does Devolta handle project timelines and delivery?", answer: "We provide clear timelines during the discovery phase and deliver projects in stages. Typical timelines range from 2–4 weeks for a Shopify setup, 4–8 weeks for custom development, and 8–12 weeks for mobile apps. We communicate regularly and ensure you're satisfied before final delivery." },
    { question: "Can you help if I already have a website that's not performing well?", answer: "We turn underperforming sites around. Our free audit identifies what's holding you back slow speed, poor mobile experience, or complicated checkout then we provide a roadmap to fix it and increase your sales." },
  ];

  return (
    <div className="faq-bg">
      <h2 data-aos="fade-up" style={{ marginBottom: "50px" }}>Frequently <span> Asked </span>Questions</h2>
      <div className="faq-section" data-aos="fade-up">
        {faqs.map((item, index) => (
          <details key={index} data-aos="fade-right">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
