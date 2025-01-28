"use client";
import { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(2000);
  return (
    <div className="flex flex-col gap-4">
      <div className="">Price: $0 - ${value}</div>
      <input
        type="range"
        min="1"
        max="2000"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full custom-range h-1 bg-black rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default RangeSlider;
