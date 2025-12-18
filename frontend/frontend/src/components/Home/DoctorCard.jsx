import React from "react";
import "./Home.css";

const DoctorCard = ({ image, name, role }) => {
    return (
        <div className="team-card">
            <div className="team-image">
                 <img src={image} alt={name} />
            </div>

            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
};

export default DoctorCard;