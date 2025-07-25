import logo from './logo.svg';
import './App.css';
import About from './components/About.js'
import HeaderNav from './components/HeaderNav.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
