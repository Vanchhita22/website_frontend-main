import React, { useState } from "react";
import "../Header/Navbar.css";
import Logo from "../images/logo sqaure.png";
import { Link } from "react-router-dom";
import Modal from "../Login/Modal";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navToggle = () => {
    setActive((prevActive) =>
      prevActive === "nav__menu" ? "nav__menu nav__active" : "nav__menu"
    );

    setIcon((prevIcon) =>
      prevIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"
    );
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        <img src={Logo} alt="" />
        <p>Repairs Duniya</p>
      </Link>

      <div className="navbar-search">
        <input type="search" placeholder="Search " />
        <i class="fas fa-search" />
      </div>

      <ul className={active}>
       

        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About
          </a>
        </li>
        <li
          className="nav__link"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Login
        </li>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
        <li className="nav__location" onClick={toggleDropdown}>
          <i class= "fa-solid fa-location-dot" ></i>
          <span>Location</span>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li>Kadapa</li>
              <li>Bengalore</li>
            </ul>
          )}
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
