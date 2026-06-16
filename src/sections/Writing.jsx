import Section from "../components/Section.jsx";
import { notes } from "../data/portfolio.js";

export default function Writing() {
  return (
    <Section id="writing" eyebrow="Future Blog Layer" title="Ideas & Notes">
      <div className="notes-grid">
        {notes.map((note, index) => (
          <article className="note-card" key={note}>
            <span>0{index + 1}</span>
            <p>{note}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
