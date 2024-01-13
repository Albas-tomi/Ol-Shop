import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const patch = useLocation();
  const [menu, setMenu] = useState("");
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md px-3 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li
                onClick={() => setMenu("shop")}
                className={` ${
                  menu === "shop" ? "text-white  bg-blue-300" : "text-black "
                } cursor-pointer  rounded-md`}
              >
                <Link to={"/"}>Shop</Link>
              </li>
              <li
                onClick={() => setMenu("men")}
                className={` ${
                  menu === "men" ? "text-white  bg-blue-300" : "text-black "
                } cursor-pointer  rounded-md`}
              >
                <Link to={"/mens"}>Men</Link>
              </li>
              <li
                onClick={() => setMenu("women")}
                className={` ${
                  menu === "women" ? "text-white  bg-blue-300" : "text-black "
                } cursor-pointer  rounded-md`}
              >
                <Link to={"/womens"}>Women</Link>
              </li>
              <li
                onClick={() => setMenu("kids")}
                className={` ${
                  menu === "kids" ? "text-white  bg-blue-300" : "text-black "
                } cursor-pointer  rounded-md`}
              >
                <Link>Kids</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-xl">Wild Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6  px-1">
            <li onClick={() => setMenu("shop")} className="cursor-pointer">
              <Link to={"/"}>Shop</Link>
              <hr
                className={` ${
                  menu === "shop" ? "bg-blue-400 h-[3px]" : "hidden "
                } `}
              />
            </li>
            <li onClick={() => setMenu("men")} className="cursor-pointer">
              <Link to={"/mens"}>Men</Link>
              <hr
                className={` ${
                  menu === "men" ? "bg-blue-400 h-[3px]" : "hidden "
                } `}
              />
            </li>
            <li onClick={() => setMenu("women")} className="cursor-pointer">
              <Link to={"/womens"}>Women</Link>
              <hr
                className={` ${
                  menu === "women" ? "bg-blue-400 h-[3px]" : "hidden "
                } `}
              />
            </li>
            <li onClick={() => setMenu("kids")} className="cursor-pointer">
              <Link to={"/kids"}>Kids</Link>
              <hr
                className={` ${
                  menu === "kids" ? "bg-blue-400 h-[3px]" : "hidden "
                } `}
              />
            </li>
          </ul>
        </div>
        <div className="navbar-end flex  gap-4  items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link
              onClick={() => setMenu("")}
              to={"/cart"}
              className="indicator"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm bg-blue-500 text-white indicator-item">
                0
              </span>
            </Link>
          </div>
          <Link onClick={() => setMenu("")} to={"/login"}>
            <button className="md:px-6  md:py-2 px-4 py-1 rounded-full border border-black">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
