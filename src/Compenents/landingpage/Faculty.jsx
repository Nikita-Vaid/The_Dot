import "../../../styles/faculty.css";
import imag1 from "../../assets/imgt.avif";
const facultyData = [
  {
    subject: "Physics",
    members: [
      { name: "Rahul Sir", degree: "B.Tech, IIT Bombay" ,img:imag1},
      { name: "Chirranjeev Sir", degree: "B.Tech, IIT Roorkee"  ,img:imag1},
      { name: "Raju Sir", degree: "B.Tech, DTU"  ,img:imag1},
    ],
  },
  {
    subject: "Chemistry",
    members: [
      { name: "Satish Sir", degree: "Int. M.Tech, IIT Dhanbad",img:imag1 },
      { name: "Anukalp Sir", degree: "B.Tech, IIT Dhanbad",img:imag1 },
      { name: "Pooja Mam", degree: "M.Sc, MDU Rohtak",img:imag1 }
    ],
  },
  {
    subject: "Maths",
    members: [
      { name: "Kundan Sir", degree: "B.Tech, IIT Delhi",img:imag1 },
      { name: "Manish Sir", degree: "M.Sc, IIT Delhi",img:imag1 },
      { name: "Mohit Sir", degree: "M.Sc, NIT Jmsd",img:imag1 },
    ],
  },
  {
    subject: "Biology",
    members: [
      { name: "Iti Pareek Mam", degree: "M.Sc, Banasthali University",img:imag1 },
      { name: "Seema Mam", degree: "M.Sc, GJU Hisar",img:imag1 },
    ],
  },
];

const FacultyCard = ({ name, degree,img }) => (
  <div className="faculty-card">
    <div className="faculty-image">
      <img className="facultyimage" src={img} alt="Faculty" />
    </div>
    <h3 className="faculty-name">{name}</h3>
    <p className="faculty-degree">{degree}</p>
  </div>
);

const Faculty = () => {
  return (
    <div className="faculty-container">
      <h1 className="faculty-title">Best Faculties in Rewari</h1>
      <div className="faculty-grid">
        {facultyData.map((category, index) => (
          <div key={index}>
            <h2 className="faculty-subject">{category.subject}</h2>
            <div className="faculty-list">
              {category.members.map((member, idx) => (
                <FacultyCard key={idx} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="faculty-contact">
        <p>☎️ 7419614833/53, 9560939372</p>
      </div>
    </div>
  );
};

export default Faculty;
