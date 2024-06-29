import React from 'react'
import Navbar from '../components/Navbar';

const ContactUsPage = () => {
  return (
    <>
    <Navbar/>
        <h1 className='text-red-900 font-bold text-3xl text-center py-8'>Contact Us Page</h1>
        <p className='py-12 text-center'>Call us <span className='text-primary font-extrabold'>+91-7542067763</span></p>
    </>
  )
}

export default ContactUsPage;