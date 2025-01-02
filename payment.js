import React from "react";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./server";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_YourPublishableKey"); // Replace with your actual Stripe Publishable Key

const Payment = () => {
  const location = useLocation();
  const totalAmount = location.state?.totalAmount;

  if (!totalAmount) {
    return <p>Error: No total amount provided.</p>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm totalAmount={totalAmount} />
    </Elements>
  );
};

export default Payment;
