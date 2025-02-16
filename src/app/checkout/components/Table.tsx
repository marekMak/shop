"use client";

import { GoTrash } from "react-icons/go";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { formatPrice } from "@/utils/utils";
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
                <tr key={product.id}>
                  <th className="flex">
                    <div className="relative w-20">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                        className="left-0 max-w-20"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1>{product.subtitle}</h1>
                      <p className="font-light">Size:S</p>
                    </div>
                  </th>
                  <td>{formatPrice(product.price)}</td>
                  <td>{product.quantity}</td>
                  <td>{formatPrice(product.price * product.quantity)}</td>
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
