import React from "react";
import "../styles/membership.css";

const Membership = () => {
  return (
    <section className="membership" id="membership">
      <div className="membership-header">
        <h2>Membership <span>Plans</span></h2>
        <p>Choose the perfect plan for your fitness journey</p>
      </div>

      <div className="membership-container">

        {/* Monthly */}
        <div className="membership-card">
          <h3>Basic</h3>
          <h1>₹1500</h1>
          <h4>/month</h4>

          <ul>
            <li>✔ Unlimited Gym Access</li>
            <li>✔ Cardio & Strength Area</li>
            <li>✔ Locker Facility</li>
            <li>✔ Basic Fitness Guidance</li>
          </ul>

          <button>Get Started</button>
        </div>

        {/* Quarterly Highlight */}
        <div className="membership-card highlight">
          <div className="badge">Most Popular</div>

          <h3>Standard</h3>
          <h1>₹4000</h1>
          <h4>/3 months</h4>

          <ul>
            <li>✔ Everything in Basic</li>
            <li>✔ Free Diet Plan</li>
            <li>✔ Body Composition Check</li>
            <li>✔ 2 Personal Training Sessions</li>
          </ul>

          <button>Get Started</button>
        </div>

        {/* Yearly */}
        <div className="membership-card">
          <h3>Premium</h3>
          <h1>₹12000</h1>
          <h4>/year</h4>

          <ul>
            <li>✔ Everything in Standard</li>
            <li>✔ Dedicated Personal Trainer</li>
            <li>✔ Custom Workout Plan</li>
            <li>✔ Monthly Progress Tracking</li>
          </ul>

          <button>Get Started</button>
        </div>

      </div>
      
    </section>
  );
};

export default Membership;