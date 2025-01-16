import React from 'react';
import Button from '../../../Components/Button';

function Banner() {
  return (
    <>
      <div className="px-6 pt-12 lg:pt-6  text-black  ">
        <div className="flex  items-center flex-col lg:flex-row-reverse max-w-[1440px] mx-auto">
          <div className="flex-1">
            {' '}
            <img src="/Banner.gif" className="w-full  h-[250px] lg:h-full" />
          </div>
          <div className="flex-1  text-center lg:text-start ">
            <h1 className="text-5xl font-bold leading-tight">
              The Best Digital Marketing Agency in the world
            </h1>
            <p className="py-6 text-[20px] leading-8">
              Discover the world's best digital marketing agency, delivering
              unmatched expertise in SEO, social media, web development, and
              branding. Elevate your business with innovative strategies,
              measurable results, and a dedicated team passionate about your
              success.
            </p>
            <Button text={'How it Works'}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
