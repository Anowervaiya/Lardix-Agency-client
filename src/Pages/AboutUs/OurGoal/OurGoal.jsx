import React from 'react';

import ProgressBar from './ProgressBar';
function OurGoal() {
  return (
    <div className="max-w-[1440px] mt-10 mx-auto">
      <div className="flex  flex-col lg:flex-row justify-center lg:items-center p-4">
        <div className="my-10 flex-1 ">
          <div className="border-l-[6px]  border-indigo-500 text-start ">
            <h1 className="text-4xl font-bold ml-4">
              Our Goal is to increase your ROI{' '}
            </h1>
          </div>
          <div>
            <h1 className=" ml-6 text-start mt-4 ">
              Our goal is to increase your ROI by delivering tailored web
              design, SEO, and digital marketing solutions, Software solution .
              We optimize strategies to attract your target audience, enhance
              engagement, and drive measurable growth for your business success
            </h1>
          </div>
          <div className="space-y-4 mt-6 ml-6">
            <div
              className="flex gap-8
          "
            >
              <div className="w-[80px] h-[70px] border rounded-xl shadow-service">
                <img
                  src="/actionable.png"
                  alt=""
                  className="p-3 h-[70px] mx-auto"
                />
              </div>
              <div className="flex-1 ">
                <h1 className=" text-xl font-bold">Actionable Insights</h1>
                <p className="text-gray-500 mt-2">
                  Delivering practical advice to optimize strategies and
                  maximize resource investments.
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
                <h1 className=" text-xl font-bold">Strategic Focus</h1>
                <p className="text-gray-500 mt-2">
                  Tailored episodes improve marketing, streamline operations,
                  and maximize profits.
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
                <h1 className=" text-xl font-bold">Trend Spotting</h1>
                <p className="text-gray-500 mt-2">
                  Spot trends early, innovate swiftly, and outpace competitors
                  for success
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <img src="/roi2.avif" className="w-full  h-[500px] lg:h-full" />
          {/* <ProgressBar text={'SEO'} percentage={'90'}></ProgressBar>
          <ProgressBar text={'web Development'} percentage={'90'}></ProgressBar>
          <ProgressBar text={'Graphics Design'} percentage={'86'}></ProgressBar>
          <ProgressBar text={'App Development'} percentage={'93'}></ProgressBar>
          <ProgressBar
            text={'Digital Marketing'}
            percentage={'88'}
          ></ProgressBar>
          <ProgressBar
            text={'Software Solution'}
            percentage={'76'}
          ></ProgressBar> */}
        </div>
      </div>
    </div>
  );
}

export default OurGoal;
