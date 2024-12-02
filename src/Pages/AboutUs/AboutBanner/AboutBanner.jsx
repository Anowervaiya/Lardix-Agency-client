import React from 'react'
import { BsDot } from 'react-icons/bs';
function AboutBanner() {
  return (
    <div className="bg-[#0B163F] min-h-56  text-white ">
      <div className='text-center text-2xl font-bold pt-16 '>About Us</div>

      <div className='flex justify-center items-center gap-2 pt-6'>
        <h1> Home</h1>
        <h1>
          {' '}
          <BsDot  className='mt-2'/>
        </h1>
        <h1 className='opacity-60'>About us</h1>
      </div>
    </div>
  );
}

export default AboutBanner