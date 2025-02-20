import  { useState } from "react";
import "../../../styles/TriumphSection.css";
import first from "../../assets/4.jpg";
import firt from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import third from "../../assets/3.jpg";
import fourth from "../../assets/14.jpg";
import fifth from "../../assets/15.jpg";
import sixth from "../../assets/16.jpg";
import seventh from "../../assets/17.jpg";
import eighth from "../../assets/18.jpg";
import ninth from "../../assets/19.jpg";

const TriumphSection = () => {
  const [videoindex,setIndex]=useState(0);
  const previndex=()=>{
    setIndex(videoindex===0?9:videoindex-1);
  }
  const nextindex=()=>{
    setIndex(videoindex===9?0:videoindex+1);
  }
  const bannerimg =[
    first,firt,second,third,fourth,fifth,sixth,seventh,eighth,ninth
  ];
//  const name=["Devansh","Namit Jain","Madhur"];
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
      {/* <div className="triumph-description">
       {name.map((name,index)=><h6 key={index}>{name}</h6>)}
       <h5></h5>
      </div> */}
    </div>
  );
};

export default TriumphSection;
