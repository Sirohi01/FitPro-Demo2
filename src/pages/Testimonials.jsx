    // src/pages/Testimonials.jsx
    import React from "react";
    import TestimonialCard from "../components/TestimonialCard";
    import testimonialHero from "../assets/testimonial-hero.jpg";
    import transformation1 from "../assets/transformation1.jpg";
    import transformation2 from "../assets/transformation2.jpg";
    import transformation3 from "../assets/transformation3.jpg";
    import "../styles/Testimonials.css";

    const Testimonials = () => {
    const testimonials = [
        {
        name: "Manish Sirohi",
        role: "Lost 15kg in 12 Weeks",
        quote:
            "FitPro Elite completely transformed my approach to fitness. I've not only lost weight but gained so much confidence and energy! The personalized program made all the difference.",
        rating: 5,
        image: transformation1,
        },
        {
        name: "Vivek Chauhan",
        role: "Marathon Runner",
        quote:
            "The training program helped me shave 10 minutes off my marathon time while feeling stronger than ever. The nutrition guidance was game-changing for my endurance.",
        rating: 5,
        image: transformation2,
        },
        {
        name: "Priya Patel",
        role: "Working Professional",
        quote:
            "As a busy professional, I needed efficient workouts. The 30-minute HIIT sessions fit perfectly into my schedule, and I'm in the best shape of my life!",
        rating: 4,
        image: transformation3,
        },
        {
        name: "Piyush Kumar",
        role: "Gained 8kg Muscle",
        quote:
            "After years of struggling to gain muscle, the customized strength program and nutrition plan helped me achieve what I thought was impossible. Highly recommended!",
        rating: 5,
        image: transformation1,
        },
        {
        name: "Raju Kumar",
        role: "Postpartum Fitness",
        quote:
            "The postpartum program helped me regain my strength safely and effectively. The trainer's understanding of my specific needs made all the difference.",
        rating: 5,
        image: transformation2,
        },
        {
        name: "Prashant Kumar",
        role: "Over 50 Transformation",
        quote:
            "At 52, I thought my best years were behind me. This program proved me wrong - I'm stronger now than in my 30s! The age-appropriate approach was key.",
        rating: 5,
        image: transformation3,
        },
    ];

    const transformationStats = [
        {
        value: "95%",
        label: "Client Satisfaction Rate",
        },
        {
        value: "500+",
        label: "Successful Transformations",
        },
        {
        value: "10+",
        label: "Years of Experience",
        },
        {
        value: "100%",
        label: "Customized Programs",
        },
    ];

    return (
        <div className="testimonials-page">
        {/* Hero Section */}
        <section
            className="testimonials-hero"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${testimonialHero})` }}
        >
            <div className="hero-content">
            <h1>Success Stories</h1>
            <p>
                Real people, real results. See how our clients transformed their
                lives through fitness.
            </p>
            </div>
        </section>

        {/* Stats Section */}
        <section className="transformation-stats">
            <div className="stats-grid">
            {transformationStats.map((stat, index) => (
                <div className="stat-card" key={index}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                </div>
            ))}
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
            <div className="section-header">
            <h2>Client Transformations</h2>
            <p>
                Don't just take our word for it - hear from people who've experienced
                the FitPro Elite difference
            </p>
            </div>
            <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="testimonials-cta">
            <div className="cta-content">
            <h2>Ready for Your Transformation?</h2>
            <p>
                Join hundreds of satisfied clients who've achieved their fitness goals
                with our proven system.
            </p>
            <div className="cta-buttons">
                <button className="cta-button primary">Get Started</button>
                <button className="cta-button secondary">View Programs</button>
            </div>
            </div>
        </section>
        </div>
    );
    };

    export default Testimonials;