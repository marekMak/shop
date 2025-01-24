import React from "react";

import { FaRegEnvelope } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import WhiteLogo from "../WhiteLogo";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="bg-black px-10 md:px-40 pt-10 pb-6">
      <div className=" grid grid-cols-4">
        <div className="text-white text-sm flex flex-col gap-6 pr-4">
          <WhiteLogo />
          <p className="flex items-center gap-2">
            <MdPhoneInTalk /> (704) 555-0127
          </p>
          <p className="flex items-center gap-2">
            <FaRegEnvelope /> info@krist.com
          </p>
          <p className="flex items-center gap-2">
            <MdOutlinePlace /> 3891 Ranchview Dr. Richardson, California 62639
          </p>
        </div>
        <div className="text-white text-sm flex flex-col gap-4 pr-4">
          <h1 className="font-bold">Information</h1>
          <p>My Account</p>
          <p>Login</p>
          <p>My Cart</p>
          <p>My Wishlist</p>
          <p>Checkout</p>
        </div>
        <div className="text-white text-sm flex flex-col gap-4 pr-4">
          <h1 className="font-bold">Service</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="text-white text-sm flex flex-col gap-4 pr-4">
          <h1 className="font-bold">Subscribe</h1>
          <p>
            Enter your email below to be the first to know about new collections
            and product launches.
          </p>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
