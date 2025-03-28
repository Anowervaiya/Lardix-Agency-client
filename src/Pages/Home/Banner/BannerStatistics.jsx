import React from "react";
import StatisticsCard from "./StatisticsCard";
import { FaChartLine, FaUsers } from "react-icons/fa6";

import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import CountUp from "react-countup";
import { GiPodiumWinner } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";

function BannerStatistics() {
  return (
    <div className="relative my-8  lg:my-0 ">
      <div className="  bg-gray-100 py-16 w-full  ">
      <div className="flex justify-between items-center  max-w-[1440px]  mx-auto flex-col lg:flex-row">

     
       
          <div className=" px-3 py-8   w-full">
            <div className="flex  gap-3 justify-center  items-center ">
              <span className="text-7xl text-blue-700">
                  <GiPodiumWinner />
              </span>
              <div className="space-y-1">
                <h1 className="text-3xl text-center font-bold">
                  <CountUp
                    start={0}
                    end={5}
                    delay={1}
                    duration={6}
                    enableScrollSpy="true"
                    suffix="+"
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h1>
                <p className="text-center text-sm">Years In Business
                </p>
              </div>
            </div>
          </div>
          <div className=" px-3 py-8   w-full">
            <div className="flex  gap-3  justify-center items-center ">
              <span className="text-7xl text-blue-700">
                <FaUsers />
              </span>
              <div className="space-y-1">
                <h1 className="text-3xl text-center font-bold">
                  <CountUp
                    start={0}
                    end={100}
                    delay={1}
                    duration={6}
                    enableScrollSpy="true"
                    suffix="+"
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h1>
                <p className="text-center text-sm">Happy Client

                </p>
              </div>
            </div>
          </div>
          <div className=" px-3 py-8   w-full">
            <div className="flex  gap-3 justify-center  items-center ">
              <span className="text-7xl text-blue-700">
            <GrNotes/>
              </span>
              <div className="space-y-1">
                <h1 className="text-3xl text-center font-bold">
                  <CountUp
                    start={0}
                    end={200}
                    delay={1}
                    duration={6}
                    enableScrollSpy="true"
                    suffix="+"
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h1>
                <p className="text-center text-sm"> Project Completed
                </p>
              </div>
            </div>
          </div>
          <div className=" px-3 py-8   w-full">
            <div className="flex  gap-3 justify-center  items-center ">
              <span className="text-7xl text-blue-700">
               <FaChartLine />
              </span>
              <div className="space-y-1">
                <h1 className="text-3xl text-center font-bold">
                  <CountUp
                    start={0}
                    end={87}
                    delay={1}
                    duration={6}
                    enableScrollSpy="true"
                    suffix="%"
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h1>
                <p className="text-center text-sm"> Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
     
      </div>
      </div>
    </div>
  );
}

export default BannerStatistics;
