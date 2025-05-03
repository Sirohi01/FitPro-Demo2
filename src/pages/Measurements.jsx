    import React, { useState } from "react";
    import MeasurementCalculator from "../components/MeasurementCalculator";
    import "../styles/Measurement.css";

    const Measurements = () => {
    const measurementTools = [
        {
        id: "bmi",
        title: "Body Mass Index (BMI)",
        description:
            "Calculate your BMI to assess whether you're underweight, normal weight, overweight, or obese based on your height and weight.",
        formula: "weight (kg) / (height (m) × height (m))",
        },
        {
        id: "bmr",
        title: "Basal Metabolic Rate (BMR)",
        description:
            "Determine how many calories your body needs at rest to maintain basic physiological functions.",
        formula: "Mifflin-St Jeor Equation",
        },
        {
        id: "1rm",
        title: "One Rep Max (1RM)",
        description:
            "Estimate the maximum amount of weight you can lift for one repetition of a given exercise.",
        formula: "Brzycki Formula: weight × (36 / (37 - reps))",
        },
        {
        id: "whr",
        title: "Waist-to-Hip Ratio (WHR)",
        description:
            "Assess body fat distribution and potential health risks by comparing waist and hip measurements.",
        formula: "waist circumference ÷ hip circumference",
        },
        {
        id: "bfp",
        title: "Body Fat Percentage (BFP)",
        description:
            "Estimate your body composition by calculating the proportion of fat mass to total body weight.",
        formula: "US Navy Body Fat Formula",
        },
        {
        id: "lbm",
        title: "Lean Body Mass (LBM)",
        description:
            "Calculate the weight of everything in your body except fat, including muscles, bones, and organs.",
        formula: "weight × (1 - (body fat percentage ÷ 100))",
        },
    ];

    const [activeTool, setActiveTool] = useState("bmi");

    return (
        <div className="measurements-page">
        <section className="measurements-hero">
            <div className="hero-content">
            <h1>Body Measurement Tools</h1>
            <p>
                Track your fitness progress with our comprehensive suite of body
                measurement calculators.
            </p>
            </div>
        </section>

        <section className="measurements-intro">
            <div className="section-container">
            <h2>Why Track Measurements?</h2>
            <p>
                Regular measurement tracking provides objective data about your fitness
                progress beyond what the scale shows. It helps you:
            </p>
            <ul>
                <li>Identify changes in body composition</li>
                <li>Adjust your training and nutrition as needed</li>
                <li>Stay motivated by seeing tangible progress</li>
                <li>Set realistic, data-driven goals</li>
            </ul>
            <p className="measurement-tip">
                <strong>Tip:</strong> For consistent results, take measurements at the
                same time of day (preferably morning), under similar conditions, and
                record them weekly.
            </p>
            </div>
        </section>

        <section className="measurements-tools">
            <div className="section-container">
            <div className="tools-selector">
                <h3>Select Measurement Tool:</h3>
                <div className="tool-buttons">
                {measurementTools.map((tool) => (
                    <button
                    key={tool.id}
                    className={`tool-button ${
                        activeTool === tool.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTool(tool.id)}
                    >
                    {tool.title}
                    </button>
                ))}
                </div>
            </div>

            <div className="tool-display">
                {measurementTools.map((tool) => (
                <div
                    key={tool.id}
                    className={`tool-content ${
                    activeTool === tool.id ? "active" : ""
                    }`}
                >
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <p className="formula">
                    <strong>Formula:</strong> {tool.formula}
                    </p>
                    <MeasurementCalculator tool={tool.id} />
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="measurements-guide">
            <div className="section-container">
            <h2>How to Take Accurate Measurements</h2>
            <div className="guide-grid">
                <div className="guide-card">
                <h3>Weight</h3>
                <ul>
                    <li>Use the same scale each time</li>
                    <li>Weigh yourself first thing in the morning</li>
                    <li>Wear similar clothing (or none)</li>
                    <li>After using the bathroom, before eating</li>
                </ul>
                </div>
                <div className="guide-card">
                <h3>Body Circumference</h3>
                <ul>
                    <li>Use a flexible, non-stretch tape measure</li>
                    <li>Measure at the widest/narrowest points</li>
                    <li>Keep tape parallel to the floor</li>
                    <li>Don't pull tape too tight</li>
                </ul>
                </div>
                <div className="guide-card">
                <h3>Body Fat</h3>
                <ul>
                    <li>Use calipers consistently</li>
                    <li>Have same person take measurements</li>
                    <li>Take measurements at same time of day</li>
                    <li>Stay hydrated for accurate readings</li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        <section className="measurements-cta">
            <div className="cta-content">
            <h2>Need Help Interpreting Your Results?</h2>
            <p>
                Our certified trainers can analyze your measurements and create a
                personalized plan to help you reach your goals.
            </p>
            <div className="cta-buttons">
                <button className="cta-button primary">Book Consultation</button>
                <button className="cta-button secondary">Contact Us</button>
            </div>
            </div>
        </section>
        </div>
    );
    };

    export default Measurements;