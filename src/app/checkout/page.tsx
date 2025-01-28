import Header from "@/components/Header";
import Heading from "@/components/Heading";
import React from "react";
import Table from "./components/Table";
import Subtotal from "./components/Subtotal";
import BaseLayout from "@/components/layout/BaseLayout";

const page = () => {
  return (
    <BaseLayout>
      <Heading title="Checkout" />
      <div className="grid grid-cols-[2fr_1fr] py-10 gap-8">
        <div className="flex flex-col">
          <Table />
        </div>
        <div className="flex flex-col">
          <Subtotal buttonActionName="Procced to Address" url="address" />
        </div>
      </div>
    </BaseLayout>
  );
};

export default page;
