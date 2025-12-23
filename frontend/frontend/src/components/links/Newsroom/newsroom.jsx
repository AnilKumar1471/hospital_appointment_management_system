import React from "react";
import "./newsroom.css";
import { NavLink } from "react-router-dom";
import newsroomBg from "../../../assets/newsroom1.jpg";
import newsroomImg from "../../../assets/newsroom2.jpg";

const Newsroom = () => {
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

        {/* Newsroom */}
        <section className="newsroom-page">
            <div
                className="newsroom-hero"
                style={{ backgroundImage: `url(${newsroomBg})` }}
            >
                <div className="newsroom-overlay">
                <h1>Newsroom</h1>
                </div>
            </div>

            <div className="newsroom-wrapper">
                <p className="newsroom-intro">
                The Newsroom provides official updates, announcements, and important
                information related to hospital services, medical advancements, and
                organizational developments.
                </p>

                <div className="newsroom-image-box">
                <img src={newsroomImg} alt="Hospital Newsroom" />
                </div>

                <div className="newsroom-content">
                <p>
                    The hospital newsroom serves as a central source of verified and
                    transparent information for patients, families, healthcare
                    professionals, and the community. It reflects the hospital’s
                    commitment to openness, accuracy, and timely communication.
                </p>

                <p>
                    Through the newsroom, hospitals share updates about new medical
                    services, healthcare programs, clinical achievements, research
                    initiatives, infrastructure improvements, and patient care
                    innovations. All information published is carefully reviewed to
                    maintain credibility and trust.
                </p>

                <p>
                    The newsroom also highlights important public health messages,
                    awareness campaigns, and safety guidelines that support community
                    well-being. These updates help patients stay informed about health
                    risks, preventive measures, and available medical resources.
                </p>

                <p>
                    Hospital announcements published in the newsroom may include policy
                    updates, accreditation milestones, awards, partnerships, and
                    leadership messages. This ensures that stakeholders receive
                    accurate information directly from the hospital.
                </p>

                <p>
                    Maintaining a reliable newsroom helps reduce misinformation and
                    ensures that patients and the public have access to authentic,
                    hospital-approved content. It strengthens communication between
                    healthcare providers and the communities they serve.
                </p>

                <p>
                    The newsroom content is intended for informational purposes only
                    and does not replace professional medical advice. For personal
                    medical concerns, patients are encouraged to consult qualified
                    healthcare professionals.
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

export default Newsroom;
