"use client";
import Link from "next/link";
import { GoTrash } from "react-icons/go";
import useCartStore from "@/store/cartStore";

const CartItem = () => {
  const { cart, removeFromCart } = useCartStore((state) => state);

  const itemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      {cart.length === 0 ? (
        <p className="font-light text-sm">Your cart is empty</p>
      ) : (
        <div>
          <div className="py-4">
            <p className="font-light text-sm">
              You have {itemsCount} items in your cart.
            </p>
          </div>
          {cart.map((product) => (
            <div key={product.id} className="flex flex-col relative py-4 px-2">
              <div className="flex relative">
                <div className="w-24">{product.quantity}</div>
                <div className="flex flex-col text-sm gap-1 pb-4 pl-2">
                  <h4 className="font-light">{product.subtitle}</h4>
                  <h5>
                    {product.quantity} x ${product.price}
                  </h5>
                  <p className="font-light">Size: S</p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="absolute bottom-4 right-2 bg-white text-red-400 py-2 px-4 rounded-sm"
                >
                  <GoTrash />
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col bottom-2 border-grey border-t py-4 gap-4">
            <div className="flex justify-between">
              <h1 className="text-xl">Subtotal</h1>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <button className="bg-white border-2 border-black w-[90%] text-black text-sm px-4 py-2 rounded-md transition-colors hover:bg-black hover:text-white">
              View Cart
            </button>
            <Link
              href="/checkout"
              className="bg-white border-2 text-center border-black w-[90%] text-black text-sm px-4 py-2 rounded-md transition-colors hover:bg-black hover:text-white"
            >
              Check out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
