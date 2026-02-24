import React from "react";
import "../styles/programs.css";
import images from "../assets/images";
import Image from "./common/Image";
const Programs = () => {
  return (
    <section className="programs" id="programs">
      <h2 className="section-title">Our Programs</h2>

      <div className="program-container">
        <div className="program-card">
          <Image src={images.weight} alt="Weight Training" />
          <h3>Weight Training</h3>
          <p>
            Build muscle and increase strength with modern equipment.
          </p>
        </div>

        <div className="program-card">
          <Image src={images.cardio} alt="Cardio Training" />
          <h3>Cardio Training</h3>
          <p>
            Improve stamina and burn fat with structured cardio sessions.
          </p>
        </div>

        <div className="program-card">
          <Image src={images.personal} alt="Personal Training" />
          <h3>Personal Training</h3>
          <p>
            One-on-one coaching for faster and safer transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;