import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import useInView from "../../hooks/useInView";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "../../utils/motionVariants";
import { personalInfo, aboutTimeline, funFacts } from "../../data/portfolioData";
import "./About.css";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">
            The story behind <span className="gradient-text">the code</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeLeft}
            custom={0.1}
          >
            <p>{personalInfo.summary}</p>
            <p>
              Computer Science and Engineering graduate with a strong passion for building modern, user-friendly web applications and solving real-world problems through technology. Throughout my academic journey, I focused on strengthening my skills by developing practical projects and exploring both frontend and backend development. I enjoy creating clean, responsive interfaces while understanding the logic that powers them behind the scenes. Every project I build helps me improve my problem-solving abilities, coding practices, and understanding of software development. I believe that continuous learning and consistency are the keys to becoming a better developer. As a fresher, I am eager to begin my professional career, contribute to impactful projects, and collaborate with experienced teams. My goal is to grow into a skilled software engineer while building solutions that create meaningful value for users.

            </p>

            <ul className="about__facts" aria-label="Fun facts">
              {funFacts.map((fact) => (
                <li key={fact} className="about__fact">
                  <FiCheckCircle className="about__fact-icon" />
                  {fact}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="about__timeline"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeRight}
            custom={0.2}
          >
            <motion.ol
              variants={staggerContainer(0.15)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {aboutTimeline.map((item) => (
                <motion.li key={item.year} className="timeline-item" variants={fadeUp}>
                  <div className="timeline-item__marker" />
                  <div className="timeline-item__content glass-card">
                    <span className="timeline-item__year">{item.year}</span>
                    <h3 className="timeline-item__title">{item.title}</h3>
                    <p className="timeline-item__desc">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
