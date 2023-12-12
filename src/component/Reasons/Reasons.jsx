import React from "react";
import "./Reasons.css";
import Building3 from "../../assets/apartment1.jpg";
import Building2 from "../../assets/bridge3.jpeg";
import Building4 from "../../assets/highway1.jpg";
import Building5 from "../../assets/drainage.jpeg";

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
          <span>choose us?</span>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
