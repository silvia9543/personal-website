import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    company: "The Walt Disney Company",
    role: "Software Engineer I",
    date: "July 2023 – Present",
    description: "Work on Disney's global content portal that distributes Disney content to streaming services, airlines, and other businesses. I work across the stack, from building new features like uploading broadcast schedules for syndication titles to writing SQL stored procedures and data sweeps, making UI improvements, and creating Azure apps and deployments.",
  },
  {
    company: "IBM",
    role: "DevOps Engineer Intern",
    date: "Summer 2022",
    description: "Focused on a key pain point in IBM's software productivity by developing a Python tool that manages and consolidates DevOps metadata, converting between XML, YAML, and JSON formats. Tested with Jenkins to ensure that the tool scales to larger data sets.",
  },
  {
    company: "Tufts University",
    role: "Data Structures Teaching Fellow",
    date: "Jan 2021 - Jan 2023",
    description: "Held office hours for over 200 students to help debug code, taught a weekly lab, reviewed student program designs, graded projects, and created rubrics for new projects.",
  },
  {
    company: "Tufts JumboCode",
    role: "Project Manager",
    date: "May 2022 - July 2023",
    description: "Led 12 student developers to build an English language learning mobile app using React Native that connects immigrant and refugee communities with volunteer tutors. Managed our partnership with the Boston nonprofit leading this effort, Potencia.",
  },
  {
    company: "Karleki",
    role: "Software Engineering Intern",
    date: "Summer 2021",
    description: "Worked on product management and development at a Fintech startup to create a refined search engine connecting investors and startups. Also helped code the company blog using Vue.js and created content.",
  },
  {
    company: "iD Tech Camps",
    role: "Instructor",
    date: "Summer 2021",
    description: "Taught the week-long course 'Coding Apps and Games' with C++ to students aged 12-13. Held 2-hour daily classes consisting of lectures, live-coding, interactive exercises, and independent projects.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="page-section">
      <h2 className="timeline-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{exp.role} @ {exp.company}</h3>
              <span className="timeline-date">{exp.date}</span>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
