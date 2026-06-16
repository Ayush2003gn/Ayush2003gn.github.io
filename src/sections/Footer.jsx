import logo from "../assets/akm-logo-transparent.png";

export default function Footer() {
  return (
    <footer className="panel footer-panel" id="footer">
      <div className="footer-inner">
        <img src={logo} alt="AKM" />
        <p>Everything is connected.</p>
        <span>Understanding begins with relations.</span>
      </div>
    </footer>
  );
}
