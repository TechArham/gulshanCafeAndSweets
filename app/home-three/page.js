"use client";
import HomeHeader from "../Components/HomeThree/HomeHeader";
import RestaurantMenu from "../Components/HomeThree/RestaurantMenu";
import ComingSoonSection from "../Components/HomeThree/ComingSoonSection";
import FoodDeliveryLanding from "../Components/HomeThree/FoodDeliveryLanding";
import OurChefSection from "../Components/HomeThree/OurChefSection";
import Testimonial from "../Components/HomeThree/Testimonial";
import SunzineGallery from "../Components/HomeThree/SunzineGallery";
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/Navbar';
export default function Home() {
  return (
      <main className="">
        <Navbar />
        <HomeHeader />
        <RestaurantMenu />
        <SunzineGallery/>
        <ComingSoonSection />
        <OurChefSection />
        <FoodDeliveryLanding />
        <Testimonial />
        <Footer />
      </main>
  );
}
