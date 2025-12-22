import React from "react";
import "./services.css"
import ServiceCard from "./ServiceCard"
import { NavLink } from "react-router-dom";
import bgimg from "../../assets/services-top.jpg"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"

const Services = () => {
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
            {/* condition-image */}
            <div
                className="condition-hero"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <div className="hero-overlay">
                    <h1>Conditions We Treat</h1>
                </div>
            </div>

                {/* service-section */}
            <div className="services-section">
                <h1>Patient Care and Services</h1>
                <p className="services-desc">
                    Our newly established system is dedicated to providing patients with a comprehensive range of specialty care <br />
                    and advanced treatments. With an extensive network of state-of-the-art facilities, we ensure convenient access <br />
                    to top-notch healthcare services for all.
                </p>
                <div className="services-grid">
                    <ServiceCard
                        image={img1}
                        title="Patient Care and Services"
                        description="Our newly established system is dedicated to providing patients with a comprehensive range of specialty care and advanced treatments. With an extensive network of state-of-the-art facilities, we ensure convenient access to top-notch healthcare services for all."
                    />

                    <ServiceCard
                        image={img2}
                        title="Cancer"
                        description="At General Hospital, our team of experienced oncologists provide personalized care to patients with cancer, utilizing advanced treatments and technology."
                    />

                    <ServiceCard
                        image={img3}
                        title="Orthopedics"
                        description="Whether you need joint replacements or sports injury treatments, our skilled orthopedic surgeons and staff are here to help you on the path to recovery at General Hospital."
                    />

                    <ServiceCard
                        image={img4}
                        title="Dental"
                        description="Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction"
                    />

                    <ServiceCard
                        image={img5}
                        title="Counseling"
                        description="Our qualified therapists provide personalized counselling services to help you overcome life's challenges."
                    />
                </div>
            </div>

            {/* book appointment */}
            <div className="cta-section">
                <h2>
                    Take the first step towards better <br />
                    health. Book your appointment now!
                </h2>
                <button className="cta-btn">Book An Appointment</button>
            </div>

            {/* info-section */}
            <div className="info-section">
                <div className="info-grid">
                    <div className="info-card">
                        <h3>Visitor Policy</h3>
                        <p>
                            General Hospital welcomes visitors with its visitor <br />
                            policy to ensure patient privacy.
                        </p>
                        <a href="#">Learn More →</a>
                    </div>

                    <div className="info-card">
                        <h3>Specialties</h3>
                        <p>
                            We specialize in various medical fields, enabling us <br />
                            to provide top-class medical care.
                        </p>
                        <a href="#">Learn More →</a>
                    </div>

                    <div className="info-card">
                        <h3>Clinical Services</h3>
                        <p>
                            Our clinical services are comprehensive and <br />
                            personalized to meet your healthcare needs.
                        </p>
                        <a href="#">Learn More →</a>
                    </div>
                </div>

                <hr className="info-divider" />

                <div className="info-grid">
                    <div className="info-card">
                        <h3>Mother & Child</h3>
                        <p>
                            Our Mother & Child program offers specialized <br />
                            care to mothers and newborns.
                        </p>
                        <a href="#">Learn More →</a>
                    </div>

                    <div className="info-card">
                        <h3>Rooms</h3>
                        <p>
                            General Hospital's luxurious rooms provide <br />
                            comfort and care during your medical stay.
                        </p>
                        <a href="#">Learn More →</a>
                    </div>

                    <div className="info-card">
                        <h3>Cost & Financing</h3>
                        <p>
                            Discover our cost-effective medical packages and <br />
                            flexible financing options at General Hospital.
                        </p>
                        <a href="#">Learn More →</a>
                    </div>
                </div>
            </div>

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

export default Services