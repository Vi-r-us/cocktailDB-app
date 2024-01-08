import React from "react";
import "./hero.css";
import dummyImage from "../../assets/dummy.jpeg"

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Find <i>your</i>
        <br />
        Best cocktail
      </h1>
      <div className="hero-image">
        <img src={dummyImage} alt="hero cocktail" />
      </div>
    </section>
  );
};

export default Hero;
