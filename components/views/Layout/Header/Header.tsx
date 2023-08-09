import { mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import { flexCenter } from '@/styles/emotion'
import { Suspense } from 'react'
import * as Svgs from '@svgs/common'
import NavContainer from '../../Home/Nav/NavContainer'
import Link from 'next/link'
import { Modal, PureModal } from '@/components/common/Modal'
import Avatar from './Avatar'
import { ErrorBoundary } from 'react-error-boundary'
import { Person } from '@svgs/common'
import { useSignInModal } from '../../Auth/SignIn/hooks'
import ProfileModal from '@/components/common/Modal/ProfileModal'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <ImageWrapper>
          <Link href="/">
            <Svgs.LogoWhite />
          </Link>
        </ImageWrapper>
        <NavContainer />
        <RightSideWrapper>
          <IconMutableWrapper>
            <IconWrapper>
              <Link
                passHref
                href={'https://www.instagram.com/filmdomaypole/'}
                target="_blank"
              >
                <Svgs.Instagram fill="#FFFFFF" />
              </Link>
            </IconWrapper>
            <IconWrapper>
              <Link passHref href={'/search'}>
                <Svgs.Search fill="#FFFFFF" />
              </Link>
            </IconWrapper>
          </IconMutableWrapper>
          <IconWrapper>
            <ErrorBoundary fallback={<GuestUser />}>
              <Suspense fallback={<GuestUser />}>
                <Avatar />
              </Suspense>
            </ErrorBoundary>
          </IconWrapper>
        </RightSideWrapper>
      </HeaderInner>
      <Modal />
      <PureModal />
      <ProfileModal />
    </HeaderContainer>
  )
}

export default Header

const GuestUser = () => {
  const { openModal } = useSignInModal()

  return (
    <button onClick={openModal}>
      <Person fill="#FFFFFF" />
    </button>
  )
}

const HeaderContainer = styled.header`
  height: 120px;
  background-color: #111111;
  ${mediaQuery.pc`
    height:150px
  `};
  ${flexCenter}
`

const HeaderInner = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  items-center: center;
  position: relative;
`

const ImageWrapper = styled.div`
  ${flexCenter}
  padding: 0px 20px;
  svg:hover path {
    transition: all 0.2s ease-in-out;
    d: path(
      'M19.4044 0H17.7778H0V40H12H15.1111H19.4044C30.7622 40 40 31.0289 40 20C40 8.97111 30.76 0 19.4044 0ZM16.2222 26.6667V13.3333H20.6667V26.6667H16.2222Z'
    );
    fill: #a0b8ff;
  }
`

const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0px 40px;
`

const IconMutableWrapper = styled.div`
  display: none;
  ${mediaQuery.laptop`
    display: flex;
    justify-content: center;
    items-center: center;
    gap: 40px;
  `};
`

const IconWrapper = styled.div`
  ${flexCenter}
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  svg:hover path {
    transition: all 0.2s ease-in-out;
    fill: #ff5414;
  }
`
