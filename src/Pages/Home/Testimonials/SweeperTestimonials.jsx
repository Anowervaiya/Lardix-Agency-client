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
            name={'Ridoy Ahmed'}
            profession={'CEO of xyz company'}
            image={'/src/assets/download.jfif'}
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ridoy Ahmed'}
            profession={'CEO of xyz company'}
            image={'/src/assets/images (6).jfif'}
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ridoy Ahmed'}
            profession={'CEO of xyz company'}
            image={'/src/assets/anowre.png'}
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ridoy Ahmed'}
            profession={'CEO of xyz company'}
            image={'/src/assets/images (1).jfif'}
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ridoy Ahmed'}
            profession={'CEO of xyz company'}
            image={'/src/assets/images (2).jfif'}
          ></TestimonialsCard>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialsCard
            name={'Ridoy Ahmed'}
            profession={'CEO of xyz company'}
            image={'/src/assets/download.jfif'}
          ></TestimonialsCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SweeperTestimonials;
