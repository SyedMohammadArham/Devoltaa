import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/devolta.png";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside (optional)
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="tophead">
        <div className="toplft">
          <p>
            <MdEmail style={{ color: "#036cb3", width: "20px", height: "20px", position: "absolute", margin: "2px -20px" }} /> 
            devoltaa71@gmail.com
          </p>
          <p>
            <MdLocationPin style={{ color: "#036cb3", width: "20px", height: "20px", position: "absolute", margin: "2px -20px" }} />
            Model Town k Block Lahore Pakistan
          </p>
        </div>
        <div className="topright">
          {/* Social Media Icons */}
          <div className="icons">
            <a href="https://www.instagram.com/devolta.inc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1AsYNGnSnP/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B923245356726&text=Hello%21+I+would+like+to+get+in+touch+with+you.&type=phone_number&app_absent=0https://web.whatsapp.com/" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </header>
      
      <nav className="header">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <ul className="navlinks">
          <Link className="nav" to="/">Home</Link>
          <Link className="nav" to="/about">About</Link>
          
          {/* Services Dropdown */}
          <div className="dropdown" onMouseLeave={closeDropdown}>
            <button 
              className="dropdown-btn" 
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Services <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} />
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Softwaredevelopment" onClick={closeDropdown}>
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/Creativedesign" onClick={closeDropdown}>
                    Creative / Design
                  </Link>
                </li>
                <li>
                  <Link to="/marketing" onClick={closeDropdown}>
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/ecommerce" onClick={closeDropdown}>
                    E-commerce Development & Optimization
                  </Link>
                </li>
              </ul>
            )}
          </div>
          
          <Link className="nav" to="/portfolio">Our Projects</Link>
          <Link className="nav" to="/contact">Contact</Link>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <Link className="nav" to="/" onClick={toggleMenu}>Home</Link>
        <Link className="nav" to="/about" onClick={toggleMenu}>About</Link>
        
        {/* Services with Submenu in Mobile */}
        <div className="mobile-dropdown">
          <button className="mobile-dropdown-btn" onClick={toggleDropdown}>
            Services <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} />
          </button>
          {isDropdownOpen && (
            <div className="mobile-dropdown-menu">
              <Link to="/Softwaredevelopment" onClick={() => {
                toggleMenu();
                closeDropdown();
              }}>
                Software Development
              </Link>
              <Link to="/creativedesign" onClick={() => {
                toggleMenu();
                closeDropdown();
              }}>
                Creative / Design
              </Link>
              <Link to="/marketing" onClick={() => {
                toggleMenu();
                closeDropdown();
              }}>
                Marketing
              </Link>
              <Link to="/ecommerce" onClick={() => {
                toggleMenu();
                closeDropdown();
              }}>
                E-commerce Development & Optimization
              </Link>
            </div>
          )}
        </div>
        
        <Link className="nav" to="/portfolio" onClick={toggleMenu}>Our Projects</Link>
        <Link className="nav" onClick={toggleMenu}>Contact</Link>

        {/* Social Media in Sidebar */}
        <div className="sidebar-icons">
          <a href="https://www.instagram.com/devolta.inc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1AsYNGnSnP/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B923245356726&text=Hello%21+I+would+like+to+get+in+touch+with+you.&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;