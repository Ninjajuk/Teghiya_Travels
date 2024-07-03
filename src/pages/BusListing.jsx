import React from 'react'
import BusSearchResultPage from '../services/buslisting/BusSearchResultPage'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BusListing = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log('Bus listing page query from the seach ', query)
  return (
    <>
    <Navbar/>

    <BusSearchResultPage/>
    </>
  )
}

export default BusListing