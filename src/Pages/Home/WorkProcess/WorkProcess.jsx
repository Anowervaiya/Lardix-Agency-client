import React from 'react';
import PricessCard from './PricessCard';

function WorkProcess() {
  return (
    <div className=" max-w-[1440px] mx-auto p-4">
      <div className="mt-6 lg:mt-0 mb-12">
        <div className=" ">
          <h1 className="text-xl text-blue-700 text-center font-bold ml-4 mb-4">
            Process
          </h1>
        </div>
        <div className=" ">
          <h1 className="text-4xl text-center font-bold ml-4">
            Our Work{' '}
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {' '}
              Process
            </span>
          </h1>
        </div>
        <div className="lg:w-3/4 mx-auto">
          <h1 className=" ml-6 mt-4 text-[#52525c]  text-center">
            Our work process is streamlined to ensure efficiency and clarity. We
            begin with understanding client needs, followed by strategic
            planning, execution, and continuous feedback to deliver optimal
            results.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        <PricessCard
          text={'Requirment'}
          number={'1'}
          color={'bg-indigo-100'}
        ></PricessCard>
        <PricessCard
          text={'Project Planning'}
          number={'2'}
          color={'bg-orange-100'}
        ></PricessCard>
        <PricessCard
          text={'Project Execute'}
          number={'3'}
          color={'bg-violet-100'}
        ></PricessCard>
        <PricessCard
          text={'Delivery'}
          number={'4'}
          color={'bg-red-100'}
        ></PricessCard>
        <PricessCard
          text={'Maintenance'}
          number={'5'}
          color={'bg-yellow-100'}
        ></PricessCard>
        <PricessCard
          text={'Support'}
          number={'6'}
          color={'bg-cyan-100'}
        ></PricessCard>

        {/* <div className='relative '>
          <div className='absolute -top-10 bg-slate-600 text-white w-10 text-xl font-bold rounded-full h-10 flex justify-center items-center'>
            1
          </div>
          <div className='bg-indigo-200 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque rem repudiandae nam maxime a quo accusantium doloremque magni iusto!
          </div>

        </div> */}

        {/* <div className='relative '>
          <div className='absolute -top-10 bg-slate-600 text-white w-10 text-xl font-bold rounded-full h-10 flex justify-center items-center'>
            1
          </div>
          <div className='bg-indigo-200 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque rem repudiandae nam maxime a quo accusantium doloremque magni iusto!
          </div>

        </div> */}
      </div>
    </div>
  );
}

export default WorkProcess;
