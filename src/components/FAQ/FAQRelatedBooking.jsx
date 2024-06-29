import React from 'react'
import {faqArray} from './data'
import Accordion from './Accordion';

const FAQRelatedBooking = () => {
  return (
    <>
      <section className="w-full lg:px-[10rem] ">
        <h1 className="text-xl lg:text-3xl font-bold px-4 py-4 text-primary ">
          FAQs related to Tickets Booking
        </h1>
        <Accordion data={faqArray}/>
      </section>
    </>
  );
}

export default FAQRelatedBooking