import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopDataContext } from "../Config/ShopDataContext";

const Navbar = () => {
  const { totalCart } = useContext(ShopDataContext);

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
              <NavLink to={"/"}>
                {({ isActive }) => (
                  <li
                    className={` ${
                      isActive ? "text-white  bg-blue-300" : "text-black "
                    } cursor-pointer  rounded-md px-2`}
                  >
                    Shop
                  </li>
                )}
              </NavLink>

              <NavLink to={"/mens"}>
                {({ isActive }) => (
                  <li
                    className={` ${
                      isActive ? "text-white  bg-blue-300" : "text-black "
                    } cursor-pointer  rounded-md px-2`}
                  >
                    Men
                  </li>
                )}
              </NavLink>
              <NavLink to={"/womens"}>
                {({ isActive }) => (
                  <li
                    className={` ${
                      isActive ? "text-white  bg-blue-300" : "text-black "
                    } cursor-pointer  rounded-md px-2`}
                  >
                    Wowen
                  </li>
                )}
              </NavLink>
              <NavLink to={"/kids"}>
                {({ isActive }) => (
                  <li
                    className={` ${
                      isActive ? "text-white  bg-blue-300" : "text-black "
                    } cursor-pointer  rounded-md px-2`}
                  >
                    Kids
                  </li>
                )}
              </NavLink>
            </ul>
          </div>
          <NavLink to={"/"} className=" font-bold text-2xl">
            Wild Shop
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6  px-1">
            <NavLink to={"/"}>
              {({ isActive }) => (
                <li className="cursor-pointer">
                  Shop
                  <hr
                    className={` ${
                      isActive ? "bg-blue-400 h-[3px]" : "hidden "
                    } `}
                  />
                </li>
              )}
            </NavLink>
            <NavLink to={"mens"}>
              {({ isActive }) => (
                <li className="cursor-pointer">
                  Men
                  <hr
                    className={` ${
                      isActive ? "bg-blue-400 h-[3px]" : "hidden "
                    } `}
                  />
                </li>
              )}
            </NavLink>
            <NavLink to={"womens"}>
              {({ isActive }) => (
                <li className="cursor-pointer">
                  Women
                  <hr
                    className={` ${
                      isActive ? "bg-blue-400 h-[3px]" : "hidden "
                    } `}
                  />
                </li>
              )}
            </NavLink>
            <NavLink to={"kids"}>
              {({ isActive }) => (
                <li className="cursor-pointer">
                  Kids
                  <hr
                    className={` ${
                      isActive ? "bg-blue-400 h-[3px]" : "hidden "
                    } `}
                  />
                </li>
              )}
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex  gap-4  items-center">
          <div tabIndex={0} role="button">
            <NavLink to={"/cart"} className="indicator">
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
                {totalCart}
              </span>
            </NavLink>
          </div>
          <NavLink to={"/login"}>
            <button className="md:px-6  md:py-2 px-4 py-1 rounded-full border border-black">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
