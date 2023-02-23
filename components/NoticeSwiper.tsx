import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

export const NoticeSwiper = () => {
  return (
    <Swiper
      id="carousel"
      modules={[ Navigation, A11y]}
      spaceBetween={15}
      slidesPerView={'auto'}
      centeredSlides={true}
      className="my-swiper"
      navigation={true}
      loop={true}  
    >
      <SwiperSlide className="my-swiper-slide">
        <SwiperElement></SwiperElement>
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <SwiperElement></SwiperElement>
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <SwiperElement></SwiperElement>
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <SwiperElement></SwiperElement>
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <SwiperElement></SwiperElement>
      </SwiperSlide>
    </Swiper>
  )
}

const SwiperElement = styled.div`
    width: 218px;
    height: 305px;
`
