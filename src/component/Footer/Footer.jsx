import React from "react";
import "./Footer.css";
import Instagram from "../../assets/instagram-removebg-preview.png";
import Facebook from "../../assets/facebook-removebg-preview.png";
import LinkedIn from "../../assets/linked-in-removebg-preview.png";
import Logo from "../../assets/logo_maaya_engineering-removebg-preview_COPY.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://www.facebook.com/maayaeng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/maaya-engineering/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
        <span>&copy; 2023 | Maaya Engineering</span>
      </div>
    </div>
  );
};

export default Footer;
