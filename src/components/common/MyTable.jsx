import React from 'react'

const MyTable= ({headerCol,product}) => {
    console.log('MY Table Resuable component render')
 
    return (
      <div className="overflow-x-auto max-h-full">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-yellow-600">
            <tr className="text-left border uppercase font-serif px-2">
              {headerCol.map((item, index) => (
                <th key={index} className="px-2">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headerCol.map((index) => (
                  <td key={index} className="py-2 px-2 text-nowrap">
                    {row[index]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default MyTable



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