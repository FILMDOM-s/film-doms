import { RenderIf } from '@/components/common'
import { useFetchSocialUserInfo, useFetchUserInfo } from '@/services/myPage'
import { flexCenter, flexGap } from '@/styles/emotion'
import styled from '@emotion/styled'
import { Suspense } from 'react'
import InterestMovieSection from './InterestMovieSection'
import ProfileSection from './ProfileSection'
import UserActivitySection from './UserActivitySection'
import UserInfoSection from './UserInfoSection'
import FallbackLoading from '@/components/common/Loading/FallbackLoading'

const MyPage = () => {
  const { data: userInfo } = useFetchUserInfo()
  const { data: socialUserInfo } = useFetchSocialUserInfo()

  if (!userInfo || !socialUserInfo) {
    return null
  }

  const uuidFileName =
    userInfo?.profileImage?.uuidFileName ||
    socialUserInfo?.profileImage?.uuidFileName
  const nickname = userInfo?.nickname || socialUserInfo?.nickname
  const email = userInfo?.email || socialUserInfo?.email
  const registeredAt = userInfo?.registeredAt || socialUserInfo?.registeredAt
  const favoriteMovies =
    userInfo?.favoriteMovies || socialUserInfo?.favoriteMovies

  return (
    <Container>
      <Wrapper>
        <ProfileSection
          type={'private'}
          profileImage={uuidFileName}
          nickname={nickname}
        />
        <InterestMovieSection
          type={'private'}
          interestMovieList={favoriteMovies}
        />
        <UserInfoSection
          type={'private'}
          email={email}
          nickname={nickname}
          registeredAt={registeredAt}
          socialLogin={userInfo?.socialLogin}
        />
        <RenderIf condition={true} render={<UserActivitySection />} />
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
    <Suspense fallback={<FallbackLoading />}>
      <MyPage />
    </Suspense>
  )
}

export default MyPageContainer
