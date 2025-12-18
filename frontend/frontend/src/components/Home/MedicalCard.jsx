import React from "react";
import "./Home.css";

const MedicalCard = ({ image, title, description }) => {
  return (
    <div className="medical-card">
      <img src={image} alt={title} />
      <div className="medical-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">Learn More →</a>
      </div>
    </div>
  );
};

export default MedicalCard;