import React from "react";
import "./Brand.css";
import sugarcan from "../../assets/sugarcan.png";
import manter from "../../assets/manter.png";
import stamps from "../../assets/stamps.png";
import video from "../../assets/video.png";
import play from "../../assets/a.png";
import Site from "../SiteSection/Site";

const Brand = () => {
  return (
    <div className="brand-c">
      <span>Trusted and loved by the world’s best teams</span>
      <div className="brands">
        <img src={sugarcan} alt="" />
        <img src={manter} alt="" />
        <img src={stamps} alt="" />
        <img src={sugarcan} alt="" />
      </div>

      <div className="number">
        <div>
          <span>99.95%</span>
          <span>Accuracy rate</span>
          <span>in fulfilling orders</span>
        </div>
        <div>
          <span>5,000+</span>
          <span>Ecommerce businesses</span>
          <span>partner with Opus</span>
        </div>
        <div>
          <span>99.96%</span>
          <span>Of orders ship on time</span>
          <span>within SLA</span>
        </div>
        <div>
          <span>#1</span>
          <span>Best Fulfillment Technology</span>
          <span>by AdWeek’s Retail Awards</span>
        </div>
      </div>

      <div className="video">
        <span>VIDEO TITLE</span>
        <span>Inform users with video sections</span>
        <img src={video} alt="" className="v-img" />
        <img src={play} alt="" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non
          lectus dapibus, a pulvinar mauris aliquam.
        </span>
      </div>

      <Site />
    </div>
  );
};

export default Brand;
