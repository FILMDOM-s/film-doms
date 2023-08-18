import { Loading, RenderIf } from '@/components/common'
import { useFetchUserInfo } from '@/services/myPage'
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

  if (!userInfo) {
    return null
  }

  const uuidFileName = userInfo?.profileImage?.uuidFileName
  const nickname = userInfo?.nickname
  const email = userInfo?.email
  const registeredAt = userInfo?.registeredAt
  const favoriteMovies = userInfo?.favoriteMovies

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
