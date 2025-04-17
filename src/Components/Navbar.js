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
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="header">
        <h1 className="logo">Ali Haq</h1>
          <nav className={`nav ${isMenuOpen ? "open" : ""}`} id='navbarNav'>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
            <Link to="/experience" className="nav-link">
              Experience
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </nav>
          {/* <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      {/* </div> } */}
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
      </header>
    </div>
  );
};

export default Navbar;
