    // src/components/TestimonialCard.jsx
    import React from "react";
    import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

    const TestimonialCard = ({ testimonial }) => {
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(testimonial.rating);
        const hasHalfStar = testimonial.rating % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars.push(<FaStar key={i} className="star filled" />);
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars.push(<FaStarHalfAlt key={i} className="star half-filled" />);
        } else {
            stars.push(<FaRegStar key={i} className="star" />);
        }
        }

        return stars;
    };

    return (
        <div className="testimonial-card">
        <div className="testimonial-content">
            <div className="testimonial-quote">
            <p>"{testimonial.quote}"</p>
            </div>
            <div className="testimonial-rating">{renderStars()}</div>
        </div>
        <div className="testimonial-author">
            <h4>{testimonial.name}</h4>
            <p>{testimonial.role}</p>
        </div>
        </div>
    );
    };

    export default TestimonialCard;