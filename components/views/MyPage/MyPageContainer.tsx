import { Loading } from '@/components/common'
import { useFetchUserInfo } from '@/services/myPage'
import { flexCenter, flexGap } from '@/styles/emotion'
import styled from '@emotion/styled'
import { Suspense } from 'react'
import InterestMovieSection from './InterestMovieSection'
import ProfileSection from './ProfileSection'
import UserActivitySection from './UserActivitySection'
import UserInfoSection from './UserInfoSection'

const MyPage = () => {
  const { data: userInfo } = useFetchUserInfo()

  if (!userInfo) {
    return null
  }

  return (
    <Container>
      <Wrapper>
        <ProfileSection
          profileImage={userInfo.profileImage.uuidFileName}
          nickname={userInfo.nickname}
        />
        <InterestMovieSection interestMovieList={userInfo.favoriteMovies} />
        <UserInfoSection
          email={userInfo.email}
          nickname={userInfo.nickname}
          registeredAt={userInfo.registeredAt}
          interestMovieList={userInfo.favoriteMovies}
        />
        <UserActivitySection />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  ${flexGap('60px')}
  width: 100%;
  max-width: 960px;
`

const Container = styled.div`
  ${flexCenter}
  width: 100%;
  margin: 80px 0;
`

const MyPageContainer = () => {
  return (
    <Suspense fallback={<Loading height="100vh" empty />}>
      <MyPage />
    </Suspense>
  )
}

export default MyPageContainer
