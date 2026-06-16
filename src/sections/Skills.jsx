import Section from "../components/Section.jsx";
import { skillClusters } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Capability Clusters" title="Skills">
      <div className="skills-matrix">
        {skillClusters.map((cluster) => (
          <article className="skill-cluster" key={cluster.title}>
            <h3>{cluster.title}</h3>
            <div>
              {cluster.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
