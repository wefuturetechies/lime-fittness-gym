import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">
          <h2>LIME FITNESS</h2>
          <p>
            Premium unisex gym with world-class equipment and
            certified trainers.
          </p>

          <div className="socials">

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5z" />
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                <circle cx="17.5" cy="6.5" r="1.2" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://instagram.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 22v-8h3l1-4h-4V8c0-1 0-2 2-2h2V2h-3c-4 0-5 2-5 5v3H6v4h3v8h4z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="https://twitter.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 12 8.5c0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.3.6-.5 1.3-.5 2 0 1.4.7 2.6 1.9 3.3-.7 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2.1 2.8 4 2.9A8.3 8.3 0 0 1 2 19.5a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.6-6.3 11.6-11.7v-.5c.8-.5 1.5-1.2 2.1-2z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.7 3.7 12 3.7 12 3.7s-7.7 0-9.5.5a2.9 2.9 0 0 0-2 2A30.6 30.6 0 0 0 0 12a30.6 30.6 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5a2.9 2.9 0 0 0 2-2A30.6 30.6 0 0 0 24 12a30.6 30.6 0 0 0-.5-5.8zM9.8 15.5V8.5L15.8 12l-6 3.5z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
          <h3>CONTACT INFO</h3>

          <p>📍 Chengalpattu, Tamil Nadu</p>

          <p>
            📞 <a href="tel:+919677093038">+91 96770 93038</a>
          </p>

          <p>
            📧
            <a href="mailto:limefitnessstudio@gmail.com">
              limefitnessstudio@gmail.com
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Lime Fitness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;