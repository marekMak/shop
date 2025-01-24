import Image from "next/image";
import Heading from "@/components/Heading";
import Timer from "./Timer";
import Button from "@/components/button";
import { FaArrowRightLong } from "react-icons/fa6";

const Deals = () => {
  return (
    <div className="px-10 w-[80%] mx-auto h-fit py-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center gap-8 pr-4 py-10">
          <Heading title="Deals of the Month" />
          <p className="text-sm text-justify w-[90%]">
            Is is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <div className="flex items-center gap-4">
            <Timer counter={120} unit="days" />
            <Timer counter={18} unit="hours" />
            <Timer counter={15} unit="mins" />
            <Timer counter={10} unit="seconds" />
          </div>
          <Button className="w-fit flex items-center gap-2">
            View all products <FaArrowRightLong />
          </Button>
        </div>
        <div
          className="relative h-[60vh] w-[80%] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/deals/deals.png')" }}
        ></div>
      </div>
    </div>
  );
};

export default Deals;
