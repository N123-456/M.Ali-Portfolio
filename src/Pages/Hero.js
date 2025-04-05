import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import './CSS/Hero.css';
const Hero = () => {
  const texts = [
    "Cybersecurity Leader",
    "SOC Manager",
    "Cloud Security Expert",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout); // Cleanup
    } else {
      const resetTimeout = setTimeout(() => {
        setCharIndex(0);
        setText("");
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, index]);
  return (
    <div>
     
      <section className="hero">
      <div className="hero-content">
        <div className="text-section">
          <h2>Hello, I'm Ali Haq</h2>
          <p className="typing-text">{text}</p>
          
        </div>
        

        <div className="image-section">
          <img src="/images/ali.jpg" alt="Ali Haq" className="hero-image" />
        </div>
        
        <div className="education-section">
          <h3>Education</h3>
  <ul>
    <li><strong>Master’s in Information Security</strong><br />Riphah International University | 2017 – 2019</li>
    <li><strong>Bachelor’s in Software Engineering</strong><br />Riphah International University | 2012 – 2016</li>
  </ul>
  </div>

      </div>
    </section>

    </div>
  );
};

export default Hero;
