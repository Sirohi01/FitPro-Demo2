    // src/pages/Nutrition.jsx
    import React from "react";
    import nutritionHero from "../assets/nutrition-hero.jpg";
    import mealPlanning from "../assets/meal-planning.jpg";
    import macroCounting from "../assets/macro-counting.jpg";
    import healthyEating from "../assets/healthy-eating.jpg";
    import "../styles/Nutrition.css";

    const Nutrition = () => {
    const nutritionPlans = [
        {
        title: "Weight Loss",
        description:
            "Structured meal plans designed to create a calorie deficit while maintaining energy levels and preserving muscle mass.",
        features: [
            "Calorie-controlled meals",
            "High-protein options",
            "Meal timing strategies",
            "Hunger management tips",
        ],
        },
        {
        title: "Muscle Gain",
        description:
            "Nutrition strategies to support muscle growth with optimal macronutrient ratios and calorie surplus.",
        features: [
            "Calorie-dense meals",
            "Protein timing guidance",
            "Post-workout nutrition",
            "Supplement recommendations",
        ],
        },
        {
        title: "Performance Fueling",
        description:
            "Customized nutrition for athletes to optimize performance, recovery, and body composition.",
        features: [
            "Pre/post-workout meals",
            "Competition day strategies",
            "Hydration plans",
            "Recovery nutrition",
        ],
        },
    ];

    const nutritionTips = [
        {
        title: "Hydration",
        content:
            "Aim for at least 3-4 liters of water daily. Add electrolytes during intense training sessions.",
        },
        {
        title: "Protein Intake",
        content:
            "Consume 1.6-2.2g of protein per kg of body weight daily, spread across 3-5 meals.",
        },
        {
        title: "Meal Timing",
        content:
            "Eat every 3-4 hours to maintain energy levels and support metabolism.",
        },
        {
        title: "Whole Foods",
        content:
            "80% of your diet should come from minimally processed, nutrient-dense foods.",
        },
    ];

    return (
        <div className="nutrition-page">
        {/* Hero Section */}
        <section
            className="nutrition-hero"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nutritionHero})` }}
        >
            <div className="hero-content">
            <h1>Nutrition Coaching</h1>
            <p>
                Fuel your body for optimal performance, recovery, and results with
                our science-based nutrition programs.
            </p>
            </div>
        </section>

        {/* Intro Section */}
        <section className="nutrition-intro">
            <div className="section-container">
            <h2>The Missing Piece of Your Fitness Puzzle</h2>
            <p>
                Proper nutrition accounts for 80% of your fitness results. Our
                programs bridge the gap between your training and your goals with
                practical, sustainable eating strategies.
            </p>
            </div>
        </section>

        {/* Plans Section */}
        <section className="nutrition-plans">
            <div className="section-header">
            <h2>Nutrition Programs</h2>
            <p>
                Customized plans tailored to your goals, preferences, and lifestyle
            </p>
            </div>
            <div className="plans-grid">
            {nutritionPlans.map((plan, index) => (
                <div className="plan-card" key={index}>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <ul>
                    {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                    ))}
                </ul>
                <button className="plan-button">Learn More</button>
                </div>
            ))}
            </div>
        </section>

        {/* Approach Section */}
        <section className="nutrition-approach">
            <div className="section-container">
            <div className="approach-content">
                <h2>Our Nutrition Philosophy</h2>
                <p>
                We reject extreme diets and quick fixes in favor of sustainable,
                evidence-based nutrition strategies that:
                </p>
                <ul>
                <li>Support your training goals</li>
                <li>Fit your lifestyle and preferences</li>
                <li>Promote long-term health</li>
                <li>Include foods you actually enjoy</li>
                </ul>
                <p>
                Whether you prefer flexible dieting, meal plans, or intuitive
                eating, we'll create a customized approach that works for you.
                </p>
            </div>
            <div className="approach-image">
                <img src={healthyEating} alt="Healthy Eating" />
            </div>
            </div>
        </section>

        {/* Methods Section */}
        <section className="nutrition-methods">
            <div className="section-header">
            <h2>Nutrition Methods</h2>
            <p>
                We utilize multiple approaches to suit different needs and preferences
            </p>
            </div>
            <div className="methods-grid">
            <div className="method-card">
                <div className="method-image">
                <img src={mealPlanning} alt="Meal Planning" />
                </div>
                <div className="method-content">
                <h3>Structured Meal Plans</h3>
                <p>
                    Detailed meal-by-meal plans with recipes, shopping lists, and
                    preparation guides for those who prefer clear direction.
                </p>
                </div>
            </div>
            <div className="method-card">
                <div className="method-image">
                <img src={macroCounting} alt="Macro Counting" />
                </div>
                <div className="method-content">
                <h3>Macro Tracking</h3>
                <p>
                    Flexible approach focusing on hitting daily protein, carb, and
                    fat targets while allowing food choice flexibility.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Tips Section */}
        <section className="nutrition-tips">
            <div className="section-header">
            <h2>Essential Nutrition Tips</h2>
            <p>Foundational principles for better eating habits</p>
            </div>
            <div className="tips-grid">
            {nutritionTips.map((tip, index) => (
                <div className="tip-card" key={index}>
                <h3>{tip.title}</h3>
                <p>{tip.content}</p>
                </div>
            ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="nutrition-cta">
            <div className="cta-content">
            <h2>Ready to Transform Your Nutrition?</h2>
            <p>
                Get personalized guidance to fuel your fitness journey and achieve
                lasting results.
            </p>
            <button className="cta-button">Start Now</button>
            </div>
        </section>
        </div>
    );
    };

    export default Nutrition;