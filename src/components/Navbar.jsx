import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo1.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo-container">
        <img src={logo} alt="Lime Fitness Logo" className="logo-img" />
        <h2 className="logo-text">LIME FITNESS</h2>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/#home" onClick={closeMenu}>Home</a></li>
        <li><a href="/#about" onClick={closeMenu}>About</a></li>
        <li><a href="/#programs" onClick={closeMenu}>Programs</a></li>
        <li><a href="/#membership" onClick={closeMenu}>Membership</a></li>
        <li><a href="/#gallery" onClick={closeMenu}>Gallery</a></li>
        <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
};

export default Navbar;