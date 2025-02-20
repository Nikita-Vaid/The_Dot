
import "../../../styles/FeeBenefits.css";
import { Link } from "react-router-dom";

const FeeBenefits = () => {
  const handleEnrolNowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fee-benefits-container">
      <h1 className="title-fee">
        Discover our ongoing <br /> Demo Classes & Results
      </h1>
      <div className="benefits-grid">
        <div className="benefit-card">
          <h1 className="benefit-title">Demo Classes</h1>
          <p className="benefit-description">
            Attend Our Demo Classes For IIT-JEE & NEET
          </p>
          <p className="benefit-deadline">
            Free 15 Days Demo Class For 12th Class.
          </p>
          <button className="apply-button" onClick={handleEnrolNowClick}>
            APPLY NOW
          </button>
        </div>
        <div className="benefit-card">
          <h1 className="benefit-title">Achievements</h1>
          <p className="benefit-description">
            Explore the outstanding achievements of our students.
          </p>
          <p className="benefit-deadline">
            Celebrate their Hard work and dedication.
          </p>
          <Link to="/result">
            <button className="apply-button">VIEW RESULTS</button>
          </Link>
        </div>
        <div className="benefit-card">
          <h1 className="benefit-title">Career Library</h1>
          <p className="benefit-description">
            Explore Our Career Library For Better Future.
          </p>
          <p className="benefit-deadline">
           Choose Your Career Option Based On Interest and Skills.
          </p>
          <a href="https://thedotinstitute.in/career-streams" target="_blank" rel="noreferrer">
            <button className="apply-button">EXPLORE NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeeBenefits;
