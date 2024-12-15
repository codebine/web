/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/main.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a className="logo d-flex align-items-center me-auto me-lg-0" href="#">
          <h1 className="sitename">Web</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" className="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <button className="mobile-nav-toggle d-xl-none bg-dark" onClick={toggleMobileNav}>
          <i className={`bi ${isMobileNavActive ? "bi-x" : "bi-list"}`}></i>
        </button>

        <a className="btn-getstarted">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
