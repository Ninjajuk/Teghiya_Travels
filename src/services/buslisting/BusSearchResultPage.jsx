
import React, { useEffect, useState } from 'react'
import {busList} from './busdetaildata.js'
import { FaBusAlt, FaClock, FaFlagCheckered, FaMapMarkerAlt, FaPlay } from 'react-icons/fa';
import { MdOutlineFlag, MdOutlineTripOrigin } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import MyInput from '../../components/common/MyInput.jsx';


const BusSearchResultPage = () => {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const fromCity = query.get('fromCity');
  const toCity = query.get('toCity');
  // const departDate = query.get('departDate');
  // const returnDate = query.get('returnDate');
  // const mode = query.get('mode');

  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleShowSeat = (id) => {
    setSelectedItemId(selectedItemId === id ? null : id);
    console.log(`clicked on ${id}`);
  };
  const [busListings, setBusListings] = useState([]);

  useEffect(() => {
    // Filter static bus listings based on query parameters
    const filteredBusListings = busList.filter(bus => {
      return (
        bus.fromCity.toLowerCase() === fromCity.toLowerCase() &&
        bus.toCity.toLowerCase() === toCity.toLowerCase() 
      );
    });
    setBusListings(filteredBusListings);
  }, [fromCity, toCity]);
  console.log('busListings',busListings,fromCity)
  return (
    <>
      <main className="w-full bg-gray-100  ">
        <div className=" w-full lg:px-[10rem]">
          {/* <h1 className="py-4 text-lg lg:text-5xl font-extrabold text-primary">
            Bus Search Result Page
          </h1> */}
          <div className="w-full flex  items-center lg:h-24 ">
            <div className="w-full grid grid-cols-4 gap-2 items-center bg-white p-4 rounded-md shadow-lg my-2">
              <div className='span-2'><input type='text' placeholder={fromCity} className='w-full outline-none border-b-2 '/></div>
              <div className='span-2'><input type='text' placeholder={toCity} className=' w-full outline-none border-b-2 '/></div>
              <div className='span-2'><input type='date'   className=' w-full outline-none border-b-2 '/></div>
              <div className='flex justify-end'>
            <button className='max-w-48 ring-1 p-2 rounded-md ring-primary'>Modify</button>
            </div>
            </div>
    
            
           
          </div>

          <div className="h-full min-h-24 w-full grid grid-cols-1 gap-2  ">
            {busListings.length > 0 ? (
              busListings.map((item, index) => (
                <>
                  <div
                    key={item.id}
                    className="flex flex-col p-4 rounded-md shadow-md bg-white"
                  >
                    <div className="flex flex-col lg:flex-row ">
                      <div className="lg:w-1/2 ">
                        <h1 className="px-2 py-2 text-gray-600 font-semibold text-lg">
                          <span>{item.startTime}</span>
                          <span className="ml-2">{item.fromCity}</span>
                        </h1>
                        <p className="pb-2 px-2 flex justify-between lg:flex-row lg:justify-normal">
                          <span className="text-gray-500 text-sm flex items-center">
                            <span>Pick Up</span>
                            <span>
                              <FaMapMarkerAlt className="ml-2 w-4 h-4 text-sky-700" />
                            </span>
                          </span>
                          <span className="ml-2 text-sky-700">
                            {item.startingFrom}
                          </span>
                        </p>
                        <p className="px-2 pb-2 text-gray-400 text-sm">
                          {item.operator}
                        </p>

                        {/* <ul className="hidden lg:flex space-x-1">
                    {item.amenities.map((amenties,index) => (
                      <li key={index} className="flex px-2">{amenties.icon}</li>
                    ))}
                  </ul> */}
                      </div>
                      <div className="lg:w-1/2 ">
                        <div className="flex items-center justify-center py-4">
                          <div className="flex-grow border-t-2 border-gray-300"></div>
                          {/* <span className="mx-4 text-gray-500">CONTACT DETAILS</span> */}
                          <p className="mx-1 py-2 text-center  border-gray-300 flex items-center justify-center">
                            <FaClock className="mr-2 w-4 h-4 text-sky-700" />
                            13h 30m
                          </p>
                          <div className="flex-grow border-t-2 border-gray-300"></div>
                        </div>
                        {/* <p className="px-2 py-2 text-center border-x-2 border-gray-300 flex items-center justify-center">
                        <FaClock className="mr-2 w-4 h-4 text-sky-700" />
                        13h 30m
                      </p> */}
                        {/* <p className="px-2 pb-2 text-center text-sm text-gray-400">
                        80% on time
                      </p> */}
                      </div>

                      <div className="lg:w-1/2">
                        <h1 className="px-2 py-2 text-gray-600 font-semibold text-lg">
                          <span>{item.endTime}</span>
                          <span className="ml-2">{item.reachDate}</span>
                        </h1>
                        <p className="px-2 pb-2 flex justify-between lg:flex-row lg:justify-normal">
                          <span className="text-gray-500 text-sm flex items-center">
                            <span>Drop Off</span>
                            <span>
                              <FaMapMarkerAlt className="ml-2 w-4 h-4 text-sky-700" />
                            </span>
                          </span>
                          <span className="ml-2 text-sky-700">
                            {item.toCity}
                          </span>
                        </p>
                        <p className="px-2 flex items-center  justify-between lg:flex-row lg:justify-normal">
                          <span>
                            <FaBusAlt className="w-4 h-4 text-sky-700" />
                          </span>
                          <span className="ml-2">{item.busNumber}</span>
                        </p>
                        <div className="border-b-2 lg:border-none border-dashed pb-2"></div>
                      </div>
                      <div className="lg:w-1/2  flex flex-col lg:justify-end">
                        <h1 className="flex justify-between lg:text-end px-2 py-2">
                          <span className="text-gray-400 ">Price</span>

                          <span>
                            <span className="text-sm line-through text-gray-400">
                              ₹{item.cuttedPrice}
                            </span>
                            <span className="font-bold text-lg text-green-800 ml-2">
                              {" "}
                              ₹{item.price}{" "}
                            </span>
                          </span>
                        </h1>
                        {/* <p className="flex justify-between lg:text-end px-2 pb-2">
                          <span className="text-gray-400 ">You Save</span>
                          <span className="font-semibold text-md pl-2 text-green-800">
                            {" "}
                            ₹{item.discountPrice}
                          </span>
                        </p> */}
                        <p className="flex justify-between lg:text-end px-2 pb-2">
                          <span className="text-gray-400">Seats Left</span>
                          <span className="pl-2">{item.seatsAvailable}</span>
                        </p>
                        <div className="w-full flex  m-2">
                          <button
                            onClick={() => handleShowSeat(item.id)}
                            className="w-full p-2 text-white  bg-sky-800 rounded-md shadow-md"
                          >
                            Select Seat
                          </button>
                        </div>
                      </div>
                    </div>
                    {selectedItemId === item.id && (
                      <div className="flex-none  bg-gray-200">
                        {/* <BusBookingHome /> */}
                        Seat Legend
                      </div>
                    )}
                  </div>
                </>
              ))
            ) : (
              <>
                <h1 className="text-primary">Not found bus</h1>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default BusSearchResultPage