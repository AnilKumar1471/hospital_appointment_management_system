import React from "react";
import "../health_library/Health_library.css";
import { NavLink } from "react-router-dom";
import diseasesImg from "../../../assets/diseas.jpg";
import medicationsImg from "../../../assets/medicans.jpg";
import livingImg from "../../../assets/healthliving.jpg";
import testsImg from "../../../assets/test.jpg";
import wellnessImg from "../../../assets/paitent.jpg";
import educationImg from "../../../assets/welfare.jpg";

const HealthLibrary = () => {
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

        {/* HERO SECTION */}
      <section className="health-library">
        <div className="health-hero">
          <h1 className="health-title">Health Library</h1>
        </div>

        <div className="health-library-container">
          <p className="health-subtitle">
            Trusted medical information to help you understand conditions,
            treatments, and healthy living.
          </p>

          <div className="health-grid">
            <div className="health-card">
              <img src={diseasesImg} alt="Diseases and Conditions" />
              <h3>Diseases & Conditions</h3>
              <p>
                Learn about symptoms, causes, diagnosis, and treatment options
                for common and rare diseases.
              </p>
            </div>

            <div className="health-card">
              <img src={medicationsImg} alt="Medications" />
              <h3>Medications</h3>
              <p>
                Understand how medicines work, possible side effects,
                precautions, and usage guidelines.
              </p>
            </div>

            <div className="health-card">
              <img src={livingImg} alt="Healthy Living" />
              <h3>Healthy Living</h3>
              <p>
                Tips and guidance on nutrition, exercise, mental health, and
                maintaining a healthy lifestyle.
              </p>
            </div>

            <div className="health-card">
              <img src={testsImg} alt="Tests & Procedures" />
              <h3>Tests & Procedures</h3>
              <p>
                Clear explanations of medical tests and procedures to help you
                know what to expect.
              </p>
            </div>

            <div className="health-card">
              <img src={wellnessImg} alt="Wellness & Prevention" />
              <h3>Wellness & Prevention</h3>
              <p>
                Preventive care information including vaccinations, screenings,
                and regular health checkups.
              </p>
            </div>

            <div className="health-card">
              <img src={educationImg} alt="Patient Education" />
              <h3>Patient Education</h3>
              <p>
                Educational resources designed to empower patients and families
                in healthcare decisions.
              </p>
            </div>
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

export default HealthLibrary;
