import { mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import { logoEngBk } from '@images/common'
import {
  IconBrandInstagram,
  IconUser,
  IconSearch,
  IconMenu2,
} from '@tabler/icons-react'
import Image from 'next/image'
import { flexCenter } from '@/styles/emotion'
import SideNav from '../SideNav'
import { useState } from 'react'
import { useResizeWindow } from '@/hooks'

const Header = () => {
  const windowWidth = useResizeWindow()
  const responseFontSize = windowWidth <= 768 ? '28px' : '32px'
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <HeaderContainer>
      <HeaderInner>
        <MenuWrapper
          onClick={() => {
            setShowSideNav(!showSideNav)
          }}
        >
          <IconMenu2 stroke={2} size={responseFontSize} />
        </MenuWrapper>
        <ImageWrapper>
          <Image src={logoEngBk} alt="filmdoms-logo-eng" />
        </ImageWrapper>
        <RightSideWrapper>
          <IconMutableWrapper>
            <IconWrapper>
              <IconBrandInstagram
                stroke={2}
                size={responseFontSize}
                id="instagram"
              />
            </IconWrapper>
            <IconWrapper>
              <IconUser stroke={2} id="user" size={responseFontSize} />
            </IconWrapper>
          </IconMutableWrapper>
          <IconWrapper>
            <IconSearch stroke={2} id="search" size={responseFontSize} />
          </IconWrapper>
        </RightSideWrapper>
      </HeaderInner>
      <SideNav isShow={showSideNav} onClose={setShowSideNav} />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  height: 80px;
  ${mediaQuery.pc`
    height:150px
  `};
  ${flexCenter}
`

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  items-center: center;
  position: relative;
  max-width: 375px;
  margin: 0px 30px;

  ${mediaQuery.tablet`
    max-width: 688px;
    margin:0px 40px;
  `}

  ${mediaQuery.laptop`
    max-width:1019px;
    margin:0px 40px;
  `}

  ${mediaQuery.pc`
    max-width: 1323px;
    margin:0px 58px;
  `}
`

const ImageWrapper = styled.div`
  ${flexCenter}
  width: 168px;
  height: 23px;
  ${mediaQuery.pc`
    width: 336px;
    height: 46px;
  `};
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
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100%;
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
