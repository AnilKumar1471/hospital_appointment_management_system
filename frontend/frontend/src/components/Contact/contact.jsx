import React from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";
import contactbg from "../../assets/contact.jpg"

const Contact = () => {
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

            {/* Contact-img */}
            <section 
                className="contact-hero"
                style={{ backgroundImage: `url(${contactbg})` }}
            >
                <div className="contact-overlay">
                    <h1>Contact</h1>
                </div>
            </section>

            {/* General Informatiom */}
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <div className="info-block">
                            <h3>General Information</h3>
                            <p>1234 Washington Ave. Manchester, Kentucky 39495.</p>
                            <a href="tel:4065550120">(406) 555-0120</a>
                        </div>

                        <div className="info-block">
                            <h3>Find a Doctor</h3>
                            <p>
                                For help finding a doctor, please search for a specific doctor or call:
                            </p>
                            <a href="tel:4065550120">(406) 555-0120</a>
                        </div>

                        <div className="info-block">
                            <h3>Patient Relations</h3>
                            <p>General Hospital Kentucky</p>
                            <a href="tel:4065550120">(406) 555-0120</a>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <form>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text"/>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email"/>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5"></textarea>
                            </div>

                            <button type="submit" className="form-btn">Send Message</button>
                        </form>
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

export default Contact