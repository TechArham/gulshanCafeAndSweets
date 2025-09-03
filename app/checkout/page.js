import React from "react";
import Footer from "../Components/Common/Footer";
import CheckoutHeader from "../Components/Checkout/CheckoutHeader";
import CheckoutForm from "../Components/Checkout/CheckoutForm";
import Navbar from "../Components/Common/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <CheckoutHeader />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default page;
