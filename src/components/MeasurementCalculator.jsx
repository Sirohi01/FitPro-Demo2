    // src/components/MeasurementCalculator.jsx
    import React, { useState } from "react";

    const MeasurementCalculator = ({ tool }) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs({
        ...inputs,
        [name]: parseFloat(value),
        });
    };

    const calculateBMI = () => {
        const { weight, height } = inputs;
        if (weight && height) {
        const bmi = weight / Math.pow(height / 100, 2);
        setResult(bmi.toFixed(1));
        }
    };

    const calculateBMR = () => {
        const { weight, height, age, gender } = inputs;
        if (weight && height && age && gender) {
        let bmr;
        if (gender === "male") {
            bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        } else {
            bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
        }
        setResult(Math.round(bmr));
        }
    };

    const calculate1RM = () => {
        const { weight, reps } = inputs;
        if (weight && reps) {
        const oneRM = weight * (1 + reps / 30);
        setResult(Math.round(oneRM));
        }
    };

    const calculateWHR = () => {
        const { waist, hip } = inputs;
        if (waist && hip) {
        const ratio = waist / hip;
        setResult(ratio.toFixed(2));
        }
    };

    const calculateBFP = () => {
        const { waist, neck, height, gender } = inputs;
        if (waist && neck && height && gender) {
        let bfp;
        if (gender === "male") {
            bfp = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
        } else {
            const { hip } = inputs;
            if (hip) {
            bfp = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;
            }
        }
        if (bfp) setResult(bfp.toFixed(1));
        }
    };

    const calculateLBM = () => {
        const { weight, bfp } = inputs;
        if (weight && bfp) {
        const lbm = weight * (1 - bfp / 100);
        setResult(lbm.toFixed(1));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (tool) {
        case "bmi":
            calculateBMI();
            break;
        case "bmr":
            calculateBMR();
            break;
        case "1rm":
            calculate1RM();
            break;
        case "whr":
            calculateWHR();
            break;
        case "bfp":
            calculateBFP();
            break;
        case "lbm":
            calculateLBM();
            break;
        default:
            break;
        }
    };

    const renderInputs = () => {
        switch (tool) {
        case "bmi":
            return (
            <>
                <div className="input-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={inputs.weight || ""}
                    onChange={handleInputChange}
                    placeholder="Enter weight in kg"
                    required
                />
                </div>
                <div className="input-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    value={inputs.height || ""}
                    onChange={handleInputChange}
                    placeholder="Enter height in cm"
                    required
                />
                </div>
            </>
            );
        case "bmr":
            return (
            <>
                <div className="input-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={inputs.weight || ""}
                    onChange={handleInputChange}
                    placeholder="Enter weight in kg"
                    required
                />
                </div>
                <div className="input-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    value={inputs.height || ""}
                    onChange={handleInputChange}
                    placeholder="Enter height in cm"
                    required
                />
                </div>
                <div className="input-group">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                    required
                />
                </div>
                <div className="input-group">
                <label htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    value={inputs.gender || ""}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
            </>
            );
        case "1rm":
            return (
            <>
                <div className="input-group">
                <label htmlFor="weight">Weight Lifted (kg)</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={inputs.weight || ""}
                    onChange={handleInputChange}
                    placeholder="Enter weight in kg"
                    required
                />
                </div>
                <div className="input-group">
                <label htmlFor="reps">Reps Performed</label>
                <input
                    type="number"
                    id="reps"
                    name="reps"
                    value={inputs.reps || ""}
                    onChange={handleInputChange}
                    placeholder="Enter number of reps"
                    min="1"
                    max="10"
                    required
                />
                </div>
            </>
            );
        case "whr":
            return (
            <>
                <div className="input-group">
                <label htmlFor="waist">Waist Circumference (cm)</label>
                <input
                    type="number"
                    id="waist"
                    name="waist"
                    value={inputs.waist || ""}
                    onChange={handleInputChange}
                    placeholder="Enter waist measurement"
                    required
                />
                </div>
                <div className="input-group">
                <label htmlFor="hip">Hip Circumference (cm)</label>
                <input
                    type="number"
                    id="hip"
                    name="hip"
                    value={inputs.hip || ""}
                    onChange={handleInputChange}
                    placeholder="Enter hip measurement"
                    required
                />
                </div>
            </>
            );
        case "bfp":
            return (
            <>
                <div className="input-group">
                <label htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    value={inputs.gender || ""}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
                <div className="input-group">
                <label htmlFor="waist">Waist Circumference (cm)</label>
                <input
                    type="number"
                    id="waist"
                    name="waist"
                    value={inputs.waist || ""}
                    onChange={handleInputChange}
                    placeholder="Enter waist measurement"
                    required
                />
                </div>
                <div className="input-group">
                <label htmlFor="neck">Neck Circumference (cm)</label>
                <input
                    type="number"
                    id="neck"
                    name="neck"
                    value={inputs.neck || ""}
                    onChange={handleInputChange}
                    placeholder="Enter neck measurement"
                    required
                />
                </div>
                {inputs.gender === "female" && (
                <div className="input-group">
                    <label htmlFor="hip">Hip Circumference (cm)</label>
                    <input
                    type="number"
                    id="hip"
                    name="hip"
                    value={inputs.hip || ""}
                    onChange={handleInputChange}
                    placeholder="Enter hip measurement"
                    required
                    />
                </div>
                )}
                <div className="input-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    value={inputs.height || ""}
                    onChange={handleInputChange}
                    placeholder="Enter height in cm"
                    required
                />
                </div>
            </>
            );
        case "lbm":
            return (
            <>
                <div className="input-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={inputs.weight || ""}
                    onChange={handleInputChange}
                    placeholder="Enter weight in kg"
                    required
                />
                </div>
                <div className="input-group">
                <label htmlFor="bfp">Body Fat Percentage</label>
                <input
                    type="number"
                    id="bfp"
                    name="bfp"
                    value={inputs.bfp || ""}
                    onChange={handleInputChange}
                    placeholder="Enter body fat %"
                    min="0"
                    max="100"
                    required
                />
                </div>
            </>
            );
        default:
            return null;
        }
    };

    const renderResult = () => {
        if (result === null) return null;

        switch (tool) {
        case "bmi":
            let bmiCategory;
            if (result < 18.5) bmiCategory = "Underweight";
            else if (result < 25) bmiCategory = "Normal weight";
            else if (result < 30) bmiCategory = "Overweight";
            else bmiCategory = "Obese";

            return (
            <div className="result-container">
                <h4>Your BMI: {result}</h4>
                <p>Category: {bmiCategory}</p>
                <div className="bmi-scale">
                <div className={`bmi-range ${result < 18.5 ? "active" : ""}`}>
                    Underweight (&lt;18.5)
                </div>
                <div
                    className={`bmi-range ${
                    result >= 18.5 && result < 25 ? "active" : ""
                    }`}
                >
                    Normal (18.5-24.9)
                </div>
                <div
                    className={`bmi-range ${
                    result >= 25 && result < 30 ? "active" : ""
                    }`}
                >
                    Overweight (25-29.9)
                </div>
                <div className={`bmi-range ${result >= 30 ? "active" : ""}`}>
                    Obese (30+)
                </div>
                </div>
            </div>
            );
        case "bmr":
            return (
            <div className="result-container">
                <h4>Your BMR: {result} calories/day</h4>
                <p>
                This is the estimated number of calories your body needs at complete
                rest.
                </p>
            </div>
            );
        case "1rm":
            return (
            <div className="result-container">
                <h4>Your 1RM: {result} kg</h4>
                <p>
                This is the estimated maximum weight you can lift for one
                repetition.
                </p>
            </div>
            );
        case "whr":
            let whrRisk;
            if (inputs.gender === "male") {
            whrRisk =
                result < 0.9
                ? "Low health risk"
                : result < 1.0
                ? "Moderate risk"
                : "High risk";
            } else {
            whrRisk =
                result < 0.8
                ? "Low health risk"
                : result < 0.85
                ? "Moderate risk"
                : "High risk";
            }

            return (
            <div className="result-container">
                <h4>Your Waist-to-Hip Ratio: {result}</h4>
                <p>Health Risk: {whrRisk}</p>
            </div>
            );
        case "bfp":
            let bfpCategory;
            if (inputs.gender === "male") {
            if (result < 6) bfpCategory = "Essential fat";
            else if (result < 14) bfpCategory = "Athletic";
            else if (result < 18) bfpCategory = "Fitness";
            else if (result < 25) bfpCategory = "Average";
            else bfpCategory = "Obese";
            } else {
            if (result < 14) bfpCategory = "Essential fat";
            else if (result < 21) bfpCategory = "Athletic";
            else if (result < 25) bfpCategory = "Fitness";
            else if (result < 32) bfpCategory = "Average";
            else bfpCategory = "Obese";
            }

            return (
            <div className="result-container">
                <h4>Your Body Fat Percentage: {result}%</h4>
                <p>Category: {bfpCategory}</p>
            </div>
            );
        case "lbm":
            return (
            <div className="result-container">
                <h4>Your Lean Body Mass: {result} kg</h4>
                <p>
                This represents the weight of your muscles, bones, organs, and
                other non-fat tissues.
                </p>
            </div>
            );
        default:
            return null;
        }
    };

    return (
        <div className="calculator-container">
        <form onSubmit={handleSubmit} className="calculator-form">
            {renderInputs()}
            <button type="submit" className="calculate-button">
            Calculate
            </button>
        </form>
        {renderResult()}
        </div>
    );
    };

    export default MeasurementCalculator;