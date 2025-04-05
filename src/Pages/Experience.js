import React from 'react';
import './CSS/Experience.css';
const experiences = [
  {
    role: "Manager SOC",
    company: "Telenor Pakistan",
    date: "07/2024 – Present",
    details: [
      "Directed and coordinated SOC functions for proactive threat detection.",
      "Led incident response, reducing impact and improving response time.",
      "Mentored SOC teams and managed third-party vendors.",
      "Created executive dashboards and metrics for decision-makers.",
      "Maintained a full suite of cybersecurity tools and ensured seamless integration.",
      "Enhanced SOC efficiency with automation and continuous improvements.",
      "Enforced compliance with industry standards via audits and protocols."
    ]
  },
  {
    role: "IT Security Analyst",
    company: "Cloudelligent",
    date: "05/2023 – 06/2024",
    details: [
      "Implemented and managed SOC2 compliance across the organization.",
      "Owned MSSP program — managed vendor relations and SLAs.",
      "Developed security policies, cloud frameworks, and awareness training.",
      "Integrated threat intelligence feeds and managed vulnerability assessments.",
      "Refined business continuity planning and incident response strategies."
    ]
  },
  {
    role: "Staff Engineer – Security",
    company: "Xflow Research",
    date: "09/2022 – 05/2023",
    details: [
      "Led R&D for security solutions to address evolving threats.",
      "Built and deployed high-performing SOC infrastructure.",
      "Ensured GDPR/HIPAA compliance and risk assessments.",
      "Worked with DevOps and legal to align security with regulations."
    ]
  },
  {
    role: "SOC Engineer | Security Consultant",
    company: "Tech Avenue",
    date: "10/2019 – 07/2022",
    details: [
      "Designed Zero Trust architecture and deployed Kaspersky EDR across 300+ endpoints.",
      "Led cybersecurity awareness training for internal teams.",
      "Implemented scalable on-prem and cloud security architectures.",
      "Performed proactive threat hunting and optimized SIEM configurations.",
      "Integrated tools (EDR, IDS/IPS) and led incident response planning.",
      "Collaborated with development teams to integrate security in SDLC.",
      "Created SEO-friendly cybersecurity content for visibility and awareness."
    ]
  }
];

// const experiences = [
//     {
//       role: "Manager SOC",
//       company: "Telenor Pakistan",
//       date: "07/2024 – Present",
//       description: "Directed SOC operations, optimized threat detection, and led incident response efforts.",
//     },
//     {
//       role: "IT Security Analyst",
//       company: "Cloudelligent",
//       date: "05/2023 – 06/2024",
//       description: "Implemented SOC2 compliance and managed cloud security frameworks.",
//     },
//     {
//       role: "Staff Engineer – Security",
//       company: "Xflow Research",
//       date: "09/2022 – 05/2023",
//       description: "Developed and enforced cybersecurity policies and led enterprise SOC design.",
//     },
//   ];
const Experience = () => {
  

    return (
        <div>
   <section id="experience" className="experience-section">
      <h1>Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.role} - {exp.company}</h3>
          <p>{exp.date}</p>
          <ul>
            {exp.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    
        {/* {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} - {exp.company}</h3>
            <p>{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))} */}
      </section>
        </div>
      )
  
}

export default Experience
