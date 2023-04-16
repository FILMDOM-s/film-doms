import { F, I, L, M } from '@/assets/svgs/alphabet'
import styled from '@emotion/styled'
import { CommonSection, TopSection } from './Section'
import { CommonContainerProps } from './Section/CommonSection'

const common_1: CommonContainerProps = {
  title: 'FEELING',
  subTitle: '나를 공유할 수 있는 공간',
  description: `필름덤즈에서는 모든 이들의|'나다움'을 표출할 수 있습니다.|다양한 미디어에 대한 의견을 간단한 리뷰,|비평글과 같은 다양한 방식으로 표출해보세요.`,
  imageUrl: <F />,
  imagePosition: 'left',
}

const common_2: CommonContainerProps = {
  title: 'ICONIC',
  subTitle: '영화로운 예술 화합의 상징',
  description:
    '필름덤즈는 영화를 비롯한 모든 예술이|하나로 화합할 수 있도록 새로운 장을 제공합니다.|동시에 에디터와 독자들이 서로 소통하며 성장하도록|끊임없이 노력하겠습니다.',
  imageUrl: <I />,
  imagePosition: 'right',
}

const common_3: CommonContainerProps = {
  title: 'LINK US',
  subTitle: '우리 모두의 연결',
  description:
    '영화계 진출을 위해 매일마다|꿈을 키워가는 대학생들을 위해|조금이라도 도움을 드릴 수 있도록|필름덤즈는 대외활동 및 서포터즈 등의|유익한 정보를 제공합니다.',
  imageUrl: <L />,
  imagePosition: 'left',
}

const common_4: CommonContainerProps = {
  title: 'MAGAZINE',
  subTitle: '영화인을 위한, 영화인의 출판사',
  description: `필름덤즈에서는 모든 이들의|'나다움'을 표출할 수 있습니다.|다양한 미디어에 대한 의견을 간단한 리뷰,|비평글과 같은 다양한 방식으로 표출해보세요.`,
  imageUrl: <M />,
  imagePosition: 'right',
}

const AboutContainer = () => {
  return (
    <Container>
      <TopSection />
      <CommonSection {...common_1} />
      <CommonSection {...common_2} />
      <CommonSection {...common_3} />
      <CommonSection {...common_4} />
    </Container>
  )
}

export default AboutContainer

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #111111;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  overflow: hidden;
  position: relative;
  z-index: 1;
`
