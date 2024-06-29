
import React, { useState } from 'react';
import HomePage from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusListing from './pages/BusListing';
import { ThemeContext } from './context/context';
import CancellationPage from './pages/Cancellation';
import MyBookingPage from './pages/MyBooking';
import ContactUsPage from './pages/ContactUs';
import MyProfile from './pages/MyProfile';


function App() {
  const [theme, setTheme] = useState('light');

      function handleTheme(){
        setTheme(theme === 'light' ? 'bg-gray-900 text-white' : 'light');
      //   console.log('theme chnaged',theme)
      }
  return (
    <>
      <ThemeContext.Provider value={{ theme }} handleTheme={handleTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<BusListing />} />
            <Route path="/cancellation" element={<CancellationPage />} />
            <Route path="/mybooking" element={<MyBookingPage />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App
