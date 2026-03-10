import React from "react";
import "../styles/hero.css";
import images from "../assets/images";

const Hero = () => {
  return (
    <header
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${images.landing})` }}
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
          <a href="/#contact" className="btn-primary">Join Now</a>
          <a href="/#programs" className="btn-secondary">View Programs</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;