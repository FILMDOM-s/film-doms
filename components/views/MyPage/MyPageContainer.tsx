import { Loading, RenderIf } from '@/components/common'
import { useFetchPublicUserInfo, useFetchUserInfo } from '@/services/myPage'
import { flexCenter, flexGap } from '@/styles/emotion'
import styled from '@emotion/styled'
import { Suspense } from 'react'
import InterestMovieSection from './InterestMovieSection'
import ProfileSection from './ProfileSection'
import UserActivitySection from './UserActivitySection'
import UserInfoSection from './UserInfoSection'

type Props = {
  id?: string
}

const MyPage = ({ id }: Props) => {
  const { data: userInfo } = useFetchUserInfo()
  const { data: publicUserInfo } = useFetchPublicUserInfo(id as string, {
    enabled: id !== undefined,
  })

  if (!userInfo && !publicUserInfo) {
    return null
  }

  const uuidFileName =
    userInfo?.profileImage?.uuidFileName ??
    publicUserInfo?.profileImage?.uuidFileName
  const nickname = userInfo?.nickname ?? publicUserInfo?.nickname
  const email = userInfo?.email
  const registeredAt = userInfo?.registeredAt ?? publicUserInfo?.registeredAt
  const favoriteMovies =
    userInfo?.favoriteMovies ?? publicUserInfo?.favoriteMovies

  return (
    <Container>
      <Wrapper>
        <ProfileSection
          type={id === undefined ? 'private' : 'public'}
          profileImage={uuidFileName}
          nickname={nickname}
        />
        <InterestMovieSection
          type={id === undefined ? 'private' : 'public'}
          interestMovieList={favoriteMovies}
        />
        <UserInfoSection
          type={id === undefined ? 'private' : 'public'}
          email={email}
          nickname={nickname}
          registeredAt={registeredAt}
        />
        <RenderIf
          condition={id === undefined}
          render={<UserActivitySection />}
        />
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

type ContainerProps = {
  id?: string
}

const MyPageContainer = ({ id }: ContainerProps) => {
  return (
    <Suspense fallback={<Loading height="100vh" empty />}>
      <MyPage id={id} />
    </Suspense>
  )
}

export default MyPageContainer
