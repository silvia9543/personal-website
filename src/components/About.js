import React, { useState } from "react";
import "../styles/About.css";
import Typewriter from "./Typewriter";

const funFacts = [
  "I moved to LA not knowing how to drive and had to live off my bike until I learned (would not recommend)",
  "I can play piano, violin, ukulele, and am learning guitar! And I have a piano account where I post videos",
  "I love classical piano and my favorite piece is 'Un Sospiro' by Liszt",
  "I have way too much Studio Ghibli themed merch",
  "The first country in Europe I've ever visited was Austria",
  "I can swim, but don't know how to tread water...",
  "In LA, I became obsessed with pickleball and played nearly everyday",
  "I'm the first in my famiy to be born in the U.S, specifically NYC :)",
  "My favorite video game is Hollow Knight and I can play Hornet's Theme on the piano",
  "I can speak French at a proficient level and Mandarin fluently",
  "I started an environmental magazine in high school called ECO₂",
  "In high school, I went to the Arctic and helped scientists collect snow cores",
  "Biking is my favorite mode of transit",
  "I enjoy video editing and creating lifestyle content",
  "Growing up, I had a side hustle cat-sitting in my building and rapidly gained clients",
  "During the pandemic, I hosted a podcast documenting student life on campus",
  "I have a soundcloud with original music compositions and tracks",
  "In high school, I made a toy piano for my mechanical engineering class",
  "I like to make strawberry matcha and other fun flavors"
];

const About = () => {
  const me1 = process.env.PUBLIC_URL + "/me1.png";
  const [fact, setFact] = useState("");

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFact(funFacts[randomIndex]);
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
       and a minor in Film and Media Studies. In my free time, I can be found
       reading novels, sketching in a cafe, or running/biking along a river somewhere. 
      My technical passions lie in building impactful consumer-facing
       applications and creating unique user-friendly designs. 
      </p>

      <div className="fun-fact">
        <button onClick={getRandomFact}>click for a fun fact!</button>
        {fact && <p className="fact-text fade-in">💡 {fact}</p>}
      </div>
    </section>
  );
};

export default About;