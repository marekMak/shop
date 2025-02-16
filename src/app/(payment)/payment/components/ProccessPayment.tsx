import Stripe from "stripe";
import CheckoutForm from "./CheckoutForm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const paymentIntent = await stripe.paymentIntents.create({
  amount: 1000,
  currency: "usd",
});

if (!paymentIntent.client_secret) {
  throw new Error("Stripe failed to create payment intent");
}

const ProccessPayment = () => {
  return (
    <div className="w-full py-10">
      <CheckoutForm clientSecret={paymentIntent.client_secret as string} />
    </div>
  );
};

export default ProccessPayment;
