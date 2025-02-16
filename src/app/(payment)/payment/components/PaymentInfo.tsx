"use client";

import useCartStore from "@/store/cartStore";

const PaymentInfo = () => {
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

      <div className="flex justify-between py-2 items-center border-t border-grey-light">
        <h1>Delivery Charge</h1>
        <p>${delivery.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-2 items-center border-t border-grey-light">
        <h1 className="font-bold">Price to Pay</h1>
        <p>${(delivery + subtotal).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PaymentInfo;
