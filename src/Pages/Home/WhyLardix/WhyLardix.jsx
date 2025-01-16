import React from 'react';
import { FaCheck } from 'react-icons/fa6';

function WhyLardix() {
  return (
    <div className="">
      <div className="  ">
        <div className=" py-16 px-4 max-w-[1440px] mx-auto flex  flex-col justify-between lg:flex-row-reverse">
          <div className=" flex-1 mx-auto *:rounded-lg ">
            {' '}
            <img
              src="/whyLardix.gif"
              className="  md:w-full h-[350px] md:h-[500px] lg:h-full"
            />
          </div>
          <div className=" flex-1 text-start lg:text-start ">
            <div className="my-10">
              <div className="border-l-[6px] h-[50px] border-indigo-500 text-start ">
                <h1 className="text-4xl font-bold ml-4">
                  <span className="font-bold ">
                    {' '}
                    Why Lardix
                  </span>
                </h1>
              </div>

              <h1 className=" ml-6 text-start">
                At Lardix Agency, we deliver tailored digital marketing
                solutions designed to help your business grow. With a focus on
                innovation, creativity, and data-driven strategies, we ensure
                your brand stands out in today’s competitive landscape.
              </h1>
            </div>

            <div className="space-y-4 mt-6 ml-6">
              <div
                className="flex gap-8
          "
              >
                <div className="w-[80px] h-[70px] border rounded-xl shadow-service ">
                  <img
                    src="/actionable.png"
                    alt=""
                    className="p-3 h-[70px] mx-auto"
                  />
                </div>
                <div className="flex-1 ">
                  <h1 className=" text-xl font-bold">Expert Team</h1>
                  <p className="text-gray-500 mt-2">
                    Skilled professionals delivering specialized knowledge and
                    innovative solutions for success
                  </p>
                </div>
              </div>
              <div
                className="flex gap-8
          "
              >
                <div className="w-[80px] h-[70px] border rounded-xl shadow-service">
                  <img
                    src="/stretigic.png"
                    alt=""
                    className="p-3 h-[70px] mx-auto"
                  />
                </div>
                <div className=" flex-1">
                  <h1 className=" text-xl font-bold">Proven Results</h1>
                  <p className="text-gray-500 mt-2">
                    Demonstrated success with measurable outcomes and strategies
                    that work
                  </p>
                </div>
              </div>
              <div
                className="flex gap-8
          "
              >
                <div className="w-[80px] h-[70px] border rounded-xl shadow-service ">
                  <img
                    src="/trendspot.png"
                    alt=""
                    className="p-3  h-[70px] mx-auto"
                  />
                </div>
                <div className="flex-1 ">
                  <h1 className=" text-xl font-bold">End-to-End Support</h1>
                  <p className="text-gray-500 mt-2">
                    Comprehensive solutions guiding you from start to successful
                    completion
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="text-start lg:w-[500px] mx-auto lg:mx-0 *:mb-1 *:flex *:justify-start leading-8 *:items-center">
              <div>
                <FaCheck className=" text-blue-500  " />{' '}
                <span className="ml-2"> Expert Team</span>{' '}
              </div>
              <div>
                <FaCheck className=" text-blue-500  " />{' '}
                <span className="ml-2"> Custom Solutions</span>{' '}
              </div>
              <div>
                <FaCheck className=" text-blue-500  " />{' '}
                <span className="ml-2"> Proven Results</span>{' '}
              </div>
              <div>
                <FaCheck className=" text-blue-500  " />{' '}
                <span className="ml-2"> End-to-End Support</span>{' '}
              </div>
              <div>
                <FaCheck className=" text-blue-500  " />{' '}
                <span className="ml-2"> Cutting-Edge Tools</span>{' '}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyLardix;
