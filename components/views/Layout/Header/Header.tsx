import { mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import { flexCenter } from '@/styles/emotion'
import SideNav from '../SideNav'
import { useState } from 'react'
import { useResizeWindow } from '@/hooks'
import * as Svgs from '@svgs/common'
import NavContainer from '../../Home/Nav/NavContainer'
import Link from 'next/link'

const Header = () => {
  const windowWidth = useResizeWindow()
  const responseFontSize = windowWidth <= 768 ? '28px' : '32px'
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <HeaderContainer>
      <HeaderInner>
        <ImageWrapper>
          <Link href="/">
            <Svgs.LogoWhite />
          </Link>
        </ImageWrapper>
        <NavContainer />
        {/* <MenuWrapper
          onClick={() => {
            setShowSideNav(!showSideNav)
          }}
        >
          <IconMenu2 stroke={2} color={"white"} size={responseFontSize} />
        </MenuWrapper> */}
        <RightSideWrapper>
          <IconMutableWrapper>
            <IconWrapper>
              <Svgs.Instagram fill="#FFFFFF" />
            </IconWrapper>
            <IconWrapper>
              <Svgs.Search fill="#FFFFFF" />
            </IconWrapper>
          </IconMutableWrapper>
          <IconWrapper>
            <Svgs.Person fill="#FFFFFF" />
          </IconWrapper>
        </RightSideWrapper>
      </HeaderInner>
      <SideNav
        isShow={showSideNav}
        onClose={() => setShowSideNav(!showSideNav)}
      />
    </HeaderContainer>
  )
}

export default Header

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
  svg:hover path{
    transition: all 0.2s ease-in-out;
    d: path("M19.4044 0H17.7778H0V40H12H15.1111H19.4044C30.7622 40 40 31.0289 40 20C40 8.97111 30.76 0 19.4044 0ZM16.2222 26.6667V13.3333H20.6667V26.6667H16.2222Z");
    fill: #A0B8FF;
  }
`

const MenuWrapper = styled.nav`
  position: absolute;
  left: 0;
  ${mediaQuery.laptop`
    display: none;
  `};
  ${mediaQuery.pc`
    display: none;
  `};

  &:hover {
    cursor: pointer;
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`
