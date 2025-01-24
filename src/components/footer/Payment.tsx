import Image from "next/image";

interface PaymentProps {
  title: string;
}
const Payment = ({ title }: PaymentProps) => {
  return (
    <div className="bg-grey-light rounded-sm relative h-8 w-12">
      <Image
        src={`/images/footer/${title}.png`}
        alt={`${title} logo`}
        fill
        className="object-contain px-1 py-1"
        quality={100}
      />
    </div>
  );
};

export default Payment;
