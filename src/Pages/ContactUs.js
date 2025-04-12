import React from 'react';
import './CSS/Contact.css';
const ContactUs = () => {
    return (
        <div>
        {/* <section id="contact" className="contact-section">
        <h1>Contact Me</h1>
        <p>Email: <a href="mailto:malihaque@gmail.com">malihaque@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/ahaq" target="_blank" rel="noopener noreferrer">linkedin.com/in/ahaq</a></p>
        <p>Phone: +92 332 520 9822</p>
      </section> */}
      <section id="contact" className="contact-section">
            <h1>Contact Me</h1>
            <div className="contact-container">
                <div className="contact-card">
                    <p>Email: <a href="mailto:malihaque@gmail.com">malihaque@gmail.com</a></p>
                </div>
                <div className="contact-card">
                    <p>LinkedIn: <a href="https://linkedin.com/in/ahaq" target="_blank" rel="noopener noreferrer">linkedin.com/in/ahaq</a></p>
                </div>
                <div className="contact-card">
                    <p>Phone: +92 332 520 9822</p>
                </div>
            </div>
        </section>
        </div>
      );
}

export default ContactUs
