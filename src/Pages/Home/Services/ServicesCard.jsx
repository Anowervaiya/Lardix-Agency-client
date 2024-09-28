import React from 'react';

function ServicesCard({ Heading, Description, Icon }) {
  return (
    <div className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-200  px-12 py-3 text-sm font-medium text-slate-800 hover:text-blue-600 focus:outline-none focus:ring  active:text-white">
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-600 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-600 transition-all duration-200 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-600 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-600 transition-all duration-200 group-hover:h-full"></span>

      {/* card documentation  */}
      <div>
        <div className="w-full py-4   ">
          <div>
            <img className="w-28 " src={Icon} alt="" />
          </div>
          <div>
            <h2 className="mt-2 text-xl font-semibold text-gray-800    md:mt-0">
              {Heading}
            </h2>

            <p className="mt-2 text-sm text-gray-600 ">{Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
