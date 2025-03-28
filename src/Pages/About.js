import React from 'react';
import './CSS/About.css';
import useScrollAnimation from '../Hooks/useScrollAnimation';
const About = () => {
    useScrollAnimation();
    return (
      
      <section id="about" className="about-me hidden">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            I'm <strong>Ali Haq</strong>, a cybersecurity leader with over <strong>10 years of experience</strong> specializing in 
            Security Operations Centers (SOC), cloud security (AWS, DevSecOps), and SOC2 compliance. 
            I excel at leading security teams, mitigating threats, and designing enterprise security solutions. 
          </p>
  
          <p>
            I’ve successfully managed SOC operations for top-tier organizations, ensuring compliance 
            and enhancing threat detection. My core expertise includes incident response, vulnerability management, 
            and building scalable security infrastructures that protect critical assets.
          </p>
  
          <p>
            Passionate about staying ahead in the cybersecurity landscape, I continuously explore 
            emerging threats and innovative security methodologies to safeguard modern enterprises.
          </p>
  
          <a href="#contact" className="contact-btn">Let's Connect</a>
        </div>
      </section>
    )
}

export default About
