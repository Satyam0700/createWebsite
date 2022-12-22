import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";


const Footer = () => {
  return (
    <div>
      <div className="logo logo2">
          <img src={logo} alt="" />
          <span>opus</span>
        </div>
      <div className="footer">
        <div>
          <span>OVERVIEW</span>
          <span>Overview</span>
          <span>Landings</span>
          <span>Company</span>
          <span>Pricing</span>
          <span>CMS Pages</span>
          <span>Accounts</span>
          <span>Buy for Figma</span>
        </div>
        <div>
          <span>PAGES</span>
          <span>Overview</span>
          <span>Landings</span>
          <span>Company</span>
          <span>Pricing</span>
          <span>CMS Pages</span>
          <span>Accounts</span>
          <span>Buy for Figma</span>
        </div>
        <div>
          <span>PAGES</span>
          <span>Overview</span>
          <span>Landings</span>
          <span>Company</span>
          <span>Pricing</span>
          <span>CMS Pages</span>
          <span>Accounts</span>
          <span>Buy for Figma</span>
        </div>

        <div>
            <div>
                <input type="email" placeholder="Email address"/>
                <button className="btn">Get Started</button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
