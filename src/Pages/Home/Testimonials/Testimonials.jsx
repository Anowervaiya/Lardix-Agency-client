import React from 'react'
import SweeperTestimonials from './SweeperTestimonials';

function Testimonials() {
  return (
    <div className="max-w-[1440px] mx-auto  ">
      <div className="mt-10 mb-16">
        <div>
          <h1 className="text-xl text-blue-700 text-center font-bold ml-4 mb-4">
            Testimonials
          </h1>
        </div>
        <div>
          <h1 className="text-4xl text-center font-bold ml-4">
            What Our Client{' '}
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {' '}
              Says
            </span>
          </h1>
        </div>
        <div className="lg:w-3/4 mx-auto">
          <h1 className=" ml-6 mt-4 text-[#52525c]  text-center">
            Discover what our valued clients say about us—genuine testimonials
            reflecting our commitment to excellence, innovation, and client
            satisfaction.
          </h1>
        </div>
      </div>
      <SweeperTestimonials></SweeperTestimonials>
    </div>
  );
}

export default Testimonials