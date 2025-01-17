"use client";

import React, { useState, useEffect } from "react";
import {appData} from "./constant"


import { LuSearch } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Breadcrumb, { crumbs } from "./Breadcrumb";

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
    <div
      className={
        ""
        // shadow
        //   ? "fixed w-full shadow-xl z-[100] ease-in-out duration-300"
        //   : "fixed w-full  z-[100]"
      }
    >
      {/* First Part */}
      <div className="bg-color-b w-full"> 
        <div className="w-[1170px] mx-auto flex flex-row justify-between  py-1">
        <div ></div>
        <p className="text-color text-center ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className=" underline  cursor-pointer pl-2">Shop Now</span>
        </p>
        <div className="flex flex-row items-center justify-center cursor-pointer">
          {" "}
          <p className="text-color">English</p>
          <IoIosArrowDown className="text-white ml-2" />
        </div>
        </div>
      </div>

      {/* Second Part */}
      <div className="w-[1170px] mx-auto pt-8 pb-4 flex flex-row justify-between">
        {/* App Logo */}
        <h1 className="app-logo">{`${appData.appName}`}</h1>

        {/* Tabs */}
        <ul className="flex flex-row justify-around">
          <li className="tab"><Link href={'/'}>Home</Link></li>
          <li className="tab"><Link href={'/about'}>About</Link></li>
          <li className="tab">
            <Link href={'/contact'}>Contact</Link> 
          </li>
          <li className="tab">
            <Link href={"/register"}> Sign Up</Link>
          </li>
        </ul>

        {/* Search bar and Icons */}
        <div className="flex flex-row">
          {/* Search Input  */}
          <div className="search-input">
            <input
              placeholder="What are you looking for?"
              className="input-bg-grey"
            />
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
      {/* <Breadcrumb crumbs={crumbs}/> */}

    </div>
  );
};

export default NavBar;
