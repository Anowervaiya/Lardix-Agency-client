import React from 'react';

function WhyLardix() {
  return (
    <div className="">
      <div className="  bg-blue-100">
        <div className=" py-16 container mx-auto flex  flex-col justify-between lg:flex-row-reverse">
          <div className="">
            {' '}
            <img
              src="src/assets/whyLardix.gif"
              className="  md:w-full h-[350px] md:h-[500px] lg:h-full"
            />
          </div>
          <div className="  text-center lg:text-start ">
            <div className="my-10">
              <div className="border-l-[6px] h-[50px] border-indigo-500 text-start ">
                <h1 className="text-4xl font-bold ml-4">Why Lardix </h1>
              </div>

              <h1 className=" ml-6 text-start">
                At Lardix Agency, we deliver tailored digital marketing
                solutions designed to help your business grow. With a focus on
                innovation, creativity, and data-driven strategies, we ensure
                your brand stands out in today’s competitive landscape.
              </h1>
            </div>
            <div className="text-start lg:w-[500px] mx-auto lg:mx-0 *:mb-4">
              <li>
                <span className="font-bold "> Expert Team:</span> Skilled
                professionals across various domains including SEO, web design,
                and app development.{' '}
              </li>
              <li>
                <span className="font-bold ">Custom Solutions:</span> Every
                service is tailored to meet your unique business needs.
              </li>
              <li>
                <span className="font-bold ">Proven Results:</span> Data-driven
                strategies that boost your online presence and ROI.
              </li>
              <li>
                <span className="font-bold ">End-to-End Support:</span>{' '}
                Comprehensive services from planning to execution and
                optimization.
              </li>
              <li>
                <span className="font-bold "> Cutting-Edge Tools:</span> We use
                the latest technology to drive success and efficiency.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyLardix;
