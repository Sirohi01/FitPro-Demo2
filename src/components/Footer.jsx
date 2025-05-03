    import React from "react";
    import { Link } from "react-router-dom";
    import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    } from "react-icons/fa";

    const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
            <h3 className="footer-heading">FitPro Elite</h3>
            <p>
                Transforming lives through fitness, nutrition, and sustainable
                lifestyle changes.
            </p>
            <div className="social-links">
                <a href="#" aria-label="Facebook">
                <FaFacebook />
                </a>
                <a href="#" aria-label="Instagram">
                <FaInstagram />
                </a>
                <a href="#" aria-label="Twitter">
                <FaTwitter />
                </a>
                <a href="#" aria-label="YouTube">
                <FaYoutube />
                </a>
            </div>
            </div>

            <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About Us</Link>
                </li>
                <li>
                <Link to="/transformation">Programs</Link>
                </li>
                <li>
                <Link to="/hiit">Workouts</Link>
                </li>
                <li>
                <Link to="/nutrition">Nutrition</Link>
                </li>
            </ul>
            </div>

            <div className="footer-section">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="contact-info">
                <li>
                <FaMapMarkerAlt />
                <span>Gurugram, Haryana, India</span>
                </li>
                <li>
                <FaPhone />
                <span>+91 9568259784</span>
                </li>
                <li>
                <FaEnvelope />
                <span>manishsirohi023@gmail.com</span>
                </li>
                <li>
                <FaClock />
                <span>Mon-Fri: 6am - 9pm, Sat-Sun: 8am - 4pm</span>
                </li>
            </ul>
            </div>

            <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <p>Subscribe to get fitness tips and special offers</p>
            <form className="newsletter-form">
                <input
                type="email"
                placeholder="Your Email"
                className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                Subscribe
                </button>
            </form>
            </div>
        </div>

        <div className="footer-bottom">
            <p>
            &copy; {currentYear} FitPro Elite. All rights reserved. |{" "}
            
            </p>
        </div>
        </footer>
    );
    };

    export default Footer;