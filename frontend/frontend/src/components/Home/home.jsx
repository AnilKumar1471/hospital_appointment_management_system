import React from "react";
import { NavLink} from 'react-router-dom'
import "./Home.css";
import HomeCard from "./HomeCard";
import MedicalCard from "./MedicalCard";
import DoctorCard from "./DoctorCard";
import ReviewCard from "./ReviewCard";

import heroBg from "../../assets/large.jpg"
import aboutimg from "../../assets/home.jpg"
import img1 from "../../assets/medical-1.jpg"
import img2 from "../../assets/medical-2.jpg"
import img3 from "../../assets/medical-3.jpg"
import whyimg from "../../assets/why-us.jpg"
import doctorimg1 from "../../assets/doctor-01.jpg"
import doctorimg2 from "../../assets/doctor-02.jpg"
import doctorimg3 from "../../assets/doctor-03.jpg"
import doctorimg4 from "../../assets/doctor-04.jpg"
import user1 from "../../assets/user1.jpg"
import user2 from "../../assets/user2.jpg"
import user3 from "../../assets/user3.jpg"
import user4 from "../../assets/user4.jpg"

const Home = () => {
    return (
        <>
            {/* Emergency Component */}
            <div className='emer_main'>
                <p className='emerg'>Emergency Call: 040-123456</p>
            </div>

            {/* NavBar */}
            <nav className='navbar'>
                <p className='logo-name'>General <br /><b>Hospital</b></p>
                <NavLink to="/" end className="nav-link">
                    Home
                </NavLink>

                <NavLink to="/about" end className="nav-link">
                    About   
                </NavLink>

                <NavLink to="/services" end className="nav-link">
                    Services
                </NavLink>

                <NavLink to="/contact" end className="nav-link">
                    Contact
                </NavLink>
                <button  className='apn-btn'>
                    <b>Book Appointment</b>
                </button>
            </nav>

                {/* first img */}
                    <section
                        className="hero-section"
                        style={{ backgroundImage: `url(${heroBg})` }}
                        >
                        <div className="hero-overlay">
                            <div className="hero-content">
                            <h1>
                                Transforming Lives Through Excellence in Healthcare
                            </h1>

                            <p>
                                We are committed to providing exceptional patient care and
                                promoting wellness in our community.
                            </p>

                            <div className="hero-footer">
                                <span>📍 1234 Washington Ave. Manchester, Kentucky 39495.</span>
                                <span>📞 (406) 555-0121</span>
                            </div>
                            </div>
                        </div>
                    </section>

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

            {/* ReviewCard */}
            <section className="testimonials-section">
                <p className="testimonials-label">Patient Stories</p>
                <h1 className="testimonials-heading">
                    What Our Patient are Saying
                </h1>

                <div className="testimonials-grid">
                    <ReviewCard
                        image = {user1}
                        name = "Jessica"
                        text = "Landmark Hospital is very well organized. The staff are friendly and helpful. They keep everything clean and tidy. The doctors explain things clearly, so patients understand their care."
                    />

                    <ReviewCard
                        image = {user2}
                        name = "Miguel"
                        text = "I had an excellent experience with Landmark Hospital. The hospital had a well-organised system, caring staff, and was well-connected. The staff showed great care and professionalism in their interacti"
                    />

                    <ReviewCard
                        image = {user3}
                        name = "Edwards"
                        text = "Landmark Hospital is a top-notch facility with a clean & hygienic environment. The staff is highly professional and compassionate, providing excellent care to patients."
                    />

                    <ReviewCard
                        image = {user4}
                        name = "Lawrence M"
                        text = "I recently had a wonderful experience at Genaral Hospitals. The doctors and staff provided excellent treatment and care. The facilities were top-notch and the entire process was smooth"
                    />
                </div>
            </section>

            {/* semiFooter */}
            <section className="help-section">
                <div className="help-overlay">
                    <div className="help-left">
                        <h1>Need help?</h1>
                        <p>
                            Id sed suspendisse massa elit morbi odio justo vitae pharetra.
                        <br />
                            Sed nullam sit est scelerisque tincidunt pellentesque felis.
                        </p>
                    </div>

                    <div className="help-right">
                        <div>
                            <span>For enquiries, please call</span>
                            <h3>(406) 555-0120</h3>
                        </div>

                        <div className="divider"></div>

                        <div>
                            <span>For appointments</span>
                            <h3>(406) 555-0120</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}

            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-brand">
                        <p>GENERAL <br /><h3>HOSPITAL</h3></p>
                        <p>
                            1234 Washington Ave. Manchester,
                            <br />
                            Kentucky 39495.
                        </p>
                        <p>(406) 555-0120</p>
                    </div>

                    <div className="footer-col">
                        <h4>Patient Information</h4>
                        <a href="#">Find a Doctor</a>
                        <a href="#">Health Library</a>
                        <a href="#">Clinical Trials</a>
                        <a href="#">Newsroom</a>
                    </div>

                    <div className="footer-col">
                        <h4>Research & Education</h4>
                        <a href="#">School of Medicine</a>
                        <a href="#">Medical Education</a>
                        <a href="#">Research</a>
                        <a href="#">School of Nursing</a>
                    </div>

                    <div className="footer-col">
                        <h4>For Health Professionals</h4>
                        <a href="#">Transfer a patient</a>
                        <a href="#">Mount Sinai Connect</a>
                        <a href="#">Refer a Patient</a>
                        <a href="#">Nursing</a>
                    </div>
                </div>

                    <div className="footer-bottom">
                        <span>© 2025 General Hospital</span>
                        <a href="#">Privacy Policy</a>
                    </div>
            </footer>
        </>
    );
};

export default Home;