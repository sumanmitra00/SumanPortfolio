import { percent } from "framer-motion";

export const personalInfo = {
  name: "Suman Mitra",
  fullTitle: "Full-Stack Web Developer",
  taglineRoles: [
    "Frontend Developer",
    "MERN Stack Developer",
    "Software Developer",
    "Tech Enthusiast",
  ],
  summary:
    "",
  location: "Kolkata, India",
  email: "mitrasuman073@gmail.com",
  github: "https://github.com/sumanmitra00",
  linkedin: "https://www.linkedin.com/in/suman-mitra-228958251/",
  resumeUrl: "https://drive.google.com/file/d/1Ki1f0se3yYV0Ug1rlkHe0pgkAoGrsCoV/view?usp=sharing",
  yearsCoding: 4,
  availability: "Open to opportunities",
};

export const stats = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Years Coding", value: 4, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
  { label: "LeetCode Problems Solved", value: 50, suffix: "+" },
];

export const funFacts = [
  "Won my college tech fest for a full-stack build.",
  "Represented my team at Smart India Hackathon 2024.",
  "Built multiple full-stack web applications from scratch.",
  "Focused on writing clean, maintainable, and scalable code.",
  "Enjoy building projects that solve practical challenges.",
  "Curious about technology, driven by innovation.",
  "Building projects that combine creativity and logic."
];

export const aboutTimeline = [
  {
    year: "2022",
    title: "Started B.Tech in Computer Science in Swami Vivekananda Institute of Science & Technology",
    description:
      "Built a strong foundation in programming, problem-solving, and the core concepts of computer science.",
  },
  {
    year: "2023",
    title: "Discovered Web Development",
    description:
      "Started building responsive websites and interactive applications, turning ideas into real-world projects.",
  },
  {
    year: "2024",
    title: "Smart India Hackathon & Tech Fest Win",
    description:
      "Competed at Smart India Hackathon 2024 and won my college tech fest, validating a shift toward product-focused thinking.",
  },
  {
    year: "2025 – Present",
    title: "Building a Serious Portfolio",
    description:
      "Shipping full-stack MERN projects, a Flask-based ML wellness platform, and preparing to enter the job market as a frontend-leaning full-stack engineer.",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "C++", level: 80 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 80 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "Flask", level: 78 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 88 },
    ],
  },
];

export const projects = [
  {
    id: "grandnest",
    title: "GrandNest",
    category: "React",
    tagline: "Luxury hotel booking platform",
    description:
      "A luxury hotel booking web application built with React, Vite, Tailwind CSS, and react-router-dom, focused on a fast, polished booking flow.",
    features: [
      "Multi-page routing with react-router-dom",
      "Responsive room browsing and booking flow",
      "Tailwind-based design system",
      "Resolved a React 19 StrictMode useEffect cleanup bug",
    ],
    challenges:
      "Diagnosed and fixed a subtle React 19 StrictMode double-invocation bug in a useEffect cleanup path that was causing inconsistent booking state.",
    techStack: ["React", "Vite", "Tailwind CSS", "React Router DOM"],
    github: "https://github.com/sumanmitra00/GrandNest",
    demo: "https://sumanmitra00.github.io/GrandNest/",
    image: "grandnest",
  },
  {
    id: "brew-haven",
    title: "Brew Haven",
    category: "Frontend",
    tagline: "Multi-section coffee shop website",
    description:
      "A fully custom, multi-section coffee shop marketing website built with pure HTML, CSS, and vanilla JavaScript — no frameworks.",
    features: [
      "Hand-rolled CSS animations across sections",
      "Menu, story, and location sections",
      "Fully responsive with no framework overhead",
      "Solved CSS animation visibility and asset naming bugs",
    ],
    challenges:
      "Tracked down CSS animation visibility issues caused by transform/overflow interactions, and resolved file naming collisions in the asset pipeline.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/sumanmitra00/CoffeeShop",
    demo: "https://sumanmitra00.github.io/CoffeeShop/",
    image: "brew-haven",
  },
  {
    id: "Finance & Budget Tracker",
    title: "Personal Finance & Budget Tracker",
    category: "Full-Stack",
    tagline: "MERN stack Personal Finance & Budget Tracker",
    description:
      "A full-stack personal finance and budget tracking application built on the MERN stack, featuring secure authentication, transaction management, budgeting, and financial insights end to end.",
    features: [
      "JWT-based authentication",
      "Income and expense management",
      "Budget planning and savings tracking",
      "Financial dashboard with analytics",
    ],
    challenges:
      "Implementing secure authentication and maintaining accurate financial calculations and managing complex transaction flows while ensuring a smooth user experience.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/johndev/hotel-booking-mern",
    demo: "https://hotel-booking-demo.example.com",
    image: "Finance & Budget Tracker",
  },
  {
    id: "wellness-platform",
    title: "Mental Health Counselling Tool",
    category: "Web Dev + ML",
    tagline: "ML-integrated wellness web app",
    description:
      "A wellness platform combining a React front end, Python Flask backend, MongoDB storage, and machine learning components for personalized recommendations.",
    features: [
      "Flask API serving ML-driven recommendations",
      "React dashboard for tracking wellness metrics",
      "MongoDB for flexible user data storage",
      "Modular ML pipeline decoupled from the API layer",
    ],
    challenges:
      "Integrated a Python ML pipeline with a JavaScript front end cleanly by exposing model predictions through a dedicated Flask REST layer.",
    techStack: ["React", "Flask", "Python", "MongoDB", "Machine Learning"],
    github: "https://github.com/johndev/wellness-platform",
    demo: "https://wellness-platform-demo.example.com",
    image: "wellness",
  },
];

