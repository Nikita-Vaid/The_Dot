import React from "react";
import "../landingpage/Result.css";
import mukulpng from "../../assets/mukul.png";
import garvpng from "../../assets/garv.png";
import rachitpng from "../../assets/rachit.png";

const achievers = [
  {
    name: "Mukul Kaushik",
    parent: "Manoj Kaushik",
    address: "Vikash Nagar, Rewari",
    jeeRank: "CRL 3810",
    iit: "IIT Roorkee",
    img: mukulpng, // Replace with actual image path
  },
  {
    name: "Garv Gupta",
    parent: "Amit Gupta",
    address: "Manchanda, Rewari",
    jeeRank: "CRL 2267",
    iit: "IIT Delhi",
    img: garvpng, // Replace with actual image path
  },
  {
    name: "Rachit Mudgil",
    parent: "Praveen Kumar",
    address: "Jatauli, Haily Mandi, Gurugram",
    jeeRank: "743*",
    iit: "IIT Patna",
    img: rachitpng, // Replace with actual image path
  },
  {
    name: "Chetna Sharma",
    parent: "Jitender Sharma",
    address: "Mahaveer Nagar, Rewari",
    jeeRank: "2313*",
    iit: "IIT Delhi",
    img: rachitpng, // Replace with actual image path
  },
  {
    name: "Nancy Yadav",
    parent: "Rambir Yadav",
    address: "Berli Kalan, Rewari",
    jeeRank: "5297",
    iit: "IIT Roorkee",
    img: rachitpng, // Replace with actual image path
  },
  {
    name: "Kashish Kapadia",
    parent: "Pawan Kumar",
    address: "Rohtas, Bihar",
    jeeRank: "5376",
    iit: "IIT Delhi",
    img: rachitpng, // Replace with actual image path
  },
  {
    name: "Kashish Kapadia",
    parent: "Pawan Kumar",
    address: "Rohtas, Bihar",
    jeeRank: "5376",
    iit: "IIT Delhi",
    img: rachitpng, // Replace with actual image path
  },
  
  
];

const Achievers = () => {
  return (
    <div className="achievers-container">
      <h1 className="title">Our Achievers in IITs</h1>
      
      <div className="achievers-list">
        {achievers.map((achiever, index) => (
          <div className="achiever-card" key={index}>
            <img src={achiever.img} alt={achiever.name} className="achiever-img" />
            <h3 className="iit-name">{achiever.iit}</h3>
            <p className="jee-rank">JEE Adv.: {achiever.jeeRank}</p>
            <div className="achiever-info">
              <p className="achiever-name">{achiever.name}</p>
              <p className="parent">S/o {achiever.parent}</p>
              <p className="address">Add: {achiever.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievers;
