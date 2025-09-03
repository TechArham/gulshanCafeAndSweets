import React from "react";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import RestaurantOrderingSystem from "../Components/RestaurantOrderingSystem/RestaurantOrderingSystem";
// import MenuHeader from "../Components/Menu/MenuHeader";
// import MenuOne from "../Components/Menu/MenuOne";
// import MenuTwo from "../Components/Menu/MenuTwo";
// import MenuThree from "../Components/Menu/MenuThree";
const page = () => {
  return (
    <div>
      <Navbar />
      <RestaurantOrderingSystem/>
      {/* <MenuHeader />
      <MenuOne />
      <MenuTwo />
      <MenuThree /> */}
      <Footer />
    </div>
  );
};

export default page;
