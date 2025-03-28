import React from 'react';
import Button from '../../../Components/Button';

function Banner() {
  return (
    <>
      <div className="px-6 pt-12 lg:pt-0  text-black  ">
        <div className="flex  items-center flex-col lg:flex-row-reverse max-w-[1440px] mx-auto">
          <div className="flex-1">
            {' '}
            <img src="/Banner.gif" className="w-full  h-[250px] lg:h-full" />
          </div>
          <div className="flex-1  text-center lg:text-start ">
            <h1 className="text-3xl lg:text-6xl font-bold pb-3">
                <span className='text-blue-700 '>Digital <br /> Marketing <br /></span> Agency In <br /> Bangladesh
            </h1>
            <p className="py-6 text-[20px] leading-8">
              Discover the Bangladesh's best digital marketing agency, delivering
              unmatched expertise in SEO, social media, web development, and
              branding.
            </p>
            <Button text={'How it Works'}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
