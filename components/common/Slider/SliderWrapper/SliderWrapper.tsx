import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import Image from 'next/image'
import { css } from '@emotion/react'
import { mediaQuery } from '@/styles/emotion'

function SliderWrapper({
  type,
  banners,
  ...props
}: {
  type: string
  banners?: Banner[]
}) {
  return (
    <Swiper
      id="carousel"
      slidesPerView={1}
      loop={true}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      css={SliderMasterCss}
      pagination={{ clickable: true }}
    >
      {banners?.map(({ id, title, image }: Banner) => (
        <SwiperSlide key={id}>
          <Image width={1323} height={973} src={image} alt={title}></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderWrapper

const SliderMasterCss = css`
  min-width: 375px;
  height: 276px;
  margin-bottom:48px;

  ${mediaQuery.tablet`
  height: 512px;
  min-width: 688px;
  margin-bottom:56px;
  `}

  ${mediaQuery.laptop`
    height: 758px;
    min-width:1019px
    margin-bottom:65px;
  `}

  ${mediaQuery.pc`
    height: 979px;
    max-width: 1323px;
    margin-bottom:72px;
  `}
`
