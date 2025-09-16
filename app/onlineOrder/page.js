"use client";
import React, { useEffect } from "react";
import { useRestaurantStore } from "../Components/RestaurantOrderingSystem/store/restaurantStore";

const page = () => {
  const { setOrderSource } = useRestaurantStore();

  useEffect(() => {
    setOrderSource("catering");
  }, [setOrderSource]);

  return (
    <div>
      <h1> Online order</h1>
    </div>
  );
};

export default page;
