
# 🚀 Suman Mitra — Premium Portfolio

A modern, fully responsive, and production-ready personal portfolio website built with **React + Vite**. Designed with smooth animations, clean UI, SEO optimization, and an elegant user experience to showcase your skills, projects, achievements, and resume.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

---

## ✨ Features

- 🎨 Modern & Premium UI Design
- 📱 Fully Responsive (Mobile, Tablet & Desktop)
- ⚡ Built with React 19 + Vite
- 🎬 Smooth Animations using Framer Motion
- 🌙 Dark Theme
- ⌨️ Animated Typing Effect
- 📂 Dynamic Portfolio Data
- 📜 Resume Download
- 📧 Contact Form with EmailJS
- 🎓 Certificates Carousel
- 🔍 SEO Friendly
- 🚀 Fast Performance

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React 19, Vite |
| Styling | Custom CSS |
| Animation | Framer Motion |
| Icons | React Icons |
| Routing | React Router DOM |
| Typing Effect | Typed.js |
| Contact Form | EmailJS |
| Carousel | Swiper.js |
| SEO | React Helmet Async |

---

## 📁 Project Structure

```
src/
│
├── components/        # Reusable UI Components
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Experience/
│   ├── Education/
│   ├── Certificates/
│   ├── Contact/
│   └── Footer/
│
├── pages/
│   ├── Home.jsx
│   └── NotFound.jsx
│
├── data/
│   └── portfolioData.js
│
├── hooks/
│   ├── useScrollPosition.js
│   └── useInView.js
│
├── utils/
│   └── motionVariants.js
│
├── css/
│   ├── variables.css
│   └── global.css
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/SumanPortfolio.git
```

### Navigate into the project

```bash
cd SumanPortfolio
```

### Install dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## ⚙️ Customization

Almost everything can be edited from a **single file**:

```
src/data/portfolioData.js
```

Update your:

- Name
- About
- Skills
- Projects
- Experience
- Education
- Certificates
- Achievements
- Services
- Social Links
- Contact Information

The changes automatically reflect throughout the website.

---

## 📧 Contact Form Setup

This project uses **EmailJS**.

Create an EmailJS account and replace the following placeholders inside:

```
src/components/Contact/Contact.jsx
```
---

## 📄 Resume Setup

Place your resume inside the **public** folder.

```
public/
└── resume.pdf
```

The Navbar and Hero section already point to:

```
/resume.pdf
```

---

## 🎨 Theme Customization

All design tokens are stored in:

```
src/css/variables.css
```

You can easily customize:

- Colors
- Gradients
- Typography
- Border Radius
- Shadows
- Animation Timing
- Spacing

without touching component styles.

---

## 📱 Responsive Design

Optimized for:

- ✅ Desktop
- ✅ Laptop
- ✅ Tablet
- ✅ Mobile

---

## 📈 Performance

- Optimized Assets
- Lazy Loading
- Smooth Page Transitions
- Fast Vite Build
- SEO Friendly
- Clean Component Architecture

---

## 📚 Dependencies

```json
React
Vite
Framer Motion
React Router DOM
React Icons
Typed.js
Swiper.js
EmailJS
React Helmet Async
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---


## 👨‍💻 Author

**Suman Mitra**
