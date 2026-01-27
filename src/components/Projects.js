import "../styles/Projects.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // desktop
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600, // mobile
      settings: {
        centerMode: false,  // turn off centerMode
        variableWidth: false, // ensures slide width fills container     
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const projects = [
  { title: "Social Program Locator", description: "A full-stack web app that helps users find social programs in their area, filter on keywords, and answer questions about eligibility, access, etc. via AI chatbot. This tech stack consists of a React/Typescript frontend, Spring Boot/Kotlin backend and Google's S2Geometry library, OpenRouter API, and Postgres database.", video: "SocialProgramsApp.mov" },
  { title: "Cafe Hopper", description: "A React-Native mobile app with original pixel art and design that helps users discover cafes for working remotely, rate them, and create lists of their favorite cafes as well as connect with other users. This is a passion project work in progress as I'm currently developing the backend APIs.", video: "CafeHopperDemo.mp4" },
  { title: "Book Bunny", description: "A virtual pet game made in Godot to encourage consistent creative writing practice by giving the user daily writing prompts and boosting the bunny's health after writing, with health drops for missing a day. Written work become books in the library, saved locally on the user's device.", video: "book_bunny_fin.mov" },
  { title: "Reel AI", description: "An app that uses AI to translate social media reels into summaries and actionable insights, like calendar dates, directions, reservations, etc., allowing users to add their notes as well. Currently a prototype built with Blink. ", video: "ReelAI.mov" },
  { title: "Colythm", description: "A rhythm based game built in Unity where the player must defeat each level but must strategically attack based on rhythm and color. Created in a group of four where I was mainly responsible for animation, music, and coding mechanics.", image: "colythm.png", url: "https://lucasdmaley.itch.io/colythm"},
  { title: "Music By Decade", description: "A GIS Web App that tracks locations mentioned in popular music in the past century using Python for web scraping, data collection, and analysis. Created for an independent project in a Digital Humanities course.", image: "digHum.png", url:"https://silvia9543.github.io/DH-portfolio/final-project/" },
  { title: "Potencia", description: "A React Native mobile app that allows students to schedule language lessons and tutors to schedule both group and individual classes. Worked on this app as a project manager, overseeing a group of developers, 1 designer, and meeting with our clients.", image: "potencia.png", video: "potencia.mp4" },
];

const Projects = () => {

  return (
  <section id="projects" className="projects-section page-section">
    <h2 className="projects-title">Projects</h2>

  <Slider {...settings}>
    {projects.map((project, index) => (
      project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          key={index}
        >
          <div className="project-card">
            {project.video ? (
              <video
                src={process.env.PUBLIC_URL + "/" + project.video}
                className="project-video"
                controls
                muted
                preload="metadata"
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
        <div className="project-card" key={index}>
          {project.video ? (
            <video
              src={process.env.PUBLIC_URL + "/" + project.video}
              className="project-video"
              controls
              muted
              preload="metadata"
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
      )
    ))}
  </Slider>


  </section>
  );
};

export default Projects;
