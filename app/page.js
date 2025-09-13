// "use client";
// import { ReactLenis } from "lenis/react";
// import HomeHeader from "./Components/Home/HomeHeader";
// import RestaurantMenu from "./Components/Home/RestaurantMenu";
// import OurGallery from "./Components/Home/OurGallery";
// import ComingSoonSection from "./Components/Home/ComingSoonSection";
// import Testimonial from "./Components/Home/Testimonial";
// import LatestNews from "./Components/Home/LatestNews";
// import Footer from "./Components/Common/Footer";
// import FoodTab from "./Components/Home/FoodTab";
// import Navbar from "./Components/Common/Navbar";
// // import Topbar from "./Components/Common/Topbar";
// export default function Home() {
//   return (
//       <main className="">
//         {/* <Topbar /> */}
//         <Navbar />
//         <HomeHeader />
//         <FoodTab />
//         <RestaurantMenu />
//         <OurGallery />
//         <ComingSoonSection />
//         <LatestNews />
//         <Testimonial />
//         <Footer />
//       </main>
    
//   );
// }
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