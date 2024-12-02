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

function Statistics() {
  return (
    <div>
      <div className="my-10 pt-8 relative bg-gradient-to-r from-[#666579] via-[#161681] to-[#138eac]">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4e7f8f"
              fill-opacity="1"
              d="M0,96L48,133.3C96,171,192,245,288,256C384,267,480,213,576,160C672,107,768,53,864,64C960,75,1056,149,1152,176C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
          <div>
            <h1 className="text-2xl  md:text-3xl  lg:text-4xl text-center text-white md:font-bold ">
              {' '}
              Our Statistics
            </h1>
            <p
              className="text-white   lg:text-xl w-2/3
             text-center mx-auto mt-4"
            >
              We have been in the IT industry for the last 5 years. Within this
              time, Lardix Agency has been transformed from the a "SEO Agency in
              Bangladesh" to a full scale "Digital Marketing Agency".{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto my-16 ">
        <Zoom>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 *:p-5 *:border-2 *:rounded-lg  gap-2">
            <div className="flex   justify-center mr-4 items-center gap-4">
              <div>
                <div className="font-extrabold text-4xl text-[#175CFF]">
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
              <div className=" text-4xl text-[#175CFF]">
                <GiPodiumWinner />
              </div>
            </div>
            <div className="flex    justify-center mr-4 items-center gap-5">
              <div>
                <div className="font-extrabold text-4xl text-cyan-700">
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

            <div className="flex    justify-center mr-4 items-center gap-5">
              <div>
                <div className="font-extrabold text-4xl text-secondary">
                  <CountUp
                    start={0}
                    enableScrollSpy="true"
                    end={15}
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
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-secondary text-3xl">
                <AiOutlineTeam />
              </div>
            </div>

            <div className="flex    justify-center mr-4 items-center gap-5">
              <div>
                <div className="font-extrabold text-4xl text-[#5CC9A7]">
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
            <div className="flex    justify-center mr-4 items-center gap-5">
              <div>
                <div className="font-extrabold text-4xl">
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
        </Zoom>
      </div>
    </div>
  );
}

export default Statistics;
