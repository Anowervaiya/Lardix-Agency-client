import React from 'react'

function HowLardixCreateBusinessGrowth() {
  return (
    <div className=" bg-[#0066FF] text-white my-24 ">
      <div className="flex  max-w-[1440px] mx-auto gap-20  py-20 px-4 flex-col lg:flex-row justify-between items-center">
        <div className="flex-1 ">
          <h1 className="text-5xl  text-start font-bold leading-tight">
            How Lardix Increase <br /> Business ROI
          </h1>
          <p className="py-6">
            <form className=" max-w-[300px]">
              <div className=" text-black">
                <input
                  type="url"
                  placeholder="Enter your website"
                  className="p-3 rounded-lg w-full"
                  required
                />
              </div>

              <div className=" mt-6">
                <button className="btn bg-black text-white border-black hover:text-blue-600 w-full   text-[16px]">
                  Send Us a Proposal
                </button>
              </div>
            </form>
          </p>
        </div>
        <div className=" flex-1   *:gap-4 space-y-5">
          <div className="flex items-center">
            <div>
              <img src="1-1.svg" alt="" />
            </div>
            <div>Thousands of successfully completed project</div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="2-1.svg" alt="" />
            </div>
            <div>Data-driven & well thought-proven strategies</div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="3-1.svg" alt="" />
            </div>
            <div>98% Five star reviews from the client</div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="4-1.svg" alt="" />
            </div>
            <div>
              Helped businesses in a variety of industries to reach their target
              audiences
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="5-1.svg" alt="" />
            </div>
            <div>
              Dedicated to providing quality service and customer satisfaction.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowLardixCreateBusinessGrowth