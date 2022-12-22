import React from "react";
import "./Know.css";
import image2 from "../../assets/images2.png";

const Feature = () => {
  return (
    <div className="know">
      <div className="left-k">
        <div></div>
        <img src={image2} alt="" />
      </div>

      <div className="right-k">
        <div>
          <span className="small-title">Our knowledge</span>
          <span className="title">A UI Kit that's Modern & Elegant</span>
          <span className="small-t">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</span>
        </div>
      </div>
    </div>
  );
};

export default Feature;
