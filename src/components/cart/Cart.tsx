import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="absolute hidden dropdown-cart-menu z-10 bg-white top-8 -left-44 h-fit flex flex-col w-96 px-5 py-5 shadow transition-opacity">
      <CartItem />
    </div>
  );
};

export default Cart;
