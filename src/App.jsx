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

import DefaultLayout from "./services/admin/layout/DefaultLayout";
import AdminProfile from "./services/admin/profile/Profile";
import WebsiteMain from "./services/admin/WebsiteMain";
import VehicleManagementDashboard from "./services/admin/VehicleManagement";
import Customer from "./services/admin/Customer";
import Testing from "./pages/Testing";

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
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/testing" element={<Testing />} /> */}
          <Route path="/search" element={<BusListing />} />
          <Route path="/cancellation" element={<CancellationPage />} />
          <Route path="/mybooking" element={<MyBookingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/dashboard" element={<DefaultLayout />} />
          <Route
            path="/dashboard/corporate-website"
            element={<WebsiteMain />}
          />
          <Route path="/admin/customers" element={<Customer />} />
          <Route
            path="/dashboard/vehicle-management"
            element={<VehicleManagementDashboard />}
          />
          <Route path="/dashboard/adminprofile" element={<AdminProfile />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
