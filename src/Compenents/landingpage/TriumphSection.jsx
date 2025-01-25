import React from "react";
import "../../../styles/TriumphSection.css";
import truphImage from "../../assets/trumph.png";

const TriumphSection = () => {
  const title = "THE TRIUMPH OF 5 YEARS";
  const subtitle = "25 AIR 1 in JEE & Pre-Medical all from classroom";
  const participants = [
    "Garv Gupta (CRL 2267)", "Mukul Kaushik (CRL 3810)", "Kuran Yadav (AIR 1851*)", 
    "Chetna Sharma (AIR 2313)", "Pooja Thakran (AIR 4422)", "Harshita (AIR 3149)", 
    "Hima Yadav (AIR 7203)", "Rachit Mudgil (AIR 743*)", "Vivek Yadav (AIR 5264*)", 
    "Dhruv Yadav (AIR 4039*)", "Harsh Lamba (AIR 5418)", "Isha Yadav (AIR 4067)", 
    "Kashish Kapadia (AIR 5376)", "Ravikant (AIR 3844)", "Nancy Yadav (AIR 5297)"
  ];
  

  return (
    <div className="triumph-section">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <div className="image-container">
        <img src={truphImage} alt="Group" className="group-image" />
      </div>
      <div className="participants">
        <p>
          {participants.map((name, index) => (
            <span key={index}>
              {name}
              {index < participants.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TriumphSection;
