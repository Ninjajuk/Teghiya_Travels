import React, { useContext, useEffect, useState } from 'react'
import {faqArray} from './data'
import Accordion from './Accordion';
import { ThemeContext } from '../../context/context';

const FAQRelatedBooking = () => {
  const { language,theme} =useContext(ThemeContext)

  return (
    <>
      <section className={`w-full lg:px-[10rem] ${theme==='light'?'bg-gray-100':'bg-gray-950'} `}>
        <h1 className="text-xl lg:text-3xl font-bold px-4 py-4 text-primary ">
          {language==='en'?'FAQs related to Tickets Booking':'टिकट बुकिंग से संबंधित पूछे जाने वाले प्रश्न'}
        </h1>

        <Accordion data={faqArray}/>
      </section>
    </>
  );
}

export default FAQRelatedBooking