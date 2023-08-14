import { defaultProfile } from '@/assets/images/common'
import useSignInModal from '@/components/views/Auth/SignIn/hooks/useSignInModal'
import { useFetchUserInfo } from '@/services/myPage'
import { loginState } from '@/states'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import { Person } from '@svgs/common'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useContextMenu } from './hooks/useContextMenu'

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
        style={{ borderRadius: '50%' }}
        sizes="(max-width: 32px) 100vw,
            (min-width: 32px) 50vw,
              33vw"
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
