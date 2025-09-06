import React from 'react';
import {FaLinkedin, FaUserTie, FaInstagram, FaYoutube } from 'react-icons/fa';

// CSS Styling for the Footer
const footerStyle = {
  display: 'flex',
  flexDirection: 'column', // Stack items vertically
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#A9A9A9',
  color: '#222',
  fontSize: '14px',
  fontFamily: "'Roboto', sans-serif",
  textAlign: 'center',
};

const socialLinksStyle = {
  display: 'flex',
  justifyContent: 'center', // Center the icons
  alignItems: 'center',
  marginBottom: '10px', // Space between icons and copyright
};

const socialIconStyle = {
  color: '#222',
  fontSize: '20px',
  marginLeft: '10px', // Space between icons
};

function Footer() {
  return (
    <footer style={footerStyle}>
      {/* Social media icons centered */}
      <div style={socialLinksStyle}>
        <a href="https://www.linkedin.com/in/alexander-choji-4a41a4188/" style={socialIconStyle}><FaLinkedin /></a>
        <a href="https://www.freelancer.com/u/chojialexander" style={socialIconStyle}><FaUserTie /></a>
        <a href="https://instagram.com/devchoji" style={socialIconStyle}><FaInstagram /></a>
        <a href="https://www.youtube.com/@devchoji" style={socialIconStyle}><FaYoutube /></a>
      </div>
      
      {/* Copyright message centered */}
      <p>&copy; 2025 CHOJI ALEXANDER PAM. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
