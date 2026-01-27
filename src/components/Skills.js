import React from "react";
import "../styles/Skills.css";
import "../App.css";
import { FaPython, FaJava, FaReact, FaDatabase } from "react-icons/fa";
import { SiC, SiCplusplus, SiDotnet, SiKotlin, SiSpringboot, SiUnity, SiMongodb } from "react-icons/si";
import { FaServer } from "react-icons/fa"; // For RESTful APIs, use a server icon

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C# / .NET", icon: <SiDotnet /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "React", icon: <FaReact /> },
  { name: "Unity", icon: <SiUnity /> },
  { name: "RESTful APIs", icon: <FaServer /> },
  { name: "MongoDB", icon: <SiMongodb /> }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section page-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h4 className="skill-name">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
