import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import Section from "../components/Section.jsx";
import { handles, links } from "../data/portfolio.js";

const primary = [
  { label: "GitHub", value: handles.github, href: links.github, Icon: Github },
  { label: "LinkedIn", value: handles.linkedin, href: links.linkedin, Icon: Linkedin },
  { label: "Email", value: handles.email, href: links.email, Icon: Mail },
];

const secondary = [
  { label: "Instagram", value: handles.instagram, href: links.instagram, Icon: Instagram },
  { label: "X", value: handles.x, href: links.x, Icon: MessageCircle },
  { label: "Discord", value: handles.discord, href: "#", Icon: MessageCircle },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Connection Layer" title="Lets Connect">
      <div className="contact-grid">
        {primary.map(({ label, value, href, Icon }) => (
          <a className="contact-card contact-card--primary" href={href} key={label} target={label === "Email" ? undefined : "_blank"} rel="noreferrer">
            <Icon size={24} />
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </div>
      <div className="contact-secondary">
        {secondary.map(({ label, value, href, Icon }) => (
          <a href={href} key={label} target={href === "#" ? undefined : "_blank"} rel="noreferrer">
            <Icon size={17} />
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </div>
    </Section>
  );
}
