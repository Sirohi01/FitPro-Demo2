    import React from "react";
    import { Link } from "react-router-dom";
    import trainerImage from "../assets/trainer-image.jpg";
    import certificationImage from "../assets/certification-image.jpg";
    import gymImage from "../assets/gym-image.jpg";
    import "../styles/About.css";

    const About = () => {
    const certifications = [
        "NASM Certified Personal Trainer",
        "Precision Nutrition Level 1",
        "ACE Fitness Nutrition Specialist",
        "CrossFit Level 1 Trainer",
        "TRX Suspension Training Certified",
    ];

    const trainingPhilosophy = [
        "Evidence-based training methods",
        "Individualized programming",
        "Sustainable lifestyle changes",
        "Holistic approach to health",
        "Continuous education and improvement",
    ];

    return (
        <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
            <div className="about-hero-content">
            <h1>About FitPro Elite</h1>
            <p>
                Empowering individuals to achieve their fitness goals through science,
                dedication, and personalized coaching.
            </p>
            </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
            <div className="section-container">
            <div className="mission-content">
                <h2>Our Mission</h2>
                <p>
                At FitPro Elite, we believe fitness should be accessible,
                enjoyable, and effective for everyone. Our mission is to provide
                the tools, knowledge, and support needed to help you build a
                stronger, healthier version of yourself.
                </p>
                <p>
                Whether you're looking to lose weight, build muscle, improve
                athletic performance, or simply feel better in your daily life,
                we're here to guide you every step of the way.
                </p>
            </div>
            <div className="mission-image">
                <img src={gymImage} alt="Gym Facility" />
            </div>
            </div>
        </section>

        {/* Trainer Bio Section */}
        <section className="trainer-section">
            <div className="section-container">
            <div className="trainer-image">
                <img src={trainerImage} alt="Professional Trainer" />
            </div>
            <div className="trainer-content">
                <h2>Meet Your Trainer</h2>
                <p>
                Hi, I'm Manish Sirohi, founder of FitPro Elite. My fitness journey
                began over a decade ago when I discovered the transformative power
                of exercise and proper nutrition.
                </p>
                <p>
                After helping hundreds of clients achieve remarkable
                transformations, I've developed a proven system that delivers
                results while fitting into real, busy lives.
                </p>
                <p>
                My approach combines the latest exercise science with practical
                strategies that make healthy living sustainable and enjoyable.
                </p>
                <div className="trainer-stats">
                <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Clients Transformed</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Client Satisfaction</span>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Certifications Section */}
        <section className="certifications-section">
            <div className="section-container">
            <div className="certifications-content">
                <h2>Qualifications & Certifications</h2>
                <p>
                I maintain the highest standards of professional education to
                ensure you receive the most effective, up-to-date training advice.
                </p>
                <ul className="certifications-list">
                {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
                </ul>
            </div>
            <div className="certifications-image">
                <img src={certificationImage} alt="Certifications" />
            </div>
            </div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
            <div className="section-header">
            <h2>Training Philosophy</h2>
            <p>The principles that guide every program we create</p>
            </div>
            <div className="philosophy-grid">
            {trainingPhilosophy.map((item, index) => (
                <div className="philosophy-card" key={index}>
                <div className="philosophy-number">{index + 1}</div>
                <h3>{item}</h3>
                </div>
            ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
            <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>
                Take the first step towards a healthier, stronger you today. Schedule
                your free consultation to discuss your goals and how we can help you
                achieve them.
            </p>
            <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                Book Consultation
                </Link>
                <Link to="/transformation" className="cta-button secondary">
                View Programs
                </Link>
            </div>
            </div>
        </section>
        </div>
    );
    };

    export default About;