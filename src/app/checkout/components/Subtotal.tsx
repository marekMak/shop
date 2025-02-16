"use client";

interface SubtotalProps {
  url: string;
  buttonActionName: string;
}

import Link from "next/link";
import { useState } from "react";
import useCartStore from "@/store/cartStore";
import { formatPrice } from "@/utils/utils";
import { checkDiscount } from "@/utils/supabase/actions";
const Subtotal = ({ buttonActionName, url }: SubtotalProps) => {
  const { cart, removeFromCart } = useCartStore((state) => state);

  const [discountCode, setDiscountCode] = useState("");
  const [discountValue, setDiscountValue] = useState<number | null>(null);
  const [error, setError] = useState("");

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCheckDiscount = async () => {
    if (!discountCode) return;
    const { data } = await checkDiscount(discountCode);

    if (!data) {
      setError("Invalid discount code");
      return;
    }
    if (subtotal < 50) {
      setError("Subtotal must be at least $50.00");
      return;
    }

    if (data) {
      setDiscountValue(data.discount_value);
    } else {
      setDiscountValue(null);
    }
  };

  const delivery = 5;
  const discountedTotal = discountValue
    ? subtotal - (subtotal * discountValue) / 100
    : subtotal;
  return (
    <div className="flex flex-col px-5 py-2 border border-grey-light">
      <div className="flex justify-between items-center py-2">
        <h1 className="font-bold">Subtotal</h1>
        <p>{formatPrice(subtotal)}</p>
      </div>
      <div className="flex flex-col justify-between py-2 items-start border-t border-grey-light">
        <p className="text-xs">Enter Discount Code</p>
        <input
          type="text"
          className="border border-black rounded-md px-2 py-1"
          placeholder="FLAT50"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          onBlur={handleCheckDiscount}
        />
        {error && (
          <p className="text-red-400 w-full bg-red-100 text px-2 rounded py-1 mt-2">
            {error}
          </p>
        )}
        {discountValue !== null && (
          <p className="text-green-400 rounded bg-green-100 px-2 py-1 text mt-2">
            Congratulations! A discount of {formatPrice(discountValue)} has been
            applied to your purchase.
          </p>
        )}
      </div>
      <div className="flex justify-between py-2 items-center border-t border-grey-light">
        <h1>Delivery Charge</h1>
        <p>{formatPrice(delivery)}</p>
      </div>
      <div className="flex justify-between py-2 items-center border-t border-grey-light">
        <h1 className="font-bold">Grand Total</h1>
        <p>{formatPrice(discountedTotal + delivery)}</p>
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
