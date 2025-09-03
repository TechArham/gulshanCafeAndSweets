import React from "react";
import Blog from "../Components/About/Blog/Blog";
import AboutUs from "../Components/About/AboutUs";
import CTA from "../Components/Common/CTA";
import Footer from "../Components/Common/Footer";
import AboutHeader from "../Components/About/AboutHeader";
import Navbar from "../Components/Common/Navbar";
import Counter from "../Components/Common/Counter";
import Testimonial from "../Components/Home/Testimonial";

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutUs />
      <Blog />
      <Counter/>
      <Testimonial/>
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
