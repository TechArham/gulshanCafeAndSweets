"use client";
import { ReactLenis } from "lenis/react";
import Topbar from "../Components/Common/Topbar";
import Navbar from "../Components/Common/Navbar";
import MenuPage from "../Components/RestaurantOrderingSystem/pages/MenuPage";

export default function Menu() {
    return (

        <main className="">
            <Navbar />
            <MenuPage />
          
        </main>

    );
}
