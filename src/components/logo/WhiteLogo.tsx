import Image from "next/image";

const WhiteLogo = () => {
  return (
    <div>
      <div className="relative w-36 h-16">
        <Image src="/images/whiteLogo.svg" alt="Logo" fill quality={100} />
      </div>
    </div>
  );
};

export default WhiteLogo;
