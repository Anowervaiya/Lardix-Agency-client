import React from 'react'
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function TestimonialsCard({ image, profession,name,desc }) {
  return (
    <div className="border-t-4 border border-t-blue-700 z-50   p-3 shadow-md text-center">
      <div className=" w-16 h-16 mx-auto">
        <img className="  rounded-full " src={image} alt="" />
      </div>
      <div>
        <h1 className="font-bold mt-4"> {name}</h1>
        <p className=" mb-8">{profession}</p>
      </div>
      <div>
        <FaQuoteLeft  className='text-blue-700 text-3xl my-2'/>
      </div>
      <div className='text-black'>
      {desc}
      </div>
      <div className="flex justify-center items-center mt-6 *:text-[#F3D55B] *:text-xl gap-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
}

export default TestimonialsCard