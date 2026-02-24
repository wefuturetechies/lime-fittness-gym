import React from "react";
import "../styles/about.css";
import images from "../assets/images";
import Image from "./common/Image";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About LIME FITNESS STUDIO</h2>
                    <p>
                        LIME FITNESS STUDIO is one of the leading unisex gyms in
                        Chengalpattu, offering world-class equipment, certified trainers,
                        and customized fitness programs for men and women.
                    </p>
                    <p>
                        Our mission is to help you build strength, improve endurance,
                        and transform your lifestyle with professional guidance.
                    </p>
                </div>

                <div className="about-image">
                    <Image
                        src={images.about}
                        alt="Gym Interior"
                        variant="about"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;