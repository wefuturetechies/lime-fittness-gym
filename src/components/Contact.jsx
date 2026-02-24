import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p>
        📍 No. 105, MS Plaza, GST Road,
        Chengalpattu, Tamil Nadu – 603001
      </p>

      <p>
        📞 <a href="tel:+919677093038">+91 96770 93038</a>
      </p>

      <p>
        📧 <a href="mailto:limefitnessstudio@gmail.com">
          limefitnessstudio@gmail.com
        </a>
      </p>

      <button onClick={() => window.location.href = "tel:+919677093038"}>
        Get Free Trial
      </button>
    </section>
  );
};

export default Contact;