import Heading from "@/components/Heading";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import CarouselButton from "../categories/CarouselButton";
import CustomerCard from "./components/CustomerCard";

const Customers = () => {
  return (
    <div className="px-10 md:px-60 w-full mx-auto min-h-36 py-10 bg-grey-light mt-20">
      <div className="w-full flex justify-between">
        <Heading title="What out Customer say's" />
        <div className="flex items-center">
          <CarouselButton>
            <FaArrowLeft />
          </CarouselButton>
          <CarouselButton>
            <FaArrowRight />
          </CarouselButton>
        </div>
      </div>
      <div className="grid grid-cols-3 my-8">
        <CustomerCard
          name="Leslie Alexander"
          text="Is is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
          role="Model"
        />
        <CustomerCard
          name="Jacob Jones"
          text="Is is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
          role="Cofounder"
        />
        <CustomerCard
          name="Jenny Wilson"
          text="Is is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
          role="Fashion Designer"
        />
      </div>
    </div>
  );
};

export default Customers;
