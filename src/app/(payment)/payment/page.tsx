import Heading from "@/components/header/Heading";
import BaseLayout from "@/components/layout/BaseLayout";
import ProgressItem from "../address/components/ProgressItem";
import PaymentInfo from "./components/PaymentInfo";
import ProccessPayment from "./components/ProccessPayment";

const page = () => {
  return (
    <BaseLayout>
      <Heading title="Payment" />

      <div className="grid grid-cols-[2fr_1fr] py-10 gap-8">
        <div className="flex flex-col">
          <div className="relative">
            <div className="absolute top-[30%] left-0 z-0 w-full h-[1px] bg-grey-light"></div>
            <div className="flex justify-between z-10 relative">
              <ProgressItem title="address" icon="home" status={true} />
              <ProgressItem title="payment method" icon="card" status={true} />
              <ProgressItem title="review" icon="document" status={false} />
            </div>
          </div>

          <ProccessPayment />
        </div>
        <div>
          <div className="px-4">
            <PaymentInfo />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default page;
