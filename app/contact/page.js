import React from "react";
import ContactHeader from "../Components/Contact/ContactHeader";
import ContactForm from "../Components/Contact/ContactForm";
import RestaurantLocation from "../Components/Contact/RestaurantLocation";
// import RestaurantFooter from "../Components/Contact/RestaurantFooter";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const page = () => {
  return (
    <div>
      <Navbar/>
<ContactHeader/>
<ContactForm/>
<RestaurantLocation/>
{/* <RestaurantFooter/> */}
<Footer/>
    </div>
  );
};

export default page;
