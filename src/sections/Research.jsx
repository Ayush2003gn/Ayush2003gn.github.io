import Section from "../components/Section.jsx";
import { researchQuestions } from "../data/portfolio.js";

export default function Research() {
  return (
    <Section id="research" eyebrow="Open Loops" title="Questions Im Exploring">
      <div className="research-orbit">
        {researchQuestions.map((question, index) => (
          <article key={question} style={{ "--i": index }}>
            <span />
            <p>{question}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
