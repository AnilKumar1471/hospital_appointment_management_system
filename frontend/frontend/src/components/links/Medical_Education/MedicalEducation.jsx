import React from "react";
import { NavLink } from "react-router-dom";
import "./MedicalEducation.css";
import educationBg from "../../../assets/ME2.jpg";
import educationImg from "../../../assets/ME1.jpg";

const MedicalEducation = () => {
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

                <button className='apn-btn'>
                <b>Book Appointment</b>
                </button>
            </nav>
            {/* MedicalEducation */}
            <section className="education-page">
                <div
                    className="education-hero"
                    style={{ backgroundImage: `url(${educationBg})` }}
                >
                    <div className="education-overlay">
                    <h1>Medical Education</h1>
                    </div>
                </div>

                <div className="education-wrapper">
                        <p className="education-intro">
                        Medical education is a core pillar of the hospital system, focused on
                        developing knowledgeable, skilled, and compassionate healthcare
                        professionals through structured learning and clinical training.
                        </p>

                        {/* Main Image */}
                        <div className="education-image-box">
                        <img src={educationImg} alt="Medical Education" />
                        </div>

                        {/* Content */}
                        <div className="education-content">
                        <p>
                            Medical education within a hospital setting combines academic
                            learning with hands-on clinical experience. It provides students
                            and healthcare professionals with a strong foundation in medical
                            sciences, patient care, and ethical practice.
                        </p>

                        <p>
                            Training programs emphasize evidence-based medicine, clinical
                            reasoning, and effective communication. Learners are guided by
                            experienced faculty and clinicians who support professional growth
                            and lifelong learning.
                        </p>

                        <p>
                            Clinical exposure plays a vital role in medical education. Students
                            participate in supervised clinical rotations, patient interactions,
                            and diagnostic procedures, allowing them to apply theoretical
                            knowledge in real healthcare environments.
                        </p>

                        <p>
                            Medical education also promotes continuous professional development
                            for healthcare staff. Ongoing training programs, workshops, and
                            academic activities help maintain high standards of patient care
                            and adapt to advancements in medical science.
                        </p>

                        <p>
                            Ethical responsibility and patient safety are central to all
                            educational activities. Medical education programs emphasize
                            professionalism, accountability, and respect for patient dignity
                            in every aspect of care.
                        </p>

                        <p>
                            Through structured medical education, hospitals strengthen their
                            workforce, enhance healthcare quality, and contribute to the
                            advancement of medicine and public health.
                        </p>
                    </div>

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

export default MedicalEducation;