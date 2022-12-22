import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          <span>opus</span>
        </div>
        <ul>
          <li>Overview</li>
          <li>Pages</li>
          <li>Template</li>
        </ul>
        <div className="button btn">Contact Us</div>
      </nav>
    </div>
  );
};

export default Header;
