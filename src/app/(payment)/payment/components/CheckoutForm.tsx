"use client";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCartStore from "@/store/cartStore";
import Table from "@/app/checkout/components/Table";
import Button from "@/components/button";
import { FormEvent, useState } from "react";

type CheckoutFormProps = {
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export function CheckoutForm({ clientSecret }: CheckoutFormProps) {
  return (
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <Form />
    </Elements>
  );
}

function Form() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>();
  const { cart, removeFromCart } = useCartStore((state) => state);
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const delivery = 5;
  const stripe = useStripe();
  const elements = useElements();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/stripe/purchaseSuccess`, // URL, kam bude presmerovaný používateľ po platbe
        },
      })
      .then(({ error }) => {
        if (error) {
          // Spracovanie rôznych typov chýb
          if (
            error.type === "card_error" ||
            error.type === "validation_error"
          ) {
            console.error("Chyba karty:", error.message);
            setErrorMessage(error.message);
          } else {
            console.error("Neočakávaná chyba:", error);
            setErrorMessage("Došlo k neočakávanej chybe. Skúste to znova.");
          }
        }
      })
      .catch((err) => {
        // Zachytenie iných neočakávaných chýb
        console.error("Chyba pri potvrdení platby:", err);
        setErrorMessage("Došlo k technickej chybe pri spracovaní platby.");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <p className="bg-red-600 text-red-200 px-2 py-1 rounded mb-4">
          {errorMessage}
        </p>
      )}

      <Table />

      <div className="my-4">
        <PaymentElement />
      </div>
      <LinkAuthenticationElement onChange={(e) => setEmail(e.value.email)} />
      <Button
        className="mt-8"
        disabled={stripe == null || elements == null || email == null}
      >
        Purchase ${(delivery + subtotal).toFixed(2)}
      </Button>
    </form>
  );
}

export default CheckoutForm;
