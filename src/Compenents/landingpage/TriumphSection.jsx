import React, { useState } from "react";
import "../../../styles/TriumphSection.css";
import truphImage from "../../assets/ASD.jpg";
import first from "../../assets/4.jpg";
import second from "../../assets/2.jpg";
import third from "../../assets/3.jpg";
import fourth from "../../assets/1.jpg";
const TriumphSection = () => {
  const [videoindex,setIndex]=useState(0);
  const previndex=()=>{
    setIndex(videoindex===0?4:videoindex-1);
  }
  const nextindex=()=>{
    setIndex(videoindex===4?0:videoindex+1);
  }
  const bannerimg =[
    first,second,third,fourth,truphImage
  ];

  return (
    <div className="triumph-section">
      <h1 className="title-t">EXCELLANCE IN JEE MAINS</h1>
      <div className="image-container">
      <button className="slider-button left" onClick={previndex}>&#10094;</button>   
      <div className="image-frame">
        <img src={bannerimg[videoindex]} alt="The Triumph" className="triumph-image"/>
        </div>
      <button className="slider-button right" onClick={nextindex}>&#10095;</button>
      </div>
    </div>
  );
};

export default TriumphSection;
