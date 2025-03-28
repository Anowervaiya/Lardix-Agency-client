import HeadingDesing from '../../../Components/HeadingDesing';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import ExpertiseCard from './ExpertiseCard';
function ExpertiseAreas() {
  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <HeadingDesing
        keyword={'Expertise'}
        text1={'Our Expertise'}
        text2={'Areas'}
      ></HeadingDesing>

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={36}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 2000, // Time between slide transitions in milliseconds
          disableOnInteraction: true, // Keep autoplay active even when users interact
        }}
        className="mySwiper !h-[600px]"
      >
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (11).jfif'}
            heading={'Search Engine Optimization'}
            desc={
              'Expertise in Advanced SEO Strategies, Keyword Research, On-Page Optimization, Link Building, Content Creation, and Performance Analytics.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (5).jfif'}
            heading={'Web Development'}
            desc={
              'Expertise in Responsive Web Design, Custom Web Development, E-Commerce Solutions, User-Friendly Interfaces, and SEO Optimization.'
            }
          ></ExpertiseCard>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (3).jfif'}
            heading={'Viral Marketing'}
            desc={
              'Expertise in Viral Marketing, Search Engine Optimization, Graphics Design, Animation, Video Editing, and Comprehensive Branding for Impactful Client Solutions.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (2).jfif'}
            heading={'UI/UX Design'}
            desc={
              'Expertise in Specializing in UI/UX Design, We Craft Intuitive Digital Experiences, Ensuring Seamless Functionality and Visually Engaging Designs.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (4).jfif'}
            heading={'App Development'}
            desc={
              'Expertise in Innovative App Design, Seamless Development, User-Friendly Interfaces, and Tailored Mobile Solutions for Client Success.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (7).jfif'}
            heading={'Animation Production'}
            desc={
              'Expertise in High-Quality Animation Production, Offering Creative, Engaging, and Customized Solutions to Elevate Your Brand’s Story.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (8).jfif'}
            heading={'Article Writing'}
            desc={
              'We are Expertise in Crafting Engaging, Well-Researched, SEO-Optimized Articles that Drive Traffic and Boost Brand Visibility for Clients.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (9).jfif'}
            heading={'Video Editing'}
            desc={
              'Expertise in Professional Video Editing, Enhancing Visuals, Sound, and Effects to Create Engaging, High-Quality Content for Clients.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (10).jfif'}
            heading={'Graphics Design'}
            desc={
              'Expertise in Innovative Graphic Design Solutions, Branding, Logo Creation, Marketing Collateral, and Custom Visuals Tailored for Your Business.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (12).jfif'}
            heading={'Digital Marketing'}
            desc={
              'Expertise in SEO, Google Ads, Social Media Marketing, Content Strategy, Email Campaigns, Affiliate Marketing, and Analytics.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (16).jfif'}
            heading={'Brand Development'}
            desc={
              'Expertise in Comprehensive Brand Development Strategies, Enhancing Brand Identity, Positioning, Market Research, and Creative Brand Storytelling.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (15).jfif'}
            heading={'Clipping Path'}
            desc={
              'Expertise in Precise Clipping Path Services, Ensuring High-Quality Image Editing for Flawless, Professional Results Tailored to Client Needs.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertiseCard
            image={'/expertise (18).jfif'}
            heading={'Web Design'}
            desc={
              'Expertise in Responsive Web Design, Custom Web Development, E-Commerce Solutions, User-Friendly Interfaces, and SEO Optimization.'
            }
          ></ExpertiseCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ExpertiseAreas;
