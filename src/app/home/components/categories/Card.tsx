interface CardProps {
  title: string;
}

import Image from "next/image";

export default function Card({ title }: CardProps) {
  return (
    <div className="relative flex flex-col my-6 bg-grey-light rounded w-60">
      <div className="relative h-64 my-2 overflow-hidden text-white rounded-md relative">
        <h1 className="text-grey text-7xl font-bold absolute left-5 opacity-20 capitalize">
          {title}
        </h1>
        <Image
          src={`/images/home/${title.toLowerCase()}.png`}
          alt="Stylish woman with read coat and a hat"
          fill
          className="object-contain"
          quality={100}
        />
        <div className="px-4 z-10 absolute bottom-2 w-full">
          <div className="rounded-md w-full bg-white py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md capitalize">
            {title} Wear
          </div>
        </div>
      </div>
    </div>
  );
}
