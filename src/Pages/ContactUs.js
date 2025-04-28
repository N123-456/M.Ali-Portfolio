import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import './CSS/Contact.css';
import { useHref } from 'react-router-dom';
const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vi7pc4n', 'template_6z4rsdl', form.current, 'Q7CV5keZi4WQV0wBy')
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset(); // Clears form
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };
    
        

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    
    </section>
  );
};

export default ContactUs
