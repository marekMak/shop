import { BsBoxSeam } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiHeadphones } from "react-icons/pi";
import { BsCreditCard2Back } from "react-icons/bs";
const Items = () => {
  return (
    <div className="px-10 md:px-60 w-[90%] mx-auto min-h-36 py-10 ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-2xl mb-2">
            <BsBoxSeam />
          </div>
          <h1 className="font-bold">Free Shipping</h1>
          <p>Free shipping for order above $150</p>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl mb-2">
            <RiMoneyDollarCircleLine />
          </div>
          <h1 className="font-bold">Money Guarantee</h1>
          <p>Within 30 days for an exchange</p>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl mb-2">
            <PiHeadphones />
          </div>
          <h1 className="font-bold">Online Support</h1>
          <p>24 hours a day, 7 days a week</p>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl mb-2">
            <BsCreditCard2Back />
          </div>
          <h1 className="font-bold">Flexible Payment</h1>
          <p>Pay with multiple credit cards</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
