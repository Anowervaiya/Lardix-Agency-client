import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
function StatisticsCard({ Icon, Heading, Desc }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 px-3  pt-8 pb-20 h-full  relative hover:bg-gradient-to-b from-[#dae4fe] to-[#ffffff] transition-all ease-in-out duration-700">
      <span className="text-blue-700 text-7xl">{Icon}</span>
      <h1 className="text-xl font-semibold font-serif text-center py-3">
        {Heading}
      </h1>
      <p className="text-center max-w-[300px] text-sm leading-5 text-wrap">
        {Desc}
      </p>
      <span className="text-blue-700   absolute bottom-8 ">
        <FaArrowCircleRight />
      </span>
    </div>
  );
}

export default StatisticsCard;
