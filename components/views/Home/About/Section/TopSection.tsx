import FilmDomsAnime from '@/assets/svgs/common/FilmDomsAnime'
import styled from '@emotion/styled'
import anime from 'animejs'
import { useEffect } from 'react'

const TopSection = () => {
  useEffect(() => {
    const bounceIn = anime({
      targets: '.letter__part',
      translateY: {
        value: [-30, 0],
        duration: 900,
        delay: 1000,
        elasticity: 600,
        easing: 'easeOutElastic',
      },
      opacity: {
        value: [0, 1],
        duration: 300,
        easing: 'linear',
        delay: 1000,
      },
    })

    const lineDrawing_1 = anime({
      targets: '.color-1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1000,
      loop: false,
      direction: 'alternate',
    })

    const lineDrawing_2 = anime({
      targets: '.color-3',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1200,
      loop: false,
      direction: 'alternate',
    })

    const lineDrawing_3 = anime({
      targets: '.color-2',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1400,
      loop: false,
      direction: 'alternate',
    })

    setTimeout(() => {
      const filling = document.getElementsByTagName('path')

      for (let i = 0; i < filling.length; i++) {
        const element = filling[i]
        element.classList.remove('letter__layer')
      }
    }, 3000)
  }, [])
  return (
    <TopContainerSection className="top-section">
      <TopTextContainer>영화인을 위한, 영화인의공간 FILMDOM'S</TopTextContainer>
      <SvgContainer>
        <FilmDomsAnime />
      </SvgContainer>
    </TopContainerSection>
  )
}
export default TopSection

const TopContainerSection = styled.section`
  position: relative;
  width: 100%;
  height: 925px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TopTextContainer = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  height: 180px;
    padding-top: 80px;
    padding-bottom: 40px;

`

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
