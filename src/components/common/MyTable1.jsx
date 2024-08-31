import React from "react";

const MyTable1 = ({ headerCol, product }) => {
  console.log("MY Table Resuable component render");

  return (
    <div className="overflow-x-auto max-h-full">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 z-2 bg-primary text-white font-extralight">
          <tr className="text-left border  uppercase font-serif px-2">
            {headerCol.map((item, index) => (
              <th key={index} className="px-2">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {product.map((row, rowIndex) => (
            <tr key={rowIndex} className="divide-y-2 divide-gray-200">
              {/* {headerCol.map((index) => (
                <td key={index} className="py-2 px-2 text-nowrap">
                  {row[index]}
                </td>
              ))} */}
              {headerCol.map((col, colIndex) => (
                <td key={colIndex} className="py-2 px-2 text-nowrap">
                  {col.toLowerCase() === "img" ? (
                    <img
                      src={row[col]}
                      alt={`${row["name"] || "img"}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    row[col]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable1;
