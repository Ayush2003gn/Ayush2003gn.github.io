const navItems = [
  ["origin", "Origin"],
  ["relations", "Relations"],
  ["about", "About"],
  ["systems", "Thinking"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["roadmap", "Roadmap"],
  ["writing", "Notes"],
  ["research", "Questions"],
  ["contact", "Contact"],
];

export default function NavRail() {
  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  return (
    <nav className="nav-rail" aria-label="Portfolio sections">
      <span className="nav-rail__mark">AKM</span>
      <div className="nav-rail__items">
        {navItems.map(([id, label]) => (
          <button key={id} type="button" onClick={() => navigate(id)} title={label}>
            <span />
            <em>{label}</em>
          </button>
        ))}
      </div>
    </nav>
  );
}
