import React from "react";
import "./CSS/Projects.css";
import useScrollAnimation from "../Hooks/useScrollAnimation";
const projects = [
  {
    title: "SOC2 Compliance Implementation",
    company: "Cloudelligent",
    description:
      "Led SOC2 compliance implementation to meet regulatory standards.",
  },
  {
    title: "Enterprise SOC Deployment",
    company: "Xflow Research",
    description:
      "Designed and implemented an advanced Security Operations Center.",
  },
  {
    title: "MSSP Program Development",
    company: "Cloudelligent",
    description:
      "Managed MSSP program, optimizing service delivery and performance monitoring.",
  },
];
const Projects = () => {
  useScrollAnimation();
  return (
    <div>
      <section id="projects" className="projects-section hidden">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>
                <strong>{project.company}</strong>
              </p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
