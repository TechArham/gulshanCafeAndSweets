import React from 'react';
import PizzaSlider from '../Components/MainHome/PizzaSlider';
import About from '../Components/MainHome/About';
import FastFoodCategorySlider from '../Components/MainHome/FastFoodCategorySlider';
import DeliciousFastFoods from '../Components/MainHome/DeliciousFastFoods';
import FastFoodMenu from '../Components/MainHome/FastFoodMenu';
import NewsAndBlogs from '../Components/MainHome/NewsAndBlogs/NewsAndBlogs';
// import FoodGallerySlider from '../Components/MainHome/FoodGallerySlider';
import CTA from '../Components/MainHome/CTA';
import TestimonialsSection from '../Components/MainHome/TestimonialsSection';
import YoutubeVideo from '../Components/MainHome/YoutubeVideo';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/Navbar';

const page = () => {
    return (
      <div>
        <Navbar/>
        <PizzaSlider />
        <About />
        <FastFoodCategorySlider />
        <DeliciousFastFoods />
        <FastFoodMenu />
        <NewsAndBlogs />
        {/* <FoodGallerySlider /> */}
        <CTA />
        <TestimonialsSection />
        <YoutubeVideo/>
        <Footer />
      </div>
    );
};

export default page;