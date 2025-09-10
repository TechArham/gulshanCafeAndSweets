"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
// import RestaurantMenu from "./Components/Home/RestaurantMenu";
import OurGallery from "./Components/Home/OurGallery";
import ComingSoonSection from "./Components/Home/ComingSoonSection";
import Testimonial from "./Components/Home/Testimonial";
import LatestNews from "./Components/Home/LatestNews";
import Footer from "./Components/Common/Footer";
import FoodTab from "./Components/Home/FoodTab";
import Navbar from "./Components/Common/Navbar";
// import Topbar from "./Components/Common/Topbar";
export default function Home() {
  return (
    <main className="">
      {/* <Topbar /> */}
      <Navbar />
      <HomeHeader />
      <FoodTab />
      {/* <RestaurantMenu /> */}
      <OurGallery />
      <ComingSoonSection />
      <LatestNews />
      <Testimonial />
      <Footer />

      {/* Font Test Section - Remove this after testing */}
      <div className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Barlow Condensed Font Test Section</h2>
        <div className="space-y-4">
          <p className="font-barlow-condensed text-xl">Barlow Condensed Font (Tailwind Class)</p>
          <p className="font-barlow-condensed text-lg font-thin">Barlow Condensed Thin (100)</p>
          <p className="font-barlow-condensed text-lg font-extralight">Barlow Condensed Extra Light (200)</p>
          <p className="font-barlow-condensed text-lg font-light">Barlow Condensed Light (300)</p>
          <p className="font-barlow-condensed text-lg font-normal">Barlow Condensed Normal (400)</p>
          <p className="font-barlow-condensed text-lg font-medium">Barlow Condensed Medium (500)</p>
          <p className="font-barlow-condensed text-lg font-semibold">Barlow Condensed Semibold (600)</p>
          <p className="font-barlow-condensed text-lg font-bold">Barlow Condensed Bold (700)</p>
          <p className="font-barlow-condensed text-lg font-extrabold">Barlow Condensed Extra Bold (800)</p>
          <p className="font-barlow-condensed text-lg font-black">Barlow Condensed Black (900)</p>
          <p className="font-rt-body text-lg">RT Body Font (Barlow Condensed)</p>
          <p className="font-rt-heading text-lg">RT Heading Font (Barlow Condensed)</p>
          <p className="font-rt-menu text-lg">RT Menu Font (Barlow Condensed)</p>
          <p className="text-lg">Default Sans Font (Barlow Condensed)</p>
          <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded">
            <p className="text-sm font-bold">Debug Info:</p>
            <p className="text-sm">If you see this text in Barlow Condensed font, the font is working correctly.</p>
            <p className="text-sm">If you see system UI font, there might be a loading issue.</p>
          </div>
        </div>
      </div>
    </main>

  );
}
