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
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
     <header className="header navbar navbar-expand-md">
    <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="navbar-brand mb-0">Ali Haq</h1>

        <button
          className="navbar-toggler text-white"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <nav className="navbar-nav ms-auto d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
          </nav>
        </div>
        </div>
    </header>
    </div>
  );
};

export default Navbar;
