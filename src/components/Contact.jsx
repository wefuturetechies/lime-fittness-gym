import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">
        GET IN <span>TOUCH</span>
      </h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="contact-item">
            <div className="icon">📍</div>
            <div>
              <h4>LOCATION</h4>
              <p>123 Main Road, Chengalpattu, Tamil Nadu</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">📞</div>
            <div>
              <h4>PHONE</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">✉️</div>
            <div>
              <h4>EMAIL</h4>
              <p>info@limefitness.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">🕒</div>
            <div>
              <h4>HOURS</h4>
              <p>Mon-Sat: 5AM - 10PM | Sun: 7AM - 8PM</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit">SEND MESSAGE</button>

        </form>

      </div>
    </section>
  );
};

export default Contact;