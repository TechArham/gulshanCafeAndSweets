import React from "react";
import Footer from "../Components/Common/Footer";
import CartHeader from "../Components/Cart/CartHeader";
import CartDetails from "../Components/Cart/CartDetails";
import Navbar from "../Components/Common/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <CartHeader />
      <CartDetails />
      <Footer />
    </div>
  );
};

export default page;
