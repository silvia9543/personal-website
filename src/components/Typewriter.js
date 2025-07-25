import React, { useState, useEffect } from "react";
import "../styles/Typewriter.css";

const Typewriter = ({ text, speed = 100 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="typewriter">
      {text.slice(0, index)}
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;
