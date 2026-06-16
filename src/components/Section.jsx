export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section className={`panel ${className}`} id={id} data-section={id}>
      <div className="panel__inner">
        {(eyebrow || title) && (
          <header className="section-heading">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
