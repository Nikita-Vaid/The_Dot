import { useState, useEffect } from "react";
import "../../../styles/CoursesSectionL.css";

const CoursesSection = () => {
  const courses = [
    "https://www.youtube.com/embed/Ab40mFOH0no?si=bIEejFWEU7fjoXFo",
    "https://www.youtube.com/embed/AUZd7aGnPK0?si=eTWe8u3nzAMYEkvE",
    "https://www.youtube.com/embed/E5_0W-bx1YE",
    "https://www.youtube.com/embed/xeruM608dBM",
    "https://www.youtube.com/embed/egC7Upkgrwg",
    "https://www.youtube.com/embed/1-J288mq9oo?si=3pRN32usLsn5RCqH",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide functionality (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="courses-sectionL">
      <h1 className="courses-titleL">EXPLORE OUR PODCAST</h1>
      <div className="slider-container">
        <button className="slider-button left" onClick={prevSlide}>&#10094;</button>
        <div className="video-frame">
          <iframe
            width="100%"
            height="400"
            src={courses[currentIndex]}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button className="slider-button right" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Navigation Dots */}
      <div className="dots-container">
        {courses.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
