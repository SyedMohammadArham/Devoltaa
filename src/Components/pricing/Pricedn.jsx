import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "../../Assets/About.jpeg";
import "./Pricedn.css";

export const Pricedn = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration & play once
    }, []);

    return (
        <div className="dn-back">
            <div className="pr-left" data-aos="fade-right">
                <img src={About} alt="" />
            </div>
            <div className="pr-right" data-aos="fade-left">
                <h1>Innovate. Develop. Thrive.</h1>
                <p>Where Digital Innovation Begins</p>
            </div>
        </div>
    );
};
