import React, { useRef } from "react";
import "../styles/Projects.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true, // <— this enables wrap-around
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const projects = [
  { title: "Potencia", description: "A React Native mobile app that allows students to schedule language lessons and tutors to schedule both group and individual classes.", image: "potencia.png", video: "potencia.mp4" },
  { title: "Colythm", description: "A rhythm based game built in Unity. Created in a group of four where I was mainly responsible for animation, music, and coding mechanics.", image: "colythm.png", url: "https://lucasdmaley.itch.io/colythm"},
  { title: "Music By Decade", description: "A GIS Web App tracking locations mentioned in popular music in the past century using Python for web scraping, data collection, and analysis. ", image: "digHum.png", url:"https://silvia9543.github.io/DH-portfolio/final-project/" },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
  <section id="projects" className="projects-section page-section">
    <h2 className="projects-title">Projects</h2>

    <Slider {...settings}>
        {projects.map((project, index) => (
        <div key={index} className="slide">
            {project.url ? (
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
            >
                <div className="project-card">
                {project.video ? (
                    <video
                    src={process.env.PUBLIC_URL + "/" + project.video}
                    className="project-video"
                    controls
                    muted
                    preload="metadata"
                    style={{ width: "100%", borderRadius: "12px" }}
                    />
                ) : (
                    <img
                    src={process.env.PUBLIC_URL + "/" + project.image}
                    alt={project.title}
                    className="project-image"
                    />
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                </div>
            </a>
            ) : (
            <div className="project-card">
                {project.video ? (
                <video
                    src={process.env.PUBLIC_URL + "/" + project.video}
                    className="project-video"
                    controls
                    muted
                    preload="metadata"
                    style={{ width: "100%", borderRadius: "12px" }}
                />
                ) : (
                <img
                    src={process.env.PUBLIC_URL + "/" + project.image}
                    alt={project.title}
                    className="project-image"
                />
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            )}
        </div>
        ))}
    </Slider>

  </section>
  );
};

export default Projects;
