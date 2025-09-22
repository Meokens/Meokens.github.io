import React from "react";
import Slider from "react-slick";
import "./ServicesCertifications.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
// import alxVentures from "../assets/gig-at-a-startup.png";
// import jP from "../assets/jpMorgan.png";

const ServicesCertifications = () => {
  const services = [
    { title: "Brand Identity", description: "Crafting unique and memorable brand identities that reflect your vision through logos, colour palettes, typography, and consistent visual storytelling", icon: "🌐" },
    { title: "UI/UX Design", description: "Designing intuitive and engaging user experiences with modern ui/ux Practices, ensuring seamless interactions and visually appealing interfaces across all platforms", icon: "🎨" },
    { title: "Flyer Design", description: "Designing eye-catching and professional flyers that communicate your message clearly, using creative layouts, engaging visuals, and modern design tools.", icon: "📈" },
    { title: "Logo Design", description: "Designing unique and professional logos that capture your brand's identity, using modern design tools like Adobe Illustrator to create impactful and memorable visuals.", icon: "🕸️" },
   // { title: "UX Research", description: "Conducting in-depth user research and usability testing to uncover insights, improve experiences, and design user-centered solutions that truly meet your audience's needs.", icon: "📝" },
  ];

  const certifications = [
   // { name: "Gig-at-a-startup certificate", issuer: "ALX Ventures", date: "December, 2024", image: alxVentures },
   // { name: "J.P. Morgan Software Engineering Virtual Experience on Forage", issuer: "JP Morgan", date: "June 2024", image: jP },
    { name: "Bincom Python Beginner and Intermediate Certificate", issuer: "Bincom Academy", date: "November, 2023", image: "#" },
    { name: "Business Development Module Certificate", issuer: "1% Club", date: "May, 2023", image: "#" },
    { name: "National Service Certificate.", issuer: "NYSC", date: "November, 2022", image: "#" },
    { name: "B.ENG.", issuer: "Afe Babalola University", date: "November, 2022", image: "#" },
  ];

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      ➡
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      ⬅
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="services-certifications">
      {/* Header Section */}
      <section className="header-section">
        <h1>Services & Certifications</h1>
        <p>Discover the services I offer and the certifications that back them up.</p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Services I Offer</h2>
        <p className="services-intro">
          I bring expertise and creativity to deliver exceptional results.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h2>Certifications</h2>
        <Slider {...sliderSettings}>
          {certifications.map((cert, index) => (
            <div key={index} className="certification-slide">
              <img src={cert.image} alt={cert.name} className="certification-image" />
              <div className="certification-info">
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <p>Interested in working together? Let’s create something amazing.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </section>
    </div>
  );
};

export default ServicesCertifications;