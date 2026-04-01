import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Graphic.css';

import graphic1 from "../../Assets/graphic.jpg";
import graphic2 from "../../Assets/mockup1.jpg";
import graphic3 from "../../Assets/mockup2.jpg";
import graphic4 from "../../Assets/mockup3.jpg";

export const Graphic = () => {
    const graphicData = [
        { img: graphic1, title: "Social Media Banner" },
        { img: graphic2, title: "Shoes Mockup" },
        { img: graphic3, title: "Garnier Mockup" },
        { img: graphic4, title: "Shoes Announcement Banner" }
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="graphic-section">
            <h2 className="graphic-heading">Graphic<span> Design </span></h2>
            <p className='graphic-disc'>
                Visual communication created using typography, photography, iconography, and illustration. 
                Designed to convey messages clearly and aesthetically across digital or print mediums.
            </p>
            <div className="graphic-grid">
                {graphicData.map((item, index) => (
                    <div
                        className="graphic-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <img src={item.img} alt={item.title} className="graphic-image" />
                        <h4 className="graphic-title">{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};
