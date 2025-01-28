"use client";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCartStoreWithTotals } from "@/store/cartStore";
const ShowItems = () => {
  const { totalItems } = useCartStoreWithTotals();
  return (
    <div className="relative">
      <HiOutlineShoppingBag />

      {totalItems > 0 && (
        <span className="absolute top-3 -right-3 bg-red-500 text-white rounded-full text-xs px-2">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default ShowItems;
