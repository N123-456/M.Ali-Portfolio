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

// Flatten tools into a single array
const tools = [
  "Wazuh", "ELK Stack", "Splunk", "QRadar", "Sumo Logic", "MISP",
  "AWS GuardDuty", "Prisma Cloud", "Kubernetes", "Ansible", "Docker",
  "SentinelOne", "Cisco AMP", "Kaspersky", "Microsoft Defender ATP"
];

const certifications = [
  "Certified Information Security Manager (CISM)",
  "AWS Certified Security – Specialty",
  "Certified Ethical Hacker (CEH)",
  "AWS Certified Cloud Practitioner",
];

const Skills = () => {
  return (
    <div>
      {/* Combined Skills + Tools Section */}
      <section id="skills" className="skills-section">
        <h1>Skills & Tools</h1>
        <div className="skills-grid">
          {[...skills, ...tools].map((item, index) => (
            <div key={index} className="skill-item">{item}</div>
          ))}
        </div>
        <h1 style={{ marginTop: "90px" }}>Certifications</h1>
      <div className="skills-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="skill-item">{cert}</div>
        ))}
      </div>
      </section>

      
    </div>
    
  );
};

export default Skills;
