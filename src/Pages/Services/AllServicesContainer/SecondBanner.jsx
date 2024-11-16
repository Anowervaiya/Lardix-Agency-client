import React from 'react';

import { FaCheck } from 'react-icons/fa6';
import HeadingDesing from '../../../Components/HeadingDesing';
import KeySurvicesCard from './KeySurvicesCard';
function SecondBanner({ data }) {
  return (
    <div className="my-16">
      {/* second banner  */}
      <div className="  ">
        <div className=" container mx-auto flex  flex-col lg:flex-row gap-28">
          <div className="flex-1">
            {' '}
            <img
              src={data?.secondBanner?.image}
              className="w-full  h-[500px] lg:h-full"
            />
          </div>
          <div className="flex-1  text-center lg:text-start ">
            <h1 className="text-5xl  leading-tight font-bold">
              {data?.secondBanner?.heading}
            </h1>
            <p className="py-6 text-[18px]">
              {data?.secondBanner?.description}
            </p>

            <div className="text-start flex justify-center gap-8 lg:gap-0 lg:justify-between lg:mr-24 items-center    leading-8 ">
              <div className="*:flex *:justify-start *:items-center">
                <div>
                  <FaCheck className="text-blue-500  " />{' '}
                  <span className="ml-2">Expert Team</span>
                </div>
                <div>
                  <FaCheck className=" text-blue-500  " />{' '}
                  <span className="ml-2">Innovative Solution</span>{' '}
                </div>
                <div className="">
                  <FaCheck className=" text-blue-500  " />{' '}
                  <span className="ml-2">Client-Centric Approach</span>{' '}
                </div>
              </div>

              <div className="*:flex *:justify-start *:items-center">
                <div>
                  <FaCheck className="text-blue-500  " />{' '}
                  <span className="ml-2">Expert Consultation</span>{' '}
                </div>
                <div>
                  <FaCheck className="text-blue-500  " />{' '}
                  <span className="ml-2">Proven Track Record</span>{' '}
                </div>

                <div>
                  <FaCheck className="text-blue-500  " />{' '}
                  <span className="ml-2">24/7 customer support</span>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services heading design  */}
     
    </div>
  );
}

export default SecondBanner;
