import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialsCard from './TestimonialsCard';

function SweeperTestimonials() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when the window is >= 640px (mobile)
          640: {
            slidesPerView: 1,
          },
          // when the window is >= 768px (tablet)
          768: {
            slidesPerView: 2,
          },
          // when the window is >= 1024px (desktop)
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper
         "
      >
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Emran Hossen'}
            profession={'CEO of Heavena'}
            image={'/images (2).jfif'}
            desc={
              'This agency transformed our online presence! Their expertise in web development and SEO drove our website traffic to new heights. Professional, reliable, and result-oriented – we couldn’t ask for more."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Dipti Chowdury'}
            profession={'Investor'}
            image={'/images (6).jfif'}
            desc={
              'We entrusted this agency with our app development project, and they delivered beyond expectations. The design was flawless, and the user experience was incredible. Truly a team of experts!'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ranju Chowdury'}
            profession={'CEO of RRElevator'}
            image={'/anowre.png'}
            desc={
              '"Our business saw exponential growth after partnering with this agency. Their digital marketing strategies and attention to detail made all the difference. Highly recommend them to anyone looking to scale up."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Kamrul'}
            profession={'CEO of Vonixu'}
            image={'/kamrul.jpg'}
            desc={
              '"Exceptional service from start to finish! The team’s dedication to creating a stunning website and their seamless integration of cutting-edge technology impressed us deeply."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Shakhawat Hossen'}
            profession={'Entrepreneur'}
            image={'/sk.png'}
            desc={
              '"This agency brought creativity and precision to our graphic design needs. Their designs captured our brand perfectly, elevating our marketing materials to a whole new level."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Emran Hossen'}
            profession={'CEO of Heavena'}
            image={'/images (2).jfif'}
            desc={
              'Working with this agency was a seamless experience. Their professionalism and innovative solutions in social media marketing helped us reach our target audience effectively. Outstanding work!'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Dipti Chowdury'}
            profession={'Investor'}
            image={'/images (6).jfif'}
            desc={
              'The website they built for us is not just visually stunning but also highly functional. Their attention to detail and ability to understand our vision made the entire process hassle-free and rewarding.'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ranju Chowdury'}
            profession={'CEO of RRElevator'}
            image={'/anowre.png'}
            desc={
              "From SEO to custom web design, this agency provided top-notch services that delivered measurable results. Their team's dedication and creativity set them apart from the rest."
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Emran Hossen'}
            profession={'CEO of Heavena'}
            image={'/images (2).jfif'}
            desc={
              'This agency transformed our online presence! Their expertise in web development and SEO drove our website traffic to new heights. Professional, reliable, and result-oriented – we couldn’t ask for more."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Dipti Chowdury'}
            profession={'Investor'}
            image={'/images (6).jfif'}
            desc={
              'We entrusted this agency with our app development project, and they delivered beyond expectations. The design was flawless, and the user experience was incredible. Truly a team of experts!'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ranju Chowdury'}
            profession={'CEO of RRElevator'}
            image={'/anowre.png'}
            desc={
              '"Our business saw exponential growth after partnering with this agency. Their digital marketing strategies and attention to detail made all the difference. Highly recommend them to anyone looking to scale up."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Kamrul'}
            profession={'CEO of Vonixu'}
            image={'/kamrul.jpg'}
            desc={
              '"Exceptional service from start to finish! The team’s dedication to creating a stunning website and their seamless integration of cutting-edge technology impressed us deeply."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Shakhawat Hossen'}
            profession={'Entrepreneur'}
            image={'/sk.png'}
            desc={
              '"This agency brought creativity and precision to our graphic design needs. Their designs captured our brand perfectly, elevating our marketing materials to a whole new level."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Emran Hossen'}
            profession={'CEO of Heavena'}
            image={'/images (2).jfif'}
            desc={
              'Working with this agency was a seamless experience. Their professionalism and innovative solutions in social media marketing helped us reach our target audience effectively. Outstanding work!'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Dipti Chowdury'}
            profession={'Investor'}
            image={'/images (6).jfif'}
            desc={
              'The website they built for us is not just visually stunning but also highly functional. Their attention to detail and ability to understand our vision made the entire process hassle-free and rewarding.'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ranju Chowdury'}
            profession={'CEO of RRElevator'}
            image={'/anowre.png'}
            desc={
              "From SEO to custom web design, this agency provided top-notch services that delivered measurable results. Their team's dedication and creativity set them apart from the rest."
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Emran Hossen'}
            profession={'CEO of Heavena'}
            image={'/images (2).jfif'}
            desc={
              'This agency transformed our online presence! Their expertise in web development and SEO drove our website traffic to new heights. Professional, reliable, and result-oriented – we couldn’t ask for more."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Dipti Chowdury'}
            profession={'Investor'}
            image={'/images (6).jfif'}
            desc={
              'We entrusted this agency with our app development project, and they delivered beyond expectations. The design was flawless, and the user experience was incredible. Truly a team of experts!'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ranju Chowdury'}
            profession={'CEO of RRElevator'}
            image={'/anowre.png'}
            desc={
              '"Our business saw exponential growth after partnering with this agency. Their digital marketing strategies and attention to detail made all the difference. Highly recommend them to anyone looking to scale up."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Kamrul'}
            profession={'CEO of Vonixu'}
            image={'/kamrul.jpg'}
            desc={
              '"Exceptional service from start to finish! The team’s dedication to creating a stunning website and their seamless integration of cutting-edge technology impressed us deeply."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Shakhawat Hossen'}
            profession={'Entrepreneur'}
            image={'/sk.png'}
            desc={
              '"This agency brought creativity and precision to our graphic design needs. Their designs captured our brand perfectly, elevating our marketing materials to a whole new level."'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Emran Hossen'}
            profession={'CEO of Heavena'}
            image={'/images (2).jfif'}
            desc={
              'Working with this agency was a seamless experience. Their professionalism and innovative solutions in social media marketing helped us reach our target audience effectively. Outstanding work!'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Dipti Chowdury'}
            profession={'Investor'}
            image={'/images (6).jfif'}
            desc={
              'The website they built for us is not just visually stunning but also highly functional. Their attention to detail and ability to understand our vision made the entire process hassle-free and rewarding.'
            }
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ranju Chowdury'}
            profession={'CEO of RRElevator'}
            image={'/anowre.png'}
            desc={
              "From SEO to custom web design, this agency provided top-notch services that delivered measurable results. Their team's dedication and creativity set them apart from the rest."
            }
          ></TestimonialsCard>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}

export default SweeperTestimonials;
