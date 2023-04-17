import FilmDomsAnime from '@/assets/svgs/common/FilmDomsAnime'
import styled from '@emotion/styled'
import { useAnime } from './hooks'

const TopSection = () => {
  useAnime()
  return (
    <TopContainerSection>
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
