import { Github, GitBranch } from "lucide-react";
import Section from "../components/Section.jsx";
import { projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Build Log" title="Projects" className="projects-panel">
      <div className="project-map">
        {projects.map((project, index) => (
          <article className={`project-node ${index === 0 ? "project-node--featured" : ""}`} key={project.name}>
            <div className="project-node__top">
              <GitBranch size={20} />
              <span>{project.status}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
