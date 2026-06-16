import { ArrowDownRight, Mail, Network } from "lucide-react";
import profile from "../assets/profile.png";
import logo from "../assets/akm-logo-transparent.png";
import solidLogo from "../assets/akm-logo.png";
import { identity } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section className="panel hero-panel" id="origin" data-section="origin">
      <div className="hero-grid">
        <div className="hero-photo">
          <img src={profile} alt="Ayush Kumar Mishra" />
          <div className="photo-signal">
            <span />
            Hassan, Karnataka, India
          </div>
        </div>

        <div className="hero-copy">
          <div className="identity-strip">
            {identity.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <h1>{identity.displayName}</h1>
          <p className="hero-theme">{identity.theme}</p>
          <p className="hero-headline">{identity.headline}</p>
          <p className="hero-support">{identity.support}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button--primary">
              <Network size={18} />
              Explore Projects
            </a>
            <a href="#contact" className="button button--ghost">
              <Mail size={18} />
              Contact
            </a>
          </div>
        </div>

        <div className="hero-symbol" aria-hidden="true">
          <img src={logo} alt="" className="hero-symbol__glow" />
          <img src={solidLogo} alt="" className="hero-symbol__solid" />
          <ArrowDownRight className="hero-vector" size={44} />
        </div>
      </div>
    </section>
  );
}
