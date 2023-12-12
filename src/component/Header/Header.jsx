import React from "react";
import "./Header.css";
import Logo from "../../assets/logo_maaya_engineering.jpeg";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Our Services</li>
        <li>Why Us</li>
        <li>Contact Us</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
