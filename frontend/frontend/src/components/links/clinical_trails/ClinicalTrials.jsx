import React from "react";
import { NavLink } from "react-router-dom";
import "./ClinicalTrials.css";
import clinicalImg from "../../../assets/clinicaltrails.jpg";


const ClinicalTrials = () => {
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

      {/* clinical-trails */}
      <section className="clinical-page">
        <div className="overlay">
          <h1>Clinical Trials</h1>
        </div>

        <div className="clinical-wrapper">
          <p className="clinical-intro">
            We are committed to advancing medical science through ethically
            conducted clinical trials that aim to improve patient outcomes,
            enhance treatment effectiveness, and contribute to the future of
            healthcare.
          </p>

          <div className="clinical-image-box">
            <img src={clinicalImg} alt="Clinical Trials Hospital" />
          </div>

          <div className="clinical-content">
            <p>
              Clinical trials are research studies conducted in hospitals to
              evaluate new medical treatments, diagnostic methods, medications,
              and medical devices. These trials are essential for ensuring that
              new healthcare solutions are safe, effective, and beneficial for
              patients.
            </p>

            <p>
              Hospitals play a critical role in clinical trials by providing a
              controlled and professionally supervised environment where research
              can be conducted responsibly. Each trial follows strict medical
              protocols, regulatory guidelines, and ethical standards approved
              by medical review boards.
            </p>

            <p>
              Clinical trials are conducted in multiple phases, each designed to
              answer specific research questions. These phases help researchers
              understand how a treatment works, determine appropriate dosages,
              identify possible side effects, and compare new treatments with
              existing standard care.
            </p>

            <p>
              Patient safety is the highest priority in all clinical trials.
              Participants are carefully monitored by experienced healthcare
              professionals throughout the study. Informed consent is obtained
              before participation, ensuring that patients fully understand the
              purpose, procedures, potential benefits, and possible risks.
            </p>

            <p>
              Participation in clinical trials is completely voluntary. Patients
              have the right to withdraw at any stage without affecting their
              ongoing medical care. All personal and medical information is kept
              confidential in accordance with healthcare privacy regulations.
            </p>

            <p>
              Through clinical trials, hospitals contribute to medical innovation,
              improve treatment standards, and help shape the future of medicine.
              These efforts ultimately lead to safer therapies, better diagnostic
              tools, and enhanced quality of life for patients worldwide.
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

export default ClinicalTrials;
