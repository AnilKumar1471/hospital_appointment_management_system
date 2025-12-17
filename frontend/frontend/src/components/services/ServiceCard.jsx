import React from "react";
import "./services.css"

const ServiceCard = ({ image, title, description}) => {
    return (
        <div className="service-card">
            <img src={image} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#" className="learn-more">
                    Learn More →
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;