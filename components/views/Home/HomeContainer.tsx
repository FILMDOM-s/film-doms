import { flexGap, mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import CommunityContainer from './Community'
import BannerContainer from './Banner'
import NoticeContainer from './Notice'
import NavContainer from './Nav/NavContainer'
import CriticConatiner from './Critic/CriticConatiner'

const HomeContainer = () => {
  return (
    <PageContainer>
      <NavContainer />
      <BannerContainer />
      <CommunityContainer />
      <NoticeContainer />
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
