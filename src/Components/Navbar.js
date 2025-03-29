import React from 'react'
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import ContactUs from "../Pages/ContactUs";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = () => {
  const scrollToFooter = () => {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
       <header className="header">
        <h1>Ali Haq</h1>
        <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <span onClick={scrollToFooter} className="nav-link">Contact</span>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
