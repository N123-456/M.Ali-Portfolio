import React from 'react'
import './css/Footer.css';
import { FaEnvelope,FaLinkedin,FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
       <footer className="footer">
      
       <div className="footer-content">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <p><FaEnvelope /> <a href="mailto:malihaque@gmail.com">malihaque@gmail.com</a></p>
          <p><FaLinkedin /> <a href="https://linkedin.com/in/ahaq" target="_blank" rel="noopener noreferrer">linkedin.com/in/ahaq</a></p>
          <p><FaPhone /> +92 332 520 9822</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
        <p className="footer-note">&copy; {new Date().getFullYear()} Ali Haq. All rights reserved.</p>
      </div>
    </footer> 
    </div>
  )
}

export default Footer
