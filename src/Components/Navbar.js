import React from "react";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import ContactUs from "../Pages/ContactUs";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import { useState } from "react";
import "./css/Navbar.css";
import useScrollAnimation from "../Hooks/useScrollAnimation";
const Navbar = () => {
  useScrollAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="header">
        <h1 className="logo">Ali Haq</h1>
        <button
          className="hamburger"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
         &#9776; 
        </button>
          <nav className={`nav ${isMenuOpen ? "open" : ""}`} id='navbarNav'>
            <a href="#/" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </nav>
          
        
      </header>
     
    </div>
  );
};

export default Navbar;
