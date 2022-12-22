import React from "react";
import "./Work.css";
import Card from "../Card/Card";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const Work = () => {
  return (
    <div className="work">
      <div className="head">
        <span>Ways to work with us</span>
        <div className="btn">Get Started</div>
      </div>
      <div className="cards">
        <Card
          img={img1}
          title="Project Management"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
        />
        <Card
          img={img2}
          title="Advanced Analytics"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
        />
        <Card
          img={img3}
          title="Marketing & Dashboard"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
        />
      </div>
    </div>
  );
};

export default Work;
