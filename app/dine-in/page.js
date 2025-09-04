'use client'
import React from 'react';
import Navbar from '../Components/Common/Navbar';
import DineInPage from '../Components/RestaurantOrderingSystem/pages/DineInPage';

export default function DineIn() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />
      <DineInPage />
   
    </div>
  );
}