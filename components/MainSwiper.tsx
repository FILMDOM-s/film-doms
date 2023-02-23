import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import React from 'react'
import Image from 'next/image'

export const MainSwiper = () => {
  return (
    <Swiper
      id="carousel"
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={'auto'}
      centeredSlides={true}
      autoplay={{ delay: 3000 }}
      //   disableOnInteraction:false}}
      pagination={{ clickable: true }}
      className="my-swiper"
      loop={true}
      height={276}
    >
      <SwiperSlide>
        <div className="relative bg-black w-full h-full flex flex-col justify-center items-center">
          <Image
            src={'/assets/film-dummy.jpg'}
            alt="film-doms"
            width={375}
            height={276}
          ></Image>
          <div className='absolute text-white text-2xl'>FilmDom's</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black w-full h-full flex flex-col justify-center items-center">
          <Image
            src={'/assets/film-dummy.jpg'}
            alt="film-doms"
            width={375}
            height={276}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black w-full h-full flex flex-col justify-center items-center">
          <Image
            src={'/assets/film-dummy.jpg'}
            alt="film-doms"
            width={375}
            height={276}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black w-full h-full flex flex-col justify-center items-center">
          <Image
            src={'/assets/film-dummy.jpg'}
            alt="film-doms"
            width={375}
            height={276}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black w-full h-full flex flex-col justify-center items-center">
          <Image
            src={'/assets/film-dummy.jpg'}
            alt="film-doms"
            width={375}
            height={276}
          ></Image>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
