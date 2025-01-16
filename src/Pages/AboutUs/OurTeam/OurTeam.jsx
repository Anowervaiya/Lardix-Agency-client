import React from 'react';
import { FaCheck } from 'react-icons/fa6';

function OurTeam() {
  return (
    <div>
      <div className="   max-w-[1440px] mx-auto">
        <div
          className="flex  items-center flex-col lg:flex-row gap-8
        "
        >
          <div className="flex-1">
            {' '}
            <img src="/team.jpg" className="w-full  h-[500px] lg:h-full" />
          </div>
          <div className="flex-1  text-center lg:text-start ">
            <h1 className="text-4xl font-bold leading-snug">
              We’re a Team of 13+ Smart People In 5 Countries
            </h1>
            <p className="py-6 leading-7">
              Our dynamic team of skilled professionals, located across multiple
              countries, thrives on innovation, expertise, and collaboration.
              With a passion for excellence, we specialize in digital marketing,
              development, and design. We leverage cutting-edge strategies and
              creative insights to deliver personalized solutions, ensuring each
              project achieves its unique goals and exceeds client expectations.
            </p>

            <div className="text-start flex lg:justify-start justify-center gap-12 items-center mx-auto lg:mx-0 ">
              <div className="*:flex *:justify-start leading-8 *:items-center ">
                <div>
                  <FaCheck className=" text-blue-500 bg-slate-200  rounded-full w-6 h-6 p-1  " />{' '}
                  <span className="ml-2">Collaborative Spirit</span>{' '}
                </div>
                <div className="">
                  <FaCheck className=" text-blue-500  bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                  <span className="ml-2">Expertise & Innovation</span>{' '}
                </div>
                <div>
                  <FaCheck className="text-blue-500 bg-slate-200  rounded-full w-6 h-6 p-1  " />{' '}
                  <span className="ml-2">Adaptability & Versatility</span>
                </div>
              </div>
              <div className="*:flex *:justify-start leading-8 *:items-center">
                <div>
                  <FaCheck className="text-blue-500 bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                  <span className="ml-2">Integrity & Reliability</span>{' '}
                </div>
                <div>
                  <FaCheck className="text-blue-500  bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                  <span className="ml-2">Client-Centric Approach</span>{' '}
                </div>
                <div>
                  <FaCheck className="text-blue-500  bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                  <span className="ml-2">Commitment to Excellence</span>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
