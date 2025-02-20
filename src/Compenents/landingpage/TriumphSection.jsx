import { useState, useEffect } from "react";
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
  const [videoIndex, setIndex] = useState(0);
  const bannerImages = [
    first, firt, second, third, fourth, fifth, sixth, seventh, eighth, ninth
  ];

  const prevIndex = () => {
    setIndex(videoIndex === 0 ? bannerImages.length - 1 : videoIndex - 1);
  };

  const nextIndex = () => {
    setIndex(videoIndex === bannerImages.length - 1 ? 0 : videoIndex + 1);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextIndex();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [videoIndex]);

  return (
    <div className="triumph-section">
      <h1 className="title-t">EXCELLENCE IN JEE MAINS</h1>
      <div className="image-container">
        <button className="slider-button left" onClick={prevIndex}>&#10094;</button>
        <div className="image-frame">
          <img src={bannerImages[videoIndex]} alt="The Triumph" className="triumph-image"/>
        </div>
        <button className="slider-button right" onClick={nextIndex}>&#10095;</button>
      </div>

      {/* Dots Indicator */}
      <div className="dots-container">
        {bannerImages.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${videoIndex === index ? "active" : ""}`} 
            onClick={() => setIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TriumphSection;
