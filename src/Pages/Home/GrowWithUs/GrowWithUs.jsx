import React from 'react';
import { FaCheck } from 'react-icons/fa6';
function GrowWithUs() {
  return (
    <>
      <div className="   max-w-[1440px] mx-auto">
        <div className="flex  items-center flex-col lg:flex-row">
          <div className="flex-1">
            {' '}
            <img src="/Growth.jpg" className="w-3/4 mx-auto md:w-full  " />
          </div>
          <div className="flex-1  text-center lg:text-start ">
            <h1 className="text-4xl font-bold">Grow Your Business With Us</h1>
            <p className="py-6">
              Unlock limitless opportunities by partnering with us to scale your
              operations and achieve sustainable growth. Our tailored solutions
              are meticulously crafted to boost your business's efficiency,
              enhance productivity, and expand your market presence. Whether
              you're a budding startup aiming to disrupt the market or an
              established enterprise seeking to optimize operations, our
              comprehensive tools and expert guidance ensure your success. From
              strategy development to seamless execution, we empower you to
              overcome challenges and unlock your full potential. Together,
              we’ll navigate the path to success and transform your vision into
              reality. Let’s grow, innovate, and thrive together!
            </p>

            <div className=" max-w-72 mx-auto lg:mx-0  *:flex *:justify-start leading-8 *:items-center">
              <div className="">
                <FaCheck className=" text-blue-500  bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                <span className="ml-2">Customized Growth Strategies</span>{' '}
              </div>

            
              <div>
                <FaCheck className=" text-blue-500  bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                <span className="ml-2">Technology Solutions</span>{' '}
              </div>
              
              <div>
                <FaCheck className="text-blue-500 bg-slate-200  rounded-full w-6 h-6 p-1  " />{' '}
                <span className="ml-2">Expert Consultation</span>{' '}
              </div>
              <div>
                <FaCheck className="text-blue-500 bg-slate-200  rounded-full w-6 h-6 p-1  " />{' '}
                <span className="ml-2">Marketing Support</span>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrowWithUs;
