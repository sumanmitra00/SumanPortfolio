import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Achievements from "../components/Achievements/Achievements";
import Certificates from "../components/Certificates/Certificates";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Suman — Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of John, a final-year CS student and full-stack web developer specializing in React, Node.js, and MongoDB."
        />
        <meta property="og:title" content="John — Full-Stack Web Developer" />
        <meta
          property="og:description"
          content="Portfolio of John, a final-year CS student and full-stack web developer specializing in React, Node.js, and MongoDB."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certificates />
      <Services />
      <Contact />
    </>
  );
}
