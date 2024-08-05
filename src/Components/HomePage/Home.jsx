import React from "react";
import "./Home.scss";
import rightImg from "../../assets/heroPage/rightImgBg.png";

function Home() {
  return (
    
    <div className="homeMainContainer">
      <div className="homeChildContainer">
        <div className="homeLeft">
          <h1>Unleash Your Style with Our Unique Embroidary!</h1>
          <img src={rightImg} alt="" />
          <p>
            Style goes beyond the runway - it’s part of daily life. What we wear
            can affect how we feel and how others perceive us. Our <span> embroidered
            tees </span> offer more than just fashion they uplift your mood and affect
            how others see you. Embrace our tees for a boost in both style and
            well-being...
          </p>
          <a href="">n&P-Sutra Values &#8594;</a>
        </div>
        <div className="homeRight">
          <img src={rightImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
