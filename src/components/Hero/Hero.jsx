import { useEffect, useRef } from "react";
import Typed from "typed.js";
import profilePhoto from "../../assets/images/SM.png";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowDown } from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { personalInfo, stats } from "../../data/portfolioData";
import "./Hero.css";

const floatingIcons = [
  { Icon: SiReact, className: "icon-1" },
  { Icon: SiJavascript, className: "icon-2" },
  { Icon: SiPython, className: "icon-3" },
  { Icon: SiMongodb, className: "icon-4" },
  { Icon: SiNodedotjs, className: "icon-5" },
  { Icon: SiTailwindcss, className: "icon-6" },
];

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: personalInfo.taglineRoles,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1600,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__particles" />
      </div>

      {floatingIcons.map(({ Icon, className }, i) => (
        <motion.div
          key={className}
          className={`hero__float-icon ${className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            className="hero__badge"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge-dot" />
            {personalInfo.availability}
          </motion.div>

          <motion.h1
            className="hero__heading"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            <br />
            <span ref={typedRef} className="hero__typed" />
          </motion.h1>

          <motion.p
            className="hero__summary"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            className="hero__meta"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <span className="hero__meta-item">
              <FiMapPin /> {personalInfo.location}
            </span>
            <span className="hero__meta-item">{personalInfo.yearsCoding}+ years coding</span>
          </motion.div>

          <motion.div
            className="hero__cta"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <a href={personalInfo.resumeUrl} download className="btn btn-primary cursor-hover">
              Download Resume
            </a>
            <a href="#projects" className="btn btn-outline cursor-hover">
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hero__social-icon cursor-hover"
            >
              <FiGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hero__social-icon cursor-hover"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="hero__social-icon cursor-hover"
            >
              <FiMail />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="hero__ring hero__ring--outer" />
          <div className="hero__ring hero__ring--inner" />
          <div className="hero__avatar">
            <img src={profilePhoto} alt="Suman" className="hero__avatar-img" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <div className="container hero__stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="hero__scroll-indicator cursor-hover"
        aria-label="Scroll to About"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
