// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Transformation from "./pages/Transformation";
import HIIT from "./pages/HIIT";
import Measurements from "./pages/Measurements";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Nutrition from "./pages/Nutrition";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/transformation" element={<Transformation />} />
      <Route path="/hiit" element={<HIIT />} />
      <Route path="/measurements" element={<Measurements />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/nutrition" element={<Nutrition />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;