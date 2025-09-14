"use client";
import HomeHeader from "../Components/HomeTwo/HomeHeader";
import RestaurantMenu from "../Components/HomeTwo/RestaurantMenu";
import OurGallery from "../Components/HomeTwo/OurGallery";
import ComingSoonSection from "../Components/HomeTwo/ComingSoonSection";
import Testimonial from "../Components/HomeTwo/Testimonial";
import LatestNews from "../Components/HomeTwo/LatestNews";
import Footer from "../Components/Common/Footer";
import FoodTab from "../Components/HomeTwo/FoodTab";
import Navbar from "../Components/Common/Navbar";
// import Topbar from "./Components/Common/Topbar";
export default function Home() {
  return (
      <main className="">
        {/* <Topbar /> */}
        <Navbar />
        <HomeHeader />
        <FoodTab />
        <RestaurantMenu />
        <OurGallery />
        <ComingSoonSection />
        <LatestNews />
        <Testimonial />
        <Footer />
      </main>
    
  );
}
