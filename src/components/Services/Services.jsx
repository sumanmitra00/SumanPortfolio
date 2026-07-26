import { motion } from "framer-motion";
import { FiLayout, FiCode, FiSmartphone, FiServer, FiFigma } from "react-icons/fi";
import useInView from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";
import { services } from "../../data/portfolioData";
import "./Services.css";

const iconMap = {
  layout: FiLayout,
  code: FiCode,
  smartphone: FiSmartphone,
  server: FiServer,
  figma: FiFigma,
};

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <span className="section-eyebrow">What I Do</span>
          <h2 className="section-title">
            How I can <span className="gradient-text">help</span>
          </h2>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FiCode;
            return (
              <motion.div
                key={service.title}
                className="service-card glass-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="service-card__icon">
                  <Icon />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
