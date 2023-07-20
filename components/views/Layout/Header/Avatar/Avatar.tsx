import { defaultProfile } from '@/assets/images/common'
import useSignInModal from '@/components/views/Auth/SignIn/hooks/useSignInModal'
import { useToken } from '@/hooks'
import { useFetchUserInfo } from '@/services/myPage'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import { Person } from '@svgs/common'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Avatar = () => {
  const { token } = useToken()

  return (
    <ErrorBoundary fallback={<GuestUser />}>
      <Suspense fallback={<GuestUser />}>
        {token ? <LoginUser /> : <GuestUser />}
      </Suspense>
    </ErrorBoundary>
  )
}

export default Avatar

const LoginUser = () => {
  const {
    data: { profileImage },
  } = useFetchUserInfo()
  const [toggle, setToggle] = useState(false)

  return (
    <Container
      onClick={() => {
        setToggle(!toggle)
      }}
    >
      <Image
        src={getImageSrcByUuid(profileImage?.uuidFileName ?? defaultProfile)}
        alt="user-image"
        fill
        style={{ borderRadius: '50%' }}
      />
      {toggle && <ProfileMenu />}
    </Container>
  )
}

const ProfileMenu = () => {
  const menus = [
    { title: '마이페이지', link: '/mypage' },
    { title: '로그아웃', link: '/logout' },
  ]
  return (
    <div
      css={{
        position: 'absolute',
        top: '120%',
        left: '-32px',
        width: '100px',
        height: '100px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      <ol
        css={{
          listStyle: 'none',
          overflow: 'hidden',
          margin: '0',
          '& > a': {
            textAlign: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            '& > li': {
              padding: '5px 0',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
            },
          },
        }}
      >
        {menus.map(menu => (
          <Link href={menu.link} key={menu.title}>
            <li>{menu.title}</li>
          </Link>
        ))}
      </ol>
    </div>
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
