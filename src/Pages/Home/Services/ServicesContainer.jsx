import React from 'react';
import ServicesCard from './ServicesCard';

import Web from '../../../assets/web.png';
import graphics from '../../../assets/graphics.png';
import SEO from '../../../assets/SEO.png';
import WebDevelopmet from '../../../assets/WebDevelopment.png';
import DigitalMarketing from '../../../assets/digitalMarketing.png';
import MobileDevelopment from '../../../assets/MobileDevelopment.png';

function ServicesContainer() {
  return (
    <div>
      <div className=" pt-8 relative bg-gradient-to-r from-[#666579] via-[#161681] to-[#138eac]">
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
              Our Services
            </h1>
            <p
              className="text-white   lg:text-xl w-2/3
             text-center mx-auto mt-4"
            >
              We have been in the IT industry for the last 5 years. Within this
              time, Lardix Agency has been transformed from the a "SEO Agency
              in Bangladesh" to a full scale "Digital Marketing Agency".{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-16 px-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <ServicesCard
            Icon={Web}
            Heading={'Web Design'}
            Description={
              'We provide professional web design services, creating modern, responsive, and user-friendly websites tailored to your business needs..'
            }
          ></ServicesCard>
          <ServicesCard
            Icon={WebDevelopmet}
            Heading={'Web Development'}
            Description={
              'We provide professional web development services, creating responsive, user-friendly websites tailored to meet your business needs and goals.'
            }
          ></ServicesCard>
          <ServicesCard
            Icon={DigitalMarketing}
            Heading={'Digital Marekting'}
            Description={
              "We offer comprehensive digital marketing services, including SEO, social media management, PPC, content marketing, and email campaigns to boost your brand's online presence and drive results."
            }
          ></ServicesCard>
          <ServicesCard
            Icon={SEO}
            Heading={'SEO'}
            Description={
              'We provide comprehensive SEO services, optimizing your website for higher search rankings, increased traffic, and better online visibility.'
            }
          ></ServicesCard>
          <ServicesCard
            Icon={graphics}
            Heading={'Graphics Design'}
            Description={
              'We offer professional graphic design services, creating visually stunning logos, branding, social media graphics, and marketing materials tailored to your business needs.'
            }
          ></ServicesCard>

          <ServicesCard
            Icon={MobileDevelopment}
            Heading={'Mobile App Development'}
            Description={
              'We offer end-to-end mobile app development services, creating custom, user-friendly apps for iOS and Android platforms'
            }
          ></ServicesCard>
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
