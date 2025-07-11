# 🚀 Om Shree - Portfolio Website

A modern, responsive portfolio website built with React.js, Three.js, and Tailwind CSS. This project showcases my skills as a front-end developer with interactive 3D elements, smooth animations, and a professional design.

![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.166.1-black?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.3.1-646CFF?style=for-the-badge&logo=vite)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Key Components](#key-components)
- [3D Elements](#3d-elements)
- [Contact Form](#contact-form)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This portfolio website is designed to showcase my professional experience, technical skills, and projects. It features:

- **Interactive 3D Elements**: Desktop PC and Earth models using Three.js
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Modern UI/UX**: Clean, professional design with gradient effects
- **Contact Integration**: Functional contact form with Web3Forms API

## ✨ Features

### 🎨 Visual Elements

- **Hero Section**: Animated typewriter effect with 3D desktop PC model
- **About Section**: Service cards with tilt effects and smooth animations
- **Experience Timeline**: Professional experience with company logos
- **Projects Showcase**: Interactive project cards with live demos
- **Contact Form**: Functional contact form with social media links
- **Stars Canvas**: Animated background with Three.js

### 🎮 Interactive Features

- **3D Models**: Rotatable desktop PC and Earth models
- **Parallax Effects**: Tilt animations on cards and elements
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Responsive Navigation**: Mobile-friendly navigation menu
- **Form Validation**: Contact form with real-time validation

### 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive layout for tablets
- **Desktop Experience**: Enhanced experience on larger screens
- **Cross-Browser**: Compatible with all modern browsers

## 🛠️ Technologies Used

### Frontend Framework

- **React.js 18.3.1**: Modern React with hooks and functional components
- **Vite 5.3.1**: Fast build tool and development server

### 3D Graphics & Animation

- **Three.js 0.166.1**: 3D graphics library
- **@react-three/fiber 8.16.8**: React renderer for Three.js
- **@react-three/drei 9.108.3**: Useful helpers for React Three Fiber
- **Framer Motion 11.3.2**: Animation library for React

### Styling & UI

- **Tailwind CSS 3.4.4**: Utility-first CSS framework
- **CSS3**: Custom styles and animations
- **HTML5**: Semantic markup

### Additional Libraries

- **React Router DOM 6.24.1**: Client-side routing
- **React Parallax Tilt 1.7.232**: Tilt effects for cards
- **React Simple Typewriter 5.0.1**: Typewriter animation effect
- **React Vertical Timeline Component 3.6.0**: Timeline component
- **@emailjs/browser 4.4.1**: Email service integration
- **Maath 0.10.8**: Math utilities for 3D calculations

## 📁 Project Structure

```
Portfolio_Website/
├── public/
│   ├── desktop_pc/          # 3D desktop PC model files
│   ├── planet/              # 3D Earth model files
│   └── logo.svg
├── src/
│   ├── assets/              # Images, icons, and static files
│   │   ├── company/         # Company logos
│   │   └── tech/           # Technology icons
│   ├── components/          # React components
│   │   ├── canvas/         # Three.js 3D components
│   │   │   ├── Ball.jsx
│   │   │   ├── Computers.jsx
│   │   │   ├── Earth.jsx
│   │   │   └── Stars.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Works.jsx
│   ├── constants/           # Data and configuration
│   ├── hoc/                # Higher-order components
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md
```

## 🚀 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📖 Usage

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Customization

1. **Update Personal Information**

   - Edit `src/constants/index.js` to update your information
   - Modify experience, projects, and contact details

2. **Change Styling**

   - Update `tailwind.config.js` for color scheme changes
   - Modify `src/styles.js` for custom styles

3. **Add New Projects**

   - Add project details to the `projects` array in `src/constants/index.js`
   - Include project images in `src/assets/`

4. **Customize 3D Models**
   - Replace 3D models in `public/desktop_pc/` and `public/planet/`
   - Update model references in canvas components

## 🎨 Key Components

### Hero Section (`src/components/Hero.jsx`)

- Animated typewriter effect
- 3D desktop PC model
- Smooth scroll navigation
- Responsive design

### About Section (`src/components/About.jsx`)

- Service cards with tilt effects
- Animated text with typewriter
- Professional overview

### Experience Section (`src/components/Experience.jsx`)

- Timeline of professional experience
- Company logos and details
- Responsive timeline layout

### Projects Section (`src/components/Works.jsx`)

- Interactive project cards
- GitHub and live demo links
- Technology tags
- Tilt animations

### Contact Section (`src/components/Contact.jsx`)

- Functional contact form
- Social media links
- 3D Earth model
- Form validation

## 🌟 3D Elements

### Desktop PC Model (`src/components/canvas/Computers.jsx`)

- Interactive 3D desktop computer
- Orbit controls for rotation
- Responsive scaling for mobile
- Lighting and shadows

### Earth Model (`src/components/canvas/Earth.jsx`)

- Rotating Earth globe
- Atmospheric effects
- Contact section background

### Stars Canvas (`src/components/canvas/Stars.jsx`)

- Animated star field
- Background effect
- Performance optimized

## 📧 Contact Form

The contact form uses **Web3Forms** API for reliable email delivery:

- **Form Validation**: Client-side validation
- **Success/Error Handling**: User feedback
- **Spam Protection**: Built-in protection
- **Responsive Design**: Mobile-friendly layout

## 🚀 Deployment

### Netlify Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables if needed

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repository-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Build and deploy: `npm run build && npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **LinkedIn**: [Om Shree](https://www.linkedin.com/in/om-shree-04372118a/)
- **Twitter**: [@OmShree0709](https://x.com/OmShree0709)
- **Email**: omshree0709@gmail.com
- **Resume**: [Google Drive](https://drive.google.com/drive/folders/1kGPLlKSsYyNPrMo63NKDuUIeHOM93UQA?usp=sharing)

---

⭐ **Star this repository if you found it helpful!**
