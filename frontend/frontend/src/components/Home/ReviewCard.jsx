import React from "react";
import "./Home.css";

const ReviewCard = ({ text, name, image}) => {
    return (
        <div className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p className="testimonial-text">{text}</p>

            <div className="testimonial-user">
                <img src = {image} alt = {name} />
                <span>{name}</span>
            </div>
        </div>
    );
};

export default ReviewCard;