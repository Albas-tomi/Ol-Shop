import React from "react";
import HeroIcon from "../../assets/image/hero_image.png";
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen px-16  bg-gradient-to-b from-blue-400/30 to-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={HeroIcon} className="max-w-sm " />
          <div>
            <h1 className="text-5xl font-bold">New Arrivals Only!</h1>
            <p className="py-6">
              Empower Your Style, Unleash Your Hero – Where Fashion Meets
              Confidence!
            </p>
            <button className="btn text-white bg-blue-500">
              Our New Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
