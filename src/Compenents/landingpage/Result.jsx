
import "../landingpage/Result.css";
import mukulpng from "../../assets/mukul.png";
import garvpng from "../../assets/garv.png";
import rachitpng from "../../assets/rachit.png";
import chetnajpg from "../../assets/chetna.jpg";
import nancyjpg from "../../assets/nancy.jpg";
import kashishjpg from "../../assets/kashish.jpg";
import poojajpg from "../../assets/pooja.jpg";
import harshjpg from "../../assets/harsh.jpg";
import harshitajpg from "../../assets/harshita.jpg";
import hiteshjpg from "../../assets/hitesh.jpg";
import kuranjpg from "../../assets/kuran.jpg";
import himajpg from "../../assets/hima.jpg";
import druvjpg from "../../assets/druv.jpg";
import tushantjpg from "../../assets/tushant.jpg";
import ravikantjpg from "../../assets/ravikant.jpg";
import ishajpg from "../../assets/isha.jpg";
import vivekjpg from "../../assets/vivek.jpg";
import nextEjpg from "../../assets/nextE.jpg";
import vikasjpg from "../../assets/vikas.jpg";
import rahuljpg from "../../assets/Rahul.jpg";
import Namit from "../../assets/13.png";
import Madhur from "../../assets/6.png";
import Devansh from "../../assets/12.png";
import Aryan from "../../assets/11.png";
import Deepanshu from "../../assets/10.png";
import Dheeraj from "../../assets/8.png";
import Rajat from "../../assets/5.png";
import Rinku from "../../assets/9.png";
import Sakshi from "../../assets/7.png";


const jeemain = [
  { name: "Namit Jain", parent: "Bhushan Jain", address: "Gandhi Nagar,Rewari,Haryana", Percentile: "99.54", img: Namit },
  { name: "Madhur", parent: "Naveen Kumar", address: "Jhajjar,Rewari ,Haryana", Percentile: "99.3",  img: Madhur},
  { name: "Devansh", parent: "Vinod", address: "Ansal Town,Rewari,Haryana",Percentile: "99.01", img:Devansh },
  { name: "Aryan", parent: "Birender Yadav", address: "Rajpura Khalsa, Rewari,Haryana", Percentile: "98.38", img: Aryan},
  { name: "Deepanshu", parent: "Dharmendra yadav", address: "Pahari,Rewari,Haryana", Percentile: "97.84", college: "", img: Deepanshu},
  { name: "Dheeraj Saini", parent: "Manoj Saini", address: "Hansnagar,Rewari,Haryana",Percentile: "97.78", img:Dheeraj },
  { name: "Rajat", parent: "Rajesh Kumar", address: "Chowky-02,Rewari,Haryana",Percentile: "97.59", img:Rajat },
  { name: "Rinku", parent: "Sukhbir Singh", address: "Kund,Rewari,Haryana",Percentile: "96.98", img:Rinku },
  { name: "Sakshi", parent: "Manoj Kumar", address: "Sec-4,Rewari,Haryana",Percentile: "96.27", img:Sakshi },
  {name : "Next can be You!", Percentile: "...", img: nextEjpg}
];
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
    img: chetnajpg, // Replace with actual image path
  },
  {
    name: "Nancy Yadav",
    parent: "Rambir Yadav",
    address: "Berli Kalan, Rewari",
    jeeRank: "5297",
    iit: "IIT Roorkee",
    img: nancyjpg, // Replace with actual image path
  },
  {
    name: "Kashish Kapadia",
    parent: "Pawan Kumar",
    address: "Rohtas, Bihar",
    jeeRank: "5376",
    iit: "IIT Delhi",
    img: kashishjpg, // Replace with actual image path
  },
  {
    name: "Pooja Thakran",
    parent: "Bijender Singh",
    address: "Gadaipur, Gurugram",
    jeeRank: "4422",
    iit: "IIT Kharagpur",
    img: poojajpg, // Replace with actual image path
  },
  {
    name: "Harsh Lamba",
    parent: "Nahar Singh Lamba",
    address: "Goliyaka, Rewari",
    jeeRank: "5418",
    iit: "IIT Dhanbad",
    img: harshjpg, // Replace with actual image path
  },
  {
    name: "Harshita Sehrawat",
    parent: "Pawan Kumar",
    address: "Dhanora, Rewari",
    jeeRank: "3149",
    iit: "IIT Dhanbad",
    img: harshitajpg, // Replace with actual image path
  },
  {
    name: "Hitesh Kumar",
    parent: "Devender Kumar",
    address: "Kund, Rewari",
    jeeRank: "1888",
    iit: "IIT Dhanbad",
    img: hiteshjpg, // Replace with actual image path
  },
  {
    name: "Kuran Yadav",
    parent: "Anil Yadav",
    address: "Hazariwas, Rewari",
    jeeRank: "1851",
    iit: "IIT Dhanbad",
    img: kuranjpg, // Replace with actual image path
  },
  {
    name: "Hima Yadav",
    parent: "Rajesh Yadav",
    address: "Gokalpur, Rewari",
    jeeRank: "7203",
    iit: "IIT Dhanbad",
    img: himajpg, // Replace with actual image path
  },
  {
    name: "Dhruv Yadav",
    parent: "Vijay Yadav",
    address: "Saraswati Vihar, Rewari",
    jeeRank: "4039",
    iit: "IIT Dhanbad",
    img: druvjpg, // Replace with actual image path
  },
  {
    name: "Tushant Kumar",
    parent: "Pawan Kumar",
    address: "Bapas, Gurugram",
    jeeRank: "3707",
    iit: "IIT Dhanbad",
    img: tushantjpg, // Replace with actual image path
  },
  {
    name: "Ravikant",
    parent: "Birender Yadav",
    address: "Sec-04, Rewari",
    jeeRank: "3844",
    iit: "IIT Dhanbad",
    img: ravikantjpg, // Replace with actual image path
  },
  {
    name: "Isha Yadav",
    parent: "Ajeet Yadav",
    address: "Karawara, Rewari",
    jeeRank: "4067",
    iit: "IIT Dhanbad",
    img: ishajpg, // Replace with actual image path
  },
  {
    name: "Vivek Yadav",
    parent: "Rajbir Singh",
    address: "Pahari, Rewari",
    jeeRank: "5264",
    iit: "IIT Dhanbad",
    img: vivekjpg, // Replace with actual image path
  },
  {
    name: "...",
    jeeRank: "...",
    iit: "Next can be You!",
    img: nextEjpg, // Replace with actual image path
  }

];

