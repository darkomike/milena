"use client";

import { LuSendHorizonal,LuTwitter } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { RiLinkedinLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";


import Image  from "next/image";

function Footer() {
  return (
    <div className="bg-color-b w-full px-16 ">
      {/* First Part */}
      <div className="flex flex-row items-start justify-between py-10">
        {/* Colulmn  1 */} 
        <div className="flex flex-col space-y-4 justify-start items-start">
          <p className="app-logo-white">Exclusive</p>
          <p className="footer-tab">Subscribe</p>
          <p className="footer-tab-small">Get 10% off your first order</p>
          {/* Search Input  */}
          <div className="email-footer-input">
            <input placeholder="Enter your email" className="bg-black text-white" />
            <LuSendHorizonal className="ml-2 text-white cursor-pointer" />
          </div>
        </div>
        {/* Colulmn  2 */}
        <div className="flex flex-col space-y-4 justify-start items-start">
          <p className="footer-tab">Support</p>
          <p className="footer-tab-small">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="footer-tab-small">exclusive@gmail.com</p>
          <p className="footer-tab-small">+88015-88888-9999</p>
        </div>
        {/* Colulmn  3 */}
        <div className="flex flex-col space-y-4 justify-start items-start">
          <p className="footer-tab">Account</p>
          <p className="footer-tab-small">My Account </p>
          <p className="footer-tab-small">Login / Register</p>
          <p className="footer-tab-small">Cart</p>
          <p className="footer-tab-small">Wishlist</p>
          <p className="footer-tab-small">Shop</p>
        </div>

        {/* Colulmn  4 */}
        <div className="flex flex-col space-y-4 justify-start items-start">
          <p className="footer-tab">Quick Link</p>
          <p className="footer-tab-small">Privacy Policy</p>
          <p className="footer-tab-small">Terms Of Use</p>
          <p className="footer-tab-small">FAQ</p>
          <p className="footer-tab-small">Contact</p>
        </div>

        {/* Colulmn  5 */}
        <div className="flex flex-col space-y-4 justify-start items-start">
          <p className="footer-tab">Download App</p>
          <p className="footer-tab-small text-xs">
            Save $3 with App New User Only
          </p>
          <p>
            <Image
              src="/download_scan.png"
              alt="Download App Photo"
              className="cursor-pointer"
              width={100}
              height={24}
              priority
            />
          </p>
          <div className="flex flex-row items-center space-x-4">
            <GrFacebookOption className="text-white"/>
            <LuTwitter className="text-white"/>
            <RxInstagramLogo className="text-white"/>
            <RiLinkedinLine className="text-white"/>
          </div>
        </div> 
      </div> 
      {/* Second Part */}
      <div className="copy py-1 text-sm">
        <p>&#169; Copyright MikeSoft 2024. All right reserved</p>
      </div>
    </div>
  );
}

 
export default Footer;