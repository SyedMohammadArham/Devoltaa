import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Servicedown.css";
import services from "../Assets/services.jpeg";

export const Servicedown = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration & play once
    }, []);

    return (
        <div className="back">
            <div className="dn-left" data-aos="fade-right">
                <img src={services} alt="" />
            </div>
            <div className="dn-right" data-aos="fade-left">
                <h1>Innovating Digital Futures</h1>
                <p>
                    We provide expert-driven, strategic digital development, ensuring
                    high performance web and app solutions that deliver tangible
                    business outcomes.
                </p>
            </div>
        </div>
    );
};
