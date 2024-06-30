
// import React, { useState } from 'react';

// const TravellersDetails = () => {
//   const [traveller, setTraveller] = useState({
//     seatNo: '',
//     name: '',
//     age: '',
//     gender: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTraveller((prevTraveller) => ({
//       ...prevTraveller,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4">Travellers Details</h1>
//       <div className="flex space-x-4">
//         <div className=" flex flex-col flex-1">
//           <label htmlFor="seatNo" className="mb-1 font-medium">Seat No</label>
//           <input
//             type="text"
//             id="seatNo"
//             name="seatNo"
//             value={traveller.seatNo}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
//           />
//         </div>
//         <div className="flex flex-col flex-1">
//           <label htmlFor="name" className="mb-1 font-medium">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={traveller.name}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
//           />
//         </div>
//         <div className="flex flex-col flex-1">
//           <label htmlFor="age" className="mb-1 font-medium">Age</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={traveller.age}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
//           />
//         </div>
//         <div className="flex flex-col flex-1">
//           <label htmlFor="gender" className="mb-1 font-medium">Gender</label>
//           <select
//             id="gender"
//             name="gender"
//             value={traveller.gender}
//             onChange={handleChange}
//             className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TravellersDetails;

import React, { useState } from 'react';

const TravellersDetails = () => {
  const [travellers, setTravellers] = useState([
    { seatNo: '', name: '', age: '', gender: '' },
    { seatNo: '', name: '', age: '', gender: '' },
    { seatNo: '', name: '', age: '', gender: '' },
    { seatNo: '', name: '', age: '', gender: '' },
    { seatNo: '', name: '', age: '', gender: '' },
    { seatNo: '', name: '', age: '', gender: '' },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setTravellers((prevTravellers) => {
      const newTravellers = [...prevTravellers];
      newTravellers[index][name] = value;
      return newTravellers;
    });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-primary">Travellers Details</h1>
      {travellers.map((traveller, index) => (
        <div key={index} className="grid grid-cols-12 gap-1 ">
          {/* Seat No (2 columns) */}
          <div className="col-span-2 mb-2">
            {/* <label htmlFor={`seatNo-${index}`} className="mb-1 font-medium truncate text-sm">Seat</label> */}
            <input
              type="text"
              id={`seatNo-${index}`}
              name="seatNo"
              placeholder='Seat'
              value={traveller.seatNo}
              onChange={(e) => handleChange(index, e)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            />
          </div>

          {/* Name (4 columns) */}
          <div className="col-span-4 mb-2">
            {/* <label htmlFor={`name-${index}`} className="mb-1 font-medium text-sm pl-2">Name</label> */}
            <input
              type="text"
              id={`name-${index}`}
              name="name"
              placeholder='Name'
              value={traveller.name}
              onChange={(e) => handleChange(index, e)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            />
          </div>

          {/* Age (2 columns) */}
          <div className="col-span-2 mb-2">
            {/* <label htmlFor={`age-${index}`} className="mb-1 font-medium">Age</label> */}
            <input
              type="number"
              id={`age-${index}`}
              name="age"
              placeholder='Age'
              value={traveller.age}
              onChange={(e) => handleChange(index, e)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            />
          </div>

          {/* Gender (4 columns) */}
          <div className="col-span-4">
            {/* <label htmlFor={`gender-${index}`} className="mb-1 font-medium">Gender</label> */}
            <select
              id={`gender-${index}`}
              name="gender"
              value={traveller.gender}
              onChange={(e) => handleChange(index, e)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      ))}
    </>
  );
};

export default TravellersDetails;


