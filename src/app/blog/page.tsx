import Header from "@/components/Header";
import React from "react";
import Post from "./components/Post";

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="min-h-screen flex justify-center px-6">
        <div className="bg-grey-light w-full h-[90%]">
          <div className="flex flex-col h-full w-full md:w-4/5 text-justify  px-10 md:px-40 py-10 gap-8">
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
