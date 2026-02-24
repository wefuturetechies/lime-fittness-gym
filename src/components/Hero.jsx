import React from "react";
import "../styles/hero.css";
import images from "../assets/images";

const Hero = () => {
  return (
    <header
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${images.hero})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Transform Your <span>Body</span> <br />
          Build Your <span>Strength</span>
        </h1>

        <p>
          Premium Unisex Gym in Chengalpattu with
          world-class equipment and certified trainers.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Join Now</button>
          <button className="btn-secondary">View Programs</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;