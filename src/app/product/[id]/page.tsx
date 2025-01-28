import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import ColorCard from "../components/ColorCard";
import SizeCard from "../components/SizeCard";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import PictureCard from "../components/PictureCard";
import Tab from "../components/Tab";
const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="min-h-screen flex flex-col justify-center px-6">
        <div className="w-full">
          <div className="flex flex-col h-full w-full  text-justify  px-10 md:px-40 py-10 gap-8">
            <div className="flex items-center gap-2">
              <Link href="/">Home</Link>
              <MdArrowForwardIos />
              <Link href="/shop">Shop</Link>
              <MdArrowForwardIos />
              <p>Product name</p>
            </div>

            <div className="w-full h-fit  grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-grey-light p-2 flex flex-col justify-center items-center">
                <div className="w-80 h-80 flex  relative">
                  <Image
                    src={`/images/product/babyDress.png`}
                    alt="Stylish woman with read coat and a hat"
                    fill
                    className="relative object-cover"
                    quality={100}
                  />
                </div>
              </div>
              <div className="flex flex-col p-2">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">YK Disney</h1>
                    <span className="text-sm bg-green-100 text-green-400 px-2 py-1 rounded-sm text-center">
                      in stock
                    </span>
                  </div>
                  <p className="capitalize">Girl pink moana dress</p>
                  <div className="flex items-center gap-2">
                    <span>$80.00</span>
                    <span className="text-grey line-through">$100.00</span>
                  </div>
                </div>
                <p className="py-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  laboriosam et neque quae ipsam perspiciatis ad sint?
                  Laudantium dolorum obcaecati sequi porro, sapiente itaque sit
                  earum quos maxime quod eum?
                </p>
                <div className="flex flex-col">
                  <h1 className="text font-bold">Color</h1>
                  <div className="flex items-center gap-2 py-2">
                    <ColorCard />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text font-bold">Size</h1>
                  <div className="flex items-center gap-2 py-2">
                    <SizeCard size="S" />
                    <SizeCard size="M" />
                    <SizeCard size="X" />
                    <SizeCard size="XL" />
                  </div>
                </div>
                <div className="py-8 flex gap-4">
                  <div className="border-black border-2 rounded-lg flex justify-center items-center px-2 py-2 text-xl gap-4">
                    <button className="px-2 text-sm hover:bg-grey">
                      <FaPlus />
                    </button>
                    <span>1</span>
                    <button className="px-2 text-sm">
                      <FaMinus />
                    </button>
                  </div>
                  <button className="py-2 px-4 bg-black text-white rounded-md w-full">
                    Add to Cart
                  </button>
                  <div className="border-black border-2 rounded-lg flex justify-center items-center px-2 py-2 text-3xl">
                    <IoMdHeartEmpty />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-2 h-fit py-2 flex justify-between">
              <PictureCard />
              <PictureCard />
              <PictureCard />
              <PictureCard />
            </div>

            <div className="w-full min-h-5">
              <Tab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
