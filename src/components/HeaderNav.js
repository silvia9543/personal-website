import React from "react";
import "../styles/HeaderNav.css";

const HeaderNav = () => {
  return (
    <header className="navbar">
      <div className="logo"> silvia wang </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default HeaderNav;
