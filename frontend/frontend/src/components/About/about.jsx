import React from "react";
import "./about.css";
import aboutbg from "../../assets/bg2.jpg";
import hospitalImg from "../../assets/about-us.jpg";

const About = () => {
  return (
    <>
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
          wellness <br />in our community. We offer personalized care plans tailored
          to <br />meet the unique needs of each patient.
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
    </>
  );
};

export default About;
