import React, { useRef } from "react";
import "./Home.css";
import Services from "./Services";
import middle from "../Assets/charactor.png";
import { Portfolio } from "./Portfolio";
import { Servicedown } from "./Servicedown";
import { Link } from "react-router-dom";

const Home = () => {
  const servicesRef = useRef(null);

  const handleScroll = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bk">
      <div className="banner">
        <div className="info">
          <div className="left slide-animation slide-left">
            <span>Building Digital Solutions that Drive Growth</span>
            <h2>Design Your Success Like Never Before</h2>
            <p>
              At Devolta, we craft powerful websites, mobile apps, and creative
              designs backed with SEO and digital marketing everything your
              business needs to thrive online.
            </p>
            <button className="start-btn" onClick={handleScroll}>
              Get Started
            </button>
            <Link to="/portfolio" className="btn-link">
              See Our Work
            </Link>
          </div>

          <div className="mid slide-animation slide-right">
            <img src={middle} alt="Character" />
          </div>
        </div>
      </div>

      {/* Scroll target */}
      <div ref={servicesRef}>
        <Services />
      </div>

      <Servicedown />
      <Portfolio showBanner={false} />
    </div>
  );
};

export default Home;
