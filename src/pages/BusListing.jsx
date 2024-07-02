import React from 'react'
import BusSearchResultPage from '../services/buslisting/BusSearchResultPage'
import { useLocation } from 'react-router-dom';

const BusListing = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log('Bus listing page query from the seach ', query)
  return (
    <>
    <BusSearchResultPage/>
    </>
  )
}

export default BusListing