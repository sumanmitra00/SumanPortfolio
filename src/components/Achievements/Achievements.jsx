import { motion } from "framer-motion";
import { FiAward, FiCode, FiTarget } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import useInView from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";
import { achievements } from "../../data/portfolioData";
import "./Achievements.css";

const iconMap = {
  trophy: FaTrophy,
  award: FiAward,
  code: FiCode,
  target: FiTarget,
};

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section id="achievements" className="section achievements" ref={ref}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <span className="section-eyebrow">Achievements</span>
          <h2 className="section-title">
            Milestones worth <span className="gradient-text">mentioning</span>
          </h2>
        </motion.div>

        <motion.div
          className="achievements__grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] || FiAward;
            return (
              <motion.div
                key={item.title}
                className="achievement-card glass-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="achievement-card__icon">
                  <Icon />
                </div>
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__desc">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
