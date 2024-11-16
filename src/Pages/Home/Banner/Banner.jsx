import React from 'react'
import Button from '../../../Components/Button';

function Banner() {
  return (
    <div>
      <div className="  pt-10 pb-8 max-h-screen bg-slate-700 text-white ">
        <div className="flex  items-center flex-col lg:flex-row-reverse container mx-auto">
          <div className="flex-1">
            {' '}
            <img
              src="https://i.ibb.co.com/ch26D2P/output-onlinegiftools-1.gif"
              className="w-full  h-[250px] lg:h-full"
            />
          </div>
          <div className="flex-1  text-center lg:text-start ">
            <h1 className="text-5xl font-bold">
              Web Design, SEO and Digital Marketing Agency
            </h1>
            <p className="py-6 text-[20px] leading-8">
              Lardix Agency is a renowned SEO and Digital Marketing agency in
              Bangladesh. From SEO services to Web Design & Development services
              in Bangladesh, We got you covered!
            </p>
            <Button text={'How it Works'}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner