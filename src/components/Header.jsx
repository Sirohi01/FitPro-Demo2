    import React, { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa";

    const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/transformation", name: "Programs" },
        { path: "/hiit", name: "Workouts" },
        { path: "/measurements", name: "Track" },
        { path: "/nutrition", name: "Nutrition" },
        { path: "/testimonials", name: "Success Stories" },
        { path: "/contact", name: "Contact" },
    ];

    return (
        <header
        className={`header ${isScrolled ? "scrolled" : ""} ${
            mobileMenuOpen ? "mobile-open" : ""
        }`}
        >
        <div className="header-container">
            <Link to="/" className="logo">
            <FaDumbbell className="logo-icon" />
            <span>FitPro Elite</span>
            </Link>

            <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
                <Link
                key={link.path}
                to={link.path}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
                >
                {link.name}
                </Link>
            ))}
            </nav>
        </div>
        </header>
    );
    };

    export default Header;