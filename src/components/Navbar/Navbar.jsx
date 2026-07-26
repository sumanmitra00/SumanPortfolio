import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navLinks, personalInfo } from "../../data/portfolioData";
import "./Navbar.css";

export default function Navbar() {
  const scrolled = useScrollPosition(40);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo cursor-hover">
          <span className="navbar__logo-bracket">{"<"}</span>
          Suman
          <span className="navbar__logo-bracket">{"/>"}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link cursor-hover">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href={personalInfo.resumeUrl}
            className="btn btn-primary btn-sm cursor-hover"
            download
          >
            <FiDownload /> Resume
          </a>
        </div>

        <button
          className="navbar__toggle cursor-hover"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={closeMenu}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              className="btn btn-primary btn-sm navbar__mobile-resume"
              download
            >
              <FiDownload /> Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
