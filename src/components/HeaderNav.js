import React from "react";
import { useState } from "react";
import "../styles/HeaderNav.css";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // track mobile menu
  return (
    <header className="navbar">
      <div className="logo"> silvia wang </div>
      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; {/* hamburger menu icon */}
      </div>
    </header>
  );
};

export default HeaderNav;
