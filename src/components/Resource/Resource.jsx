import React from "react";
import './Resource.css'
import Rcard from '../Rcard/Rcard'
import r_img1 from "../../assets/r_img1.png";
import r_img2 from "../../assets/r_img2.png";
import r_img3 from "../../assets/r_img3.png";

function Resource() {
  return (
    <div className="resource">
      <div className="r-head">
        <span>Resources</span>
        <div className="btn">Get Started</div>
      </div>
      <div className="cards" id="r-card">
        <Rcard
          img={r_img1}
          title="A high-converting, high-performing template"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
          btn="Read Article"
        />
        <Rcard
          img={r_img2}
          title="With a clean, minimal and professional look"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
          btn="Read Article"
        />
        <Rcard
          img={r_img3}
          title="Opus made our journey possible"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
          btn="Read Article"
        />
      </div>
    </div>
  );
}

export default Resource;
