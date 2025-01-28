"use client";

import { GoTrash } from "react-icons/go";
import useCartStore from "@/store/cartStore";
const Table = () => {
  const { cart, removeFromCart } = useCartStore((state) => state);
  return (
    <div>
      <div className="overflow-x-auto">
        {cart.length === 0 ? (
          <p className="font-light text-sm">Your cart is empty</p>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr className="py-2">
                <th className="font-light text-black">Products</th>
                <th className="font-light text-black">Price</th>
                <th className="font-light text-black">Quantity</th>
                <th className="font-light text-black">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr>
                  <th className="grid grid-cols-2">
                    <div>1</div>
                    <div className="flex flex-col">
                      <h1>{product.title}</h1>
                      <p className="font-light">Size:S</p>
                    </div>
                  </th>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.quantity}</td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button className=" bg-white text-red-400 py-2 px-4 rounded-sm">
                      <GoTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
