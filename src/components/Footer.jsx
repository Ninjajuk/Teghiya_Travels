import React from 'react'
import { MdOutlineMailOutline,MdPhone } from "react-icons/md";

const Footer = () => {
  
  return (
    <footer aria-labelledby="footer-heading" className="bg-white py-4">

    <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-8">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
      <div className="">


        <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
          <div className="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
            <div className="mx-auto max-w-sm">
              <h3 className="font-semibold text-gray-900">Sign up for our newsletter</h3>
              <p className="mt-2 text-sm text-gray-500">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className="mt-4 sm:mt-6 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:primary"
                />
                <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="relative mt-6 flex items-center py-12 px-6 sm:py-16 sm:px-10 lg:mt-0">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {/* <img
                src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                alt=""
                className="h-full w-full object-cover object-center saturate-0 filter"
              /> */}
              <div className="absolute inset-0 bg-gray-200 " />
            </div>
            <div className="relative mx-auto max-w-sm text-center">
              <h3 className="text-2xl font-bold tracking-tight text-primary">Visit our Office</h3>
              <ul className='text-center'>
                        <li className="mb-8">
                          <span>
                            Bentuk Village Near Baptism Church
                            <br /> Arunachal Pradesh 
                          </span>
                        </li>
                        <li className="flex items-center ">
                            <span><MdPhone/></span>
                          <span className='mx-2'>7629826114</span>
                        </li>
                        <li className="flex items-center">
                            <span><MdOutlineMailOutline/></span>
                          <span className='mx-2 '>
                            <a href='mailto:yingkiongstore@gmail.com'> yingkiongtravels@gmail.com</a>
                           
                          </span>
                        </li>
                      </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">&copy; 2024 All Rights Reserved Teghiya Travels</p>
        </div>

        <div className="mt-4 flex items-center justify-center md:mt-0">
          <p className="text-sm text-gray-500 font-bold">Designed and Coded by <span className='text-primary font-bold text-md'>Samsuddin Ansari</span></p>

        </div>
      </div>
    </div>
    

  </footer>
  )
}

export default Footer