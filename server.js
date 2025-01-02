import React from "react";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"; // Add this line to import loadStripe


const stripePromise = loadStripe("pk_test_51QcTstR86Fv3IC7z5X71baj4gWcljmT2HoxEDJKQij4oqTIH1oL3DaeMvcu2bihaLlSIM7UNUY45uLE6EP6rXi4z00MG0vDmcA"); // Replace with your actual Stripe Publishable Key

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