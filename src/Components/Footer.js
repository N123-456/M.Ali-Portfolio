import React from "react";
import "./css/Footer.css";
import { FaEnvelope, FaLinkedin, FaPhoneAlt,FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
     
     <footer className="footer">
      <div className="footer-content container text-center">
        <p>© 2025 Ali Haq. All rights reserved.</p>
        <div className="social-icons row justify-content-center">
        <div className="col-auto">
          <a href="https://linkedin.com/in/alihaq" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />Linkedin
          </a>
          </div>
          <div className="col-auto">
          <a href="https://github.com/alihaq" target="_blank" rel="noopener noreferrer">
            <FaGithub />Github
          </a>
          </div>
          <div className="col-auto">
          <a href="mailto:ali@example.com">
            <FaEnvelope />malihaque@gmail.com
          </a>
          </div>
          <div className="col-auto">
          <a href="tel:+1234567890">
            <FaPhoneAlt />Phone
          </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
