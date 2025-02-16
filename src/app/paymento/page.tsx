import Heading from "@/components/header/Heading";
import BaseLayout from "@/components/layout/BaseLayout";
import ProgressItem from "../(payment)/address/components/ProgressItem";
import PaymentInfo from "../(payment)/payment/components/PaymentInfo";
import ProccessPayment from "../(payment)/payment/components/ProccessPayment";

const page = () => {
  return (
    <BaseLayout>
      <Heading title="Payment" />

      <div className="grid grid-cols-[2fr_1fr] py-10 gap-8">
        <div className="flex flex-col">
          <div className="relative">
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
