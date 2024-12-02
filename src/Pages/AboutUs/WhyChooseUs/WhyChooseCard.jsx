import React from 'react'

import { IoIosPeople } from 'react-icons/io';
function WhyChooseCard({Icon,Heading,Description}) {
  return (
    <div className="group relative inline-block overflow-hidden   px-4 py-3  font-medium text-slate-800 focus:outline-none focus:ring  active:text-white transition duration-700 shadow-service bg-white hover:bg-slate-200 ">
      {/* <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-600 transition-color duration-500 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-600 transition-color duration-500 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-600 transition-color duration-500 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-600 transition-color duration-500 group-hover:h-full"></span> */}
      {/* card documentation  */}
      <div>
        <div className="w-full py-4    ">
          <div className="bg-blue-800 w-[80px] h-[80px] flex justify-center items-center text-white text-5xl rounded-full mx-auto">
            {Icon}{' '}
          </div>
          <div className='text-center space-y-2'>
            <h1 className="text-xl font-bold mt-4">{Heading}</h1>
            <p className='text-gray-600  leading-6'>{Description}</p>
          </div>
        </div>
      </div>
    </div>
    // <div className='p-4 text-center space-y-2'>
    //   {/* <img src={Icon} alt="" /> */}

    //   <div className='bg-blue-800 w-[80px] h-[80px] flex justify-center items-center text-white text-5xl rounded-full mx-auto'>
    //     {Icon}
    //   </div>
    //   <h1 className='text-xl font-bold'>{Heading}</h1>
    //   <p>{Description}</p>
    // </div>
  );
}

export default WhyChooseCard