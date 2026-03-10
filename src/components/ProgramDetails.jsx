import React from "react";
import { useParams } from "react-router-dom";

const programData = {
  strength: {
    title: "Strength Training",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
    description:
      "Strength training focuses on building muscle mass, improving physical power, and enhancing overall body performance. Using weights, resistance machines, and bodyweight exercises, this program helps you increase muscle strength and endurance.",
    benefits: [
      "Build lean muscle mass",
      "Increase physical strength",
      "Boost metabolism",
      "Improve bone density",
      "Enhance athletic performance"
    ]
  },

  hiit: {
    title: "HIIT Workouts",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=80",
    description:
      "High Intensity Interval Training (HIIT) combines short bursts of intense exercise followed by brief rest periods. It is one of the most effective ways to burn fat quickly and improve cardiovascular health.",
    benefits: [
      "Burn calories faster",
      "Improve heart health",
      "Increase endurance",
      "Boost metabolism",
      "Short but effective workouts"
    ]
  },

  cardio: {
    title: "Cardio Fitness",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
    description:
      "Cardio workouts focus on improving cardiovascular health and stamina. Activities include treadmill running, cycling, rowing, and aerobic exercises designed to keep your heart strong and your body energetic.",
    benefits: [
      "Improve heart health",
      "Increase stamina",
      "Burn body fat",
      "Improve lung capacity",
      "Reduce stress"
    ]
  },

  crossfit: {
    title: "CrossFit",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80",
    description:
      "CrossFit is a high-intensity fitness program that combines strength training, cardio, and functional movements. It helps improve overall physical fitness including agility, endurance, flexibility, and strength.",
    benefits: [
      "Full body conditioning",
      "Improve functional strength",
      "High calorie burn",
      "Build endurance",
      "Improve agility and mobility"
    ]
  }
};

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programData[id];

  if (!program) return <h2 style={{ padding: "120px" }}>Program Not Found</h2>;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${program.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white"
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)"
        }}
      ></div>

      <div
        style={{
          position: "relative",
          padding: "120px 40px",
          maxWidth: "900px",
          margin: "auto"
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          {program.title}
        </h1>

        <p style={{ fontSize: "18px", color: "#ddd" }}>
          {program.description}
        </p>

        <h3 style={{ marginTop: "40px", color: "lime" }}>
          Program Benefits
        </h3>

        <ul style={{ marginTop: "20px", lineHeight: "2" }}>
          {program.benefits.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>

        <button
          style={{
            marginTop: "40px",
            padding: "14px 30px",
            background: "lime",
            color: "black",
            border: "none",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Join This Program
        </button>
      </div>
    </div>
  );
};

export default ProgramDetails;