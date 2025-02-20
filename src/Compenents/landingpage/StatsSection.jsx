import React from "react";
import "../../../styles/StatsSection.css";

const StatsSection = () => {
  const stats = [
    { label: "Highly Qualified Faculties" },
    { label: "Experienced IITians Team In PCM." },
    { label: "Faculty Stability." },
    { label: "Individual Attention." },
    { label: "Dedicated Student Counselling Team." },
    { label: "Parents Direct Interaction With Faculties." },
    { label: "Best Selection Ratio." },
    { label: "Transparency Of Results." },
    { label: "100% Results Verification." },
  ];

  return (
    <div className="stats-section">
      <div className="stats-background">
       <h1>Why The DOT?</h1>
        <div className="stats-container"> {/* New container class */}
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
