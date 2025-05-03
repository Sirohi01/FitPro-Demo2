    import React from "react";
    import { Link } from "react-router-dom";
    import heroImage from "../assets/hero-image.jpg";
    import trainerImage from "../assets/trainer-image.jpg";
    import workoutImage from "../assets/workout-image.jpg";
    import nutritionImage from "../assets/nutrition-image.jpg";
    import resultsImage from "../assets/results-image.jpg";
    import TestimonialCard from "../components/TestimonialCard";
    import "../styles/Home.css";

    const Home = () => {
    const features = [
        {
        title: "Personalized Training",
        description:
            "Custom workout plans tailored to your goals, fitness level, and schedule.",
        icon: "💪",
        },
        {
        title: "Nutrition Guidance",
        description:
            "Meal plans and dietary advice to complement your fitness journey.",
        icon: "🥗",
        },
        {
        title: "Progress Tracking",
        description:
            "Monitor your improvements with our comprehensive tracking tools.",
        icon: "📊",
        },
        {
        title: "Community Support",
        description:
            "Join a network of like-minded individuals for motivation and advice.",
        icon: "👥",
        },
    ];

    const testimonials = [
        {
        name: "Manish Sirohi",
        role: "Fitness Enthusiast",
        quote:
            "FitPro Elite completely transformed my approach to fitness. I've lost 15kg and gained so much confidence!",
        rating: 5,
        },
        {
        name: "Vivek Chauhan",
        role: "Marathon Runner",
        quote:
            "The personalized training program helped me shave 10 minutes off my marathon time. Incredible results!",
        rating: 5,
        },
        {
        name: "Priya Patel",
        role: "Working Professional",
        quote:
            "The 30-minute HIIT workouts fit perfectly into my busy schedule. I'm in the best shape of my life!",
        rating: 4,
        },
    ];

    return (
        <div className="home-page">
        {/* Hero Section */}
        <section
            className="hero-section"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})` }}
        >
            <div className="hero-content">
            <h1>
                Transform Your Body, <span>Elevate Your Life</span>
            </h1>
            <p>
                Personalized fitness programs designed to help you achieve your goals
                faster and more effectively than ever before.
            </p>
            <div className="hero-buttons">
                <Link to="/transformation" className="cta-button primary">
                Get Started
                </Link>
                <Link to="/about" className="cta-button secondary">
                Learn More
                </Link>
            </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
            <div className="section-header">
            <h2>Why Choose FitPro Elite?</h2>
            <p>
                Our comprehensive approach to fitness delivers real, sustainable
                results.
            </p>
            </div>
            <div className="features-grid">
            {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                </div>
            ))}
            </div>
        </section>

        {/* About Section */}
        <section className="about-section">
            <div className="about-content">
            <div className="about-text">
                <h2>Meet Your Trainer</h2>
                <p>
                With over 10 years of experience in the fitness industry, I've
                helped hundreds of clients achieve their dream physiques and
                maintain healthy lifestyles.
                </p>
                <p>
                My approach combines scientific training methods with practical
                nutrition advice to create sustainable, long-term results.
                </p>
                <Link to="/about" className="cta-button">
                My Story
                </Link>
            </div>
            <div className="about-image">
                <img src={trainerImage} alt="Professional Trainer" />
            </div>
            </div>
        </section>

        {/* Programs Section */}
        <section className="programs-section">
            <div className="section-header">
            <h2>Our Signature Programs</h2>
            <p>
                Tailored fitness solutions for every goal and fitness level.
            </p>
            </div>
            <div className="programs-grid">
            <div className="program-card">
                <img src={workoutImage} alt="Workout Program" />
                <div className="program-info">
                <h3>Body Transformation</h3>
                <p>
                    12-week program combining strength training and cardio for
                    maximum fat loss and muscle definition.
                </p>
                <Link to="/transformation" className="program-button">
                    Learn More
                </Link>
                </div>
            </div>
            <div className="program-card">
                <img src={nutritionImage} alt="Nutrition Program" />
                <div className="program-info">
                <h3>Nutrition Coaching</h3>
                <p>
                    Personalized meal plans and dietary strategies to fuel your
                    workouts and accelerate results.
                </p>
                <Link to="/nutrition" className="program-button">
                    Learn More
                </Link>
                </div>
            </div>
            <div className="program-card">
                <img src={resultsImage} alt="Results Program" />
                <div className="program-info">
                <h3>1-on-1 Coaching</h3>
                <p>
                    Premium personalized training with dedicated attention to your
                    specific needs and goals.
                </p>
                <Link to="/contact" className="program-button">
                    Get Started
                </Link>
                </div>
            </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
            <div className="section-header">
            <h2>Success Stories</h2>
            <p>Hear from people who transformed their lives with FitPro Elite</p>
            </div>
            <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
            </div>
            <div className="testimonials-cta">
            <Link to="/testimonials" className="cta-button">
                View More Success Stories
            </Link>
            </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
            <div className="cta-content">
            <h2>Ready to Start Your Transformation?</h2>
            <p>
                Take the first step towards a healthier, stronger you today. Schedule
                your free consultation now.
            </p>
            <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                Book Consultation
                </Link>
                <Link to="/hiit" className="cta-button secondary">
                Try Free Workout
                </Link>
            </div>
            </div>
        </section>
        </div>
    );
    };

    export default Home;