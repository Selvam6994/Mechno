import React, { useState } from "react";
import logo from "./assets/Images/Logo.webp";

function Nav() {
  const [color, setColor] = useState(false);
  const colorChange = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", colorChange);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-1 "
      id={color ? "bgcolor" : "mainNav"}
    >
      <div className="container px-0">
        <div>
          <img src={logo} alt="#" className="navLogo" />
          <a id="nav-brand" href="#page-top">
            <h4>
              <span>M</span>echno <span>D</span>ream <span>I</span>ndustry
            </h4>
          </a>
        </div>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li>
              <a href="#about" id="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="#services" id="nav-item">
                Industrial Services
              </a>
            </li>
            <li>
              <a href="#automation" id="nav-item">
                Automation
              </a>
            </li>
            <li>
              <a href="#gallery" id="nav-item">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" id="nav-item">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
