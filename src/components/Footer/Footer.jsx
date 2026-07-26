import { navLinks, personalInfo } from "../../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__logo cursor-hover">
          <span className="footer__logo-bracket">{"<"}</span>
          Suman
          <span className="footer__logo-bracket">{"/>"}</span>
        </a>

        <nav className="footer__links" aria-label="Footer">
          {navLinks.slice(0, 6).map((link) => (
            <a key={link.href} href={link.href} className="footer__link cursor-hover">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          &copy; {year} {personalInfo.name}. Built with React &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
