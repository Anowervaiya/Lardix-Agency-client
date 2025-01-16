import React from 'react';
import { GiPodiumWinner } from 'react-icons/gi';
import { FaChartLine } from 'react-icons/fa';

import { FaUsers } from 'react-icons/fa6';
import { BsCashCoin } from 'react-icons/bs';
import { GoGift } from 'react-icons/go';
import CountUp from 'react-countup';
import { Zoom } from 'react-awesome-reveal';
import { AiOutlineTeam } from 'react-icons/ai';
import { GrNotes } from 'react-icons/gr';
import HeadingDesing from '../../../Components/HeadingDesing'
import StatisticsCard from './StatisticsCard'
function Statistics() {
  return (
    <div className="mt-16">
      <HeadingDesing
        keyword={'Statistics'}
        text1={'What We'}
        text2={'Are'}
        description={
          'We are a global team of experts specializing in digital marketing, development, and design. With a commitment to innovation and excellence, we deliver tailored solutions that drive success, enhance brand visibility, and exceed client expectations. Partner with us for measurable growth and unparalleled results.'
        }
      ></HeadingDesing>
      <div className="  ">
        {/* <div className="grid grid-cols-3">
          <div className=" sm:border-b">
            <StatisticsCard
              // Icon={<TbSettingsSpark />}
              Heading={'Annual Maintenance'}
              Desc={
                'We provide comprehensive annual maintenance services for elevators, ensuring optimal performance, safety, and longevity. Our expert technicians handle inspections, repairs, and upgrades efficiently for smooth operation.'
              }
            ></StatisticsCard>
          </div>
          <div className="sm:border-r sm:border-b  sm:border-l ">
            <StatisticsCard
              // Icon={<RiInstallLine />}
              Heading={'Installation'}
              Desc={
                'We provide professional elevator installation services, offering customized solutions for residential, commercial, and industrial buildings, ensuring safety, efficiency, and smooth operation for every lift system.'
              }
            ></StatisticsCard>
          </div>
          <div className="sm:border-b">
            <StatisticsCard
              // Icon={<MdTrackChanges />}
              Heading={'Modification'}
              Desc={
                'Specializing in elevator modification services, we enhance and upgrade existing systems for improved performance, safety, and efficiency to meet evolving needs and regulations.'
              }
            ></StatisticsCard>
          </div>
          <StatisticsCard
            // Icon={<MdPublishedWithChanges />}
            Heading={'Repair & Services'}
            Desc={
              'We provide expert elevator repair and maintenance services, ensuring smooth operation, safety, and reliability. Our team handles repairs, upgrades, and routine maintenance for all elevator models.'
            }
          ></StatisticsCard>
          <div className="sm:border-l sm:border-r">
            <StatisticsCard
              // Icon={<TbAerialLift />}
              Heading={'Elevator Modernization'}
              Desc={
                'We provide comprehensive elevator modernization services to upgrade existing systems, improving efficiency, safety, and compliance with the latest industry standards, ensuring a smoother ride and better performance.'
              }
            ></StatisticsCard>
          </div>
          <StatisticsCard
            // Icon={<MdOutlineEmergencyShare />}
            Heading={'Emergency Services'}
            Desc={
              'Our emergency elevator services ensure prompt response and resolution of any elevator malfunction or breakdown, minimizing downtime and ensuring safety for passengers with our reliable, 24/7 support.'
            }
          ></StatisticsCard>
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-6 max-w-[1440px] mx-auto">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2  *:p-5  *:h-[200px] ">
              <div className="flex border-2   justify-center  items-center gap-4 bg-gray-100">
                <div>
                  <div className="font-extrabold text-5xl text-[#175CFF]">
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
                    {/* 557k+ */}
                  </div>
                  <div className="text-gray-600">Years In Business </div>
                </div>
                <div className=" text-5xl text-[#175CFF]">
                  <GiPodiumWinner />
                </div>
              </div>
              <div className="flex  border-2 border-l-0  justify-center  items-center gap-5">
                <div>
                  <div className="font-extrabold text-5xl text-cyan-700">
                    <CountUp
                      start={0}
                      end={100}
                      duration={6}
                      delay={1}
                      enableScrollSpy="true"
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>
                  <div className="text-gray-600">Happy Client </div>
                </div>
                <div className=" text-3xl text-cyan-700">
                  <FaUsers />
                </div>
              </div>

              <div className="flex border-2 border-t-0    justify-center  items-center gap-5">
                <div>
                  <div className="font-extrabold text-5xl text-[#5CC9A7]">
                    <CountUp
                      start={0}
                      enableScrollSpy="true"
                      end={200}
                      duration={6}
                      delay={1}
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>
                  <div className="text-gray-600">Project Completed </div>
                </div>
                <div className=" text-3xl text-[#5CC9A7]">
                  <GrNotes />
                </div>
              </div>
              <div className="flex  border-2 border-t-0 border-l-0  justify-center items-center gap-5 bg-gray-100">
                <div>
                  <div className="font-extrabold text-5xl">
                    <CountUp
                      start={0}
                      enableScrollSpy="true"
                      end={87}
                      duration={6}
                      delay={1}
                      suffix="%"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>
                  <div className="text-[#0B163F]"> Satisfaction Rate</div>
                </div>
                <div className="text-2xl">
                  <FaChartLine />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="/statistics.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
