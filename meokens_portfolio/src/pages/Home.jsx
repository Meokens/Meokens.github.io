import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import profile_pic from "../assets/mokens3.jpeg";
import githubIcon from "../assets/github.png";
import homeAbout_pic from "../assets/mokens2.jpeg";
import resume from "../assets/mokensCV.pdf";


const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-hero-content">
          <h1>You Are Welcome</h1>
          <p>My Portfolio showcase of great UI/UX Designs and Graphics.</p>
          <Link to="/projects" className="home-cta-button">View My Work</Link>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="home-profile-section">
        <div className="home-profile-pic-container">
          <img src={profile_pic} alt="profilePhoto" />
        </div>
        <div className="home-profile-text">
          <p className="home-profile-intro">Hi, I am</p>
          <h1 className="home-profile-name">Ebere Moses Okens</h1>
          <p className="home-profile-role">Product Designer</p>
          <div className="home-btn-container">
          <a
  href={resume} // Path to your CV file
  download="mokensCV.pdf" // The file name for the downloaded CV
  className="home-btn home-btn-color-2"
>
  Download CV
</a>

            <button className="home-btn home-btn-color-1" onClick={() => (window.location.href = '.#/contact')}>
              Contact Info
            </button>
          </div>
          <div className="home-socials-container">
            {/*<img
              src={linkedinIcon}
              alt="My LinkedIn Profile"
              className="home-icon"
              onClick={() => window.open('https://www.linkedin.com/in/alexander-choji-4a41a4188', '_blank', 'noopener,noreferrer')}
              /> */}
          </div>
        </div>
      </section>

      
      {/* About Section */}
      <section className="home-about-section">
        <h2>About Me</h2>
        <div className="home-about-container">
          <div className="home-about-content">
            <p>
              Hi, I'm Moses — a Product (UI/UX) Designer & Generative AI student with 2+ years of experience helping startups and businesses turn complex ideas into clean, conversion-focused digital experiences.I specialize in designing user-first mobile apps and responsive websites that drive engagement, usability, and growth. From MVPs for early-stage startups to full-scale product redesigns for fast-scaling companies, I bring a sharp eye for detail, a strategic mind, and a commitment to measurable results.
            </p>
          </div>
          <div className="home-about-content">
            <img src={homeAbout_pic} alt="About Me" />
          </div>
        </div>

      </section>

      {/* Featured Projects */}
      <section className="home-featured-projects">
        <h2 className="home-services-heading">Featured Projects</h2>
        <div className="home-projects-list">
          <div className="home-project-card">
            <img src={require("../assets/AMB.png")} alt="AMB" className="home-project-image" />
            <h3>AMB</h3>
            <p>Came up with a redesign and strategy for the Abbey Mortgage Bank website.</p>
            <Link to="/projects/1" className="home-project-link">View Details</Link>
          </div>
          <div className="home-project-card">
            <img src={require("../assets/Artconn.png")} alt="Artconn" className="home-project-image" />
            <h3>Artconn</h3>
            <p>Came up with a design and strategy for the Artisan Connect mobile app.</p>
            <Link to="/projects/2" className="home-project-link">View Details</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="home-services-section">
  <h2 className="home-services-heading">Featured Services</h2>
  <div className="home-services-list">
    <div className="home-service-item">
      <div className="home-service-icon">
        <i className="fas fa-code"></i>
      </div>
      <h3>UI/UX Design</h3>
      <p>Designing intuitive and engaging user experiences with modern ui/ux Practices, ensuring seamless interactions and visually appealing interfaces across all platforms.</p>
    </div>
    <div className="home-service-item">
      <div className="home-service-icon">
        <i className="fas fa-mobile-alt"></i>
      </div>
      <h3>Brand Identity</h3>
      <p>Crafting unique and memorable brand identities that reflect your vision through logos, colour palettes, typography, and consistent visual storytelling.</p>
    </div>
    <div className="home-service-item">
      <div className="home-service-icon">
        <i className="fas fa-laptop-code"></i>
      </div>
      <h3>Logo Design</h3>
      <p>Designing unique and professional logos that capture your brand's identity, using modern design tools like Adobe Illustrator to create impactful and memorable visuals.</p>
    </div>
  </div>
</section>


      {/* Contact CTA */}
      <section className="home-cta-section">
        <p>Ready for great Products and Designs? Let’s collaborate!</p>
        <Link to="/contact" className="home-cta-button">Get in Touch</Link>
      </section>
    </div>
  );
};

export default Home;