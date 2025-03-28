import React from 'react';
import './CSS/Experience.css';
const experiences = [
    {
      role: "Manager SOC",
      company: "Telenor Pakistan",
      date: "07/2024 – Present",
      description: "Directed SOC operations, optimized threat detection, and led incident response efforts.",
    },
    {
      role: "IT Security Analyst",
      company: "Cloudelligent",
      date: "05/2023 – 06/2024",
      description: "Implemented SOC2 compliance and managed cloud security frameworks.",
    },
    {
      role: "Staff Engineer – Security",
      company: "Xflow Research",
      date: "09/2022 – 05/2023",
      description: "Developed and enforced cybersecurity policies and led enterprise SOC design.",
    },
  ];
const Experience = () => {
    return (
        <div>
    <section id="experience" className="experience-section">
        <h1>Experience</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} - {exp.company}</h3>
            <p>{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
        </div>
      )
  
}

export default Experience
