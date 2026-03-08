import React from "react";
import "../styles/about.css";
import images from "../assets/images";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h2>
            WHY CHOOSE <span>LIME FITNESS</span>
          </h2>

          <p className="about-desc">
            At Lime Fitness, we believe in empowering every individual to reach
            their peak potential. Our facility combines cutting-edge equipment
            with personalized training programs to deliver results that speak
            for themselves.
          </p>

          <div className="features">

            <div className="feature-card">
              <div className="icon">🏋️</div>
              <h4>WORLD-CLASS EQUIPMENT</h4>
              <p>State-of-the-art machines and free weights</p>
            </div>

            <div className="feature-card">
              <div className="icon">👨‍🏫</div>
              <h4>EXPERT TRAINERS</h4>
              <p>Certified professionals to guide your journey</p>
            </div>

            <div className="feature-card">
              <div className="icon">🕒</div>
              <h4>FLEXIBLE HOURS</h4>
              <p>Open early morning to late night, 7 days a week</p>
            </div>

            <div className="feature-card">
              <div className="icon">🏆</div>
              <h4>PROVEN RESULTS</h4>
              <p>Hundreds of success stories and transformations</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <img src={images.about} alt="Gym Training" />

          <div className="experience-box">
            <h3>10+</h3>
            <p>YEARS EXPERIENCE</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;