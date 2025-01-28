"use client";

interface SubtotalProps {
  url: string;
  buttonActionName: string;
}

import Link from "next/link";
import React from "react";
import useCartStore from "@/store/cartStore";
const Subtotal = ({ buttonActionName, url }: SubtotalProps) => {
  const { cart, removeFromCart } = useCartStore((state) => state);
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const delivery = 5;
  return (
    <div className="flex flex-col px-5 py-2 border border-grey-light">
      <div className="flex justify-between items-center py-2">
        <h1 className="font-bold">Subtotal</h1>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex flex-col justify-between py-2 items-start border-t border-grey-light">
        <p className="text-xs">Enter Discount Code</p>
        <input
          type="text"
          className="border border-black rounded-md px-2 py-1"
          placeholder="FLAT50"
        />
      </div>
      <div className="flex justify-between py-2 items-center border-t border-grey-light">
        <h1>Delivery Charge</h1>
        <p>${delivery.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-2 items-center border-t border-grey-light">
        <h1 className="font-bold">Grand Total</h1>
        <p>${(delivery + subtotal).toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-4 items-center border-t border-grey-light">
        <Link
          href={`/${url}`}
          className=" bg-black text-center  w-full border border-black text-white text-sm px-4 py-2 rounded-md transition-colors hover:bg-white hover:text-black"
        >
          {buttonActionName}
        </Link>
      </div>
    </div>
  );
};

export default Subtotal;
