import { mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import { logoEngBk } from '@images/common'
import { IconMenu2 } from '@tabler/icons-react'
import Image from 'next/image'
import { flexCenter } from '@/styles/emotion'
import SideNav from '../SideNav'
import { useState } from 'react'
import { useResizeWindow } from '@/hooks'
import * as Svgs from '@svgs/common'
import NavContainer from '../../Home/Nav/NavContainer'

const Header = () => {
  const windowWidth = useResizeWindow()
  const responseFontSize = windowWidth <= 768 ? '28px' : '32px'
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <HeaderContainer>
      <HeaderInner>
        <ImageWrapper>
          <Svgs.LogoWhite />
        </ImageWrapper>
        <NavContainer/>
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
