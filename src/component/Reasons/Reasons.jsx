import React from "react";
import "./Reasons.css";
import Building3 from "../../assets/apartment1.jpg";
import Building2 from "../../assets/bridge3.jpeg";
import Building4 from "../../assets/highway1.jpg";
import Building5 from "../../assets/drainage.jpeg";
import tick from "../../assets/bullets-removebg-preview (1).png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={Building2} alt="" />
        <img src={Building3} alt="" />
        <img src={Building4} alt="" />
        <img src={Building5} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Over 10 Years of Experiece</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Over 80+ Successful Projects</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Amazing Architectural Designers</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>No compromize on quality</span>
          </div>
        </div>
        
        <span>Our Partners</span>
      </div>
    </div>
  );
};

export default Reasons;
