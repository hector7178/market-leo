'use client'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function SwiperCard(prop) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="h-full w-full relative"
      >
        {prop.data.map((data, key)=>{
            return (
            <SwiperSlide key={key}  >
            <div   className='h-full w-full  rounded  relative duration-100 ease-in-out'>
                <Image src={`/promociones/${data.img}`} alt='img promo' width={100} height={100} className='w-full h-full absolute'/>
            <Link href={`/productos/${data.url}`} className='cursor-grab absolute top-0 w-full h-full z-30' ></Link>
             </div>
            </SwiperSlide>)
        })}
        
      </Swiper>
    </>
  );
}
