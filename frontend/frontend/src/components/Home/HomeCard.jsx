import React from "react";
import "./Home.css";

const HomeCard = ({ title, description, linetext, image }) => {
    return (
        <>
            <div className="home-card">
                <span className="card-line"></span>
                <h3>{title}</h3>
                <p>{description}</p>

                <a href="#">{linetext}</a>
            </div>
        </>
    );
};

export default HomeCard;