import { Brain, Boxes, FlaskConical, Route } from "lucide-react";
import Section from "../components/Section.jsx";

const traits = [
  ["Student mindset", "Curious, patient, and always rebuilding the map."],
  ["Builder mindset", "Ideas become useful when they are tested as working structures."],
  ["Systems thinking", "Parts matter, but relations explain behavior."],
  ["Experimental learning", "Small projects reveal patterns faster than passive theory."],
  ["Organized structure", "Clear naming, clear flows, clear next action."],
];

export default function About() {
  return (
    <Section id="about" eyebrow="Identity" title="Who I Am">
      <div className="about-layout">
        <p className="large-copy">
          I am a student who likes structure, relationships, and organized thinking.
          I learn by connecting ideas, building small systems, and experimenting. I
          like understanding how things connect across people, learning, technology,
          and life.
        </p>
        <div className="trait-grid">
          {[Brain, Boxes, Route, FlaskConical, Boxes].map((Icon, index) => (
            <article className="trait-card" key={traits[index][0]}>
              <Icon size={22} />
              <h3>{traits[index][0]}</h3>
              <p>{traits[index][1]}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
