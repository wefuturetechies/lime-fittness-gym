import React from "react";
import "../styles/membership.css";

const plans = [
  {
    title: "1 Month Trial",
    price: "₹2021",
    duration: "Trial",
    features: [
      "Fitness Assessment",
      "Beginner Schedule Card",
      "Gym Trainer Assistance"
    ]
  },
  {
    title: "3 Months",
    price: "₹4500",
    duration: "3 Months",
    features: [
      "Fitness Assessment",
      "1 Diet Counseling",
      "Customized Schedule Card",
      "Periodic Review"
    ],
    highlight: true
  },
  {
    title: "6 Months",
    price: "₹6500",
    duration: "6 Months",
    features: [
      "Fitness Assessment",
      "2 Diet Counseling",
      "Customized Schedule Card",
      "Periodic Review"
    ]
  },
  {
    title: "12 Months",
    price: "₹9999",
    duration: "1 Year",
    features: [
      "Rehabilitation Training",
      "Fitness Assessment",
      "Unlimited Diet Counseling",
      "Customized Schedule Card"
    ]
  },
  {
    title: "Body Transformation",
    price: "₹19999",
    duration: "Program",
    features: [
      "Focused Transformation Program",
      "Personal Assistance",
      "Workout Strength Plan",
      "Diet & Progress Review"
    ]
  },
  {
    title: "Personal Training (Regular)",
    price: "₹4999",
    duration: "Per Month",
    features: [
      "One-to-One Training",
      "18 Hours Session",
      "Personal Schedule Card",
      "Trainer Assistance"
    ]
  },
  {
    title: "Personal Training (Premium)",
    price: "₹5999",
    duration: "Per Month",
    features: [
      "Senior Trainer",
      "One-to-One Coaching",
      "18 Hours Session",
      "Personal Schedule Card"
    ]
  }
];

const Membership = () => {
  return (
    <section className="membership" id="membership">
      <div className="membership-header">
        <h2>
          Membership <span>Plans</span>
        </h2>
        <p>Choose the perfect plan for your fitness journey</p>
      </div>

      <div className="membership-grid">
        {plans.map((plan, index) => (
          <div
            className={`membership-card ${plan.highlight ? "highlight" : ""}`}
            key={index}
          >
            <h3>{plan.title}</h3>
            <h1>{plan.price}</h1>
            <h4>{plan.duration}</h4>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <button>Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Membership;