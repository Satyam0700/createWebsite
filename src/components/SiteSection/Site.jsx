import React from "react";
import "./Site.css";
import pointer from "../../assets/pointer.png";
import space from '../../assets/space.png'

const Site = () => {
  return (
    <div className="site">
      <div className="left-si">
        <span>Make your site better with Opus</span>
        <div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non
            lectus dapibus, a pulvinar mauris aliquam.
          </span>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-s">
        <div>
          <img src={pointer} alt="" />
          <span>Build or Customize a Website in Minutes</span>
        </div>
        <div>
          <img src={space} alt="" />
          <span>Our UI Kit was made for creativity.</span>
        </div>
      </div>
    </div>
  );
};

export default Site;
