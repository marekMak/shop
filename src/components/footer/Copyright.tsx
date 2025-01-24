import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Payment from "./Payment";
const Copyright = () => {
  return (
    <div className="w-full border-t-2 mt-6 pt-8 flex justify-between text-white ">
      <div className="flex items-center gap-4">
        <Payment title="visa" />
        <Payment title="master" />
        <Payment title="gpay" />
        <Payment title="amex" />
        <Payment title="paypal" />
      </div>
      <div>2025 Krist All Rights are reserved</div>
      <div className="flex items-center gap-4 text-xl">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
};

export default Copyright;
