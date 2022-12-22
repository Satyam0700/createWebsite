import React from "react";
import './Rcard.css'

const Rcard = ( {img, title, content, btn} ) => {
  return (
    <div className="r-card">
      <img src={img} alt="" />
      <span>{title}</span>
      <span>{content}</span>
      <button className="btn">{btn}</button>
    </div>
  );
};

export default Rcard;
