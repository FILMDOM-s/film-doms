import { flexGap, mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import CommunityContainer from './Community'
import CriticConatiner from './Critic/CriticConatiner'

const HomeContainer = () => {
  return (
    <PageContainer>
      <CommunityContainer />
      <CriticConatiner />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  ${flexGap('64px')}

  ${mediaQuery.tablet`
    ${flexGap('72px')}
  `}

  ${mediaQuery.laptop`
    ${flexGap('80px')}
  `}

  ${mediaQuery.pc`
    ${flexGap('120px')}
  `}
`

export default HomeContainer
