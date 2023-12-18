import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import building_image from "../../assets/building_images.png";
import building_image_back from "../../assets/hero_image_back.png";
import right_logo from "../../assets/building6.gif";
import { motion } from "framer-motion";
import NumberCount from "number-counter";
import { Link } from "react-scroll";

const Home = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="home" id="home">
      <div className="blur home-blur"></div>
      <div className="left-h">
        <div className="Header-title stroke-text">Maaya Engineering</div>
        <Header />
        {/* the best ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tweeen" }}
          ></motion.div>
          <span>The Best Builders in the region</span>
        </div>

        <div className="home-text">
          <div>
            <span className="stroke-text">We </span>
            <span>Build</span>
          </div>
          <div>
            <span> Your</span>
            <span className="stroke-text"> Trust </span>
          </div>
          <div>
            <span>
              In here we will help you to design and build your ideal home and
              live up your life to the fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCount end={25} start={10} delay="4" preFix="+" />
            </span>
            <span>Expertised Services</span>
          </div>
          <div>
            <span>
              <NumberCount end={85} start={50} delay="4" preFix="+" />
            </span>
            <span>Successful Projects</span>
          </div>
          <div>
            <span>
              <NumberCount end={55} start={25} delay="4" preFix="+" />
            </span>
            <span>Trusted Customers</span>
          </div>
        </div>

        <div className="home-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">
          <Link to="contact" span={true} smooth={true}>
            Contact Now
          </Link>
        </button>

        <div className="right-logo">
          <img src={right_logo} alt="" />
          <span>Projects</span>
          {/*<span></span>*/}
        </div>

        <motion.img
          initial={{ top: "1rem" }}
          whileInView={{ top: mobile ? "10rem" : "14rem" }}
          transition={transition}
          src={building_image}
          alt=""
          className="home-image"
        />
        <motion.img
          initial={{ right: "1rem" }}
          whileInView={{ right: mobile ? "4rem" : "20rem" }}
          transition={transition}
          src={building_image_back}
          alt=""
          className="home-image-back"
        />
      </div>
    </div>
  );
};

export default Home;
