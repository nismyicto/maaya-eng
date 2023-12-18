import React from "react";
import "./Services.css";
import { servicesData } from "../../data/servicesData";
import RightArrow from "../../assets/rightArrow.png";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <div className="Services" id="services">
      <div className="services-header">
        <span className="stroke-text">Explore Our</span>
        <span>Services</span>
        <span className="stroke-text">to Build you</span>
      </div>

      <div className="service-categories">
        {servicesData.map((service) => (
          <div className="category">
            {service.image}
            <span>{service.heading}</span>
            <span>{service.details}</span>
            <div className="contact-now">
              <span>
                <Link to="contact" span={true} smooth={true}>
                  Contact Now
                </Link>
              </span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
