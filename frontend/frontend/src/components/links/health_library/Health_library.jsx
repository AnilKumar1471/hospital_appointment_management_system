import React from "react";
import { NavLink } from "react-router-dom";
import "./Health_library.css";
import healthImg from "../../../assets/Hl-1.jpg";

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
        <button className='apn-btn'>
          <b>Book Appointment</b>
        </button>
      </nav>

    {/* Health Library */}
    <section className="health-page">
      <div className="health-hero">
        <div className="health-overlay">
          <h1>Health Library</h1>
        </div>
      </div>

      <div className="health-wrapper">
        <p className="health-intro">
          The Health Library provides reliable, easy-to-understand medical
          information to help patients and families make informed decisions
          about their health, wellness, and treatment options.
        </p>

        <div className="health-image-box">
          <img src={healthImg} alt="Health Library" />
        </div>

        <div className="health-content">
          <p>
            A Health Library is a centralized resource that offers educational
            information on medical conditions, treatments, preventive care,
            and healthy lifestyle practices. It serves as a trusted source of
            knowledge for patients seeking to understand their health better.
          </p>

          <p>
            Hospitals maintain health libraries to promote health awareness,
            encourage preventive care, and support patient education. The
            information provided is reviewed by healthcare professionals to
            ensure accuracy, clarity, and relevance.
          </p>

          <p>
            The Health Library covers a wide range of topics including common
            diseases, chronic conditions, diagnostic procedures, medications,
            surgical treatments, and post-treatment care. It also provides
            guidance on nutrition, exercise, mental health, and overall
            well-being.
          </p>

          <p>
            Access to accurate health information empowers patients to actively
            participate in their healthcare journey. Understanding symptoms,
            treatment options, and preventive measures helps patients
            communicate effectively with healthcare providers.
          </p>

          <p>
            The content in the Health Library is designed to be informative yet
            easy to understand. Medical terms are explained clearly so that
            individuals from all backgrounds can benefit from the information
            without confusion.
          </p>

          <p>
            A well-maintained health library supports better health outcomes by
            reducing misinformation, promoting early diagnosis, and
            encouraging healthier lifestyle choices. It strengthens the
            relationship between patients and healthcare providers through
            transparency and education.
          </p>

          <p>
            The Health Library is intended for educational purposes only and
            does not replace professional medical advice. Patients are always
            encouraged to consult qualified healthcare professionals for
            diagnosis, treatment, and personalized medical care.
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

export default HealthLibrary;
