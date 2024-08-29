// import React from "react";

// const MyTable = ({ headerCol, product }) => {
//   console.log("MY Table Resuable component render");

//   return (
//     <div className="overflow-x-auto max-h-full">
//       <table className="w-full border-collapse">
//         <thead className="sticky top-0 z-2 bg-primary text-white font-extralight">
//           <tr className="text-left border  uppercase font-serif px-2">
//             {headerCol.map((item, index) => (
//               <th key={index} className="px-2">
//                 {item}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {product.map((row, rowIndex) => (
//             <tr key={rowIndex} className="divide-y-2 divide-gray-200">
//               {/* {headerCol.map((index) => (
//                 <td key={index} className="py-2 px-2 text-nowrap">
//                   {row[index]}
//                 </td>
//               ))} */}
//               {headerCol.map((col, colIndex) => (
//                 <td key={colIndex} className="py-2 px-2 text-nowrap">
//                   {col.toLowerCase() === "img" ? (
//                     <img
//                       src={row[col]}
//                       alt={`${row["name"] || "img"}`}
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         objectFit: "cover",
//                       }}
//                     />
//                   ) : (
//                     row[col]
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyTable;

import React, { useState } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const MyTable = ({ headerCol, row, action = true, handleDelete }) => {
  const [sortedData, setSortedData] = useState(row);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const onSort = (col) => {
    let direction = "asc";
    if (sortConfig.key === col && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[col] < b[col]) return direction === "asc" ? -1 : 1;
      if (a[col] > b[col]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
    setSortConfig({ key: col, direction });
  };

  const getSortIndicator = (col) => {
    if (sortConfig.key === col) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return "";
  };

  return (
    <div className="overflow-x-auto max-h-full ">
      <table className="w-full border-collapse">
        <thead className="sticky top-0  bg-primary rounded-md">
          <tr className="text-left  font-serif px-2 text-white ">
            {headerCol.map((item, index) => (
              <th
                key={index}
                className="px-2 py-2 cursor-pointer"
                onClick={() => onSort(item)}
              >
                {item}
                <span className="pl-1 text-green-600 hover:text-green-600">
                  {getSortIndicator(item)}
                </span>
              </th>
            ))}
            <th className="pl-1 px-2 py-2 cursor-pointer">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="divide-y-2 border-b-2 divide-gray-200 hover:bg-gray-200 cursor-pointer "
            >
              {headerCol.map((col, colIndex) => (
                <td key={colIndex} className="py-2 px-2 text-nowrap">
                  {typeof row[col] === "string" &&
                  row[col].startsWith("http") ? (
                    <img src={row[col]} alt="Product" className="max-h-16" />
                  ) : (
                    row[col]
                  )}
                </td>
              ))}
              {action && (
                <td className="py-2 px-2 text-nowrap">
                  <span className="actions flex grid-cols-2 gap-4">
                    <BsFillPencilFill
                      title="Edit"
                      className="edit-btn cursor-pointer text-green-500 hover:text-green-800"
                      onClick={() => editRow(idx)}
                    />
                    {/* <BsFillTrashFill
                      className="delete-btn cursor-pointer text-red-500 hover:text-red-800"
                      onClick={() => deleteRow(idx)}
                    /> */}
                    <FaTrash
                      title="Delete"
                      // onClick={handleDelete}
                      className="delete-btn cursor-pointer text-red-500 hover:text-red-800"
                    />
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const MyTable = ({ headerCol, product, loading, onSort }) => {
//   const [sortConfig, setSortConfig] = useState(null);

//   const handleSort = (index) => {
//     let direction = 'ascending';
//     if (sortConfig && sortConfig.key === index && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key: index, direction });
//     onSort && onSort(index, direction);
//   };

//   const sortedProducts = React.useMemo(() => {
//     if (sortConfig !== null) {
//       return [...product].sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return product;
//   }, [product, sortConfig]);

//   return (
//     <div className="overflow-x-auto max-h-full">
//       {loading ? (
//         <div className="text-center">Loading...</div>
//       ) : (
//         <table className="w-full border-collapse">
//           <thead className="sticky top-0 z-10 bg-yellow-600">
//             <tr className="text-left border uppercase font-serif px-2">
//               {headerCol.map((item, index) => (
//                 <th key={index} className="px-2 cursor-pointer" onClick={() => handleSort(index)}>
//                   {item} {sortConfig && sortConfig.key === index && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {sortedProducts.length === 0 ? (
//               <tr>
//                 <td colSpan={headerCol.length} className="text-center py-2">
//                   No data available
//                 </td>
//               </tr>
//             ) : (
//               sortedProducts.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {headerCol.map((index) => (
//                     <td key={index} className="py-2 px-2 text-nowrap">
//                       {row[index]}
//                     </td>
//                   ))}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// MyTable.propTypes = {
//   headerCol: PropTypes.arrayOf(PropTypes.string).isRequired,
//   product: PropTypes.arrayOf(PropTypes.object).isRequired,
//   loading: PropTypes.bool,
//   onSort: PropTypes.func,
// };

// MyTable.defaultProps = {
//   loading: false,
//   onSort: null,
// };

// export default MyTable;
