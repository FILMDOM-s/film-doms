import { Fragment } from 'react'
import CommunityContainer from './Community'
import BannerContainer from './Banner'
import NoticeContainer from './Notice'
import NavContainer from './Nav/NavContainer'

const HomeContainer = () => {
  return (
    <div>
      <NavContainer />
      <BannerContainer />
      <CommunityContainer />
      <NoticeContainer />
    </div>
  )
}

export default HomeContainer
