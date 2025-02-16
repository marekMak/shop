interface ProgressItemProps {
  title: string;
  icon: "home" | "card" | "document";
  status: boolean;
}

import { CiHome } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

const ProgressItem = ({ title, status, icon }: ProgressItemProps) => {
  const iconMap = {
    home: <CiHome />,
    card: <CiCreditCard2 />,
    document: <IoDocumentTextOutline />,
  };

  const defaultIcon = <CiHome />;
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-10 h-10 py-2 px-2 ${
          status ? "bg-black" : "bg-gray-300"
        } text-white text-3xl flex items-center justify-center rounded-md mb-2`}
      >
        <span>{iconMap[icon] || defaultIcon}</span>
      </div>
      <p className="text-sm capitalize">{title}</p>
    </div>
  );
};

export default ProgressItem;
