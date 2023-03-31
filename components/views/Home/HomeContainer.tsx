import { flex } from '@/styles/emotion'
import styled from '@emotion/styled'
import CommunityContainer from './Community'
import BannerContainer from './Banner'
import NoticeContainer from './Notice'
import CriticConatiner from './Critic/CriticConatiner'

const HomeContainer = () => {
  return (
    <PageContainer>
      <Wrapper>
        <BannerContainer />
        <CommunityContainer />
        <NoticeContainer />
        <CriticConatiner />
      </Wrapper>
    </PageContainer>
  )
}

const Wrapper = styled.div`
  width: 1280px;
`

const PageContainer = styled.div`
  ${flex({ align: 'center', justify: 'center', direction: 'column' })})}
  width: 100%;
`

export default HomeContainer
