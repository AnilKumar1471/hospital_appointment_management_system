import React from "react";
import "./about.css";
import { NavLink } from "react-router-dom";
import aboutbg from "../../assets/bg2.jpg";
import hospitalImg from "../../assets/about-us.jpg";

const About = () => {
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
      {/* about main page */}
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="overlay">
          <h1>About Us</h1>
        </div>
      </div>
        {/* about-content*/}
      <div className="about-content">
        <h4>
          We are committed to providing exceptional patient care and promoting
          wellness in our community. We offer personalized care plans tailored
          to meet the unique needs of each patient.
        </h4>
      </div>
      <div className="about-details">
        <img
          src={hospitalImg}
          alt="General Hospital"
          className="hospital-image"
        />
        <div className="about-text">
          <p>
            General Hospital is a luxury medical facility that is dedicated to providing the highest quality medical care to its patients. Our state-of-the-art hospital is staffed by some of <br />
            the best and compassionate medical professionals in the industry. We offer a wide range of medical services, including general surgery, neurology, cardiology, oncology, and <br />
            much more. Our facilities are equipped with the latest medical equipment and technology to ensure that our patients receive the best treatment possible. We also offer <br />
            complimentary services such as personalized meal plans, concierge services, and luxurious accommodations for patients and their families. At General Hospital, we are <br />
            committed to providing exceptional medical care in a comfortable and welcoming environment.
          </p>
          <p>
            Welcome to the General Hospital, a luxury medical facility that offers world-class medical services to ensure the well-being of our patients. Our highly skilled medical <br />
            professionals and state-of-the-art equipment enable us to provide specialized care to our patients. We offer a wide range of medical services, including surgeries, medical <br />
            consultations, laboratory tests, and emergency care. Our luxurious and spacious guest rooms ensure a comfortable and relaxing stay. Whether you are visiting for a routine <br />
            check-up or a complex medical procedure, we are committed to providing comprehensive care and personalized attention to meet your health needs.
          </p>
        </div>
      </div>

        {/* vission mission */}
      <section className="vision-mission">
        <div className="vm-row">
          <div className="vm-title">VISION</div>
          <div className="vm-content">
            To be the premier healthcare provider, recognized for exceptional patient-<br/>
            centered care, medical innovation, and positive community impact.
          </div> 
        </div>
        <hr className="vm-divider"/>

        <div className="vm-row">
          <div className="vm-title">MISSION</div>
          <div className="vm-content">
            Our mission is to improve and transform lives through compassionate and <br/>
            comprehensive healthcare services. We are committed to delivering <br/>
            exceptional medical care, promoting wellness, and advancing medical <br/>
            knowledge through innovation and research. We strive to be the trusted <br/>
            partner in our community's health and well-being.
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

export default About;
