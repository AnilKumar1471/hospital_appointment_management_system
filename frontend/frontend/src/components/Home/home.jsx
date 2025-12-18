import React from "react";
import "./Home.css";
import HomeCard from "./HomeCard";
import MedicalCard from "./MedicalCard";
import DoctorCard from "./DoctorCard";

import aboutimg from "../../assets/home.jpg"
import img1 from "../../assets/medical-1.jpg"
import img2 from "../../assets/medical-2.jpg"
import img3 from "../../assets/medical-3.jpg"
import whyimg from "../../assets/why-us.jpg"
import doctorimg1 from "../../assets/doctor-01.jpg"
import doctorimg2 from "../../assets/doctor-02.jpg"
import doctorimg3 from "../../assets/doctor-03.jpg"
import doctorimg4 from "../../assets/doctor-04.jpg"

const Home = () => {
    return (
        <>
            {/* card-section */}
            <section className="home-section">
                <div className="home-cards">
                    <HomeCard
                        title="Find a Doctor"
                        description="Discover exceptional healthcare professionals at General Hospital; access licensed physicians in various medical fields."
                        linetext="Doctor Schedule"
                    />

                    <HomeCard
                        title="Make an Appointment"
                        description="Schedule an appointment with our top medical professionals at General Hospital through our online booking service."
                        linetext="Contact Us"
                    />

                    <HomeCard
                        title="Find a Condition"
                        description="Explore a range of conditions with our comprehensive guide to common illnesses and injuries, available at General Hospital"
                        linetext="Need Help?"
                    />
                </div>
            </section>

                {/* About Us Features */}
            <section className="about-features">
                 <p className="about-label">About US</p> 

                 <h1 className="about-heading">
                    We always delivers expertise and compassion in every interaction.
                </h1>

                <div className="about-content">
                    <div className="about-image">
                        <img src={aboutimg} alt="Medical Surgery" />
                    </div>

                    <div className="about-text">
                        <h3>
                            Experience exceptional medical care at the General 
                            Hospital, a luxury hotel designed to provide comfortable 
                            and personalized healthcare services to its guests.
                        </h3>

                        <p>
                            General Hospital is a luxury medical facility that provides top-notch medical care to 
                            its patients. With state-of-the-art technologies and experienced medical 
                            professionals, we offer personalized treatment options for all kinds of medical 
                            conditions. Our facility is equipped with comfortable and spacious rooms.
                        </p>

                        <p className="about-quote">
                            "Experience top-notch medical care at General Hospital, where our expert team of 
                            doctors and modern facilities ensure your well-being. Rest easy in our luxurious 
                            accommodations and ease your worries."
                        </p>

                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>
            </section>
                
                {/* Medical Section */}
            <section className="medical-section">
                <p className="medical-label">Primary Care</p>
                <h1 className="medical-heading">Medical Advancements</h1>

                <div className="medical-grid">

                    <MedicalCard
                        image = {img1}
                        title = "Medical Advancements"
                        description = "Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction"
                    />

                    <MedicalCard
                        image = {img2}
                        title = "Counseling"
                        description = "Our qualified therapists provide personalized counselling services to help you overcome life's challenges."
                    />

                    <MedicalCard
                        image = {img3}
                        title = "Family Medicine"
                        description = "Our team of experienced physicians provides comprehensive medical care for individuals and families."
                    />
                </div>
            </section>

            {/* book appointment */}
            <div className="cta-section">
                <h2>
                    Take the first step towards better <br />
                    health. Book your appointment now!
                </h2>
                <button className="cta-btn">Book An Appointment</button>
            </div>

            {/* why choose us */}
            <section className="why-section">
                <div className="why-container">
                    <div className="why-content">
                        <h1>Why Choose Us</h1>
                        
                        <p className="why-intro">
                            Id sed suspendisse massa elit morbi odio justo vitae pharetra. Sed nullam sit est scelerisque tincidunt pellentesque felis.
                        </p>

                        <div className="why-item">
                            <h3>20+ years of services</h3>
                            <p>
                                General Hospital boasts over 20 years of exceptional healthcare services, making it a top choice in the industry.
                            </p>
                        </div>
                        
                        <hr />

                        <div className="why-item">
                            <h3>Leading healthcare provider</h3>
                            <p>
                                General Hospital - a leading healthcare provider delivering top-notch medical care.
                            </p>
                        </div>

                        <hr />

                        <div className="why-item">
                            <h3>Patient-centric care</h3>
                            <p>
                                General Hospital - patient-centric care is at the core of our values.
                            </p>
                        </div>
                    </div>

                    <div className="why-image">
                        <img src = {whyimg} alt = "Why Choose Us"/>
                    </div>
                </div>
            </section>

            {/* Doctor cards */}
            <section className="team-section">
                <p className="team-label">OUR TEAM</p>
                <h1 className="team-heading">Meet Our Professionals</h1>

                <div className="team-grid">
                    <DoctorCard
                        image = {doctorimg1}
                        name = "Floyd Miles"
                        role = "Director of Operations"
                    />

                    <DoctorCard
                        image = {doctorimg2}
                        name = "Jacob Jones"
                        role = "Medical or Health Services Manager"
                    />

                    <DoctorCard
                        image = {doctorimg3}
                        name = "Courtney Henry"
                        role = "Assistant Admissions Director"
                    />

                    <DoctorCard
                        image = {doctorimg4}
                        name = "Devon Lane"
                        role = "Medical Manager"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;