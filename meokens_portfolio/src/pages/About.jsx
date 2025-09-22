import React from 'react';
import './About.css'; // Import the CSS for styling
import about_pic from "../assets/mokens1.jpeg";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";

function About() {
  return (
    <div className="about-page">
      {/* Section 1: Two Columns */}
      <section className="about-section">
        <div className="about-row">
          {/* Left Column: Image */}
          <div className="about-column about-photo">
            <img
              src={about_pic}
              alt="About Me"
              className="about-image"
            />
          </div>
          {/* Right Column: Text */}
          <div className="about-column about-text">
            <h2>About Me</h2>
            <p>
                Hi, I'm Moses — a Product (UI/UX) Designer & Generative AI student with 2+ years of experience helping startups and businesses turn complex ideas into clean, conversion-focused digital experiences.I specialize in designing user-first mobile apps and responsive websites that drive engagement, usability, and growth. From MVPs for early-stage startups to full-scale product redesigns for fast-scaling companies, I bring a sharp eye for detail, a strategic mind, and a commitment to measurable results.            </p>
            <p>
                Results that speak:
                Boosted user engagement by 40% through research-driven 
                    redesigns,
                Increased onboarding completion rates by 30% through 
                    UX improvements,
                Delivered over 5+ design projects for clients across Fintech, 
                    Health, Mobility, E-commerce sectors,
                Helped startups successfully launch MVPs that attracted funding 
                    and user growth.            
            </p>
          </div>
        </div>
      </section>

      <div class="about-details-container">
        <div class="about-containers">
            <div class="details-container">
                <img src={experienceIcon} alt="Experience icon" class="icon"></img>
                <h3>Experience</h3>
                <p>2+ years <br />Product (UI/UX) Designer</p>
            </div>
            <div class="details-container">
                <img src={educationIcon} alt="Education icon" class="icon"></img>
                <h3>Education</h3>
                <p>Gulf American University(Business Management)2020 - 2023 <br />University of Benin(Accounting) 2007 - 2011</p>
            </div>
        </div>
      </div>

      {/* Section 2: Three Columns */}
      <section className="about-section">
        <div className="about-row three-columns">
          {/* Left Placeholder */}
          <div className="about-column placeholder">
            <p>After higher institution, I wasn't sure what kind of career would be a good fit for me. I was interested in technology, but I didn't have any technical knowledge. So I was afraid I wouldn't do well in the field but eventually, </p>
          </div>
          {/* Middle Column: Text */}
          <div className="about-column about-description">
            <h2>Why I Do What I Do</h2>
            <p>
              I realized what a huge impact advances in tech had on society and my life. I wanted to harness the power to positively affect the lives of people around me, especially those who tend to be marginalized or forgotten.

As a motivated student in UX Design, I worked on products for people with chronic pain. I realized how important and impactful it is to consider the needs of people with disabilities and how much I wanted to create products to help them.
            </p>
          </div>
          {/* Right Placeholder */}
          <div className="about-column placeholder">
            <p>So I continued researching and empathising with those who are disabled to understand how I could uplift them with my work. It is a passion I am looking forward to sharing with you during my time here.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          <li>User interface design</li>
          <li>Design systems</li>
          <li>User research</li>
          <li>Illustrations</li>
          <li>Usability testing</li>
          <li>Print design</li>
          <li>Prototyping</li>
          <li>Design strategy</li>
          <li>Design team management</li>
          <li>Design workshops</li>
        </ul>
        <br />
        <h2>Soft Skills</h2>
        <ul className="skills-list">
          <li>Collaboration</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Empathy</li>
          <li>Leadership</li>
          <li>Adaptability</li>
          <li>Creativity</li>
          <li>Cooperation</li>
          <li>Research</li>
        </ul>
        <br />
        <h2>Languages</h2>
        <ul className="skills-list">
          <li>English</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="contact-cta">
        <h2>Let's Connect!</h2>
        <p>
          I'm open to freelance opportunities, collaborations, contracts or exciting Fulltime/part-time/remote roles.
        </p>
        <a href="#/contact" className="cta-button">
          Contact Me
        </a>
      </section>
    </div>
  );
}

export default About;