import CommunityContainer from './Community'
import BannerContainer from './Banner'
import NoticeContainer from './Notice'
import NavContainer from './Nav/NavContainer'
import CriticConatiner from './Critic/CriticConatiner'

const HomeContainer = () => {
  return (
    <div>
      <NavContainer />
      <BannerContainer />
      <CommunityContainer />
      <NoticeContainer />
      <CriticConatiner />
    </div>
  )
}

export default HomeContainer
