import React from "react";
import { NavLink } from "react-router-dom";
import "./SchoolOfMedicine.css";
import schoolBg from "../../../assets/som1.jpg";
import schoolImg from "../../../assets/som2.jpg";

const SchoolOfMedicine = () => {
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

            {/* School of Medicine */}
            <section className="school-page">
                <div
                    className="school-hero"
                    style={{ backgroundImage: `url(${schoolBg})` }}
                >
                    <div className="school-overlay">
                        <h1>School of Medicine</h1>
                    </div>
                </div>

                <div className="school-wrapper">
                    <p className="school-intro">
                        The School of Medicine is dedicated to excellence in medical
                        education, research, and clinical training, shaping the next
                        generation of healthcare professionals.
                    </p>

                    <div className="school-image-box">
                        <img src={schoolImg} alt="School of Medicine" />
                    </div>

                    <div className="school-content">
                        <p>
                            The School of Medicine serves as an academic foundation within the
                            hospital system, integrating education, research, and patient care.
                            It is committed to training competent, ethical, and compassionate
                            medical professionals who meet the evolving needs of society.
                        </p>

                        <p>
                            Medical education at the School of Medicine emphasizes a strong
                            understanding of basic sciences, clinical skills, and evidence-based
                            practice. Students are trained under the guidance of experienced
                            physicians, surgeons, and healthcare educators in a structured and
                            supportive environment.
                        </p>

                        <p>
                            Clinical exposure is a core component of medical training. Students
                            gain hands-on experience through supervised patient care, clinical
                            rotations, and hospital-based learning, allowing them to apply
                            theoretical knowledge in real-world healthcare settings.
                        </p>

                        <p>
                            The School of Medicine also promotes medical research and innovation.
                            Faculty and students engage in research activities that contribute
                            to advancements in diagnosis, treatment, and disease prevention,
                            strengthening the quality of healthcare delivery.
                        </p>

                        <p>
                            Ethical practice and professionalism are central to medical
                            education. The School of Medicine instills values such as patient
                            safety, respect, accountability, and lifelong learning to ensure
                            responsible medical practice.
                        </p>

                        <p>
                            By combining academic excellence with clinical expertise, the
                            School of Medicine plays a vital role in improving healthcare
                            outcomes and building a skilled medical workforce for the future.
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

export default SchoolOfMedicine;