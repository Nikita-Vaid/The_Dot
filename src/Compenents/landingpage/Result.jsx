import React from "react";
import "../landingpage/Result.css";
import mukulpng from "../../assets/mukul.png";

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
    img: "/images/garv.png", // Replace with actual image path
  },
  {
    name: "Rachit Mudgil",
    parent: "Praveen Kumar",
    address: "Jatauli, Haily Mandi, Gurugram",
    jeeRank: "743*",
    iit: "IIT Patna",
    img: "/images/rachit.png", // Replace with actual image path
  },
  {
    name: "Rachit Mudgil",
    parent: "Praveen Kumar",
    address: "Jatauli, Haily Mandi, Gurugram",
    jeeRank: "743*",
    iit: "IIT Patna",
    img: "/images/rachit.png", // Replace with actual image path
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
