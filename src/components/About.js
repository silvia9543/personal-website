import React, { useState } from "react";
import "../styles/About.css";
import Typewriter from "./Typewriter";

const funFacts = [
  "I have a soundcloud with original music compositions and tracks",
  "I moved to LA not knowing how to drive and lived off my bike at first",
  "I can play piano, violin, ukulele, and am learning guitar",
  "In high school, I went to the Arctic and helped scientists collect snow cores",
  "I can speak French at a proficient level and Mandarin fluently",
  "The first place in Europe I've ever visited was Vienna",
  "In my free time, I love reading novels and sketching in coffee shops",
  "My favorite classical piano piece is 'Un Sospiro' by Liszt",
  "In LA, I began to play pickleball nearly everyday",
  "I'm the first in my famiy to be born in the U.S, specifically NYC :)",
  "I started an environmental magazine in high school called ECO₂",
  "My favorite Studio Ghibli movies tie between Spirited Away and Howl's Moving Castle",
  "Biking is my favorite mode of transit",
  "I enjoy creating art and digital content",
  "Growing up, I had a side hustle cat-sitting in my building",
  "During the pandemic, I hosted a podcast documenting student life on campus",
  "My favorite video game is Hollow Knight and I can play Hornet's Theme on the piano",
  "In high school, I made a toy piano for my mechanical engineering class",
  "I like to make strawberry matcha and other fun flavors",
  "I can swim, but can't tread water..."
];

const About = () => {
  const me1 = process.env.PUBLIC_URL + "/lisbon.png";

  const [visible, setVisible] = useState(false);

  const [factIndex, setFactIndex] = useState(null);

  const handleNextFact = () => {
    if (factIndex === null) {
      setFactIndex(0);
    }
    setVisible(false); // trigger fade out
    setTimeout(() => {
      // After fade out, show next fact and fade in
      setFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
      setVisible(true); // trigger fade in
    }, 200); // match fadeOut duration
  };

  return (
    <section className="header page-section" id="about">
      <div>
          <Typewriter text="Hi there, I'm Silvia!" />
      </div>
      <img src={me1} className="profile-pic" alt="Me"/>
      <h1 className = "about"> About Me </h1>
      <p className="description"> 
       I am a developer based in New York City with 2+ years 
       working as a full stack software engineer. A graduate
       from Tufts University, I have a Bachelors in Computer Science 
       and a minor in Film and Media Studies. My technical passions lie in 
       building impactful consumer-facing applications and creating unique 
       user-friendly designs. 
      </p>

      <div className="fun-fact">
        <button onClick={handleNextFact}>click for a fun fact!</button>
          {factIndex !== null && (
            <p className={`fact-text ${visible ? "visible" : ""}`}>💡 {funFacts[factIndex]}</p>
          )}        
          <a href="#experience" className="scroll-arrow" aria-label="Scroll Down">↓</a>
      </div>
    </section>
  );
};

export default About;