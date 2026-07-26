import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";
import useInView from "../../hooks/useInView";
import { fadeUp, fadeLeft, fadeRight } from "../../utils/motionVariants";
import { personalInfo } from "../../data/portfolioData";
import "./Contact.css";

// Replace these with your own EmailJS credentials: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!form.message.trim()) nextErrors.message = "Message can't be empty";
    else if (form.message.trim().length < 10) nextErrors.message = "Say a little more (10+ characters)";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      // Configure EMAILJS_SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY above to enable real sending.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">great</span>
          </h2>
          <p className="section-subtitle">
            Have a role, project, or opportunity in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeLeft}
          >
            <div className="contact__info-item glass-card">
              <FiMail className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="contact__info-value">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="contact__info-item glass-card">
              <FiMapPin className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-value">{personalInfo.location}</span>
              </div>
            </div>
            <div className="contact__info-socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero__social-icon cursor-hover" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero__social-icon cursor-hover" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeRight}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span className="form-error" id="name-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span className="form-error" id="email-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span className="form-error" id="message-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary contact__submit cursor-hover" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  className="form-status form-status--success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <FiCheck /> Message sent — I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="form-status form-status--error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Something went wrong — please email me directly instead.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
