import React from "react";
import "../styles/membership.css";

const Membership = () => {
  return (
    <section className="membership" id="membership">
      <h2>Membership Plans</h2>

      <div className="membership-container">
        <div className="membership-card">
          <h3>Monthly</h3>
          <h1>₹1500</h1>
          <p>Full Gym Access</p>
        </div>

        <div className="membership-card highlight">
          <h3>Quarterly</h3>
          <h1>₹4000</h1>
          <p>Free Diet Consultation</p>
        </div>

        <div className="membership-card">
          <h3>Yearly</h3>
          <h1>₹12000</h1>
          <p>2 Months Free + Trainer Support</p>
        </div>
      </div>
    </section>
  );
};

export default Membership;