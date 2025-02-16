import Header from "@/components/header/Header";
import Categories from "./components/Categories";

import { RxCaretDown } from "react-icons/rx";

import { LuLayoutGrid } from "react-icons/lu";
import { LuLayoutList } from "react-icons/lu";

import RangeSlider from "./components/RangeSlider";

import { MdArrowForwardIos } from "react-icons/md";
import Colours from "./components/Colours";
import Sizes from "./components/Sizes";
import Products from "./components/Products";
const Shop = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="px-10 md:px-40 py-10">
        <h1 className="flex items-center gap-2">
          Shop <MdArrowForwardIos /> All Products
        </h1>
        <div className="flex h-fit">
          <aside className="w-1/4 mt-8">
            <div className="flex flex-col">
              <h1 className="font-bold mb-8">Product Categories</h1>
              <Categories />
            </div>

            <div className="flex flex-col py-8">
              <h1 className="font-bold mb-8">Filter by Price</h1>
              <div className="space-y-2">
                <RangeSlider />
              </div>
            </div>

            <div className="flex flex-col py-8">
              <h1 className="font-bold mb-8">Filter by Color</h1>
              <div className="space-y-2">
                <Colours />
              </div>
            </div>

            <div className="flex flex-col py-8">
              <h1 className="font-bold mb-8">Filter by Size</h1>

              <Sizes />
            </div>
          </aside>

          <main className="w-3/4 py-10 px-10">
            <div className="flex justify-between">
              <ul className="flex  items-center gap-4">
                <li className="text-xl">
                  <LuLayoutGrid />
                </li>
                <li className="text-xl">
                  <LuLayoutList />
                </li>
                <li>Showing 1-16 of 72 results</li>
              </ul>
              <div className="flex items-center gap-2">
                Show by latest <RxCaretDown />
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-8">
              <Products />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
