
import React from "react";
import PizzaSlider from "./Components/HomeOne/PizzaSlider";
import About from "./Components/HomeOne/About";
import FastFoodCategorySlider from "./Components/HomeOne/FastFoodCategorySlider";
import DeliciousFastFoods from "./Components/HomeOne/DeliciousFastFoods";
import FastFoodMenu from "./Components/HomeOne/FastFoodMenu";
import NewsAndBlogs from "./Components/HomeOne/NewsAndBlogs/NewsAndBlogs";
// import FoodGallerySlider from '../Components/HomeOne/FoodGallerySlider';
import CTA from "./Components/HomeOne/CTA";
import TestimonialsSection from "./Components/HomeOne/TestimonialsSection";
import YoutubeVideo from "./Components/HomeOne/YoutubeVideo";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <PizzaSlider />
      <About />
      <FastFoodCategorySlider />
      <DeliciousFastFoods />
      <FastFoodMenu />
      <NewsAndBlogs />
      {/* <FoodGallerySlider /> */}
      <CTA />
      <TestimonialsSection />
      <YoutubeVideo />
      <Footer />
    </div>
  );
};

export default page;