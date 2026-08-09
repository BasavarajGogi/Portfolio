# Basavaraj Gogi — Automotive 3D ECE Portfolio

A **cinematic, interactive 3D single-page portfolio website** built for **Basavaraj Gogi**, an Electronics & Communication Engineering (ECE) student at Atria Institute of Technology specializing in embedded systems, microcontrollers, and hardware development.

Designed with an **automotive engineering garage & race telemetry aesthetic**, using **Three.js + React Three Fiber + GSAP**.

---

## 🛠️ Technology Stack

- **Framework**: Vite + React 18 + TypeScript
- **3D Engine**: Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei`
- **Animations**: GSAP & GSAP ScrollTrigger
- **Styling**: Tailwind CSS with custom dark automotive HUD design system
- **Icons**: Lucide React
- **Typography**: Google Fonts (Rajdhani, Space Grotesk, Inter, JetBrains Mono)

---

## 🚀 Quick Start & Local Setup

### 1. Installation

Ensure Node.js (v18+ or v20+) is installed on your machine.

```bash
npm install
```

### 2. Development Server

Start the interactive development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

Build the optimized application for production:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

---

## 📁 File Structure & Placeholders

```text
portfolio/
├── public/
│   ├── Basavaraj-Gogi-Resume.pdf  <-- Place your official PDF resume file here
│   └── favicon.svg                <-- Automotive + circuit line-art icon
├── src/
│   ├── components/
│   │   ├── Scene/
│   │   │   ├── AutomotiveCanvas.tsx   <-- WebGL Canvas & Fallback handler
│   │   │   ├── PrototypeCar.tsx       <-- Unbranded autonomous prototype sports car 3D model
│   │   │   ├── RoadEnvironment.tsx    <-- Reflective asphalt road, gantries & dust
│   │   │   ├── CameraChoreography.tsx <-- GSAP section camera orbit & lerp easing
│   │   │   └── GarageEnvironment.tsx <-- Industrial garage spotlights
│   │   ├── sections/
│   │   │   ├── Hero.tsx               <-- "Ignition" landing screen
│   │   │   ├── About.tsx              <-- "01 // THE DRIVER" Engineering ID License Card
│   │   │   ├── Education.tsx          <-- "02 // THE ROUTE" Academic checkpoints
│   │   │   ├── Projects.tsx           <-- "03 // THE GARAGE" Hardware prototype cards
│   │   │   ├── Skills.tsx             <-- "04 // THE DASHBOARD" Instrument cluster gauges
│   │   │   ├── Certifications.tsx     <-- "05 // LICENSE" Engineering plate badges
│   │   │   ├── Achievements.tsx       <-- "06 // TROPHY CASE" Garage wall displays
│   │   │   └── Contact.tsx            <-- "07 // PIT STOP" Direct details & contact form
│   │   └── UI/
│   │       ├── Navbar.tsx             <-- Dashboard sticky header
│   │       ├── LoadingScreen.tsx      <-- Speedometer percentage loader
│   │       ├── ScrollTelemetry.tsx    <-- Vertical progress & KM odometer
│   │       ├── CustomCursor.tsx       <-- Desktop HUD reticle cursor
│   │       ├── ProjectModal.tsx       <-- Detailed project schematic view
│   │       └── Footer.tsx             <-- Telemetry footer
│   ├── data/
│   │   └── portfolioData.ts         <-- Centralized verified portfolio data
│   ├── hooks/
│   │   ├── useReducedMotion.ts      <-- Accessibility preference detection
│   │   └── useWebGLSupport.ts       <-- WebGL availability check
│   └── styles/
│       └── index.css                <-- Dark telemetry tokens & custom CSS
```

---

## 📑 Customization Instructions

### 📄 1. Resume File Placement
Replace the placeholder at `/public/Basavaraj-Gogi-Resume.pdf` with your actual PDF resume file. The "DOWNLOAD RESUME" button automatically downloads this file.

### 🔗 2. GitHub Project Repositories
Update project repository URLs in `src/data/portfolioData.ts` under `PROJECTS_DATA` when public GitHub repositories become available.

### 📜 3. Certifications Details
Update certification titles and verification URLs in `src/data/portfolioData.ts` under `CERTIFICATIONS_DATA` once exact certificate IDs are confirmed.

### ✉️ 4. Contact Form Backend Integration
To process form submissions on production, connect the form handler in `src/components/sections/Contact.tsx` to:
- **Formspree** (`https://formspree.io/f/YOUR_FORM_ID`)
- **EmailJS** (`emailjs.send(...)`)
- **Web3Forms** (`https://api.web3forms.com/submit`)

---

## 🌐 Deployment Options

### Vercel Deployment
1. Import the repository into Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`

### Netlify Deployment
1. Connect repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📄 License & Attribution
© 2026 Basavaraj Gogi. Built with Three.js, React Three Fiber, GSAP & Tailwind CSS.
