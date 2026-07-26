import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";
import { experience } from "../../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">applied it</span>
          </h2>
          <p className="section-subtitle">
            Hands-on experience from hackathons, competitions, and independent project work.
          </p>
        </motion.div>

        <motion.div
          className="experience__list"
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experience.map((item, i) => (
            <motion.div key={item.role + i} className="experience__card glass-card" variants={fadeUp}>
              <div className="experience__card-header">
                <div>
                  <h3 className="experience__role">{item.role}</h3>
                  <span className="experience__org">{item.org}</span>
                </div>
                <span className="experience__period">{item.period}</span>
              </div>
              <p className="experience__desc">{item.description}</p>
              <div className="experience__tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="experience__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
