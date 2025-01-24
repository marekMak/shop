import Heading from "@/components/Heading";
import InstagramCard from "./components/InstagramCard";

const Instagram = () => {
  return (
    <div className="px-10 md:px-60 w-full mx-auto min-h-36 pt-20 pb-10">
      <div className="flex justify-center">
        <Heading title="Our Instagram Stories" />
      </div>
      <div className="flex justify-center items-center justify-center gap-8 py-10">
        <InstagramCard pic="first" />
        <InstagramCard pic="second" />
        <InstagramCard pic="third" />
        <InstagramCard pic="instaGuy" />
      </div>
    </div>
  );
};

export default Instagram;