export const projectFilters = ["All", "React", "Frontend", "Full-Stack"];

export const experience = [
  {
    role: "Frontend Developer",
    org: "Mental Health Counselling Tool",
    period: "2025-26",
    description:
      "Built the frontend of an AI-powered mental health counseling platform, creating responsive interfaces for assessments, dashboards, chatbot interactions, and personalized user experiences.",
    tags: ["React", "Frontend", "JavaScript", "Team Project"],
  },

  {
    role: "Regular Participant in Leetcode and GFG",
    org: "Contributing from 2025",
    period: "2025",
    description:
      "Actively solved coding challenges on LeetCode and GeeksforGeeks to improve DSA and logical thinking.",
    tags: ["DSA", "Problem Solving", "Logic"],
  },

  {
    role: "Hackathon Participant",
    org: "Smart India Hackathon 2024",
    period: "2024",
    description:
      "Collaborated in a team to design and build a working prototype under time pressure, focusing on full-stack implementation and demo readiness.",
    tags: ["Teamwork", "Full-Stack", "Presentation"],
  },
  {
    role: "Tech Fest Winner",
    org: "College Technical Festival",
    period: "2024",
    description:
      "Won the college tech fest with a full-stack web project, standing out for both technical execution and presentation quality.",
    tags: ["React", "Node.js", "Presentation"],
  },
  {
    role: "Technology Explorer",
    org: "Self-Learning Journey",
    period: "2023",
    description:
      "Explored web development, programming fundamentals, and modern technologies through hands-on projects and continuous learning.",
    tags: ["HTML", "CSS", "JavaScript", "Learning"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Swami Vivekananda Institute of Science & Technology (MAKAUT)",
    period: "2022 – 2026",
    cgpa: "8.01 / 10",
    description:
      "Successfully completed B.Tech in Computer Science, strengthening skills in problem solving,  web development, data structures & algorithms, and improving communication skills.",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Radhapur High School (WBCHSE)",
    period: "2022",
    percentage: "92.2",
    description:
      "Completed higher secondary education on Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary (Class X)",
    institution: "Radhapur High School (WBBSE)",
    period: "2020",
    cgpa: "—",
    description:
      "Completed higher secondary education on Physics, Chemistry, and Mathematics.",
  },
];

export const certificates = [
  {
    title: "React – Advanced Concepts",
    issuer: "Online Learning Platform",
    year: "2024",
    link: "#",
  },
  {
    title: "Python for Data Structures & Algorithms",
    issuer: "Online Learning Platform",
    year: "2024",
    link: "#",
  },
  {
    title: "Full-Stack Web Development (MERN)",
    issuer: "Online Learning Platform",
    year: "2023",
    link: "#",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Online Learning Platform",
    year: "2024",
    link: "#",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2024",
    description: "Selected to compete at national-level hackathon representing the college team.",
    icon: "trophy",
  },
  {
    title: "College Tech Fest Winner",
    description: "Won first place for a full-stack web application at the annual tech fest.",
    icon: "award",
  },
  {
    title: "8+ Projects Shipped",
    description: "Built and deployed a range of frontend and full-stack applications.",
    icon: "code",
  },
  {
    title: "Competitive Programming",
    description: "Solved DP and algorithmic problems including 3D dynamic programming challenges in Java.",
    icon: "target",
  },
];

export const services = [
  {
    title: "Frontend Development",
    description: "Building fast, accessible, pixel-precise interfaces with React and modern CSS.",
    icon: "layout",
  },
  {
    title: "React Development",
    description: "Component architecture, state management, and performance tuning for React apps.",
    icon: "code",
  },
  {
    title: "Responsive Design",
    description: "Interfaces that hold up cleanly from large desktops down to small mobile screens.",
    icon: "smartphone",
  },
  {
    title: "REST API Integration",
    description: "Connecting front ends to Node/Express or Flask APIs with clean data flow.",
    icon: "server",
  },
  {
    title: "UI Development",
    description: "Design-system thinking — reusable components, consistent spacing, and motion.",
    icon: "figma",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
