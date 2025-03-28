import React from 'react'
import './css/Footer.css';
const Footer = () => {
  return (
    <div>
       <footer className="footer">
      
      <p>&copy; {new Date().getFullYear()} Ali Haq. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="mailto:malihaque@gmail.com">Email</a>
        <a href="https://linkedin.com/in/ahaq" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#contact">Contact</a>
      </div>
    </footer> 
    </div>
  )
}

export default Footer
