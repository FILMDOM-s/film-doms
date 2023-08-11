import { OpenProfileModalType, useProfileModal } from '@/hooks/useProfileModal'
import { useFetchUserInfo } from '@/services/myPage'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import Image from 'next/image'
import { defaultProfile } from '@/assets/images/common'
import Link from 'next/link'

const MyProfileBox = () => {
  const { data, refetch, isLoading } = useFetchUserInfo()

  if (isLoading) {
    return null
  }
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '0 16px 10px 16px',
          gap: '16px',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          {data && (
            <Image
              src={getImageSrcByUuid(
                data.profileImage.uuidFileName ?? defaultProfile
              )}
              alt="user-image"
              width={56}
              height={56}
            />
          )}
        </div>
        <div>
          <div>
            <TitleText
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#FF5414',
              }}
            >
              {data?.nickname}
            </TitleText>
            <TitleText
              style={{
                fontSize: '14px',
              }}
            >
              {data?.email}
            </TitleText>
            <OpacityText>
              가입한 날짜: &nbsp;
              {new Intl.DateTimeFormat('ko-KR')
                .format(data?.registeredAt)
                .replaceAll(/\s/g, '')
                .slice(0, -1)}
            </OpacityText>
          </div>
        </div>
      </div>
      <ProfileMenu />
    </Container>
  )
}

const ProfileMenu = () => {
  const menus = [
    { title: '마이페이지', link: '/mypage' },
    { title: '최신 아티클', link: '/article/recent' },
    { title: '스레드', link: 'https://www.threads.net/@filmdomaypole/' },
    { title: '로그아웃', link: '/auth/logout' },
  ]
  return (
    <div
      css={{
        width: '100%',
        maxHeight: '238px',
        height: '100%',
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
            fontSize: '16px',

            '& > li': {
              borderBottom: '1px solid #e2e2e2',
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

const useMyProfileBox = () => {
  const { openModal, closeModal, toggleModal } = useProfileModal()

  const modalData: OpenProfileModalType = {
    title: '내 정보',
    content: <MyProfileBox />,
    callback: () => alert('Modal Callback()'),
    theme: 'white',
    clientX: 0,
    clientY: 0,
  }

  return {
    openModal: ({ clientX, clientY }: { clientX: number; clientY: number }) =>
      openModal({ ...modalData, clientX, clientY }),
    closeModal,
    toggleModal,
  }
}

export default useMyProfileBox

const Container = styled.div`
  position: relative;
  width: 280px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  margin: 0 auto;
`

const TitleText = styled.div`
  color: #111;
  font-size: 16px;
  font-style: normal;
  line-height: 14px; /* 58.333% */
  letter-spacing: 0.24px;
  padding: 4px 0;
`

const OpacityText = styled.div`
  color: #aaa;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: 0.14px;
  padding: 4px 0;
`
