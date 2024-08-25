import React, { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/common/Button";
import MyInput from "../components/common/MyInput";
import { MdOutlineSwapHoriz, MdOutlineSwapVert } from "react-icons/md";
import Testing from "./Testing";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WeddingBookingSection from "../components/WeddingBooking";
import SpecialBookingSection from "../components/SpecialBookingSection";
import FAQRelatedBooking from "../components/FAQ/FAQRelatedBooking";
import SpecialBookingPandalsCatering from "../components/SpecialBookingPandalsCatering";
import LoginForm from "../services/auth/LoginForm";
import ScrollAppear from "../components/Componen/SlideleftRight";
import HeaderScrollingInfinite from "../components/HeaderTop/HeaderScrollingInfinite";
import BannerSlider from "../components/SliderCarousel/BannerSlider";

const HomePage = () => {
  console.log("Home component rendered");
  const [logmodal, setlogmodal] = useState(false);

  const handleLoginModal = () => {
    setlogmodal(!logmodal);
  };
  const closeLoginModal = () => {
    setlogmodal(false);
  };

  return (
    <>
      <main className="h-auto flex flex-col">
        <HeaderScrollingInfinite />
        <Navbar handleLoginModal={handleLoginModal} />

        <Hero />
        <SpecialBookingSection />
        <BannerSlider />
        <WeddingBookingSection />

        {/* <Testing /> */}
        <SpecialBookingPandalsCatering />
        {/* <ScrollAppear /> */}
        <FAQRelatedBooking />
        <Footer />
        {logmodal && <LoginForm closeLoginModal={closeLoginModal} />}
      </main>
    </>
  );
};

export default HomePage;
