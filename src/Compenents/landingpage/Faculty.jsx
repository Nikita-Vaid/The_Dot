import "../../../styles/faculty.css";
const facultyData = [
  {
    subject: "Physics",
    members: [
      { name: "Rahul Sir", degree: "B.Tech, IIT Bombay" },
      { name: "Chirranjeev Sir", degree: "B.Tech, IIT Roorkee" },
      { name: "Raju Sir", degree: "B.Tech, DTU" },
    ],
  },
  {
    subject: "Chemistry",
    members: [
      { name: "Satish Sir", degree: "Int. M.Tech, IIT Dhanbad" },
      { name: "Anukalp Sir", degree: "B.Tech, IIT Dhanbad" },
      { name: "Pooja Mam", degree: "M.Sc, MDU Rohtak" },
    ],
  },
  {
    subject: "Maths",
    members: [
      { name: "Kundan Sir", degree: "B.Tech, IIT Delhi" },
      { name: "Manish Sir", degree: "M.Sc, IIT Delhi" },
      { name: "Mohit Sir", degree: "M.Sc, NIT Jmsd" },
    ],
  },
  {
    subject: "Biology",
    members: [
      { name: "Iti Pareek Mam", degree: "M.Sc, Banasthali University" },
      { name: "Seema Mam", degree: "M.Sc, GJU Hisar" },
    ],
  },
];

const FacultyCard = ({ name, degree }) => (
  <div className="faculty-card">
    <div className="faculty-image"></div>
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
