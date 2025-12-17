import React from "react";
import "./Home.css";
import HomeCard from "./HomeCard";

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-cards">
                <HomeCard
                    title = "Find a Doctor"
                    description = "Discover exceptional healthcare professionals at General Hospital; access licensed physicians in various medical fields."
                    linetext = "Doctor Schedule"                
                />

                <HomeCard
                    title = "Make an Appointment"
                    description = "Schedule an appointment with our top medical professionals at General Hospital through our online booking service."
                    linetext = "Contact Us"
                />

                <HomeCard
                    title = "Find a Condition"
                    description = "Explore a range of conditions with our comprehensive guide to common illnesses and injuries, available at General Hospital"
                    linetext = "Need Help?"
                />
            </div>
        </section>
    );
};

export default Home;