'use client'


import React, { useState, useEffect } from "react";
 

import { LuSearch } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";


const NavBar = () => {
    const [shadow, setShadow] = useState(false);


    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener("scroll", handleShadow);
      }, []);

  return (
    <div className={
        shadow
          ? "fixed w-full shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full  z-[100]"
      }>
      {/* First Part */}
      <div className="bg-color-b w-full flex flex-row justify-between px-16 py-3">
        <div></div>
        <p className="text-color text-center ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className=" underline  cursor-pointer pl-2">Shop Now</span>
        </p>
        <div>
          {" "}
          <p className="text-color">English</p>
        </div>
      </div>

      {/* Second Part */}
      <div className="px-16 w-full pt-8 pb-4 flex flex-row justify-between">
        {/* App Logo */}
        <h1 className="app-logo">Exclusive</h1>

        {/* Tabs */}
        <ul className="flex flex-row justify-around">
          <li className="tab">Home</li>
          <li className="tab">About</li>
          <li className="tab">Contact</li>
          <li className="tab">Sign Up</li>
        </ul>

        {/* Search bar and Icons */}
        <div className="flex flex-row">
          {/* Search Input  */}
          <div className="search-input">
            <input placeholder="What are you looking for?" />
            <LuSearch className="ml-2" />
          </div>

          {/* Icons */}

          <div className="flex flex-row justify-evenly items-center">
            <p className="relative icon">
              <GrFavorite className="text-lg" />
              <span className="absolute text-xs bottom-2 left-0  ml-2  h-4 w-4 bg-red-500 text-white flex items-center justify-center rounded-full">
                10
              </span>
            </p>
            <p className="relative icon">
              <IoCartOutline className="text-lg" />
              <span className="absolute text-xs bottom-2 left-0  ml-2  h-4 w-4 bg-red-500 text-white flex items-center justify-center rounded-full">
                0
              </span>
            </p>
            <FiUser className="icon " />
          </div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-black"></div> 
    </div>
  );
};

export default NavBar;
