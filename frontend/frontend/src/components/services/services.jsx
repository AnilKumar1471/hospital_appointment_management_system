import React from "react";
import "./services.css"
import ServiceCard from "./ServiceCard"
import bgimg from "../../assets/services-top.jpg"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"

const Services = () => {
    return (
        <>
            <div
                className="condition-hero"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <div className="hero-overlay">
                    <h1>Conditions We Treat</h1>
                </div>
            </div>

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

            <div className="cta-section">
                <h2>
                    Take the first step towards better <br />
                    health. Book your appointment now!
                </h2>
                <button className="cta-btn">Book An Appointment</button>
            </div>

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
        </>
    );
};

export default Services