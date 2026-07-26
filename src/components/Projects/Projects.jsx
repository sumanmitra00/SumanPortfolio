import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import useInView from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";
import { projects, projectFilters } from "../../data/portfolioData";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./Projects.css";

export default function Projects() {
  const [ref, inView] = useInView();
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-subtitle">
            A mix of full-stack applications and pure frontend builds — each one solving a real
            interface or data problem, not a tutorial clone.
          </p>
        </motion.div>

        <motion.div
          className="projects__filters"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.1}
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              className={`projects__filter cursor-hover ${
                activeFilter === filter ? "projects__filter--active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                className="project-card glass-card cursor-hover"
                variants={fadeUp}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setActiveProject(project)}
                whileHover={{ y: -8 }}
              >
                <div className="project-card__image">
                  <span className="project-card__initials">
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div className="project-card__overlay">
                    <FiArrowUpRight />
                  </div>
                </div>

                <div className="project-card__body">
                  <span className="project-card__category">{project.category}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__tagline">{project.tagline}</p>

                  <div className="project-card__tech">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="project-card__tag">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="project-card__tag">+{project.techStack.length - 3}</span>
                    )}
                  </div>

                  <div className="project-card__links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.title} GitHub repository`}
                      className="project-card__link"
                    >
                      <FiGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${project.title} live demo`}
                      className="project-card__link"
                    >
                      <FiExternalLink /> Live
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
