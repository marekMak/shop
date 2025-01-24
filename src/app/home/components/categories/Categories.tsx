import Heading from "@/components/Heading";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import CarouselButton from "./CarouselButton";
import Carousel from "./Carousel";
const Categories = () => {
  return (
    <div className="px-10 md:px-40 w-[80%] mx-auto min-h-36 py-10">
      <div className="flex w-full justify-between">
        <Heading title="Shop by Categories" />
        <div className="flex items-center gap-2">
          <CarouselButton>
            <FaArrowLeft />
          </CarouselButton>
          <CarouselButton>
            <FaArrowRight />
          </CarouselButton>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Categories;
