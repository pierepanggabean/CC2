import React from "react";
import bannervideo from "../assets/banner.mp4";

const Banner = () => {
  return (
    <div className="banner-container">
      <video src={bannervideo} autoPlay loop playsInline></video>
    </div>
  );
};

export default Banner;
