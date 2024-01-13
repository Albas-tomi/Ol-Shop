import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="hero min-h-screen flex items-center  bg-gradient-to-b from-blue-400/30 to-white">
      <form className="w-1/2 px-3 py-6 rounded-md bg-white mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">Sign In</h1>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Your Email</span>
          </div>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="input input-bordered w-full max-w-xl"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="*********"
            className="input input-bordered w-full max-w-xl"
          />
        </label>

        <button
          type="submit"
          className="btn bg-blue-500 text-white w-full max-w-xl my-3"
        >
          Sign Up
        </button>
        <div className="text-start flex items-center gap-3 w-full max-w-xl">
          <p>Don't Have an Account Yet ?</p>
          <Link to={"/register"} className="text-blue-500 font-bold">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
