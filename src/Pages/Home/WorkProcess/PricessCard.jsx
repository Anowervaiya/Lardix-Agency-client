import React from 'react'

function PricessCard({text, number,color}) {
  return (
    <div className="relative ">
      <div className="absolute -top-8 left-[45%]  bg-slate-600 text-white w-14 text-2xl font-bold rounded-full h-14 flex justify-center items-center border-[6px] border-white">
    {number}
      </div>
      <div className={`${color} h-52 rounded-md transition-shadow duration-500 group  hover:shadow-service p-4 text-lg flex justify-center items-center`}>
        <h1 className="text-3xl font-semibold group-hover:text-blue-800 transition-all duration-700 group-hover:scale-125">{text}</h1>
      </div>
    </div>
  );
}

export default PricessCard