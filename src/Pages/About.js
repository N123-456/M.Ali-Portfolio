import React from "react";
import "./CSS/About.css";
import useScrollAnimation from "../Hooks/useScrollAnimation";
const About = () => {
  useScrollAnimation();
  return (
    <section id="about" className="about-section">
    <div className="section-color">
      <div className="about-header">
        <h1>LEARN MORE ABOUT ME</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src='./images/ali.jpg' alt="Profile" />
        </div>
        <div className="about-text">
          <h2>SOC Manager & Cloud Security Architect</h2>
          <p>
          I’m a results-driven cybersecurity executive with over 10 years of
       experience in orchestrating security operations, service delivery,
     and compliance. I specialize in SOC optimization, Zero Trust
     Architecture, and cloud-native security solutions on AWS, Azure, and
          GCP. I'm passionate about aligning security with business needs and
          enabling organizations to reduce risk while maintaining agility.
          </p>

          <div className="about-info">
            <p><strong>Birthday:</strong> 9 December 1989</p>
            <p><strong>Age:</strong> </p>
            <p><strong>Website:</strong> <a href="" target="_blank" rel="noopener noreferrer"></a></p>
            <p><strong>Degree:</strong>MS Information Security</p>
            <p><strong>Phone:</strong> +92 332 520 9822</p>
            <p><strong>Email:</strong> malihaque@gmail.com</p>
            <p><strong>City:</strong> Karachi, Pakistan</p>
            <p><strong>Freelance:</strong> Available</p>
          
      </div>
      </div>
      </div>
      </div>
      
    </section>
  );
};

export default About;
