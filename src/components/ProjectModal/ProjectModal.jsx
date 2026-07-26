import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal__close cursor-hover" onClick={onClose} aria-label="Close project details">
          <FiX />
        </button>

        <div className="modal__hero">
          <span className="modal__hero-initials">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
        </div>

        <div className="modal__body">
          <span className="modal__category">{project.category}</span>
          <h3 id="modal-title" className="modal__title">
            {project.title}
          </h3>
          <p className="modal__description">{project.description}</p>

          <div className="modal__section">
            <h4>Key Features</h4>
            <ul className="modal__list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="modal__section">
            <h4>Challenges Solved</h4>
            <p className="modal__challenge">{project.challenges}</p>
          </div>

          <div className="modal__section">
            <h4>Tech Stack</h4>
            <div className="modal__tech">
              {project.techStack.map((tech) => (
                <span key={tech} className="modal__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal__actions">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline cursor-hover">
              <FiGithub /> View Code
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary cursor-hover">
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
