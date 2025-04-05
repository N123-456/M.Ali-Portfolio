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

const certifications = [
  "Certified Information Security Manager (CISM)",
  "AWS Certified Security – Specialty",
  "Certified Ethical Hacker (CEH)",
  "AWS Certified Cloud Practitioner",
];

const tools = {
  "SIEM & Threat Intel": ["Wazuh", "ELK Stack", "Splunk", "QRadar", "Sumo Logic", "MISP"],
  "Cloud & DevSecOps": ["AWS GuardDuty", "Prisma Cloud", "Kubernetes", "Ansible", "Docker"],
  "Endpoint & EDR": ["SentinelOne", "Cisco AMP", "Kaspersky", "Microsoft Defender ATP"],
};

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills-section">
        <h1>Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">{skill}</div>
          ))}
        </div>

        <h1 style={{ marginTop: "100px" }}>Certifications</h1>
        <div className="skills-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="skill-item">{cert}</div>
          ))}
        </div>

        <h1 style={{ marginTop: "100px" }}>Tools & Technologies</h1>
        <div className="skills-grid">
          {Object.entries(tools).map(([category, items], index) => (
            <div key={index} className="skill-item">
              <strong>{category}</strong>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px", textAlign: "left", fontSize: "18px" }}>
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
