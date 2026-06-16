import Section from "../components/Section.jsx";

const flow = ["Observe", "Connect", "Structure", "Build", "Improve"];
const principles = [
  "Pattern recognition",
  "First principles",
  "Relation-based thinking",
  "System building",
  "Learning through experimentation",
];

export default function SystemsThinking() {
  return (
    <Section id="systems" eyebrow="Thinking Model" title="How I Think">
      <div className="flow-row">
        {flow.map((step, index) => (
          <div className="flow-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
      <div className="principle-grid">
        {principles.map((principle) => (
          <article key={principle}>
            <span />
            <h3>{principle}</h3>
            <p>
              A practical lens for turning scattered inputs into decisions,
              workflows, and better questions.
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
