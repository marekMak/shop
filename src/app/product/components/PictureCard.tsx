import Image from "next/image";
import React from "react";

const PictureCard = () => {
  return (
    <div className="bg-grey-light p-2 flex flex-col justify-center items-center">
      <div className="w-20 h-20 flex  relative">
        <Image
          src={`/images/product/babyDress.png`}
          alt="Stylish woman with read coat and a hat"
          fill
          className="relative object-cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default PictureCard;
