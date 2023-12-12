import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import building_image from "../../assets/building_images.png";
import building_image_back from "../../assets/hero_image_back.png";
import right_logo from "../../assets/building6.gif";
import { motion } from "framer-motion";
import NumberCount from "number-counter";

const Home = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="home">
      <div className="left-h">
      <div className="Header-title stroke-text">Maaya Engineering</div>
        <Header />
        {/* the best ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "205px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tweeen" }}
          ></motion.div>
          <span>The Best Builders in the Town</span>
        </div>

        <div className="home-text">
          <div>
            <span className="stroke-text">Build</span>
            <span> Your</span>
          </div>
          <div>
            <span>Dream </span>
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
              <NumberCount end={25} start={10} delay="2" preFix="+" />
            </span>
            <span>Expertised Services</span>
          </div>
          <div>
            <span>
              <NumberCount end={471} start={370} delay="4" preFix="+" />
            </span>
            <span>Successful Projects</span>
          </div>
          <div>
            <span>
              <NumberCount end={115} start={75} delay="4" preFix="+" />
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
        <button className="btn">Contact Now</button>

        <div className="right-logo">
          <img src={right_logo} alt="" />
          <span>Projects</span>
          {/*<span></span>*/}
        </div>

        <motion.img
          initial={{ top: "1rem" }}
          whileInView={{ top: "14rem" }}
          transition={transition}
          src={building_image}
          alt=""
          className="home_image"
        />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={building_image_back}
          alt=""
          className="home_image_back"
        />
      </div>
    </div>
  );
};

export default Home;
