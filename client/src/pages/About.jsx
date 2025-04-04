import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./pages/Home";

function About() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>About Us</h2>
      <p>Welcome to our website! We are dedicated to providing the best services to our customers.</p>
      <p>Our team is passionate about innovation and delivering quality solutions.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/HOME" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default About
