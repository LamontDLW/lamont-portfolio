import React from "react";

// importing components
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

// importing styles
import './styles/index.css';
import './styles/projects.css';
import './styles/skills.css';
import './styles/about.css';
import './styles/footer.css';

import './styles/utilities/animations.css'
import './styles/utilities/adaptive-view.css'

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}
