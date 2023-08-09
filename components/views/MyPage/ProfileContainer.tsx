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

const Profile = ({ id }: Props) => {
  const { data: publicUserInfo } = useFetchPublicUserInfo(id as string, {
    enabled: id !== undefined,
  })

  if (!publicUserInfo) {
    return null
  }

  const uuidFileName = publicUserInfo?.profileImage?.uuidFileName
  const nickname = publicUserInfo?.nickname
  const email = ''
  const registeredAt = publicUserInfo?.registeredAt
  const favoriteMovies = publicUserInfo?.favoriteMovies

  return (
    <Container>
      <Wrapper>
        <ProfileSection
          type={'public'}
          profileImage={uuidFileName}
          nickname={nickname}
        />
        <InterestMovieSection
          type={'public'}
          interestMovieList={favoriteMovies}
        />
        <UserInfoSection
          type={'public'}
          email={email}
          nickname={nickname}
          registeredAt={registeredAt}
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

const ProfileContainer = ({ id }: ContainerProps) => {
  return (
    <Suspense fallback={<Loading height="100vh" empty />}>
      <Profile id={id} />
    </Suspense>
  )
}

export default ProfileContainer
