import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Logo.css';

import logo1 from '../../Assets/restaurant.jpg';
import logo2 from '../../Assets/logo2.jpg';
import logo3 from '../../Assets/logo3.png';

const Logo = () => {
    const data = {
        logos: [
            { img: logo1, title: "Restaurant Logo" },
            { img: logo2, title: "Malmo Logo" },
            { img: logo3, title: "Furniture Logo" }
        ]
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="logo-section">
            <h2 className="logo-heading">Logo <span> Designs</span></h2>
            <p className='logo-disc'>
                Your logo is the face of your brand  let’s make it unforgettable.
                At Devolta, we design logos that are bold, timeless, and strategically crafted to reflect your brand's identity.
            </p>
            <div className="logo-grid">
                {data.logos.map((logo, index) => (
                    <div
                        className="logo-card"
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 200}
                    >
                        <img src={logo.img} alt={logo.title} className="logo-image" />
                        <h4 className="logo-title">{logo.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Logo;
