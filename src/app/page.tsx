import Header from "@/components/header/Header";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Button from "@/components/button";
import { FaArrowRightLong } from "react-icons/fa6";

import Image from "next/image";
import Categories from "./home/components/categories/Categories";
import Deals from "./home/components/deals/Deals";
import Reviews from "./home/components/reviews/Reviews";
import Instagram from "./home/components/instagram/Instagram";
import Conditions from "./home/components/conditions/Conditions";

export default async function HomePage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="h-screen flex justify-center px-6">
        <div className="bg-grey-light w-full h-[90%] grid grid-cols-2">
          <div className="flex flex-col h-full justify-center items-left pl-40 gap-2 z-10 relative">
            <p className="text-3xl">Classic exclusive</p>
            <h1 className="text-5xl font-bold capitalize">
              Women's collection
            </h1>
            <p className="uppercase text-3xl">Up to 40% off</p>
            <Button className="max-w-fit px-5 mt-12 py-2 flex items-center gap-4">
              Shop Now <FaArrowRightLong />
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative h-full w-full">
              <Image
                src="/images/home/woman.png"
                alt="Stylish woman with read coat and a hat"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
          <div className="absolute -bottom-[5%] left-[10%] text-[15rem] text-white font-bold uppercase z-0">
            Best
          </div>
        </div>
      </div>
      <Categories />
      <Deals />
      <Reviews />
      <Instagram />
      <Conditions />
    </div>
  );
}
