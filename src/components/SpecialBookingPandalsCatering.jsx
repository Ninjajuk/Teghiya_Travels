import React, { useContext } from 'react'
import { ThemeContext } from '../context/context';

const SpecialBookingPandalsCatering = () => {
  const { language } =useContext(ThemeContext)
    const specailbook=[
        {id:1,img:'/tbus1.jpg',title:`${language==='en'?'Hi there':'नमस्ते'}`,description:'',btn:`${language==='en'?'Book Vehicle':'वाहन बुक करें'}`},
        {id:2,img:'/roadhill.jpg',title:`${language==='en'?'Catering':'खानपान'}`,description:'',btn:`${language==='en'?'Book Catering':'खानपान बुक करें'}`},
        {id:3,img:'landing.jpg',title:`${language==='en'?'Pandals':'पंडाल'}`,description:'',btn:`${language==='en'?'Book Pandals':'पंडाल बुक करें'}`},
        // {id:1,img:'',title:'Hi there',description:''}
    ]
  return (
    <div className="bg-purple-800 py-16 lg:px-[10rem]">
      <div className="container mx-auto  flex flex-col lg:flex-row items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {specailbook.map((item) => (
            <div key={item.id} className="flex flex-col justify-between  bg-white rounded-md shadow-lg">
              <div className="h-full max-h-64 relative">
                <img src={item.img} className=" w-full h-full object-cover object-center rounded-md" />
                <div className='absolute top-0 right-0 w-full max-w-12 h-full max-h-8 bg-white rounded-md m-2 flex items-center justify-center text-primary font-semibold'>{language==='en'?'New':'नया'}</div>
                {/* <h1 className='absolute top-0 right-0'> hey</h1> */}
              </div>
              <div className=" flex- items-center justify-center my-2 rounded-md mx-2">
                <h1 className='px-4 py-2 font-bold text-lg '>{item.title}</h1>
                <button className=" w-full p-2 bg-primary rounded-md   text-white hover:bg-blue-600">{item.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialBookingPandalsCatering;