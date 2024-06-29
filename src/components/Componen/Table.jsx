import React from 'react'

const MyTableTest1 = ({headerCol,userData}) => {
    console.log('Table component render',userData,headerCol)
 
    return (
    <div className="overflow-x-auto max-h-full">
      <table className="w-full border-collapse">
        <thead className='sticky top-0 z-10 bg-yellow-600'>
          <tr className='text-left border uppercase font-serif px-2'>
            {headerCol.map((item, index) => (
              <th key={index} className=''>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id} className='border-b'>
              <td className='py-2 text-nowrap'>{item.name}</td>
              <td className='text-nowrap'>{item.email}</td>
              <td className='text-nowrap pr-2'>{item.phone}</td>
              <td className='text-nowrap'>{item.address}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTableTest1