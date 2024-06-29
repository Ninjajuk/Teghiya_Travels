import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/common/Button';
import MyInput from '../components/common/MyInput';
import { MdOutlineSwapHoriz, MdOutlineSwapVert } from 'react-icons/md';
import Testing from './Testing';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import WeddingBookingSection from '../components/WeddingBooking';
import SpecialBookingSection from '../components/SpecialBookingSection';
import FAQRelatedBooking from '../components/FAQ/FAQRelatedBooking';
import SpecialBookingPandalsCatering from '../components/SpecialBookingPandalsCatering';




const HomePage = () => {
  console.log("Home component rendered");



  return (
    <>

      <main className="h-auto flex flex-col">
              <Navbar />

      <Hero/>
      <WeddingBookingSection/>
      <SpecialBookingSection/>
        {/* <Testing /> */}
        <SpecialBookingPandalsCatering/>
        <FAQRelatedBooking/>



        <Footer/>
      </main>

    </>
  );
};

export default HomePage;
