import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";
import { skillCategories } from "../../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">
            Tools I reach for <span className="gradient-text">every day</span>
          </h2>
          <p className="section-subtitle">
            A working toolkit built through real projects rather than tutorials alone —
            organized by where each piece fits in the stack.
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.category} className="skills__card glass-card" variants={fadeUp}>
              <h3 className="skills__category">{category.category}</h3>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-row__top">
                      <span className="skill-row__name">{skill.name}</span>
                      <span className="skill-row__level">{skill.level}%</span>
                    </div>
                    <div className="skill-row__track">
                      <motion.div
                        className="skill-row__fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
