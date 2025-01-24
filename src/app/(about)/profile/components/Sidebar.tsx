import { IoPersonOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCreditCard2Back } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";

const Sidebar = () => {
  return (
    <ul className="border border-grey-light">
      <li className="py-4 pl-6 transition-colors delay-100 cursor-pointer hover:bg-black hover:text-white flex items-center gap-2 capitalize">
        <IoPersonOutline /> Personal information
      </li>
      <li className="py-4 pl-6 transition-colors delay-100 cursor-pointer hover:bg-black hover:text-white flex items-center gap-2 capitalize">
        <BsBoxSeam /> My orders
      </li>
      <li className="py-4 pl-6 transition-colors delay-100 cursor-pointer hover:bg-black hover:text-white flex items-center gap-2 capitalize">
        <IoMdHeartEmpty /> My wishlists
      </li>
      <li className="py-4 pl-6 transition-colors delay-100 cursor-pointer hover:bg-black hover:text-white flex items-center gap-2 capitalize">
        <MdOutlinePlace /> My addresses
      </li>
      <li className="py-4 pl-6 transition-colors delay-100 cursor-pointer hover:bg-black hover:text-white flex items-center gap-2 capitalize">
        <BsCreditCard2Back /> Saved cards
      </li>
      <li className="py-4 pl-6 transition-colors delay-100 cursor-pointer hover:bg-black hover:text-white flex items-center gap-2 capitalize">
        <IoNotificationsOutline /> Notifications
      </li>
      <li className="py-4 pl-6 transition-colors delay-100 cursor-pointer hover:bg-black hover:text-white flex items-center gap-2 capitalize">
        <IoSettingsOutline /> Settings
      </li>
    </ul>
  );
};

export default Sidebar;
