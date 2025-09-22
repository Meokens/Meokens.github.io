import React from 'react';
import {FaLinkedin, FaUserTie, FaInstagram, FaYoutube } from 'react-icons/fa';

// CSS Styling for the Footer
const footerStyle = {
  display: 'flex',
  flexDirection: 'column', // Stack items vertically
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#B39316',
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
        <a href="https://www.linkedin.com/in/mosesokens" style={socialIconStyle}><FaLinkedin /></a>
        <a href="https://www.instagram.com/okensmoses?igsh=b29hcjJhd3V3a2V5" style={socialIconStyle}><FaInstagram /></a>
      </div>
      
      {/* Copyright message centered */}
      <p>Ebere Moses Okens -- <a href="https://choji-alexander.github.io/myPortfolio.github.io/#/">&copy; 2025 CHOJI ALEXANDER PAM. </a>All rights reserved.</p>
    </footer>
  );
}

export default Footer;
