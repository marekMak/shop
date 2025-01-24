import Image from "next/image";

interface InstaProps {
  pic: string;
}

const InstagramCard = ({ pic }: InstaProps) => {
  return (
    <div className="bg-white shadow w-60 h-60 flex flex-col py-2 px-4 gap-2 justify-center relative">
      <Image
        src={`/images/instagram/${pic}.png`}
        alt="Stylish woman with read coat and a hat"
        fill
        className="relative object-cover"
        quality={100}
      />
    </div>
  );
};

export default InstagramCard;
