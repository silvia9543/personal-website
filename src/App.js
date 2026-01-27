import './App.css';
import About from './components/About.js'
import HeaderNav from './components/HeaderNav.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"

function App() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className="App">
      <HeaderNav/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Analytics />
    </div>
  );
}

export default App;
