import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import useInView from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";
import { education } from "../../data/portfolioData";
import "./Education.css";

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <span className="section-eyebrow">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">foundation</span>
          </h2>
        </motion.div>

        <motion.div
          className="education__grid"
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {education.map((item) => (
            <motion.div key={item.degree} className="education__card glass-card" variants={fadeUp}>
              <div className="education__icon">
                <FiBookOpen />
              </div>
              <span className="education__period">{item.period}</span>
              <h3 className="education__degree">{item.degree}</h3>
              <span className="education__institution">{item.institution}</span>
              <p className="education__desc">{item.description}</p>
              {item.cgpa !== "—" && (
                <div className="education__cgpa">
                  CGPA <strong>{item.cgpa}</strong>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
