import React from 'react'

function WhatMakesCard({logo, heading, description}) {
  return (
    <div className="group relative inline-block overflow-hidden  border border-gray-200   px-12 py-3 text-sm font-medium text-slate-800 hover:text-blue-600 focus:outline-none focus:ring  active:text-white transition duration-500 shadow-differenceCard p-4 bg-white ">
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-600 transition-color duration-500 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-600 transition-color duration-500 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-600 transition-color duration-500 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-600 transition-color duration-500 group-hover:h-full"></span>
      {/* card documentation  */}
      <div>
        <div className="w-full py-4    ">
          <div>
            <img className="w-20 mb-4" src={logo} alt="" />
          </div>
          <div>
            <h2 className="mt-2 text-xl font-bold    md:mt-0">{heading}</h2>

            <p className="mt-2  text-[16px] leading-6  text-[#464646]   ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatMakesCard