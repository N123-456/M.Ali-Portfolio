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
        

       

      </div>
    </section>

    </div>
  );
};

export default Hero;