const medicalAchievers = [
  { name: "Vikas", parent: "Khetaram", address: "Nangal Katha Narnaul", neetScore: "685/720", college: "UCMS Delhi", img: vikasjpg },
  { name: "Rahul Kumar", parent: "Sanjay Kumar", address: "Sukarpura,Rewari", neetScore: "603/720", college: "Govt. Ayurved College, Nagpur", img: rahuljpg },
  { name: "", parent: "", address: "",  college: "Next can be You!", img: nextEjpg },
];

const Achievers = () => {
  return (
    <div className="achievers-container">
      <h2 className="maintitle">Achievement Book</h2>
      <h1 className="title">Our Achievements in JEE MAINS 2025</h1>
      <div className="achievers-list">
        {jeemain.map((achiever, index) => (
          <div className="achiever-card" key={index}>
            <img src={achiever.img} alt={achiever.name} className="achiever-img" />
            <h3 className="iit-name">{achiever.college}</h3>
            <p className="jee-rank">PERCENTILE: {achiever.Percentile}</p>
            <div className="achiever-info">
              <p className="achiever-name">{achiever.name}</p>
              <p className="parent">S/o: {achiever.parent}</p>
              <p className="address">Add: {achiever.address}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="title">Our Achievers in IITs</h1>
      <div className="achievers-list">
        {achievers.map((achiever, index) => (
          <div className="achiever-card" key={index}>
            <img src={achiever.img} alt={achiever.name} className="achiever-img" />
            <h3 className="iit-name">{achiever.iit}</h3>
            <p className="jee-rank">JEE Adv.: {achiever.jeeRank}</p>
            <div className="achiever-info">
              <p className="achiever-name">{achiever.name}</p>
              <p className="parent">S/o: {achiever.parent}</p>
              <p className="address">Add: {achiever.address}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="title">Our Achievements in Government Medical Colleges</h1>
      <div className="achievers-list">
        {medicalAchievers.map((achiever, index) => (
          <div className="achiever-card" key={index}>
            <img src={achiever.img} alt={achiever.name} className="achiever-img" />
            <h3 className="iit-name">{achiever.college}</h3>
            <p className="jee-rank">NEET Score: {achiever.neetScore}</p>
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
