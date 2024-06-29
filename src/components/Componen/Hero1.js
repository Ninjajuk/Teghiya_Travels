import React from 'react'

const Hero1 = () => {
  return (
    <div className="w-full relative  lg:h-[600px] ">
    <img
      src="/tbus1.jpg"
      className="h-full w-full object-cover object-center"
    />

    <div className="w-full absolute inset-y-0 lg:inset-0 flex items-center justify-center ">
      <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-12  p-4 rounded-md bg-white shadow-lg ">
        <div className="col-span-3 px-2">
          <MyInput
            placeholder="From"
            // staticData={cities}
            // value={from}
            // onChange={setFrom}
          />
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <button
            // onClick={handleSwap}
            className="hidden lg:block bg-gray-200 rounded-full p-2"
          >
            <MdOutlineSwapHoriz className="w-8 h-8 text-green-700 hover:text-green-900 font-bold" />
          </button>
          <button
            // onClick={handleSwap}
            className="block lg:hidden bg-green-100 hover:bg-green-400 rounded-full p-2 mb-1 "
          >
            <MdOutlineSwapVert className="w-8 h-8 text-green-500 hover:text-green-900 font-bold" />
          </button>
        </div>
        <div className="col-span-3 px-2  mb-2 lg:mb-0">
          <MyInput
            placeholder="To"
            // staticData={cities}
            // value={from}
            // onChange={setFrom}
          />
        </div>

        {/* <div className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-2 ">
          <MyInput
            placeholder="To"
            // staticData={cities}
            // value={to}
            // onChange={setTo}
          />
        </div> */}

        <div className="col-span-3 w-full lg:w-auto px-2 mb-4 lg:mb-0 lg:mr-2">
          <input
            type="date"
            placeholder="Journey Date"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          />
        </div>
        <div className="col-span-2 px-2 w-full lg:w-auto ">
          <button className="w-full lg:w-auto p-2 bg-primary rounded-md text-white ">
            Search Bus
          </button>
        </div>
        {/* <div className="w-full lg:w-auto">
          <Button
            // onClick={handleClick}
            variant="primary"
            // isLoading={loading}
            size="medium"
            // width="200px"
          >
            Book Fast
          </Button>
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default Hero1