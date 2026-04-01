import React, { useEffect } from "react";
import "./Footer.css";
import logo from "../Assets/devolta.png"

const Footer = () => {
  useEffect(() => {
    // Initialize AOS if you want animations
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        {/* Left Section - Logo, Tagline, Contact */}
        <div className="footer-section footer-brand">
          <div className="footer-logo-area">
            <div className="logo-icon"><img src={logo} alt="" /></div>
            <h2 className="footer-logo-text">DEVOLTA</h2>
          </div>
          <p className="footer-tagline">
            Design Your Success Like Never Before
          </p>
          <p className="footer-email-link">
            Interested in working with us?<br />
            <a href="mailto:sales@netversesolutions.com" className="email-link">
              devoltaa71@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Services</a></li>
            <li><a href="#">About Company</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        
        {/* Address & Hours Column */}
        <div className="footer-section">
          <h3 className="footer-heading">Address</h3>
          <address className="footer-address">
            Model Town K Block<br />
            Lahore<br />
            Pakistan
          </address>
          <div className="footer-hours">
            <strong>Hours:</strong><br />
            9.30am – 6.30pm<br />
            Monday to Friday
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            Copyright © 2025 Devolta.inc . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;