import React from "react";
import "../styles/gallery.css";
import images from "../assets/images";
import Image from "./common/Image";   // ✅ adjust path if needed

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>

      <div className="gallery-grid">
        <Image src={images.gallery1} alt="Gym 1" />
        <Image src={images.gallery2} alt="Gym 2" />
        <Image src={images.gallery3} alt="Gym 3" />
        <Image src={images.gallery4} alt="Gym 4" />
      </div>
    </section>
  );
};

export default Gallery;