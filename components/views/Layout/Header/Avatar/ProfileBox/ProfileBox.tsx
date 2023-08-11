import { useFetchUserInfo } from '@/services/myPage'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import Image from 'next/image'
import { defaultProfile } from '@/assets/images/common'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { contextMenuState } from '@/states'

const ProfileBox = () => {
  const [contextMenuDataState] = useRecoilState(contextMenuState)
  const { data, isLoading } = useFetchUserInfo()

  if (isLoading) {
    return null
  }
  return (
    <Container>
      <Box
        position={{
          x: contextMenuDataState?.clientX,
          y: contextMenuDataState?.clientY,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0 16px 16px 16px',
            gap: '16px',
            borderBottom: '1px solid #D9D9D9',
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
      </Box>
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
        padding: '24px 24px 0 24px',
      }}
    >
      <ol
        css={{
          listStyle: 'none',
          overflow: 'hidden',
          margin: '0',
          '& > a': {
            textAlign: 'left',
            cursor: 'pointer',
            overflow: 'hidden',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: 'normal',
            color: '#444',
            '& > li': {
              paddingBottom: '16px',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#FF5414',
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

export default ProfileBox

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
`

const Box = styled.div<{
  position: { x: number; y: number }
}>`
  position: absolute;
  top: ${props => props.position.y + 10}px;
  left: ${props => props.position.x - 280}px;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  z-index: 10;
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
  padding: 16px 0 24px 0;
`

const TitleText = styled.div`
  color: #111;
  font-size: 16px;
  font-style: normal;
  line-height: 14px; /* 58.333% */
  letter-spacing: 0.24px;
  padding: 2px 0;
`

const OpacityText = styled.div`
  color: #aaa;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: 0.14px;
  padding: 2px 0;
`
