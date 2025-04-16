import logo from './logo.svg';
import './App.css';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
function App() {
  return (
    <div className="App">
       <Navbar />
       <div className="container">
      <Routes>
      <Route path="/" element={  <Hero/>} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
