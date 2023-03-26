import { flex, flexGap } from '@/styles/emotion'
import styled from '@emotion/styled'
import CommunityContainer from './Community'
import BannerContainer from './Banner'
import NoticeContainer from './Notice'
import NavContainer from './Nav/NavContainer'
import CriticConatiner from './Critic/CriticConatiner'

const HomeContainer = () => {
  return (
    <PageContainer>
      <Wrapper>
        <NavContainer />
        <BannerContainer />
        <CommunityContainer />
        <NoticeContainer />
        <CriticConatiner />
      </Wrapper>
    </PageContainer>
  )
}

const Wrapper = styled.div`
  ${flexGap('120px')}
  width: 1280px;
`

const PageContainer = styled.div`
  ${flex({ align: 'center', justify: 'center', direction: 'column' })})}
  width: 100%;
`

export default HomeContainer
