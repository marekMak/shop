interface PictureCardProps {
  imageUrl: string;
}

import Image from "next/image";

const PictureCard = ({ imageUrl }: PictureCardProps) => {
  return (
    <div className="bg-grey-light p-2 flex flex-col justify-center items-center">
      <div className="w-20 h-20 flex  relative">
        <Image
          src={imageUrl}
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
