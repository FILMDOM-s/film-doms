import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import Image from 'next/image'
import { flexCenter } from '@/styles/emotion'
import styled from '@emotion/styled'

type Props = {
  banners: Array<
    {
      onClick?: VoidFunction
    } & Main.Banner
  >
}

function SliderWrapper({ banners }: Props) {
  return (
    <SliderOutsideAlign>
      <Swiper
        id="carousel"
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        width={1280}
        height={440}
        pagination={{ clickable: true }}
        style={{ position: 'relative' }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners.map(({ id, type, title, subtitle, image, onClick }) => (
          <SwiperSlide key={id} onClick={onClick}>
            <Image
              src={image}
              alt={title}
              width={1280}
              height={440}
              priority
              style={{ cursor: 'pointer' }}
            />
            <TextArea>
              <TypeText>{type}</TypeText>
              <TitleText>{title}</TitleText>
              <SubTitleText>{subtitle}</SubTitleText>
            </TextArea>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderOutsideAlign>
  )
}

export default SliderWrapper

const SliderOutsideAlign = styled.div`
  width: 1280px;
  ${flexCenter}
  padding-top: 40px;
  padding-bottom: 32px;
`
const TextArea = styled.div`
  position: absolute;
  color: white;
  top: 120px;
  left: 110px;
  font-weight: 700;
  padding: 0 0 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 109px;
  gap: 8px;
  cursor: pointer;
`

const TypeText = styled.div`
  color: #fff;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px; /* 157.895% */
`

const TitleText = styled.div`
  color: #fff;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 60px; /* 100% */
  letter-spacing: -1px;
`

const SubTitleText = styled.div`
  font-size: 40px;
  line-height: 60px;
`
