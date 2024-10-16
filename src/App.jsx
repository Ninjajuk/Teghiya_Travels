import React, { useState } from "react";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusListing from "./pages/BusListing";

import CancellationPage from "./pages/Cancellation";
import MyBookingPage from "./pages/MyBooking";
import ContactUsPage from "./pages/ContactUs";
import MyProfile from "./pages/MyProfile";
import CheckoutPage from "./services/checkout/Checkout";
import ErrorPage from "./pages/ErrorPage";

import BusTicketSuccess from "./pages/BusTicketSuccess";
import LoginForm from "./services/auth/LoginForm";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [logmodal, setlogmodal] = useState(false);

  const handleLoginModal = () => {
    setlogmodal(!logmodal);
  };
  const closeLoginModal = () => {
    setlogmodal(false);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage handleLoginModal={handleLoginModal} />}
          />
          <Route path="/search" element={<BusListing />} />
          <Route
            path="/cancellation"
            element={<CancellationPage handleLoginModal={handleLoginModal} />}
          />
          <Route path="/mybooking" element={<MyBookingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ticket-success" element={<BusTicketSuccess />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route
            path="/contact-us"
            element={<ContactUsPage handleLoginModal={handleLoginModal} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {logmodal && <LoginForm closeLoginModal={closeLoginModal} />}
    </>
  );
}

export default App;
