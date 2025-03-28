import React from 'react'
import { useEffect } from 'react';
const useScrollAnimation = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".hidden");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("show");
              }
            });
          },
          { threshold: 0.2 }
        );
    
        elements.forEach((el) => observer.observe(el));
      }, []);
    };
    


export default useScrollAnimation
