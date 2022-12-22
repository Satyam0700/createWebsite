import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import p from "../../assets/p.png";
import arrow from "../../assets/arrow.png";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="main">
          <div className="left-h">
            <div>
              <span>Built for</span>
              <span> enterprise</span>
              <span> businesses.</span>
            </div>
            <div className="small-t">
              <span>
                Opus includes everything you need to build a beautiful website
                for your business. Built to perform and look good doing so.
              </span>
            </div>

            <div className="btnContainer">
              <div className="btn btn-hero">
                Learn more
                <img src={arrow} alt="" />
              </div>
              <span>Explore Pages</span>
            </div>
          </div>

          <div className="right-h">
            <img src={p} alt="" />
            <div className="p-t">
              <span>
                I felt like I couldn’t grow until I moved to Opus. Now I am
                encouraged to sell more with them. Frank Dublin CEO @stamps
              </span>
              <span>Frank Dublin</span>
              <span>
                CEO <span>@stamps</span>
              </span>
            </div>

            <div className="boxes">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="main-box"></div>
      </div>
    </div>
  );
};

export default Hero;
