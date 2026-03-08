import React from "react";
import "../styles/programs.css";
import images from "../assets/images";

const Programs = () => {
  return (
    <section className="programs" id="programs">

      <div className="program-header">
        <h2>
          OUR <span>PROGRAMS</span>
        </h2>
        <p>Tailored programs designed to meet your unique fitness goals.</p>
      </div>

      <div className="program-grid">
        <div className="program-card">
          <img src={images.Strength} alt="STRENGTH TRAINING" />
          <div className="program-info">
            <div className="program-icon">🔥</div>
            <h3>STRENGTH TRAINING</h3>
            <p>Build muscle and increase raw power with progressive overload.</p>
            <a href="#">Learn More →</a>
          </div>
        </div>

        <div className="program-card highlight">
          <img src={images.weight} alt="HIIT Workout" />
          <div className="program-info">
            <div className="program-icon">⚡</div>
            <h3>HIIT WORKOUTS</h3>
            <p>High-intensity intervals for maximum fat burn and endurance.</p>
            <a href="#">Learn More →</a>
          </div>
        </div>

        <div className="program-card">
          <img src={images.cardio} alt="Cardio Fitness" />
          <div className="program-info">
            <div className="program-icon">💚</div>
            <h3>CARDIO FITNESS</h3>
            <p>Boost cardiovascular health with diverse cardio programs.</p>
            <a href="#">Learn More →</a>
          </div>
        </div>
        <div className="program-card">
          <img src={images.crossfit} alt="CrossFit" />
          <div className="program-info">
            <div className="program-icon">🏋️</div>
            <h3>CROSSFIT</h3>
            <p>Functional movements at high intensity for total body fitness.</p>
          </div></div>

      </div>

    </section>
  );
};

export default Programs;