import React from "react";
import CartItem from "./cart/CartItem";

const Cart = () => {
  return (
    <div className="absolute hidden dropdown-cart-menu z-10 bg-white top-8 right-10 h-fit flex flex-col w-96 px-5 py-5 shadow transition-opacity">
      <CartItem />
    </div>
  );
};

export default Cart;
