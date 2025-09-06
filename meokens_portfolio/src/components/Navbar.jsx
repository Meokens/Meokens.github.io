import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaUserTie, FaInstagram, FaYoutube} from 'react-icons/fa';
import './Navbar.css';
import logo from "../assets/main-logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="My Logo" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger Menu (Visible in Mobile View) */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link" onClick={toggleMobileMenu}>About</Link></li>
            <li className="nav-item"><Link to="/experience" className="nav-link" onClick={toggleMobileMenu}>Experience</Link></li>
            <li className="nav-item"><Link to="/projects" className="nav-link" onClick={toggleMobileMenu}>Projects</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link" onClick={toggleMobileMenu}>Services</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="navbar-socials">
          {/*<a href="https://facebook.com" className="social-icon"  target="_blank" rel="noopener noreferrer"><FaFacebook /></a> */}
          <a href="https://www.linkedin.com/in/alexander-choji-4a41a4188/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>          
          <a href="https://www.freelancer.com/u/chojialexander" className="social-icon" target="_blank" rel="noopener noreferrer"><FaUserTie /></a>
          <a href="https://instagram.com/devchoji" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com/@devchoji" className="social-icon" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
