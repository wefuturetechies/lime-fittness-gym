import React from "react";
import "./Image.css";

const Image = ({ src, alt }) => {
  return (
    <div className="image-wrapper">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;