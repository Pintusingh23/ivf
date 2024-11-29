import React from "react";
import "./Navbar.css";  // Ensure your CSS file is correctly linked

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-highlight">iVF</span> Pulse
      </div>
      <ul className="navbar-links">
        <li><a href="#donor-program">Donor Programme</a></li>
        <li><a href="#fertility-preservation">Fertility Preservation</a></li>
        <li><a href="#advanced-treatment">Advanced Treatments</a></li>
        <li><a href="#ivf-testing">IVF Testing</a></li>
        <li><a href="#about-us">About Us</a></li>
      </ul>
      <button className="navbar-button">
        Talk to Us <span className="arrow">&rarr;</span>
      </button>
    </nav>
  );
};

export default Navbar;
