import React from "react";
import "./Banner.css";
const Banner = ({ pageName }) => {
  return (
    <div className="banner">
      <h1>{pageName}</h1>
    </div>
  );
};

export default Banner;
