import React from 'react'
import WhyChooseCard from './WhyChooseCard';
import { IoIosPeople } from 'react-icons/io';
import { FaBookmark } from 'react-icons/fa';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { GiSettingsKnobs } from 'react-icons/gi';
import { MdDisplaySettings } from 'react-icons/md';
import { PiUserFocusBold } from 'react-icons/pi';
function WhyChooseUs() {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto p-4">
        <div className="mt-10 mb-16">
          <div>
            <h1 className="text-xl text-blue-700 text-center font-bold ml-4 mb-4">
              Strength
            </h1>
          </div>
          <div>
            <h1 className="text-4xl text-center font-bold ml-4">
              Why Choose{' '}
              <span className="font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {' '}
                Us
              </span>
            </h1>
          </div>
          <div className="lg:w-3/4 mx-auto">
            <h1 className=" ml-6 mt-4 text-[#52525c]  text-center">
              Choose us for our expertise, innovative solutions, and
              client-centric approach. We deliver high-quality digital
              marketing, web development, SEO, app development, and graphic
              design services tailored to your business needs.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          <WhyChooseCard
            Icon={<IoIosPeople />}
            Heading={'Expert Team'}
            Description={
              'Our team of skilled professionals brings years of experience across various fields, from SEO and digital marketing to app development and graphic design, ensuring your business gets the best results.'
            }
          ></WhyChooseCard>
          <WhyChooseCard
            Icon={<FaBookmark />}
            Heading={'Tailored Solutions'}
            Description={
              'We offer customized strategies designed to meet the unique needs of your business, helping you stand out in the competitive digital landscape and achieve your specific goals effectively.'
            }
          ></WhyChooseCard>
          <WhyChooseCard
            Icon={<MdDisplaySettings />}
            Heading={'Innovative Approach'}
            Description={
              'We stay ahead of industry trends and incorporate the latest technologies and strategies, ensuring that your business benefits from cutting-edge solutions for maximum growth and success.'
            }
          ></WhyChooseCard>
          <WhyChooseCard
            Icon={<PiUserFocusBold />}
            Heading={'Client-Centric Focus'}
            Description={
              'Our clients are at the heart of everything we do. We work closely with you to understand your goals and deliver results that align with your vision, ensuring satisfaction every step of the way.'
            }
          ></WhyChooseCard>
          <WhyChooseCard
            Icon={<IoShieldCheckmarkOutline />}
            Heading={'Data-Driven Results'}
            Description={
              'We rely on data and analytics to guide our strategies, continuously refining our approach based on real-time performance metrics to ensure optimal outcomes and measurable growth for your business.'
            }
          ></WhyChooseCard>
          <WhyChooseCard
            Icon={<GiSettingsKnobs />}
            Heading={'Comprehensive Services'}
            Description={
              'From web development to digital marketing and app development, we offer a full suite of services to support every aspect of your online presence, providing seamless solutions under one roof.'
            }
          ></WhyChooseCard>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs