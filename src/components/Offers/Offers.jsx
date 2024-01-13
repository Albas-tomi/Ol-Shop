import React from "react";
import OfferIcon from "../../assets/image/exclusive_image.png";

const Offers = () => {
  return (
    <div className=" py-5 m-7 rounded-md bg-gradient-to-b flex flex-col justify-center items-center from-blue-400/30 to-white ">
      <div className=" px-16 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={OfferIcon} className="h-72 " />
          <div>
            <h1 className="text-5xl font-bold">Exclusive Offer For You!</h1>
            <p className="py-6">
              Empower Your Style, Unleash Your Hero – Where Fashion Meets
              Confidence!
            </p>
            <button className="btn text-white bg-blue-500">
              Only Our Best Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
