import Section from "../components/Section.jsx";
import { roadmap } from "../data/portfolio.js";

export default function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Learning Architecture" title="Current Learning Journey">
      <div className="roadmap">
        {roadmap.map((item, index) => (
          <article className="roadmap-step" key={item.phase}>
            <span className="roadmap-step__index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.phase}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
