interface CustomerCardProps {
  name: string;
  text: string;
  role: string;
}

import { FaStar } from "react-icons/fa";

const CustomerCard = ({ name, text, role }: CustomerCardProps) => {
  return (
    <div className="bg-white shadow w-72 h-56 flex flex-col py-2 px-4 gap-2 justify-center">
      <div className="flex gap-1 text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-xs text-justify">{text}</p>
      <div className="flex items-center gap-2 mt-4">
        <div>1</div>
        <div className="flex flex-col">
          <h1 className="text-sm text-black font-bold">{name}</h1>
          <p className="text-sm text-grey">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
