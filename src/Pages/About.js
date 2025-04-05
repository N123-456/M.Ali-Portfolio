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
        I’m Ali Haq, a seasoned Cybersecurity Expert and DevOps Engineer with over 10 years of experience
        in SOC operations, cloud security (AWS, DevSecOps), and compliance frameworks like SOC2.
      </p>
      <p>
        My work spans leading SOC teams, implementing enterprise-grade security solutions, and helping
        organizations achieve robust cloud and endpoint protection. I’m passionate about building scalable,
        secure systems and continuously staying ahead of evolving threats.
      </p>
      <p>
        Whether it’s deploying tools like SentinelOne and GuardDuty, leading MSSP programs, or driving
        compliance audits — I thrive at the intersection of technology, security, and leadership.
      </p>
  
          <a href="#contact" className="contact-btn">Let's Connect</a>
        </div>
      </section>
    )
}

export default About
