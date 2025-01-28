import Header from "@/components/Header";
import Heading from "@/components/Heading";
import React from "react";
import ProgressItem from "./components/ProgressItem";
import Button from "@/components/button";
import Input from "@/components/input";
import Subtotal from "../checkout/components/Subtotal";
import SelectAddress from "./components/SelectAddress";
import AddressForm from "./components/AddressForm";

import BaseLayout from "@/components/layout/BaseLayout";

const page = () => {
  return (
    <BaseLayout>
      <Heading title="Shipping Address" />
      <div className="grid grid-cols-[2fr_1fr] py-10 gap-8">
        <div className="flex flex-col">
          <div className="relative">
            <div className="absolute top-[30%] left-0 z-0 w-full h-[1px] bg-grey-light"></div>
            <div className="flex justify-between z-10 relative">
              <ProgressItem title="address" icon="home" status={true} />
              <ProgressItem title="payment method" icon="card" status={false} />
              <ProgressItem title="review" icon="document" status={false} />
            </div>
          </div>

          <div className="flex flex-col gap-2 py-10">
            <h1 className="font-bold">Select a delivery address</h1>
            <p className="text-sm">
              In the address you'd like to use displayed below ? If so, click
              the corresponding "Deliver to this address" button. Or you can
              enter a new delivery address.
            </p>
          </div>
          <div className="flex items-center gap-2 pb-10">
            <SelectAddress />
          </div>
          <Button className="w-60 py-3 px-3 text-center text-sm capitalize">
            Deliver here
          </Button>

          <div className="flex flex-col border-t border-grey-light pt-4 gap-4 mt-8">
            <h1 className="font-bold">Add new address</h1>
            <AddressForm />
          </div>
        </div>
        <div className="px-4">
          <Subtotal buttonActionName="Proceed to Payment" url="payment" />
        </div>
      </div>
    </BaseLayout>
  );
};

export default page;
