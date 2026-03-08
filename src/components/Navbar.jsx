import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo-container">
        <img src={logo} alt="Lime Fitness Logo" className="logo-img" />
        <h2 className="logo-text">LIME FITNESS</h2>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;