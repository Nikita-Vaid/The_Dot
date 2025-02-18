import React from "react";
import "../../../styles/CoursesSectionL.css";

const CoursesSection = () => {
  const handleEnrolNowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const courses = [
    {
      icon: "📘",
      title: "Crash Course | JEE Main 2025",
      description:
        "The Crash Course to Give Your JEE Main Preparation the Ultimate Boost The DOT Institute announces the much-awaited “Online Crash Course” for JEE Main 2025. Classes will start soon.",
      button: "LEARN MORE",
      path: "https://thedotinstitute.in/CrashCourse",
    },
    {
      icon: "🎓",
      title: "IIT-JEE (Main + Advanced)",
      description:
        "Build a strong foundation for success in IIT-JEE with our proven teaching methodology guided by experts known for delivering exceptional results.",
      button: "LEARN MORE",
      path: "https://support.thedotiit.in/",
    },
    {
      icon: "🩺",
      title: "NEET (UG)",
      description:
        "Embark on your pre-medical preparation with our specialized courses, recognized for their impressive track record in achieving remarkable results each year.",
      button: "LEARN MORE",
      path: "https://support.thedotiit.in/",
    },
  ];

  return (
    <div className="courses-sectionL">
      <h1 className="courses-titleL">EXPLORE OUR ENHANCED COURSES</h1>
      <h2 className="courses-subtitleL">Tailored for your Success</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-icon">{course.icon}</div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <a href={course.path} target="_blank" rel="noopener noreferrer">
              <button className="course-button" onClick={handleEnrolNowClick}>
                {course.button}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;

