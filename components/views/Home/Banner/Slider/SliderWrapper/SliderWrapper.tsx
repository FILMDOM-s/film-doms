import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import Image from 'next/image'
import { css } from '@emotion/react'
import { flexCenter, mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'

function SliderWrapper({ banners }: { banners?: Banner[] }) {
  return (
    <SliderOutsideAlign>
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
            <Image src={image} alt={title} fill />
            <TextArea>{title}</TextArea>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderOutsideAlign>
  )
}

export default SliderWrapper

const SliderOutsideAlign = styled.div`
  ${flexCenter}
`

const SliderMasterCss = css`
  min-width: 375px;
  height: 276px;
  margin-bottom: 48px;
  padding-bottom: 48px;

  ${mediaQuery.tablet`
    height: 512px;
    max-width: 688px;
    margin-bottom:56px;
    margin: 0px 40px;
  `}

  ${mediaQuery.laptop`
    height: 758px;
    max-width:1019px;
    margin-bottom:65px;
    margin: 0px 40px;
  `}

  ${mediaQuery.pc`
    height: 979px;
    max-width: 1323px;
    margin-bottom:72px;
    margin: 0px 58px;
  `}
`

const TextArea = styled.div`
  position: absolute;
  color: white;
  width: 245px;
  transform: translate(-50%, -50%);
  bottom: 24px;
  left: 50%;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 700;
  line-height: 33px;

  ${mediaQuery.tablet`
  font-family: Pretendard;
font-size: 28px;
font-weight: 700;
line-height: 42px;
  font-size: 24px;
  width: 472px;
  bottom: 36px;
  `}

  ${mediaQuery.laptop`
  font-family: Pretendard;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  font-size: 24px;
  width: 700px;
  bottom: 42px;
  `}

  ${mediaQuery.pc`
  font-family: Pretendard;
  font-size: 44px;
  font-weight: 700;
  line-height: 66px;
  width: 1092px;
  bottom: 64px;
  `}
`
