import React from "react";
import Patternimg from "../../assets/pattern.jpg";
import "./Pattern.scss";

const Pattern = () => {
  return (
    <div className="patterns">
      <p className="head">Front</p>
      <img src={Patternimg} />
      <img src={Patternimg} />
      <img src={Patternimg} />
    </div>
  );
};

export default Pattern;
