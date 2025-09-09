import React from 'react';
import PizzaSlider from '../Components/MainHome/PizzaSlider';
import About from '../Components/MainHome/About';
import FastFoodCategorySlider from '../Components/MainHome/FastFoodCategorySlider';
import DeliciousFastFoods from '../Components/MainHome/DeliciousFastFoods';
import FastFoodMenu from '../Components/MainHome/FastFoodMenu';
import NewsAndBlogs from '../Components/MainHome/NewsAndBlogs/NewsAndBlogs';

const page = () => {
    return (
      <div>
        <PizzaSlider />
        <About/>
        <FastFoodCategorySlider />
        <DeliciousFastFoods />
        <FastFoodMenu />
        <NewsAndBlogs/>
        {/* <FoodCategorySlider/> */}
      </div>
    );
};

export default page;