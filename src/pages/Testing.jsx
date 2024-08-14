import React, { useEffect, useState } from "react";
import MyTable from "../components/common/MyTable";

const Testing = () => {
  console.log("Home component rendered");

  const producturl = "https://dummyjson.com/products";
  const [product, setProduct] = useState([]);
  const [headproduct, setheadproduct] = useState([]);

  const getUniqueProperties = (arr) => {
    const properties = new Set();

    arr.forEach((item) => {
      Object.keys(item).forEach((key) => {
        properties.add(key);
      });
    });

    return [...properties];
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch(producturl);
      const data = await resp.json();
      setProduct(data.products);

      const uniqueProperties = getUniqueProperties(data.products);
      const desiredProperties = [
        "id",
        "title",
        "price",
        "brand",
        "stock",
        "availabilityStatus",
      ];

      const filteredProperties = uniqueProperties.filter((prop) =>
        desiredProperties.includes(prop)
      );
      setheadproduct(filteredProperties);
    };
    fetchProducts();
  }, []);

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate a network request
  };

  const column1Header = ["id"];
  return (
    <>
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full h-48 lg:w-1/2 flex flex-col lg:flex-row ">
          <div className="w-full  lg:w-1/2 bg-red-600 rounded-md shadow-md">
            1
          </div>
          <div className="w-full lg:w-1/2 h-full ">
            <MyTable headerCol={column1Header} product={userData} />
          </div>
        </div>
        <div className="w-full h-96  lg:w-1/2 bg-green-100">
          <MyTable headerCol={headproduct} product={product} />
        </div>
      </div>
      {/* 
      <h1 className="text-2xl mb-4">Reusable Button Component</h1> */}
      {/* <div className="w-full ">
        <div>
          <Button
            onClick={handleClick}
            variant="primary"
            isLoading={loading}
            size="medium"
            width="200px" 
          >
            Click Me
          </Button>
        </div>
        <div className='w-full py-2'>
        <Button
        onClick={() => alert("Secondary button clicked")}
        variant="secondary"
        size="medium"
        width="200px"
      >
        Secondary Action
      </Button>
        </div>

        <div className='w-full my-2'>
        <Button
        onClick={() => alert("Secondary button clicked")}
        variant="success"
        size="medium"
        width="200px"

      >
        Success
      </Button>
        </div>
      </div> */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-6 gap-4 ">
        <div className="p-4  min-h-48 bg-[#FFFFFF] rounded-md shadow-md">
          <h1 className="text-[#005B96] font-semibold text-lg">
            Classic and Trustworthy 1
          </h1>
          <h1 className="text-[#F9A825] font-semibold text-lg">
            Classic and Trustworthy 2
          </h1>
          <h1 className="text-[#C5CAE9] font-semibold text-lg">Accent Color</h1>
          <h1 className="text-[#2E3B4E] font-semibold text-lg">
            Modern and Sleek 1
          </h1>
          <h1 className="text-[#00BFA5] font-semibold text-lg">
            Modern and Sleek 2
          </h1>
          <h1 className="text-[#FF4081] font-semibold text-lg">
            Modern and Sleek Accent
          </h1>
          <h1 className="text-[#D84315] font-semibold text-lg">
            Warm and Inviting 1
          </h1>
          <h1 className="text-[#FFC107] font-semibold text-lg">
            Warm and Inviting 2
          </h1>

          <h1 className="text-[#3949AB] font-semibold text-lg">
            Cool and Calm 1
          </h1>
          <h1 className="text-[#00ACC1] font-semibold text-lg">
            Cool and Calm 2
          </h1>
          <h1 className="text-[#8E24AA] font-semibold text-lg">
            Cool and Calm Accent
          </h1>
          <h1 className="text-[#C2185B] font-semibold text-lg">
            Energetic and Vibrant 1
          </h1>
          <h1 className="text-[#7B1FA2] font-semibold text-lg">
            Energetic and Vibrant 2
          </h1>
          <h1 className="text-[#FFEB3B] font-semibold text-lg">
            Energetic and Vibrant Accent
          </h1>
          <h1 className="text-[#388E3C] font-semibold text-lg">
            Nature-Inspired 1
          </h1>
          <h1 className="text-[#8BC34A] font-semibold text-lg">
            Nature-Inspired 2
          </h1>
          <h1 className="text-[#FF9800] font-semibold text-lg">
            Nature-Inspired Accent
          </h1>
          <h1 className="text-[#424242] font-semibold text-lg">
            Elegant and Sophisticated 1
          </h1>
          <h1 className="text-[#FFD600] font-semibold text-lg">
            Elegant and Sophisticated 2
          </h1>
          <h1 className="text-[#673AB7] font-semibold text-lg">
            Elegant and Sophisticated Accent
          </h1>
          <h1 className="text-[#536DFE] font-semibold text-lg">
            Fun and Playful 1
          </h1>
          <h1 className="text-[#8BC34A] font-semibold text-lg">
            Fun and Playful 2
          </h1>
          <h1 className="text-[#FFC107] font-semibold text-lg">
            Fun and Playful Accent
          </h1>
        </div>

        <div className=" min-h-48 bg-[#00ACC1] rounded-md shadow-md">
          <h1>Samsu</h1>
          <h1 className="text-[#2E3B4E] font-semibold text-lg">
            Modern and Sleek 1
          </h1>
          <h1 className="text-[#F9A825] font-semibold text-lg">
            Modern and Sleek 2
          </h1>
          <h1 className="text-[#C5CAE9] font-semibold text-lg">Accent Color</h1>
        </div>

        <div className="  min-h-48 bg-[#3949AB] rounded-md shadow-md">
          <h1>Samsu</h1>
          <h1 className="text-[#D84315] font-semibold text-lg">
            Warm and Inviting 1
          </h1>
          <h1 className="text-[#FFC107] font-semibold text-lg">
            Warm and Inviting 2
          </h1>
        </div>

        <div className="  min-h-48 bg-[#8E24AA] rounded-md shadow-md">
          <h1>Samsu</h1>
          <h1 className="text-[#3949AB] font-semibold text-lg">
            Cool and Calm 1
          </h1>
          <h1 className="text-[#00ACC1] font-semibold text-lg">
            Cool and Calm 2
          </h1>
        </div>

        <div className="  min-h-48 bg-[#FCE4EC] rounded-md shadow-md">
          <h1>Samsu</h1>
          <h1 className="text-[#C2185B] font-semibold text-lg">
            Energetic and Vibrant 1
          </h1>
          <h1 className="text-[#7B1FA2] font-semibold text-lg">
            Energetic and Vibrant 2
          </h1>
          <h1 className="text-[#FFEB3B] font-semibold text-lg">
            Energetic and Vibrant Accent
          </h1>
        </div>

        <div className="  min-h-48 bg-[#F1F8E9] rounded-md shadow-md">
          <h1>Samsu</h1>
          <h1 className="text-[#388E3C] font-semibold text-lg">
            Nature-Inspired 1
          </h1>
          <h1 className="text-[#8BC34A] font-semibold text-lg">
            Nature-Inspired 2
          </h1>
          <h1 className="text-[#FF9800] font-semibold text-lg">
            Nature-Inspired Accent
          </h1>
        </div>

        <div className="  min-h-48 bg-[#FAFAFA] rounded-md shadow-md">
          <h1>Samsu</h1>
          <h1 className="text-[#424242] font-semibold text-lg">
            Elegant and Sophisticated 1
          </h1>
          <h1 className="text-[#FFD600] font-semibold text-lg">
            Elegant and Sophisticated 2
          </h1>
          <h1 className="text-[#673AB7] font-semibold text-lg">
            Elegant and Sophisticated Accent
          </h1>
        </div>

        <div className="  min-h-48 bg-[#000000] rounded-md shadow-md">
          <h1>Samsu</h1>
          <h1 className="text-[#536DFE] font-semibold text-lg">
            Fun and Playful 1
          </h1>
          <h1 className="text-[#8BC34A] font-semibold text-lg">
            Fun and Playful 2
          </h1>
          <h1 className="text-[#FFC107] font-semibold text-lg">
            Fun and Playful Accent
          </h1>
        </div>
      </div>
      {/* <h1 className="text-[#212121]">Text Color Dark Gray</h1>
      <h1 className="text-[#37474F]">Text Color Charcoal</h1>
      <h1 className="text-[#424242]">Text Color  Gray</h1>
      <h1 className="text-[#263238]">Text Color Dark Gray</h1>
      <h1 className="text-[#455A64]">Text Color Slate Gray</h1>
      <h1 className="text-[#212121]">Text Color Dark Gray</h1> */}

      {/* <div className="flex gap-2 truncate">
      <button className="p-2    bg-[#800000] hover:bg-[#005ec2] rounded-md shadow-md text-white">Book Now</button>
      <button className="p-2  text-[#212121]  bg-[#6C757D] hover:bg-[#5A6268] rounded-md shadow-md">Edit</button>
      <button className="p-2  text-[#212121]  bg-[#28A745] hover:bg-[#218838] rounded-md shadow-md">Confirm Booking</button>
      <button className="p-2  text-[#212121]  bg-[#007BFF] rounded-md shadow-md">Cancel Booking</button>
      <button className="p-2  text-[#212121]  bg-[#007BFF] rounded-md shadow-md">Options</button>
      <button className="p-2  text-[#212121]  bg-[#007BFF] rounded-md shadow-md">Book Now</button>
    </div> */}
    </>
  );
};

export default Testing;
