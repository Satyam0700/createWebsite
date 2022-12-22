import React from "react";
import "./Feature.css";
import image1 from "../../assets/images1.png";
import tick from '../../assets/tick.png'

const Feature = () => {
  return (
    <div className="feature">
      <div className="left-f">
        <div>
          <span className="small-title">features</span>
          <span className="title">You’re not just doing business. You’re doing life.</span>
          <div>
            <div>
                <img src={tick} alt="" />
                <span>Responsive Components</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>Over 50 Sections</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>Handcrafted Pages</span>
            </div>

          </div>
        </div>
      </div>
      <div className="right-f">
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default Feature;
