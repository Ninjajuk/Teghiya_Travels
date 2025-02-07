import React, { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/common/Button";
import MyInput from "../components/common/MyInput";
import { MdOutlineSwapHoriz, MdOutlineSwapVert } from "react-icons/md";

import Footer from "../components/Footer";
import Hero from "../components/Hero";

import SpecialBookingSection from "../components/SpecialBookingSection";
import FAQRelatedBooking from "../components/FAQ/FAQRelatedBooking";

import LoginForm from "../services/auth/LoginForm";

import HeaderScrollingInfinite from "../components/HeaderTop/HeaderScrollingInfinite";
import BannerSlider from "../components/SliderCarousel/BannerSlider";
import WeddingVehicleBooking from "../components/WeddingVehicleBooking";
import Tooltip from "../components/common/Tooltip";
import HorizontalScrollInfinite from "../components/HorizontalScrollInfinite";
import Testimonial from "../components/Testimonial";


const HomePage = ({ handleLoginModal }) => {
  console.log("Home component rendered");
  // const [logmodal, setlogmodal] = useState(false);

  // const handleLoginModal = () => {
  //   setlogmodal(!logmodal);
  // };
  // const closeLoginModal = () => {
  //   setlogmodal(false);
  // };
console.log('hero')
  return (
    <>
      <main className="h-auto flex flex-col">
        <HeaderScrollingInfinite />
        <Navbar handleLoginModal={handleLoginModal} />

        <Hero />
        <BannerSlider />
        <WeddingVehicleBooking/>

        <SpecialBookingSection />
        <Testimonial/>


        <FAQRelatedBooking />
        {/* <Tooltip/> */}
        {/* <HorizontalScrollInfinite/> */}

        <Footer />
        {/* {logmodal && <LoginForm closeLoginModal={closeLoginModal} />} */}
      </main>
    </>
  );
};

export default HomePage;
