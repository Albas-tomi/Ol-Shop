import React from "react";

const NewsLetters = () => {
  return (
    <div className=" py-5 m-7 rounded-md bg-gradient-to-b flex flex-col justify-center items-center from-blue-400/30 to-white ">
      <h1 className="text-3xl md:px-0  px-3 font-bold">
        Get Exclusive Offer For Your Email!
      </h1>
      <p className="py-6 px-2 md:px-0 text-center">
        Empower Your Style, Unleash Your Hero <br /> Where Fashion Meets
        Confidence!
      </p>
      <div className="hero rounded-md    ">
        <div className="join w-full px-3 md:px-0 md:w-1/2  ">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered rounded-full w-full join-item"
          />
          <button className="btn bg-blue-500 rounded-full text-white join-item">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
