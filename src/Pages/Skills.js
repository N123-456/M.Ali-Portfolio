import React from "react";
import "./CSS/Skills.css";
const skills = [
  "SOC Operations & Threat Management",
  "Cloud Security (AWS, DevSecOps)",
  "Incident Response & Threat Intelligence",
  "Cyber Risk Management & SOC2 Audit",
  "Vulnerability Assessment & Penetration Testing",
  "Security Architecture & SIEM Implementation",
];
const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
