import React from "react";
import ContactHeader from "../Components/Contact/ContactHeader";
import ContactForm from "../Components/Contact/ContactForm";
import RestaurantLocation from "../Components/Contact/RestaurantLocation";
import RestaurantFooter from "../Components/Contact/RestaurantFooter";
import Navbar from "../Components/Common/Navbar";

const page = () => {
  return (
    <div>
      <Navbar/>
<ContactHeader/>
<ContactForm/>
<RestaurantLocation/>
<RestaurantFooter/>
    </div>
  );
};

export default page;
