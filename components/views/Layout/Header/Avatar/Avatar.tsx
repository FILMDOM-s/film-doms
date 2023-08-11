import { defaultProfile } from '@/assets/images/common'
import { useMyProfileBox } from '@/components/views/Auth/Profile/hooks'
import useSignInModal from '@/components/views/Auth/SignIn/hooks/useSignInModal'
import { useProfileModal } from '@/hooks/useProfileModal'
import { useFetchUserInfo } from '@/services/myPage'
import { loginState } from '@/states'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import { Person } from '@svgs/common'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { useContextMenu } from './hooks/useContextMenu'
import ProfileBox from './ProfileBox'

const Avatar = () => {
  const { data, refetch } = useFetchUserInfo()
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)

  useEffect(() => {
    if (data && data?.id) {
      setIsLoggedIn(true)
    }
  }, [data, setIsLoggedIn])

  useEffect(() => {
    if (isLoggedIn) {
      refetch()
    }
  }, [isLoggedIn, refetch])
  return isLoggedIn && data ? (
    <User profileImage={data?.profileImage} />
  ) : (
    <GuestUser />
  )
}

export default Avatar

const User = ({
  profileImage,
}: {
  profileImage: {
    id: number
    uuidFileName: string
  }
}) => {
  const { ref } = useContextMenu()

  return (
    <Container ref={ref}>
      <Image
        src={getImageSrcByUuid(profileImage?.uuidFileName ?? defaultProfile)}
        alt="user-image"
        fill
        style={{ borderRadius: '50%', border: '1px solid #E2E2E2' }}
      />
    </Container>
  )
}

const GuestUser = () => {
  const { openModal } = useSignInModal()

  return (
    <button onClick={openModal}>
      <Person fill="#FFFFFF" />
    </button>
  )
}

const Container = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`
