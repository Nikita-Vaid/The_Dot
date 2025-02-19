import { useState } from 'react';
import "../../../styles/Questions.css";

const questions = [
  {
    question: "When will be Demo Classes Start?",
    answer: "Demo Classes will be start From 18 FEB 2025."
  },
  {
    question: "What will you get in Crash Course?",
    answer: "A Better Idea about which topics to focus on more ,A Clear-Cut Strategy ,Stronger Fundamentals ,Clearer Concepts ,Practised Syllabus"
  },
  {
    question: "what will be provide in Crash Course  ?",
    answer: "✔ 180+ Hours (32 Hours in a Week) ✔ Fast-Paced Offline Classes (One to One Mentorship Session) ✔ 45+ Home Practice Tests ✔ 10 JEE Mains Full Mock Tests ✔ 11th & 12th Syllabus Fully Covered with Advanced Problem-Solving ✔ Get an 80% Scholarship on JEE Advanced Crash Course for students with 97+ percentile in JEE Mains! ✔ Hostel Facility Available"
  },
  {
    question: "For whom is this Demo class?",
    answer: "This Demo class is for IIT-JEE (Main + Advanced) , NEET (UG) aspirants and For 12th Students."
  },
  {
    question: "Where can I find more information ?",
    answer: "Visit the The DOT Institute’s official website or helpdesk.This is the Link of your official website.(https://thedotinstitute.in/)"
  }
];

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleEnrolNowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="questions-container">
        <h2 className="questions-title">HAVE ANY QUESTIONS?</h2>
        {questions.map((item, index) => (
          <div 
            key={index} 
            className={`question-item ${openQuestion === index ? 'open' : ''}`} 
            onClick={() => toggleQuestion(index)}
          >
            <div className="question-header">
              {item.question}
              <span className="question-toggle">{openQuestion === index ? '-' : '+'}</span>
            </div>
            {openQuestion === index && (
              <div className="question-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="enrolnowsection">
          <h2>Kickstart Your Success Journey Today!</h2>
          <button className="enrolbtn" onClick={handleEnrolNowClick}>ENROL NOW</button>   
        </div>
      </div>
      <div className="question-footer">Copyright 2025, The DOT Institute, All rights reserved</div>
    </>
  );
};

export default Questions;
