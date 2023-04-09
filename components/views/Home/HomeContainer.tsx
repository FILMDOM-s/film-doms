import CommunityContainer from './Community'
import BannerContainer from './Banner'
import NoticeContainer from './Notice'
import CriticContainer from './Critic'

const HomeContainer = () => {
  return (
    <>
      <BannerContainer />
      <CommunityContainer />
      <NoticeContainer />
      <CriticContainer />
    </>
  )
}

export default HomeContainer
