
import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar';
import { ThemeContext } from '../context/context';

const CancellationPage = () => {

    const [pnr, setPnr] = useState("");
    const [error, setError] = useState("");
const{language}=useContext(ThemeContext)
    const handleChange = (e) => {
      setPnr(e.target.value);
      setError('')
    };
    const handleCancelClick = () => {
      if (pnr ==='samsuddin') {
        setError('Enter a valid PNR No.');
      } else {

        setError(''); // Clear error if the PNR is valid
      }
      console.log(pnr)
    };
  return (
    <>
    <Navbar/>
      <section className="  bg-purple-900 flex items-center justify-center" style={{height:'calc(100vh - 4rem)'}}>
        <div className="max-h-[24rem] w-full max-w-md  bg-white p-4 rounded-md shadow-md">
          <h1 className="text-primary font-semibold text-lg  py-4 leading-5">
            {language==='en'?'Cancel Your Ticket':'अपना टिकट रद्द करें'}
          </h1>
          <p className="text-gray-500">
            {language==='en'?'Enter your reservation code (PNR) - (TicketNo) in the form below.For eg: 123456-87654':'नीचे दिए गए फॉर्म में अपना आरक्षण कोड (पीएनआर) - (टिकट संख्या) दर्ज करें। उदाहरण के लिए 123456-87654'}
          </p>
          <div className="py-4 flex flex-col">
            <div className="w-full">
              <input
                type="text"
                placeholder={language==='en'?"Enter PNR ":'पी.एन.आर. दर्ज करें'}
                value={pnr}
                onChange={handleChange}
                className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
              />
            </div>
            <div className="w-full py-2 mt-2">
              <button
                disabled={pnr.length <= 5}
                onClick={handleCancelClick}
                className={`w-full py-2 text-white rounded-md ${pnr.length <= 5?'bg-gray-300 text-gray-900 cursor-not-allowed ':'bg-red-500 hover:bg-red-900 cursor-pointer'}  `}
              >
                {language==='en'?'Cancel Ticket':'टिकट रद्द करें'}
              </button>
            </div>
          </div>
          {error&&<p className='text-red-800 text-sm'>{error}</p>}
        </div>

        
      </section>
    </>
  );
}

export default CancellationPage;