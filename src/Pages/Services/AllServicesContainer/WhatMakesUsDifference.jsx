import React from 'react';
import PricessCard from '../../Home/WorkProcess/PricessCard';
import WhatMakesCard from './WhatMakesCard';

function WhatMakesUsDifference() {
  return (
    <div className=" max-w-[1440px] mx-auto p-4">
      <div className="mt-24 mb-16">
        <div className="border-l-[6px] h-[50px] border-indigo-500 ">
          <h1 className="text-4xl font-bold ml-4">
            What Makes Us Difference From
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {' '}
              Others
            </span>
            {/* What Makes Us Difference From Others */}
          </h1>
        </div>
        <div className=" mt-8 lg:mt-4">
          <h1 className=" ml-6  lg:w-1/2 leading-7">
            At{' '}
            <span className="underline  underline-offset-4 font-bold">
              Lardix Agency
            </span>
            , we believe in standing out by delivering exceptional value to our
            clients. What sets us apart is our commitment to personalized
            strategies, data-driven insights, and innovative solutions. We blend
            creativity with cutting-edge technology to deliver exceptional
            results, ensuring every client achieves their unique goals with
            measurable success.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-6">
        <WhatMakesCard
          logo={'https://i.ibb.co.com/y8RgcKV/12140561.png'}
          heading={'Data-Driven Strategies'}
          description={
            'We let the numbers speak. Our approach to digital marketing is grounded in analytics and insights, ensuring that every campaign is optimized for performance.'
          }
        ></WhatMakesCard>
        <WhatMakesCard
          logo={'https://i.ibb.co.com/ykxGKp7/2752791.png'}
          heading={'End-to-End Services '}
          description={
            'From stunning website designs to robust development, engaging digital marketing campaigns, and captivating graphics, No need to juggle multiple agencies – we’ve got it all covered.'
          }
        ></WhatMakesCard>

        <WhatMakesCard
          logo={
            'https://i.ibb.co.com/M6W51ns/6a53d6eaa539269fb8ae440cc5dcac5a-removebg-preview.png'
          }
          heading={'Collaborative Teamwork'}
          description={
            'collaborative teamwork is at the heart of everything we do. Our diverse team combines expertise, creativity, and seamless communication to deliver innovative solutions'
          }
        ></WhatMakesCard>

        <WhatMakesCard
          logo={
            'https://i.ibb.co.com/mNvqvZT/png-clipart-identifying-man-face-target-market-target-audience-computer-icons-targeted-advertising-a.png'
          }
          heading={'Client-Centric Focus'}
          description={
            'Our agency maintains a client-centric focus by prioritizing personalized solutions, transparent communication, and delivering results that align with client goals.'
          }
        ></WhatMakesCard>

        <WhatMakesCard
          logo={'https://i.ibb.co.com/XDwMq8j/images-removebg-preview-3.png'}
          heading={'Expertise & Experience'}
          description={
            'Our agency specializes in app development, web design & development, digital marketing, SEO, and graphic design etc.'
          }
        ></WhatMakesCard>
        <WhatMakesCard
          logo={'https://i.ibb.co.com/kqBmLDk/download-removebg-preview-20.png'}
          heading={'Proven Results'}
          description={
            'Quality doesn’t have to come at a premium. We deliver top-notch services at competitive prices, making digital success accessible to businesses of all sizes.'
          }
        ></WhatMakesCard>
      </div>
    </div>
  );
}

export default WhatMakesUsDifference;
