import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img2 from "../../Assets/arham.jpeg";
import img3 from "../../Assets/shahzaib.jpeg";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Team.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    {
      img: img2,
      name: "Syed Muhammad Arham",
      role: "FullStack Web Developer"
    },
    {
      img: img3,
      name: "Syed Shahzaib",
      role: "Frontend Developer & SEO Handler"
    }
  ];

  return (
    <div className="team-container">
      <div className="heading">
        <h2>OUR <span> TEAM </span></h2>
        <p>
          Driven by passion, united by purpose, we're the team behind the vision.
          <br />
          Together, we turn ideas into impact with creativity, skill, and heart.
        </p>
      </div>

      <div className="team-wrap">
        {teamMembers.map((member, index) => (
          <div
            className="team-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
