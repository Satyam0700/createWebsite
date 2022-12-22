import React from "react";
import image3 from "../../assets/images3.png";
import stamps2 from "../../assets/st2.png";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import "./Stamp.css";

const Feature = () => {
  return (
    <div className="stamp">
      <div className="left-s">
      <div className="ln"></div>
      <div className="pn"></div>
        <div>
          <img src={stamps2} alt="" />
          <span className="title">
            The Opus UI Kit lets you showcase your work in style. It's helped
            take our business online
          </span>
          <span>Alexa F.</span>
          <span>
            Designer <span>@stamps</span>
          </span>
          <div>
            <div>
              <img src={leftArrow} alt="" />
            </div>
            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="right-f">
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default Feature;
